//<script>
(async () => {
    // const github_api = 'https://api.github.com/repos/OpenListTeam/OpenList/releases/latest'
    // const github_file = 'openlist-android-arm64.tar.gz'

    // const checkLatestDownloadLinkFromGithub = async (api, fileName) => {
    //     const res = await (await fetch(api)).json()
    //     if (res) {
    //         const dres = res.assets?.find(el => el?.browser_download_url?.includes(fileName))
    //         return {
    //             name: res.name,
    //             versionCode: res.name,
    //             url: dres?.browser_download_url
    //         }
    //     }
    // }

    const pluginPath = "/data/openlist"
    const bootSH = '/sdcard/ufi_tools_boot.sh'
    const logFile = '/sdcard/openlist_log.log'
    const runtimeLogFile = "/data/openlist/data/log/log.log"
    const startCommand = `rm -f ${pluginPath}/data/config.json && cd ${pluginPath} && nohup ${pluginPath}/openlist server > ${logFile} 2>&1 &`

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

    const checkAdvanceFunc = async () => {
        const res = await runShellWithRoot('whoami')
        if (res.content) {
            if (res.content.includes('root')) {
                return true
            }
        }
        return false
    }

    // 检测是否开机自启
    const checkIsBootUp = async () => {
        const res = await runShellWithRoot(`
        grep -q '${startCommand}' ${bootSH}
        echo $?
        `)
        return res.content.trim() == '0';
    }

    const checkIsInstalled = async () => {
        const res = await runShellWithRoot(`
        ls /data/openlist
        `)
        if (!res.success || !res.content.includes('openlist')) return false
        return true
    }

    //启动openlist并输出日志
    const startOpenList = async (cb = () => { }) => {
        createToast("启动OpenList中...")
        const res7 = await runShellWithRoot(`
        ${startCommand}
        `)
        if (!res7.success) return createToast("启动OpenList失败!", 'red')

        const { el, close } = createFixedToast('openlist_toast', `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">等待日志中...</pre>`)

        let timer = null
        const timeout = 100 * 1000
        const t_now = performance.now()
        timer && clearTimeout(timer)
        timer = setInterval(async () => {
            const res = await runShellWithRoot(`timeout 2s  awk '{print}' ${logFile}`)
            el.style.maxHeight = '400px'
            el.style.overflow = 'auto'
            el.innerHTML = `<pre style="pointer-events: all;white-space: pre-wrap;min-width:300px;text-align: center;">${res.content}<br>等待启动完成...</pre>`
            el.scrollTo({
                top: 99999
            })
            if (res.content.includes('start HTTP server') && res.content.includes('0.0.0.0:5244')) {
                cb && cb()
                setTimeout(() => {
                    close()
                    refresh && refresh.click()
                }, 2000);
                clearTimeout(timer)
            }
            if ((performance.now() - t_now) >= timeout) {
                close()
                refresh && refresh.click()
                clearTimeout(timer)
            }
        }, 1000);
    }


    const btn_enabled = document.createElement('button')
    btn_enabled.textContent = "安装OpenList"
    let disabled_btn_enabled = false
    btn_enabled.onclick = async (e) => {
        if (disabled_btn_enabled) return
        disabled_btn_enabled = true
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (await checkIsInstalled()) {
            return createToast("你已经安装过了！")
        }
        createToast("下载所需组件,可能有点慢...", '', 8000)
        const res1 = await runShellWithRoot(`
        /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/openlist-android-arm64.tar.gz -o /data/kano_openlist.tar.gz
        `, 100 * 1000)
        if (!res1.success) return createToast("下载依赖失败!", 'red')

        createToast("解压OpenList文件...")
        const res2 = await runShellWithRoot(`
        cd /data
        mkdir -p ${pluginPath}
        tar -zxf kano_openlist.tar.gz -C ${pluginPath}
        rm -f kano_openlist.tar.gz
        `)
        if (!res2.success) return createToast("解压OpenList文件出错!", 'red')

        createToast("检查依赖文件，可能需要一点时间...")
        const res3 = await runShellWithRoot(`
        ls /data/openlist
        `)
        if (!res3.success || !res3.content.includes('openlist')) return createToast("检查OpenList依赖文件失败!", 'red')

        createToast("正在安装OpenList，设置自启动...")
        const res5 = await runShellWithRoot(`
chmod 777 -Rf ${pluginPath}
grep -qxF '${startCommand}' ${bootSH} || echo '${startCommand}' >> ${bootSH}
        `)
        if (!res5.success) return createToast("设置OpenList自启动失败!", 'red')

        createToast("设置默认密码中...")
        const res6 = await runShellWithRoot(`
        cd ${pluginPath}
        ${pluginPath}/openlist admin set admin
        `)
        if (!res6.success) return createToast("设置默认密码失败!", 'red')

        startOpenList(() => {
            createToast(`<div style="width:300px;text-align:center;pointer-events: all;">
            启动OpenList成功！<br />
            web地址(端口默认是5244)<br />
            <a href="http://192.168.0.1:5244" target="_blank">http://192.168.0.1:5244</a><br />
            用户名密码均为admin<br />
            依赖文件路径:${pluginPath}<br/>
            安装日志:${logFile}<br/>
    </div>
    `, '', 20000)
            setTimeout(() => {
                refresh && refresh.click()
            }, 2000);
        })

        disabled_btn_enabled = false

        checkIsBootUp().then(isBootUp => {
            const boot_on = document.querySelector('#openlist_boot_on')
            if (!boot_on) return
            if (isBootUp) {
                boot_on.style.background = "var(--dark-btn-color-active)"
            } else {
                boot_on.style.background = ""
            }
        })
    }

    const btn_disabled = document.createElement('button')
    btn_disabled.textContent = "卸载OpenList"
    let ct = 0
    btn_disabled.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        ct++
        if (ct < 2) { createToast("再点一次卸载OpenList") }
        tmer = setTimeout(() => {
            ct = 0
        }, 3000);
        if (ct < 2) return
        createToast("卸载中...", 'red')
        const killResult = await killProcessByName('openlist')
        createToast(killResult.content)
        const res = await runShellWithRoot(`
        rm -rf ${pluginPath}
        sed -i '/openlist/d' ${bootSH}
        `)
        if (!res.success) return createToast("卸载失败！", 'red')
        createToast(`卸载成功!`, 'green')
    }

    const btn_restart = document.createElement('button')
    btn_restart.textContent = "重启OpenList"
    btn_restart.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (! await checkIsInstalled()) {
            return createToast("你还没有安装openlist！")
        }
        createToast("重启OpenList中...", 'green')
        const killResult = await killProcessByName('openlist')
        createToast(killResult.content)
        startOpenList(() => {
            createToast(`重启成功`, 'green')
        })
    }

    const stopBtn = document.createElement('button')
    stopBtn.classList.add('btn')
    stopBtn.textContent = "停止OpenList"
    stopBtn.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (! await checkIsInstalled()) {
            return createToast("你还没有安装openlist！")
        }
        createToast("干掉OpenList中...", 'green')
        const killResult = await killProcessByName('openlist')
        createToast(killResult.content)
        if (!res.success) return createToast("停止失败！", 'red')
        createToast(`停止成功！`, 'green')
    }

    const wait = (sec = 100) => new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sec);
    })
    const container = document.querySelector('.functions-container')
    while (!UFI_DATA.lan_ipaddr) {
        await wait()
    }
    container.insertAdjacentHTML("afterend", `
<div id="IFRAME_KANO" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0 ;">
        <strong>OpenList</strong>
        <div style="display: inline-block;" id="collapse_openlist_btn"></div>
    </div>
    <div class="collapse" id="collapse_openlist" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
        <div id="olist_action_box" style="margin-bottom:8px;display:flex;gap:10px;flex-wrap:wrap"></div>
            <ul class="deviceList">
<li style="padding:10px">
        <iframe id="mm_iframe" src="http://${UFI_DATA.lan_ipaddr}:5244/?t=${Date.now()}" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius: 10px;overflow: hidden;opacity: .6;"></iframe>
</li> </ul>
        </div>
    </div>
</div>
`)
    const refresh = document.createElement('button')
    refresh.classList.add('btn')
    refresh.textContent = "刷新网页"
    refresh.onclick = () => {
        document.getElementById('mm_iframe').src = `http://${UFI_DATA.lan_ipaddr}:5244/?t=` + Date.now();
    }

    const exportBtn = document.createElement('button')
    exportBtn.classList.add('btn')
    exportBtn.textContent = "导出运行日志"
    exportBtn.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (! await checkIsInstalled()) {
            return createToast("你还没有安装openlist！")
        }
        createToast("导出运行日志中...", '')
        const t = Math.floor(Date.now() + Math.random())
        const res = await runShellWithRoot(`
                rm -f /data/data/com.minikano.f50_sms/files/uploads/openlist_log_*
                sleep 1
                cp ${runtimeLogFile} /data/data/com.minikano.f50_sms/files/uploads/openlist_log_${t}.log
                chmod 777 /data/data/com.minikano.f50_sms/files/uploads/openlist_log_${t}.log
                `)
        if (!res.success) return createToast("停止失败！", 'red')
        const a = document.createElement('a')
        a.download = `openlist日志_${t}.log`
        a.href = `/api/uploads/openlist_log_${t}.log`
        a.target = "_blank"
        a.style.display = "none"
        document.body.appendChild(a)
        a.click()
        a.remove()
    }


    const boot_on = document.createElement('button')
    boot_on.id = "openlist_boot_on"
    boot_on.classList.add('btn')
    boot_on.textContent = "开机自启"
    boot_on.style.background = ""
    boot_on.addEventListener('click', async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        if (! await checkIsInstalled()) {
            return createToast("你还没有安装openlist！")
        }
        const isBootUp = await checkIsBootUp();
        if (isBootUp) {
            //关闭
            await runShellWithRoot(`
                sed -i '/openlist/d' ${bootSH}
            `)
            boot_on.style.background = ""
            createToast("已取消开机自启", 'green')
        } else {
            //开启
            await runShellWithRoot(`
                grep -qxF '${startCommand}' ${bootSH} || echo '${startCommand}' >> ${bootSH}
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

    const mmBox = document.querySelector('#olist_action_box')
    mmBox.appendChild(btn_enabled)
    mmBox.appendChild(stopBtn)
    mmBox.appendChild(btn_restart)
    mmBox.appendChild(btn_disabled)
    mmBox.appendChild(exportBtn)
    mmBox.appendChild(boot_on)
    mmBox.appendChild(refresh)
    collapseGen("#collapse_openlist_btn", "#collapse_openlist", "#collapse_openlist", (e) => { })
})()
//</script >


