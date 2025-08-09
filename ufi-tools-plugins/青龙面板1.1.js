//<script>
(() => {
    function createFixedToast(_id, text, color) {
        try {
            const toastContainer = document.querySelector("#toastContainer")
            const toastEl = document.createElement('div')
            toastEl.id = _id
            toastEl.style.padding = '10px'
            toastEl.style.overflow = 'hidden'
            toastEl.style.fontSize = '13px'
            toastEl.style.width = "90vw"
            toastEl.style.maxWidth = "800px"
            toastEl.style.position = "relative"
            toastEl.style.top = "0px"
            toastEl.style.color = color || 'while'
            toastEl.style.backgroundColor = 'var(--dark-card-bg)'
            toastEl.style.transform = `scale(1)`
            toastEl.style.transition = `all .3s ease`
            toastEl.style.opacity = `0`
            toastEl.style.transform = `scale(0)`
            toastEl.style.transformOrigin = 'top center'
            toastEl.style.boxShadow = '0 0 10px 0 rgba(135, 207, 235, 0.24)'
            toastEl.style.fontWeight = 'bold'
            toastEl.style.backdropFilter = 'blur(10px)'
            toastEl.style.borderRadius = '6px'
            toastEl.innerHTML = text;
            const id = 'toastkano'
            toastEl.setAttribute('class', id);
            toastContainer.appendChild(toastEl)
            setTimeout(() => {
                toastEl.style.opacity = `1`
                toastEl.style.transform = `scale(1)`
            }, 50);
            let timer = null
            return {
                el: toastEl,
                fn: () => {
                    toastEl.style.opacity = `0`
                    toastEl.style.transform = `scale(0)`
                    toastEl.style.top = '-' + toastEl.getBoundingClientRect().height + 'px'
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        toastEl.remove()
                    }, 300);
                }
            }
        } catch (e) {
            createToast('创建toast失败:' + e)
            console.error('创建toast失败:', e);
        }
    }

    //上传脚本文件，移动到机内目标目录
    const uploadFile = async (filename, content, destPath) => {
        try {
            const file = new File([content], filename, { type: "text/plain" });
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await (await fetch(`${KANO_baseURL}/upload_img`, {
                method: "POST",
                headers: common_headers,
                body: formData,
            })).json();

            if (uploadRes.url) {
                const tempPath = `/data/data/com.minikano.f50_sms/files${uploadRes.url}`;
                const moveRes = await runShellWithRoot(`mv ${tempPath} ${destPath}`);
                if (moveRes.success) {
                    return true;
                } else { throw new Error(`移动文件失败: ${moveRes.content}`); }
            } else { return false; }
        } catch (e) {
            return false;
        }
    };

    const isInstalled = async () => {
        const res = await runShellWithRoot('/data/data/com.minikano.f50_sms/files/curl --silent http://192.168.0.1:5700/ | grep whyour')
        return res.success && res.content.includes('whyour')
    }

    const btn_open = document.createElement('button')
    btn_open.textContent = "打开青龙面板"
    btn_open.onclick = () => {
        createToast("正在打开青龙面板...")
        const a = document.createElement('a')
        a.href = `http://${location.host.split(':')[0]}:5700`
        a.target = "_blank"
        a.click()
    }

    const btn_enabled = document.createElement('button')
    btn_enabled.textContent = "安装青龙面板"
    btn_enabled.onclick = async () => {
        if (await isInstalled()) { return createToast("你已经安装过青龙面板了!", 'red') }
        btn_enabled.disabled = true
        await runShellWithRoot("rm -f /data/kano_qlmb_latest.dlog")
        await runShellWithRoot("rm -f /data/qinglong.tar.gz")

        createToast("下载青龙面板...")
        const res1 = await runShellWithRoot(`/data/data/com.minikano.f50_sms/files/curl -L "https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/qinglong.tar.gz" -o /data/qinglong.tar.gz --output /data/qinglong.tar.gz --write-out "DOWNLOAD_DONE\nTotal: %{size_download} bytes\nSpeed: %{speed_download} B/s\nTime: %{time_total} sec\n" > /data/kano_qlmb_latest.dlog 2>&1 &`, 100 * 1000)
        if (!res1.success) {
            btn_enabled.disabled = false;
            return createToast("下载青龙面板依赖失败!", 'red')
        }
        let log = ''
        const max_times = 600 // 最多等待10分钟
        let count_times = 0
        const { el, fn } = createFixedToast("kano_qlmb_toast", `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">等待日志中...</pre>`, '')

        const interval = setInterval(async () => {
            const dlog = await runShellWithRoot("timeout 2s  awk '{print}' /data/kano_qlmb_latest.dlog")
            const lines = dlog.content.split('\n'); // 按换行符拆分成数组
            log = lines.slice(-6).join('\n');
            el.innerHTML = `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">${log.replaceAll('\n', "<br>")}</pre>`
            if (log.includes('DOWNLOAD_DONE')) {
                fn()
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

        await runShellWithRoot("rm -f /data/kano_qlmb_latest.dlog")

        createToast("解压青龙面板文件,请稍侯...", '', 10000)
        const res2 = await runShellWithRoot(`
        cd /data/
        mkdir -p kano_qlmb
        cd /data/kano_qlmb
        tar -zxvf /data/qinglong.tar.gz -C /data/kano_qlmb/
        rm -f /data/qinglong.tar.gz
        `, 100 * 1000)
        if (!res2.success) {
            btn_enabled.disabled = false;
            return createToast("解压青龙面板文件出错!", 'red')
        }

        createToast("检查青龙面板依赖文件，可能需要一点时间...")
        const res3 = await runShellWithRoot(`
        ls /data/kano_qlmb
        `)
        if (!res3.success || !res3.content.includes('qinglong')) {
            btn_enabled.disabled = false;
            return createToast("检查青龙面板依赖文件失败!", 'red')
        }

        createToast("修改青龙面板目录权限...")
        const res4 = await runShellWithRoot(`
        chmod 755 /data/kano_qlmb/rurima
        chmod 755 /data/kano_qlmb/start_ql.sh
        chmod 755 /data/kano_qlmb/bin/*
        `)
        if (!res4.success) {
            btn_enabled.disabled = false;
            return createToast("修改青龙面板目录权限失败!", 'red')
        }

        createToast("设置青龙面板自启动...")
        const res5 = await runShellWithRoot(`
grep -qxF 'sh /data/kano_qlmb/start_ql.sh &' /sdcard/ufi_tools_boot.sh || echo '\nsh /data/kano_qlmb/start_ql.sh &' >> /sdcard/ufi_tools_boot.sh
        `)

        if (!res5.success) {
            btn_enabled.disabled = false;
            return createToast("设置青龙面板自启动失败!", 'red')
        }

        createToast("启动青龙面板...")
        const res6 = await runShellWithRoot(`
        sh /data/kano_qlmb/start_ql.sh &
        `)
        const { el: el2, fn: fn2 } = createFixedToast("kano_qlmb_start_toast", `<pre style="white-space: pre-wrap;min-width:300px;text-align: center;">等待日志中...</pre>`, '')
        let count1 = 0
        const interval2 = setInterval(async () => {
            const dlog = await runShellWithRoot("timeout 2s  awk '{print}' /data/kano_qlmb/log.txt")
            el2.innerHTML = `<pre style="white-space: pre-wrap;max-height:600px;overflow-y:auto;min-width:300px;text-align: center;">${dlog.content.replaceAll('\n', "<br>")}</pre>`
            el2.scrollTo({
                top: el2.scrollHeight,
                behavior: "smooth",
            })
            if (dlog.content.includes('容器启动成功') || dlog.content.includes('online') || dlog.content.includes('SUCCESS')) {
                createToast(`设置启动青龙面板成功！`, '', 10000)
                btn_enabled.disabled = false;
                setTimeout(() => {
                    fn2()
                    btn_open.click()
                }, 2000);
                clearInterval(interval2)

            }
            if (count1 >= 60) {
                createToast("设置启动青龙面板失败!", 'red')
                btn_enabled.disabled = false;
                clearInterval(interval2)
                fn2()
            }
            count1++
        }, 1000)
    }
    let ct = 0
    let timer = null
    const btn_disabled = document.createElement('button')
    btn_disabled.textContent = "卸载青龙面板"
    btn_disabled.onclick = async () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            ct = 0
        }, 2000)
        if (ct++ < 2) {
            return createToast("再点一次卸载青龙面板")
        }
        createToast("卸载中...", '', 10000)
        const res = await runShellWithRoot(`
        chattr -i /data/kano_qlmb/qinglong/.rurienv
        rm -rf /data/kano_qlmb
        sed -i '/start_ql/d' /sdcard/ufi_tools_boot.sh
        pkill nginx
        `, 60 * 1000)
        if (!res.success) return createToast("卸载失败！", 'red')
        createToast("卸载成功！正在重启系统...", 'pink')
        await runShellWithRoot("reboot")
    }

    const stop = async () => {
        await runShellWithRoot(`
        pkill -f crond
        pkill -f pm2
        pkill -f nginx
        pkill -f "ql bot"
        pkill -f "ql extra"
        kill -9  $(ps -ef | grep 'PM2' | grep 'God Daemon' | awk '{print $2}')
        kill -9  $(ps -ef | grep 'pm2' | awk '{print $2}')
        kill -9  $(ps -ef | grep 'nginx' | awk '{print $2}')
        kill -9  $(ps -ef | grep 'crond' | awk '{print $2}')
        `, 60 * 1000)
    }

    const restart = async () => {
        await stop()
        await runShellWithRoot(`
        sh /data/kano_qlmb/start_ql.sh &
        `)
    }

    const btn_reboot = document.createElement('button')
    btn_reboot.textContent = "重启青龙面板"
    btn_reboot.onclick = async () => {
        createToast("重启青龙中...")
        await restart()
        createToast("重启成功")
    }

    const btn_stop = document.createElement('button')
    btn_stop.textContent = "停止青龙面板"
    btn_stop.onclick = async () => {
        createToast("停止青龙中...")
        await stop()
        createToast("停止成功")
    }

    collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_enabled)
    collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_disabled);
    collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_open)
    collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_reboot)
    collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_stop)
})()
//</script>