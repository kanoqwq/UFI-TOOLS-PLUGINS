<script>
(() => {
    const container = document.querySelector('.functions-container');
    container.insertAdjacentHTML("afterend", `
<div id="CPU_CONTROL" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0; color: #fff; display: flex; align-items: center; gap: 15px;">
        <strong style="color:#fff;">⚡ CPU性能调节</strong>
        <div style="display: inline-block;" id="collapse_cpu_btn"></div>
        <div id="cpu_super_box" style="display: flex; gap: 10px;"></div>
    </div>
    <div class="collapse" id="collapse_cpu" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
            <ul class="deviceList" style="margin:0;padding:0;list-style:none;">
                <li style="padding:15px; margin-bottom: 15px;">
                    <div style="font-weight:bold;margin-bottom:12px;color:#fff;font-size:14px">核心开关控制</div>
                    <div style="margin-bottom:8px;">
                        <div style="font-size:12px;color:#ccc;margin-bottom:6px;">小核控制</div>
                        <div id="cpu_toggle_box_small" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap"></div>
                    </div>
                    <div>
                        <div style="font-size:12px;color:#ccc;margin-bottom:6px;">大核控制</div>
                        <div id="cpu_toggle_box_big" style="margin-bottom:10px;display:flex;gap:8px;flex-wrap:wrap"></div>
                    </div>
                </li>
                <li style="padding:15px; margin-bottom: 15px;">
                    <div style="font-weight:bold;margin-bottom:12px;color:#fff;font-size:14px">性能模式控制</div>
                    <div style="display:flex;gap:12px;">
                        <div id="cpu_perf_small_btn" style="flex:1;"></div>
                        <div id="cpu_perf_big_btn" style="flex:1;"></div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>
`);
    // DOM元素和状态变量初始化
    const elements = {
        r1_small: document.querySelector('#cpu_toggle_box_small'),
        r1_big: document.querySelector('#cpu_toggle_box_big'),
        r2_small: document.querySelector('#cpu_perf_small_btn'),
        r2_big: document.querySelector('#cpu_perf_big_btn')
    };
    
    const state = {
        superMode: false,
        bigCoreBalanceMode: false,
        cores: Array(8).fill(true),
        perf: Array(8).fill('schedutil'),
        btns1: [],
        btns2: []
    };
    
    // 创建高性能转发模式按钮
    const sb = Object.assign(document.createElement('button'), {
        className: 'btn',
        textContent: '开启高性能转发（有高温炸机风险，请做好散热）'
    });
    document.querySelector('#cpu_super_box').appendChild(sb);
    
    // 创建大核平衡模式按钮
    const bigCoreBalanceBtn = Object.assign(document.createElement('button'), {
        className: 'btn',
        textContent: '开启大核平衡模式'
    });
    document.querySelector('#cpu_super_box').appendChild(bigCoreBalanceBtn);
    
    // 创建持久化设置按钮
    const persistBtn = Object.assign(document.createElement('button'), {
        className: 'btn',
        textContent: '持久化设置'
    });
    document.querySelector('#cpu_super_box').appendChild(persistBtn);
    
    /**
     * 获取核心组的性能模式状态
     * @param {boolean} isSmallCore - 是否为小核组
     * @returns {string} 性能模式状态描述
     */
    const getCoreGroupPerfStatus = (isSmallCore) => {
        const [start, end] = isSmallCore ? [0, 4] : [4, 8];
        const activeModes = state.cores.slice(start, end)
            .map((active, i) => active ? state.perf[start + i] : null)
            .filter(Boolean);
        
        if (!activeModes.length) return '已关闭';
        const allSame = activeModes.every(mode => mode === activeModes[0]);
        return allSame ? (activeModes[0] === 'performance' ? '高性能' : '平衡') : '混合模式';
    };
    
    /**
     * 设置核心组的性能模式
     * @param {boolean} isSmallCore - 是否为小核组
     * @param {string} targetMode - 目标性能模式
     */
    const setCoreGroupPerf = async (isSmallCore, targetMode) => {
        const [start, end] = isSmallCore ? [0, 4] : [4, 8];
        const coreType = isSmallCore ? '小核' : '大核';
        const results = await Promise.all(
            Array.from({length: end - start}, (_, i) => start + i)
                .filter(i => state.cores[i])
                .map(i => setPerf(i, targetMode))
        );
        
        const successCount = results.filter(Boolean).length;
        const totalActive = results.length;
        
        if (!totalActive) {
            createToast(`${coreType}组全部关闭，无法设置性能模式`, 'red');
        } else {
            const status = successCount === totalActive ? 'green' : 'orange';
            const msg = successCount === totalActive 
                ? `${coreType}组性能模式已设置为${targetMode === 'performance' ? '高性能' : '平衡'}`
                : `${coreType}组部分核心设置失败 (${successCount}/${totalActive})`;
            createToast(msg, status);
        }
    };

    const query = async (n) => {
        const res = await runShellWithRoot(`cat /sys/devices/system/cpu/cpu${n}/online`);
        return res.success ? res.content.trim() : '0';
    };

    /**
     * 执行shell命令的通用函数
     * @param {string} cmd - 要执行的命令
     * @param {string} successMsg - 成功消息
     * @param {string} errorMsg - 错误消息
     * @param {Function} onSuccess - 成功回调
     */
    const execCommand = async (cmd, successMsg, errorMsg, onSuccess) => {
        const res = await runShellWithRoot(cmd);
        if (res.success) {
            createToast(successMsg, 'green');
            onSuccess?.();
            update();
            return true;
        } else {
            createToast(errorMsg, 'red');
            return false;
        }
    };

    const toggle = (n, on) => execCommand(
        `echo ${on ? '1' : '0'} > /sys/devices/system/cpu/cpu${n}/online`,
        `${on ? "开启" : "关闭"}核心${n}成功`,
        `${on ? "开启" : "关闭"}核心${n}失败`,
        () => state.cores[n] = on
    );

    const setPerf = (n, mode = 'schedutil') => {
        if (!state.cores[n]) {
            createToast(`核心${n}已关闭，无法设置性能模式`, 'red');
            return false;
        }
        return execCommand(
            `echo ${mode} > /sys/devices/system/cpu/cpu${n}/cpufreq/scaling_governor`,
            `设置核心${n}为${mode === 'performance' ? '高性能' : '平衡'}模式成功`,
            `设置核心${n}性能模式失败`,
            () => state.perf[n] = mode
        );
    };

    /**
     * 设置按钮样式的通用函数
     * @param {HTMLElement} btn - 按钮元素
     * @param {string} status - 状态
     * @param {string} text - 按钮文字
     */
    const setButtonStyle = (btn, status, text) => {
        const styles = {
            '已关闭': { bg: '', color: '#888', disabled: true },
            '高性能': { bg: '#43a047', color: '#fff', disabled: false },
            '平衡': { bg: '#fb8c00', color: '#fff', disabled: false },
            '混合模式': { bg: '#9c27b0', color: '#fff', disabled: false }
        };
        const style = styles[status];
        Object.assign(btn.style, { backgroundColor: style.bg, color: style.color });
        btn.disabled = style.disabled;
        btn.textContent = text;
    };

    const update = () => {
        // 更新核心开关按钮
        state.btns1.forEach((btn, i) => {
            btn.className = 'btn';
            btn.style.backgroundColor = state.cores[i] ? '#018ad8a8' : '';
            btn.style.color = state.cores[i] ? '#fff' : '#888';
        });
        
        // 更新性能模式按钮
        [true, false].forEach((isSmall, idx) => {
            const status = getCoreGroupPerfStatus(isSmall);
            const btn = state.btns2[idx];
            if (btn) setButtonStyle(btn, status, `${isSmall ? '小' : '大'}核性能: ${status}`);
        });
        
        // 更新高性能转发模式状态
        const isSuper = state.cores.slice(0, 4).every(c => !c) && 
                       state.cores.slice(4, 8).every(c => c) &&
                       state.perf.slice(0, 4).every(p => p === 'schedutil') &&
                       state.perf.slice(4, 8).every(p => p === 'performance');
        
        state.superMode = isSuper;
        Object.assign(sb.style, {
            backgroundColor: isSuper ? '#e91e63' : '',
            color: isSuper ? 'white' : ''
        });
        sb.textContent = isSuper ? '关闭高性能转发模式' : '开启高性能转发模式（有高温炸机风险，请做好散热）';
        
        // 更新大核平衡模式状态
        const isBigCoreBalance = state.cores.slice(0, 4).every(c => !c) && 
                                state.cores.slice(4, 8).every(c => c) &&
                                state.perf.slice(4, 8).every(p => p === 'schedutil');
        
        state.bigCoreBalanceMode = isBigCoreBalance;
        Object.assign(bigCoreBalanceBtn.style, {
            backgroundColor: isBigCoreBalance ? '#ff9800' : '',
            color: isBigCoreBalance ? 'white' : ''
        });
        bigCoreBalanceBtn.textContent = isBigCoreBalance ? '关闭大核平衡模式' : '开启大核平衡模式';
    };

    const toggleSuper = async () => {
        try {
            if (!state.superMode) {
                // 开启高性能转发模式：启用所有核心，设置性能模式，然后关闭小核
                const enableAll = Array.from({length: 8}, (_, i) => !state.cores[i] ? toggle(i, true) : Promise.resolve());
                const setPerfModes = [
                    ...Array.from({length: 4}, (_, i) => runShellWithRoot(`echo schedutil > /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`)),
                    ...Array.from({length: 4}, (_, i) => runShellWithRoot(`echo performance > /sys/devices/system/cpu/cpu${i + 4}/cpufreq/scaling_governor`))
                ];
                
                await Promise.all([...enableAll, ...setPerfModes]);
                await Promise.all(Array.from({length: 4}, (_, i) => toggle(i, false)));
                
                state.perf.fill('schedutil', 0, 4);
                state.perf.fill('performance', 4, 8);
                createToast("高性能转发模式已开启\n小核(CPU0-3): 已禁用\n大核(CPU4-7): 高性能模式", 'green', 3000);
            } else {
                // 关闭高性能转发模式：启用所有核心并设为平衡模式
                await Promise.all(Array.from({length: 8}, async (_, i) => {
                    if (!state.cores[i]) await toggle(i, true);
                    await runShellWithRoot(`echo schedutil > /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`);
                    state.perf[i] = 'schedutil';
                }));
                createToast("高性能转发模式已关闭\n所有核心: 平衡模式", 'orange', 3000);
            }
            update();
            return true;
        } catch (error) {
            createToast("切换超级模式失败", 'red');
            return false;
        }
    };
    
    /**
     * 切换大核平衡模式
     * 开启时：关闭小核(CPU0-3)，开启大核(CPU4-7)，设置大核为平衡模式(schedutil)
     * 关闭时：启用所有核心并设为平衡模式
     */
    const toggleBigCoreBalance = async () => {
        try {
            if (!state.bigCoreBalanceMode) {
                // 开启大核平衡模式：启用所有核心，设置性能模式，然后关闭小核
                const enableAll = Array.from({length: 8}, (_, i) => !state.cores[i] ? toggle(i, true) : Promise.resolve());
                const setPerfModes = Array.from({length: 8}, (_, i) => 
                    runShellWithRoot(`echo schedutil > /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`)
                );
                
                await Promise.all([...enableAll, ...setPerfModes]);
                await Promise.all(Array.from({length: 4}, (_, i) => toggle(i, false)));
                
                state.perf.fill('schedutil', 0, 8);
                createToast("大核平衡模式已开启\n小核(CPU0-3): 已禁用\n大核(CPU4-7): 平衡模式", 'green', 3000);
            } else {
                // 关闭大核平衡模式：启用所有核心并设为平衡模式
                await Promise.all(Array.from({length: 8}, async (_, i) => {
                    if (!state.cores[i]) await toggle(i, true);
                    await runShellWithRoot(`echo schedutil > /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`);
                    state.perf[i] = 'schedutil';
                }));
                createToast("大核平衡模式已关闭\n所有核心: 平衡模式", 'orange', 3000);
            }
            update();
            return true;
        } catch (error) {
            createToast("切换大核平衡模式失败", 'red');
            return false;
        }
    };
    
    /**
     * 生成当前CPU状态的shell命令
     * @returns {string} 生成的shell命令字符串
     */
    const generateCpuCommands = () => {
        const commands = [];
        
        // 生成核心开关命令
        state.cores.forEach((enabled, i) => {
            commands.push(`echo ${enabled ? '1' : '0'} > /sys/devices/system/cpu/cpu${i}/online`);
        });
        
        // 生成性能模式命令（只对开启的核心设置）
        state.cores.forEach((enabled, i) => {
            if (enabled) {
                commands.push(`echo ${state.perf[i]} > /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`);
            }
        });
        
        return commands.join('\n');
    };
    
    /**
      * 检查定时脚本中是否存在CPU持久化设置
      * @returns {boolean} 是否存在持久化设置
      */
     const checkPersistentSettings = async () => {
         try {
             const scriptPath = '/storage/emulated/0/ufi_tools_schedule.sh';
             const readResult = await runShellWithRoot(`cat ${scriptPath}`);
             if (readResult.success) {
                 const content = readResult.content;
                 return content.includes('# === CPU_CONTROL_START ===') && content.includes('# === CPU_CONTROL_END ===');
             }
             return false;
         } catch (error) {
             return false;
         }
     };
     
     /**
       * 清除定时脚本中的CPU持久化设置
       */
      const clearPersistentSettings = async () => {
          try {
              const scriptPath = '/storage/emulated/0/ufi_tools_schedule.sh';
              const startMarker = '# === CPU_CONTROL_START ===';
              const endMarker = '# === CPU_CONTROL_END ===';
              
              // 读取现有脚本内容
              const readResult = await runShellWithRoot(`cat ${scriptPath}`);
              if (!readResult.success) {
                  createToast('无法读取定时脚本文件', 'red');
                  return;
              }
              
              let scriptContent = readResult.content;
              const startIndex = scriptContent.indexOf(startMarker);
              const endIndex = scriptContent.indexOf(endMarker);
              
              if (startIndex !== -1 && endIndex !== -1) {
                  // 移除CPU控制区域
                  const beforeSection = scriptContent.substring(0, startIndex);
                  const afterSection = scriptContent.substring(endIndex + endMarker.length);
                  scriptContent = beforeSection + afterSection;
                  
                  // 写入更新后的脚本
                  const writeResult = await runShellWithRoot(`cat > ${scriptPath} << 'EOF'\n${scriptContent}\nEOF`);
                  
                  if (writeResult.success) {
                      createToast('CPU持久化设置已清除', 'orange', 3000);
                      updatePersistButtonStatus();
                  } else {
                      createToast('清除失败: 无法写入脚本文件', 'red');
                  }
              } else {
                  createToast('未找到CPU持久化设置', 'orange');
              }
          } catch (error) {
              createToast('清除持久化设置失败: ' + error.message, 'red');
          }
      };
      
      /**
       * 持久化当前CPU设置到定时脚本
       * 将当前CPU状态保存到/storage/emulated/0/ufi_tools_schedule.sh的专属区域
       */
      const persistCpuSettings = async () => {
          try {
              // 检查是否已有持久化设置
              const hasPersistentSettings = await checkPersistentSettings();
              
              if (hasPersistentSettings) {
                  // 如果已有设置，询问用户是更新还是清除
                  if (confirm('检测到已有CPU持久化设置\n\n点击"确定"更新设置\n点击"取消"清除设置')) {
                      // 用户选择更新设置
                  } else {
                      // 用户选择清除设置
                      await clearPersistentSettings();
                      return;
                  }
              }
              
              const scriptPath = '/storage/emulated/0/ufi_tools_schedule.sh';
              const cpuCommands = generateCpuCommands();
              
              // 定义专属区域的标记
              const startMarker = '# === CPU_CONTROL_START ===';
              const endMarker = '# === CPU_CONTROL_END ===';
              
              // 读取现有脚本内容
              const readResult = await runShellWithRoot(`cat ${scriptPath}`);
              let scriptContent = readResult.success ? readResult.content : '';
              
              // 生成新的CPU控制区域内容
              const newCpuSection = `${startMarker}\n${cpuCommands}\n${endMarker}`;
              
              // 检查是否已存在CPU控制区域
              const startIndex = scriptContent.indexOf(startMarker);
              const endIndex = scriptContent.indexOf(endMarker);
              
              if (startIndex !== -1 && endIndex !== -1) {
                  // 替换现有区域
                  const beforeSection = scriptContent.substring(0, startIndex);
                  const afterSection = scriptContent.substring(endIndex + endMarker.length);
                  scriptContent = beforeSection + newCpuSection + afterSection;
              } else {
                  // 添加新区域到脚本末尾
                  scriptContent += '\n' + newCpuSection + '\n';
              }
              
              // 写入更新后的脚本
              const writeResult = await runShellWithRoot(`cat > ${scriptPath} << 'EOF'\n${scriptContent}\nEOF`);
              
              if (writeResult.success) {
                  // 确保脚本有执行权限
                  await runShellWithRoot(`chmod +x ${scriptPath}`);
                  const action = hasPersistentSettings ? '更新' : '保存';
                  createToast(`CPU设置已成功${action}到定时脚本\n路径: ${scriptPath}`, 'green', 3000);
                  updatePersistButtonStatus();
              } else {
                  createToast('持久化失败: 无法写入脚本文件', 'red');
              }
          } catch (error) {
              createToast('持久化设置失败: ' + error.message, 'red');
          }
      };
     
     /**
      * 更新持久化按钮状态
      */
     const updatePersistButtonStatus = async () => {
         const hasPersistentSettings = await checkPersistentSettings();
         Object.assign(persistBtn.style, {
             backgroundColor: hasPersistentSettings ? '#ff9800' : '#4caf50',
             color: 'white'
         });
         persistBtn.textContent = hasPersistentSettings ? '更新持久化设置' : '持久化设置';
     };

    /**
     * 创建性能控制按钮
     * @param {boolean} isSmallCore - 是否为小核组
     * @param {HTMLElement} container - 容器元素
     */
    const createPerfButton = (isSmallCore, container) => {
        const btn = Object.assign(document.createElement('button'), {
            className: 'btn',
            onclick: async () => {
                const status = getCoreGroupPerfStatus(isSmallCore);
                if (status === '已关闭') {
                    createToast(`${isSmallCore ? '小' : '大'}核组全部关闭，无法设置性能模式`, 'red');
                    return;
                }
                const targetMode = status === '高性能' ? 'schedutil' : 'performance';
                await setCoreGroupPerf(isSmallCore, targetMode);
            }
        });
        btn.style.width = '100%';
        container.appendChild(btn);
        state.btns2.push(btn);
    };

    const init = async () => {
        // 清空容器和按钮数组
        Object.values(elements).forEach(el => el.innerHTML = '');
        state.btns1.length = state.btns2.length = 0;
        
        // 并行读取所有核心状态
        const [coreStates, perfModes] = await Promise.all([
            Promise.all(Array.from({length: 8}, (_, i) => query(i))),
            Promise.all(Array.from({length: 8}, async (_, i) => {
                try {
                    const res = await runShellWithRoot(`cat /sys/devices/system/cpu/cpu${i}/cpufreq/scaling_governor`);
                    return res.success && res.content ? res.content.trim() : 'schedutil';
                } catch { return 'schedutil'; }
            }))
        ]);
        
        // 更新状态
        coreStates.forEach((enabled, i) => state.cores[i] = enabled === '1');
        perfModes.forEach((mode, i) => state.perf[i] = mode);
        
        // 创建核心开关按钮
        Array.from({length: 8}, (_, i) => {
            const btn = Object.assign(document.createElement('button'), {
                className: 'btn',
                textContent: `${i < 4 ? '小' : '大'}核${i}`,
                onclick: () => toggle(i, !state.cores[i])
            });
            (i < 4 ? elements.r1_small : elements.r1_big).appendChild(btn);
            state.btns1.push(btn);
        });
        
        // 创建性能控制按钮
        createPerfButton(true, elements.r2_small);
        createPerfButton(false, elements.r2_big);
        
        sb.onclick = toggleSuper;
        bigCoreBalanceBtn.onclick = toggleBigCoreBalance;
        persistBtn.onclick = persistCpuSettings;
        
        // 初始化持久化按钮状态
        updatePersistButtonStatus();
        
        update();
    };

    collapseGen("#collapse_cpu_btn", "#collapse_cpu", "#collapse_cpu", (e) => {});
     setTimeout(init, 300);
})();
</script>