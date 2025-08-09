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

    // 检测是否开机自启
    const checkIsBootUp = async () => {
        const res = await runShellWithRoot(`
        grep -q '/data/clash/Scripts/Clash.Service start' /sdcard/ufi_tools_boot.sh
        echo $?
        `)
        return res.content.trim() == '0';
    }

    const btn_enabled = document.createElement('button')
    btn_enabled.textContent = "安装🐱🐱"
    let disabled_btn_enabled = false
    btn_enabled.onclick = async (e) => {
        if (disabled_btn_enabled) return
        disabled_btn_enabled = true
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        createToast("下载所需组件,可能有点慢...")
        const res1 = await runShellWithRoot(`
        /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/mihomo.zip -o /data/kano_clash.zip
        `, 100 * 1000)
        if (!res1.success) return createToast("下载🐱🐱依赖失败!", 'red')

        createToast("解压🐱🐱文件...")
        const res2 = await runShellWithRoot(`
        cd /data/
        mkdir -p clash
        unzip kano_clash.zip -d /data/clash/
        `)
        if (!res2.success) return createToast("解压🐱🐱文件出错!", 'red')

        createToast("检查依赖文件，可能需要一点时间...")
        const res3 = await runShellWithRoot(`
        ls /data/clash/Scripts
        `)
        if (!res3.success || !res3.content.includes('Clash.Service')) return createToast("检查🐱🐱依赖文件失败!", 'red')

        createToast("正在安装🐱🐱，设置Clash自启动...")
        const res5 = await runShellWithRoot(`
cp /data/clash/Proxy/config.yaml /data/data/com.minikano.f50_sms/files/uploads/default_mm.yaml
cp /data/clash/Proxy/config.yaml /sdcard/默认猫猫配置_config.yaml
chmod 777 -Rf /data/clash
grep -qxF '/data/clash/Scripts/Clash.Service start' /sdcard/ufi_tools_boot.sh || echo '/data/clash/Scripts/Clash.Service start' >> /sdcard/ufi_tools_boot.sh
grep -qxF 'inotifyd /data/clash/Scripts/Clash.Inotify "/data/clash/Clash" >> /dev/null &' /sdcard/ufi_tools_boot.sh || echo 'inotifyd /data/clash/Scripts/Clash.Inotify "/data/clash/Clash" >> /dev/null &' >> /sdcard/ufi_tools_boot.sh
        `)
        if (!res5.success) return createToast("设置🐱🐱自启动失败!", 'red')

        createToast("启动Clash...")
        const res6 = await runShellWithRoot(`
        /data/clash/Scripts/Clash.Service start
        `)
        if (!res6.success) return createToast("启动🐱🐱失败!", 'red')

        createToast(`<div style="width:300px;text-align:center;pointer-events: all;">
                启动Clash成功！<br />
                web地址(端口默认是7788)<br />
                <a href="http://192.168.0.1:7788/ui/" target="_blank">http://192.168.0.1:7788/ui/</a><br />
                token密码默认为123456<br />
                可以在/sdcard/默认猫猫配置_config.yaml中获取默认配置<br/>
                也可导出默认配置，然后修改好上传配置<br />
                依赖文件路径:/data/clash/<br/>
                内核日志:sdcard/Clash内核日志.txt<br/>
                输出:${res6.content}
        </div>
        `, '', 20000)
        disabled_btn_enabled = false

        checkIsBootUp().then(isBootUp => {
            const boot_on = document.querySelector('#clash_boot_on')
            if (!boot_on) return
            if (isBootUp) {
                boot_on.style.background = "var(--dark-btn-color-active)"
            } else {
                boot_on.style.background = ""
            }
        })
    }
    const btn_disabled = document.createElement('button')
    btn_disabled.textContent = "卸载🐱🐱"
    let ct = 0
    let tmer = null
    btn_disabled.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        ct++
        if (ct < 2) { createToast("再点一次卸载🐱🐱") }
        tmer = setTimeout(() => {
            ct = 0
        }, 3000);
        if (ct < 2) return
        createToast("卸载中...", 'red')
        const res = await runShellWithRoot(`
        /data/clash/Scripts/Clash.Service stop
        sleep 1
        rm -rf /data/clash
        sed -i '/Clash.Service/d' /sdcard/ufi_tools_boot.sh
        sed -i '/Clash.Inotify/d' /sdcard/ufi_tools_boot.sh
        `)
        if (!res.success) return createToast("卸载失败！", 'red')
        createToast(`<div style="width:300px;text-align:center">
        卸载结果：${res.content}<br/>
        如果没有错误即视为卸载成功
        </div>`)
    }

    const btn_restart = document.createElement('button')
    btn_restart.textContent = "重启🐱🐱"
    btn_restart.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        createToast("重启🐱🐱中...", 'green')
        const res = await runShellWithRoot(`
        /data/clash/Scripts/Clash.Service stop
        sleep 1
        /data/clash/Scripts/Clash.Service start
        `)
        if (!res.success) return createToast("重启失败！", 'red')
        createToast(`<div style="width:300px;text-align:center">
            ${res.content.replaceAll('\n', "<br/>")}
        </div>`, 'green')
    }

    //一键上传
    const uploadEl = document.createElement('input')
    uploadEl.type = 'file'
    uploadEl.onchange = async (e) => {
        if (!e?.target?.files) return
        const file = e.target.files[0];
        if (file) {
            if (!(await checkAdvanceFunc())) {
                createToast("没有开启高级功能，无法使用！", 'red')
                return
            }
            await runShellWithRoot(`
                        rm /data/data/com.minikano.f50_sms/files/uploads/clash_config.yml
                    `)
            // 检查文件大小
            if (file.size > 1 * 1024 * 1024) {
                createToast(`文件大小不能超过${1}MB！`, 'red')
            } else {
                try {
                    const formData = new FormData();
                    formData.append("file", file);
                    const res = await (await fetch(`${KANO_baseURL}/upload_img`, {
                        method: "POST",
                        headers: common_headers,
                        body: formData,
                    })).json()

                    if (res.url) {
                        let foundFile = await runShellWithRoot(`
                            ls /data/data/com.minikano.f50_sms/files/${res.url}
                        `)
                        if (!foundFile.content) {
                            throw "上传失败"
                        }
                        let resShell = await runShellWithRoot(`
                            cp  /data/data/com.minikano.f50_sms/files/${res.url} /data/clash/Proxy/config.yaml
                        `)
                        if (resShell.success) {
                            createToast(`上传成功！正在重启核心...`, 'green')
                            btn_restart.click()
                        }
                    }
                    else throw res.error || ''
                }
                catch (e) {
                    console.error(e);
                    createToast(`上传失败!`, 'red')
                } finally {
                    uploadEl.value = ''
                }
            }
        }
    }

    const uploadBtn = document.createElement('button')
    uploadBtn.classList.add('btn')
    uploadBtn.textContent = "上传🐱🐱配置"
    uploadBtn.onclick = () => {
        uploadEl.click()
    }

    const stopBtn = document.createElement('button')
    stopBtn.classList.add('btn')
    stopBtn.textContent = "停止🐱🐱"
    stopBtn.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        createToast("干掉🐱🐱中...", 'green')
        const res = await runShellWithRoot(`
        /data/clash/Scripts/Clash.Service stop
        sleep 1
        `)
        if (!res.success) return createToast("停止失败！", 'red')
        createToast(`<div style="width:300px;text-align:center">
            ${res.content.replaceAll('\n', "<br/>")}
        </div>`, 'green')
    }

    const backupBtn = document.createElement('button')
    backupBtn.classList.add('btn')
    backupBtn.textContent = "备份🐱🐱配置"
    backupBtn.onclick = async () => {
        if (!(await checkAdvanceFunc())) {
            createToast("没有开启高级功能，无法使用！", 'red')
            return
        }
        createToast("备份🐱🐱中...", 'green')
        const t = Math.floor(Date.now() + Math.random())
        const res = await runShellWithRoot(`
        rm -f /data/data/com.minikano.f50_sms/files/uploads/mm_config_backup*
        sleep 1
        cp /data/clash/Proxy/config.yaml /data/data/com.minikano.f50_sms/files/uploads/mm_config_backup_${t}.yaml
        chmod 777 /data/data/com.minikano.f50_sms/files/uploads/mm_config_backup_${t}.yaml
        `)
        if (!res.success) return createToast("停止失败！", 'red')
        const a = document.createElement('a')
        a.download = `猫猫配置备份_config_${t}.yaml`
        a.href = `/api/uploads/mm_config_backup_${t}.yaml`
        a.target = "_blank"
        a.style.display = "none"
        document.body.appendChild(a)
        a.click()
        a.remove()
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
        <strong>🐱🐱</strong>
        <div style="display: inline-block;" id="collapse_mm_btn"></div>
    </div>
    <div class="collapse" id="collapse_mm" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
        <div id="mm_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap"></div>
            <ul class="deviceList">
<li style="padding:10px">
        <iframe id="mm_iframe" src="javascript:;" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius: 10px;overflow: hidden;opacity: .6;"></iframe>
</li> </ul>
        </div>
    </div>
</div>
`)
        const refresh = document.createElement('button')
        refresh.classList.add('btn')
        refresh.textContent = "刷新网页"
        refresh.onclick = () => {
            document.getElementById('mm_iframe').src = `http://${UFI_DATA.lan_ipaddr}:7788/ui/?t=` + Date.now();
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
                rm -f /data/data/com.minikano.f50_sms/files/uploads/mm_log_*
                sleep 1
                cp /sdcard/Clash内核日志.txt /data/data/com.minikano.f50_sms/files/uploads/mm_log_${t}.log
                chmod 777 /data/data/com.minikano.f50_sms/files/uploads/mm_log_${t}.log
                `)
            if (!res.success) return createToast("停止失败！", 'red')
            const a = document.createElement('a')
            a.download = `猫猫日志_${t}.log`
            a.href = `/api/uploads/mm_log_${t}.log`
            a.target = "_blank"
            a.style.display = "none"
            document.body.appendChild(a)
            a.click()
            a.remove()
        }


        const boot_on = document.createElement('button')
        boot_on.id = "clash_boot_on"
        boot_on.classList.add('btn')
        boot_on.textContent = "开机自启"
        boot_on.style.background = ""
        boot_on.addEventListener('click', async () => {
            if (!(await checkAdvanceFunc())) {
                createToast("没有开启高级功能，无法使用！", 'red')
                return
            }
            const isBootUp = await checkIsBootUp();
            if (isBootUp) {
                //关闭
                await runShellWithRoot(`
                sed -i '/Clash.Service/d' /sdcard/ufi_tools_boot.sh
                sed -i '/Clash.Inotify/d' /sdcard/ufi_tools_boot.sh
            `)
                boot_on.style.background = ""
                createToast("已取消开机自启", 'green')
            } else {
                //开启
                await runShellWithRoot(`
                grep -qxF '/data/clash/Scripts/Clash.Service start' /sdcard/ufi_tools_boot.sh || echo '/data/clash/Scripts/Clash.Service start' >> /sdcard/ufi_tools_boot.sh
                grep -qxF 'inotifyd /data/clash/Scripts/Clash.Inotify "/data/clash/Clash" >> /dev/null &' /sdcard/ufi_tools_boot.sh || echo 'inotifyd /data/clash/Scripts/Clash.Inotify "/data/clash/Clash" >> /dev/null &' >> /sdcard/ufi_tools_boot.sh
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

        if (localStorage.getItem("#collapse_mm") == 'open') {
            refresh.click()
        }

        const mmBox = document.querySelector('#mm_action_box')
        mmBox.appendChild(uploadBtn)
        mmBox.appendChild(backupBtn)
        mmBox.appendChild(btn_enabled)
        mmBox.appendChild(stopBtn)
        mmBox.appendChild(btn_restart)
        mmBox.appendChild(btn_disabled)
        mmBox.appendChild(exportBtn)
        mmBox.appendChild(boot_on)
        mmBox.appendChild(refresh)

        let colTimer = null
        let colTimer1 = null
        collapseGen("#collapse_mm_btn", "#collapse_mm", "#collapse_mm", (e) => {
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


