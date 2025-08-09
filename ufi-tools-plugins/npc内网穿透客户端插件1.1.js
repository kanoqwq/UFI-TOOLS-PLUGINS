<script>
    (async () => {

        let Log_INTERVAL = null

        const checkAdvanceFunc = async () => {
            const res = await runShellWithRoot('whoami')
            if (res.content) {
                if (res.content.includes('root')) {
                    return true
                }
            }
            return false
        }


        const showConf = async () => {
            try {
                const NPC_config = document.querySelector('#NPC_config')
                if (NPC_config) {
                    const res = await runShellWithRoot(`timeout 2s awk \'{print}\' /data/kano_npc/npc.ini`)
                    NPC_config.value = res.content
                }
            } catch { }
        }

        const installBtn = document.createElement('button')
        installBtn.textContent = "安装NPC"
        installBtn.onclick = async () => {
            if (!checkAdvanceFunc()) {
                return createToast("没有开启高级功能，无法使用！")
            }
            createToast("开始下载安装包...")

            // 下载压缩包
            const res1 = await runShellWithRoot(`
cd /data && /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/kano_npc.zip -o kano_npc.zip
`, 100 * 1000)
            if (!res1.success) return createToast("下载NPC客户端压缩包失败", 'red')

            // 解压
            createToast("解压安装包...")
            const res2 = await runShellWithRoot(`
cd /data && rm -rf kano_npc && mkdir -p kano_npc && unzip kano_npc.zip -d /data/kano_npc/
`)
            if (!res2.success) return createToast("解压失败", 'red')

            // 设置权限
            createToast("设置执行权限...")
            const res3 = await runShellWithRoot(`
chmod +x /data/kano_npc/npcc /data/kano_npc/service.sh
`)
            if (!res3.success) return createToast("设置权限失败", 'red')

            // 设置自启动
            createToast("设置NPC客户端自启动...")
            const res4 = await runShellWithRoot(`
grep -qxF '/data/kano_npc/service.sh start' /sdcard/ufi_tools_boot.sh || echo '/data/kano_npc/service.sh start' >> /sdcard/ufi_tools_boot.sh
`)
            if (!res4.success) return createToast("写入自启动失败", 'red')

            // 启动
            createToast("启动NPC客户端...")
            const res5 = await runShellWithRoot(`/data/kano_npc/service.sh start`)
            if (!res5.success) return createToast("启动失败", 'red')

            createToast(`NPC客户端 安装成功！`, '', 6000)

            //配置文件显示
            await showConf()
        }

        const uninstallBtn = document.createElement('button')
        uninstallBtn.textContent = "卸载NPC"
        uninstallBtn.onclick = async () => {
            if (!checkAdvanceFunc()) {
                return createToast("没有开启高级功能，无法使用！")
            }
            createToast("正在停止NPC客户端...")
            await runShellWithRoot(`/data/kano_npc/service.sh stop`)

            createToast("清理目录和自启动...")
            const res1 = await runShellWithRoot(`
rm -rf /data/kano_npc
sed -i '/kano_npc/d' /sdcard/ufi_tools_boot.sh
`)
            if (!res1.success) return createToast("卸载失败", 'red')

            createToast("卸载成功", 'green')

            await showConf()
        }

        const stopBtn = document.createElement('button')
        stopBtn.textContent = "停止NPC"
        stopBtn.onclick = async () => {
            if (!checkAdvanceFunc()) {
                return createToast("没有开启高级功能，无法使用！")
            }
            const res = await runShellWithRoot(`/data/kano_npc/service.sh stop`)
            if (!res.success) return createToast("停止失败", 'red')
            createToast(res.content.replaceAll('\n', "<br>"), '')
        }

        const restartBtn = document.createElement('button')
        restartBtn.textContent = "重启NPC"
        restartBtn.onclick = async () => {
            if (!checkAdvanceFunc()) {
                return createToast("没有开启高级功能，无法使用！")
            }
            const res = await runShellWithRoot(`
        /data/kano_npc/service.sh stop
        sleep 1
        /data/kano_npc/service.sh start
        `)
            if (!res.success) return createToast("重启失败", 'red')
            createToast(res.content.replaceAll('\n', "<br>"), '')
        }

        const hasToolbox = () => {
            return document.querySelector('#collapse_toolbox .collapse_box')
        }

        //生成日志
        const genLog = async () => {
            const NPC_textarea = document.querySelector("#NPC_textarea")
            if (NPC_textarea) {
                const res = await runShellWithRoot(`timeout 2s  awk \'{print}\' /sdcard/NPC_LOG.txt`)
                NPC_textarea.value = `${res.content}\n`
                NPC_textarea.scrollTo({
                    top: NPC_textarea.scrollHeight,
                    behavior: "smooth",
                })
            }
        }

        //保存配置文件
        const saveConfig = async (conf) => {
            try {
                const file = new File([conf], "npc.ini", { type: "text/plain" });
                const formData = new FormData();
                formData.append("file", file);
                const res = await (await fetch(`${KANO_baseURL}/upload_img`, {
                    method: "POST",
                    headers: common_headers,
                    body: formData,
                })).json()

                if (res.url) {
                    let foundFile = await runShellWithRoot(`
                    ls /data/data/com.minikano.f50_sms/files${res.url}
                `)
                    if (!foundFile.content) {
                        throw "上传失败"
                    }
                    let resShell = await runShellWithRoot(`
                    mv /data/data/com.minikano.f50_sms/files${res.url} /data/kano_npc/npc.ini
                `)
                    if (resShell.success) {
                        createToast(`上传成功！正在重启服务...`, 'green')
                        restartBtn.click()
                        await showConf()
                    }
                }
                else throw res.error || ''
            }
            catch (e) {
                console.error(e);
                createToast(`上传失败!`, 'red')
            }
        }


        const mmContainer = document.querySelector('.functions-container')
        mmContainer.insertAdjacentHTML("afterend", `
<div id="IFRAME_KANO_NPC" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0 ;">
        <strong>NPC客户端</strong>
        <div style="display: inline-block;" id="collapse_NPC_btn"></div>
    </div>
    <div class="collapse" id="collapse_NPC" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
            <div id="NPC_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap"></div>
            <ul class="deviceList">
                <li style="padding:10px;display: grid;grid-template-columns: 1fr 1fr;gap: 8px;">
                    <div>
                        <div class="title">
                            <span>配置文件</span>
                            <button style="margin: 0 !important;padding: 2px 6px;" onclick="kanoSaveFrpConfig()">保存</button>
                            <button style="margin: 0 !important;padding: 2px 6px;" onclick="kanoReadFrpConfig()">读取</button>
                        </div>
                        <textarea id="NPC_config" style="margin-top: 4px;font-size:12px !important;border:none;padding:4px;margin:0;width:100%;height:300px;border-radius: 10px;overflow-x: hidden;background:transparent;"></textarea>
                    </div>
                    <div>
                    <div class="title">
                        <span>日志</span>
                        <button style="margin: 0 !important;padding: 2px 6px;" onclick="kanoReadFrpLog()">刷新</button></div>
                         <textarea id="NPC_textarea" disabled style="margin-top: 4px;font-size:12px !important;border:none;padding:4px;margin:0;width:100%;height:300px;border-radius: 10px;overflow-x: hidden;background:transparent;"></textarea>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
`)
        const mmBox = document.querySelector('#NPC_action_box')
        mmBox.appendChild(installBtn)
        mmBox.appendChild(uninstallBtn)
        mmBox.appendChild(stopBtn)
        mmBox.appendChild(restartBtn)
        collapseGen("#collapse_NPC_btn", "#collapse_NPC", "#collapse_NPC", (newVal) => {
            // newVal ? 'open' : 'close'
            if (newVal == 'open') {
                Log_INTERVAL && Log_INTERVAL()
                Log_INTERVAL = requestInterval(() => genLog(), 2000)
            } else {
                Log_INTERVAL && Log_INTERVAL()
            }
        })

        if (localStorage.getItem("#collapse_NPC") == 'open') {
            Log_INTERVAL = requestInterval(() => genLog(), 2000)
        }

        window.kanoSaveFrpConfig = () => {
            const NPC_config = document.querySelector('#NPC_config')
            if (!NPC_config) return
            createToast('配置保存中...')
            saveConfig(NPC_config.value)
        }

        window.kanoReadFrpConfig = () => {
            showConf()
            createToast('配置读取成功')
        }

        window.kanoReadFrpLog = () => {
            genLog()
            createToast('日志已刷新')
        }

        //配置文件显示
        let counter = 0
        let inter = setInterval(async () => {
            counter++;
            if (counter >= 10) clearInterval(inter)
            const NPC_config = document.querySelector('#NPC_config')
            if (NPC_config) {
                const res = await runShellWithRoot(`timeout 2s awk \'{print}\' /data/kano_npc/npc.ini`, 2000)
                NPC_config.value = res.content
                clearInterval(inter)
            }
        }, 1000);

    })()
</script>