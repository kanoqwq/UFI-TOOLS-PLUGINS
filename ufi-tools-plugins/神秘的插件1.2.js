//<script>
(() => {
    const checkAdvanceFunc = async () => {
        const res = await runShellWithRoot('whoami')
        if (res.content) {
            if (res.content.includes('root')) {
                return true
            }
        }
        return false
    }

    //杀死指定进程
    const killProcessByName = async (processName) => {
        const psResult = await runShellWithRoot(`ps -ef | grep "${processName}" | grep -v grep`);
        const lines = psResult.content.trim().split('\n');

        if (lines.length === 0 || (lines.length === 1 && lines[0].trim() === '')) {
            return {
                success: false,
                content: "未找到相关进程"
            };
        }

        let killed = 0;

        for (const line of lines) {
            const parts = line.trim().split(/\s+/);
            const pid = parts[1];
            const name = parts.slice(2).join(' ');
            if (pid && /^\d+$/.test(pid)) {
                const res = await runShellWithRoot(`kill ${pid}`);
                killed++;
            }
        }

        if (killed === 0) {
            return {
                success: false,
                content: "未找到可杀死的进程"
            };
        } else {
            return {
                success: true,
                content: `已杀死 ${killed} 个进程`
            };
        }
    };


    // 检测是否开机自启
    const checkIsBootUp = async () => {
        const res = await runShellWithRoot(`
            grep -q 'sh /data/kano_sm/service.sh' /sdcard/ufi_tools_boot.sh
            echo $?
            `)
        return res.content.trim() == '0';
    }

    // 检测是否安装插件
    const checkIsInstalled = async () => {
        const res = await runShellWithRoot(`ls /data/kano_sm/`)
        return res.content.includes('service.sh')
    }

    const btn_enabled = document.createElement('button')
    btn_enabled.textContent = "安装神秘"
    let disabled_btn_enabled = false
    btn_enabled.onclick = async (e) => {
        if (disabled_btn_enabled) return
        disabled_btn_enabled = true
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }

        if (await checkIsInstalled()) {
            return createToast("你已经安装过啦~", 'pink')
        }

        try {
            createToast("下载所需组件,可能有点慢...")

            await runShellWithRoot("rm -f /data/kano_sm_latest.dlog")
            await runShellWithRoot("rm -f /data/kano_sm.tar.gz")

            createToast("下载神秘组件...")
            const res1 = await runShellWithRoot(`/data/data/com.minikano.f50_sms/files/curl -L "https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/kano_sm.tar.gz" -o /data/kano_sm.tar.gz --output /data/kano_sm.tar.gz --write-out "DOWNLOAD_DONE\nTotal: %{size_download} bytes\nSpeed: %{speed_download} B/s\nTime: %{time_total} sec\n" > /data/kano_sm_latest.dlog 2>&1 &`, 100 * 1000)
            if (!res1.success) {
                btn_enabled.disabled = false;
                return createToast("下载神秘组件失败!", 'red')
            }

            let log = ''
            const max_times = 600 // 最多等待10分钟
            let count_times = 0
            const { el, close } = createFixedToast('sm_d_toast', `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">等待日志中...</pre>`)

            const interval = setInterval(async () => {
                const dlog = await runShellWithRoot("timeout 2s  awk '{print}' /data/kano_sm_latest.dlog")
                const lines = dlog.content.split('\n'); // 按换行符拆分成数组
                log = lines.slice(-6).join('\n');
                el.innerHTML = `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">${log.replaceAll('\n', "<br>")}</pre>`
                if (log.includes('DOWNLOAD_DONE')) {
                    close()
                }
            }, 1000)

            while (true) {
                if (max_times <= count_times) {
                    clearInterval(interval)
                    btn_enabled.disabled = false;
                    return ("下载超时，请检查网络连接或稍后重试！", 'red')
                }
                if (log.includes('DOWNLOAD_DONE')) {
                    clearInterval(interval)
                    break
                }
                count_times++
                await new Promise(resolve => setTimeout(resolve, 1000))
            }

            await runShellWithRoot("rm -f /data/kano_sm_latest.dlog")
        } catch (e) {
            return createToast('下载进程出错：' + e.message)
        }

        createToast("解压神秘文件...")
        const res2 = await runShellWithRoot(`
            cd /data/
            mkdir -p kano_sm
            tar -zxf kano_sm.tar.gz -C /data/kano_sm/
            rm -f /data/kano_sm.tar.gz
            `)
        if (!res2.success) return createToast("解压神秘文件出错!", 'red')

        createToast("检查依赖文件，可能需要一点时间...")
        const res3 = await runShellWithRoot(`
            ls /data/kano_sm/
            `)
        if (!res3.success || !res3.content.includes('service.sh')) return createToast("检查神秘依赖文件失败!", 'red')

        createToast("正在安装神秘，设置自启动...")
        const res5 = await runShellWithRoot(`
    chmod 777 -Rf /data/kano_sm
    grep -qxF 'sh /data/kano_sm/service.sh' /sdcard/ufi_tools_boot.sh || echo 'sh /data/kano_sm/service.sh' >> /sdcard/ufi_tools_boot.sh
    
            `)
        if (!res5.success) return createToast("设置神秘自启动失败!", 'red')

        createToast("启动神秘中，请稍等...", '', 10000)
        const res6 = await runShellWithRoot(`
            sh /data/kano_sm/service.sh
            `, 20000)
        if (!res6.success) return createToast("启动神秘失败!", 'red')

        createToast(`<div style="width:300px;text-align:center;pointer-events: all;">
                    启动神秘中！稍后点击刷新网页即可使用<br />
                    web地址(端口默认是23333)<br />
                    <a href="http://192.168.0.1:23333" target="_blank">http://192.168.0.1:23333</a><br />
                    <a href="https://tutor.xireiki.com/faq/" target="_blank">神秘面板常见问题</a><br />
                    面板密码默认为node<br />
                    依赖文件路径:/data/kano_sm/<br/>
                    输出:${res6.content.replaceAll('\n','<br>')}
            </div>
            `, '', 20000)
        disabled_btn_enabled = false

        checkIsBootUp().then(isBootUp => {
            const boot_on = document.querySelector('#kano_sm_boot_on')
            if (!boot_on) return
            if (isBootUp) {
                boot_on.style.background = "var(--dark-btn-color-active)"
            } else {
                boot_on.style.background = ""
            }
        })

        setTimeout(() => {
            refresh && refresh.click()
        }, 10000);
    }

    const btn_disabled = document.createElement('button')
    btn_disabled.textContent = "卸载神秘"
    let ct = 0
    let tmer = null
    btn_disabled.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        ct++
        if (ct < 3) { createToast("再点一次卸载神秘") }
        tmer = setTimeout(() => {
            ct = 0
        }, 3000);
        if (ct < 3) return
        createToast("卸载中...", 'red')
        const r = await killProcessByName('/data/kano_sm/sfm/bundle')
        const r2 = await killProcessByName('singBox')
        createToast(r.content + '<br>' + r2.content)
        const res = await runShellWithRoot(`
            sleep 1
            rm -rf /data/kano_sm
            sed -i '/kano_sm\\/service.sh/d' /sdcard/ufi_tools_boot.sh
            `)
        if (!res.success) return createToast("卸载失败！", 'red')
        createToast(`<div style="width:300px;text-align:center">
            卸载结果：${res.content}<br/>
            如果没有错误即视为卸载成功
            </div>`)

        checkIsBootUp().then(isBootUp => {
            if (isBootUp) {
                boot_on.style.background = "var(--dark-btn-color-active)"
            } else {
                boot_on.style.background = ""
            }
        })
    }

    const btn_restart = document.createElement('button')
    btn_restart.textContent = "重启神秘"
    btn_restart.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (!await checkIsBootUp()) {
            return createToast("你还没有安装神秘，请先安装~", 'pink')
        }
        createToast("重启神秘中...", 'green')
        const r = await killProcessByName('/data/kano_sm/sfm/bundle')
        const r2 = await killProcessByName('singBox')
        createToast(r.content + '<br>' + r2.content)
        const res = await runShellWithRoot(`
            sleep 1
            sh /data/kano_sm/service.sh
            `)
        if (!res.success) return createToast("重启失败！", 'red')
        createToast(`<div style="width:300px;text-align:center">
                ${res.content.replaceAll('\n', "<br/>")}
            </div>`, 'green')
    }

    const btn_help = document.createElement('button')
    btn_help.textContent = "神秘文档"
    btn_help.onclick = async () => {
        const a = document.createElement('a')
        a.target = "_blank"
        a.href = "https://tutor.xireiki.com/faq/"
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
            a.remove()
        }, 1);
    }

    const btn_a = document.createElement('button')
    btn_a.textContent = "神秘网页"
    btn_a.onclick = async () => {
        const a = document.createElement('a')
        a.target = "_blank"
        a.href = `http://${UFI_DATA.lan_ipaddr}:23333`
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
            a.remove()
        }, 1);
    }


    const stopBtn = document.createElement('button')
    stopBtn.classList.add('btn')
    stopBtn.textContent = "停止神秘"
    stopBtn.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (!await checkIsInstalled()) {
            return createToast("你还没有安装神秘，请先安装~", 'pink')
        }
        createToast("干掉神秘中...", 'green')
        const r = await killProcessByName('/data/kano_sm/sfm/bundle')
        const r2 = await killProcessByName('singBox')
        createToast(r.content + '<br>' + r2.content)
    }

    (async () => {
        const wait = (sec = 100) => new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, sec);
        })
        const mmContainer = document.querySelector('.functions-container')
        while (!UFI_DATA.lan_ipaddr) {
            await wait()
        }
        mmContainer.insertAdjacentHTML("afterend", `
    <div id="IFRAME_KANO" style="width: 100%; margin-top: 10px;">
        <div class="title" style="margin: 6px 0 ;">
            <strong>神秘</strong>
            <div style="display: inline-block;" id="collapse_sm_btn"></div>
        </div>
        <div class="collapse" id="collapse_sm" data-name="close" style="height: 0px; overflow: hidden;">
            <div class="collapse_box">
            <div id="sm_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap"></div>
                <ul class="deviceList">
    <li style="padding:10px">
            <iframe id="sm_iframe" src="javascript:;" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius: 10px;overflow: hidden;opacity: .6;"></iframe>
    </li> </ul>
            </div>
        </div>
    </div>
    `)
        const refresh = document.createElement('button')
        refresh.classList.add('btn')
        refresh.textContent = "刷新网页"
        refresh.onclick = () => {
            document.getElementById('sm_iframe').src = `http://${UFI_DATA.lan_ipaddr}:23333?t=` + Date.now();
        }

        const boot_on = document.createElement('button')
        boot_on.id = "kano_sm_boot_on"
        boot_on.classList.add('btn')
        boot_on.textContent = "开机自启"
        boot_on.style.background = ""
        boot_on.addEventListener('click', async () => {
            if (!(await checkAdvanceFunc())) {
                createToast("没有开启高级功能，无法使用！", 'red')
                return
            }
            if (!await checkIsInstalled()) {
                return createToast("你还没有安装神秘，请先安装~", 'pink')
            }
            const isBootUp = await checkIsBootUp();
            if (isBootUp) {
                //关闭
                await runShellWithRoot(`
                    sed -i '/kano_sm\\/service.sh/d' /sdcard/ufi_tools_boot.sh
                `)
                boot_on.style.background = ""
                createToast("已取消开机自启", 'green')
            } else {
                //开启
                await runShellWithRoot(`
                    grep -qxF 'sh /data/kano_sm/service.sh' /sdcard/ufi_tools_boot.sh || echo 'sh /data/kano_sm/service.sh' >> /sdcard/ufi_tools_boot.sh
                `)
                boot_on.style.background = "var(--dark-btn-color-active)"
                createToast("已设置开机自启", 'green')
            }
        })

        checkIsBootUp().then(isBootUp => {
            if (isBootUp) {
                boot_on.style.background = "var(--dark-btn-color-active)"
            } else {
                boot_on.style.background = ""
            }
        })

        if (localStorage.getItem("#collapse_sm") == 'open') {
            refresh.click()
        }

        const exportBtn = document.createElement('button')
        exportBtn.classList.add('btn')
        exportBtn.textContent = "导出日志"
        exportBtn.onclick = async () => {
            if (!(await checkAdvanceFunc())) {
                createToast("没有开启高级功能，无法使用！", 'red')
                return
            }
            createToast("导出日志中...", '')
            const t = Math.floor(Date.now() + Math.random())
            const res = await runShellWithRoot(`
                rm -f /data/data/com.minikano.f50_sms/files/uploads/sm_log_*
                sleep 1
                cp /data/kano_sm/sfm/src/log/box.log /data/data/com.minikano.f50_sms/files/uploads/sm_log_${t}.log
                chmod 777 /data/data/com.minikano.f50_sms/files/uploads/sm_log_${t}.log
                `)
            if (!res.success) return createToast("停止失败！", 'red')
            const a = document.createElement('a')
            a.download = `神秘日志_${t}.log`
            a.href = `/api/uploads/sm_log_${t}.log`
            a.target = "_blank"
            a.style.display = "none"
            document.body.appendChild(a)
            a.click()
            a.remove()
        }

        const mmBox = document.querySelector('#sm_action_box')
        mmBox.appendChild(btn_enabled)
        mmBox.appendChild(stopBtn)
        mmBox.appendChild(btn_restart)
        mmBox.appendChild(btn_disabled)
        mmBox.appendChild(boot_on)
        mmBox.appendChild(exportBtn)
        mmBox.appendChild(btn_help)
        mmBox.appendChild(btn_a)
        mmBox.appendChild(refresh)

        let colTimer = null
        let colTimer1 = null
        collapseGen("#collapse_sm_btn", "#collapse_sm", "#collapse_sm", (e) => {
            checkIsBootUp().then(isBootUp => {
                if (isBootUp) {
                    boot_on.style.background = "var(--dark-btn-color-active)"
                } else {
                    boot_on.style.background = ""
                }
            })
            colTimer && clearTimeout(colTimer)
            colTimer1 && clearTimeout(colTimer1)
            if (e == 'open') {
                colTimer1 = setTimeout(() => {
                    refresh.click()
                }, 300);
            } else {
                colTimer = setTimeout(() => {
                    document.getElementById('mm_iframe').src = `javascript:;`;
                }, 300);
            }
        })
    })()
})()
//</script >


