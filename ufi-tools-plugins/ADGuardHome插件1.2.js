//<script>
(async () => {
    const SH_FILE = "/data/agh/boot.sh"
    const BOOT_SH_FILE = "/sdcard/ufi_tools_boot.sh"

    //检查高级功能是否开启
    const checkRoot = async () => {
        try {
            const res = await runShellWithRoot('whoami');
            return res.success && res.content.includes('root');
        } catch {
            return false;
        }
    };

    //卸载
    const uninstall = async () => {
        if (!(await checkRoot())) {
            createToast("没有开启高级功能，无法使用！", "red");
            return false;
        }
        createToast("卸载中...")
        await runShellWithRoot(`sed -i '/agh.*boot.sh/d' ${BOOT_SH_FILE}`)
        const res = await runShellWithRoot(`/data/agh/action.sh stop`)
        await runShellWithRoot(`/data/agh/uninstall.sh`)

        isBtnDisabled = false
        createToast(`<pre style="white-space:pre-wrap;width:90vw;max-width:600px">${res.content}</pre>`, "", 5000)
        createToast(`卸载完成`, "", 5000)
    }

    //安装
    const install = async () => {
        if (!(await checkRoot())) {
            createToast("没有开启高级功能，无法使用！", "red");
            return false;
        }

        const res = await runShellWithRoot(`awk '{print}' /sdcard/ufi_tools_boot.sh`)
        if (res.content.includes("agh/boot.sh")) {
            return createToast(`ADGuard已经启用啦~`, 'red', 5000)
        }

        await runShellWithRoot(`
        rm -rf /data/agh
        rm -f /data/kano_ad_guard_home.zip
        `)

        createToast("下载...")
        const res1 = await runShellWithRoot(`
        /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/kano_ad_guard_home.zip -o /data/kano_ad_guard_home.zip
        `, 100 * 1000)
        if (!res1.success) return createToast("下载依赖失败!", 'red')

        createToast("解压文件...")
        const res2 = await runShellWithRoot(`
        cd /data/
        unzip -o /data/kano_ad_guard_home.zip "adg_customize.sh" -d /data/ >/dev/null 2>&1 
        `)
        if (!res2.success) return createToast("解压文件出错!", 'red')

        createToast("检查依赖文件，可能需要一点时间...")
        const res3 = await runShellWithRoot(`
        ls /data/
        `)
        if (!res3.success || !res3.content.includes('adg_customize.sh')) return createToast("检查依赖文件失败!", 'red')

        createToast("修改sh权限...")
        const res4 = await runShellWithRoot(`
        chmod 777 /data/adg_customize.sh
        `)
        if (!res4.success) return createToast("修改sh权限失败!", 'red')

        createToast("安装ADGuard...")
        const res5 = await runShellWithRoot(`/data/adg_customize.sh`, 60 * 1000)
        if (!res5.success) return createToast("安装ADGuard失败!", 'red')

        createToast(`<pre style="white-space:pre-wrap;width:90vw;max-width:600px">${res5.content}</pre>`, "", 10000)

        await runShellWithRoot(`grep -qxF 'sh /data/agh/boot.sh &' ${BOOT_SH_FILE} || echo 'sh /data/agh/boot.sh &' >> ${BOOT_SH_FILE}`)
        await runShellWithRoot(`sh ${SH_FILE} &`)
        createToast(`<div>已启用ADGuard！<br>
        地址：http://192.168.0.1:3000<br>
        用户名密码默认均为 root <br>
        </div>`, 'green', 10000)
        isBtnDisabled = false
    }

    const btn = document.createElement('button')
    btn.textContent = "安装ADGuard"
    let isBtnDisabled = false
    btn.onclick = async (e) => {
        if (isBtnDisabled) return
        isBtnDisabled = true
        await install()
    }

    const btn1 = document.createElement('button')
    btn1.textContent = "移除ADGuard"
    let timer_close = null
    let count_close = 0

    btn1.onclick = async (e) => {
        if (timer_close) clearTimeout(timer_close)
        timer_close = setTimeout(() => {
            count_close = 0
        }, 2000)
        if (count_close++ < 2) {
            return createToast("再点一次移除ADGuard")
        }
        await uninstall()
    }

    const btn2 = document.createElement('button')
    btn2.textContent = "重启ADGuard"
    let disabledBtn2 = false
    btn2.onclick = async (e) => {
        try {
            if (disabledBtn2) return
            disabledBtn2 = true
            await runShellWithRoot(`/data/agh/action.sh stop`)
            createToast(`重启中`, "", 5000)
            await runShellWithRoot(`sleep 2`)
            const res = await runShellWithRoot(`/data/agh/action.sh toggle`)
            createToast(`<pre style="white-space:pre-wrap;width:90vw;max-width:600px">${res.content}</pre>`, "", 5000)
        } finally {
            disabledBtn2 = false
        }
    }

    const btn3 = document.createElement('button')
    let disabledBtn3 = false
    btn3.textContent = "停止ADGuard"
    btn3.onclick = async (e) => {
        try {
            if (disabledBtn3) return
            disabledBtn3 = true
            const res = await runShellWithRoot(`/data/agh/action.sh stop`)
            createToast(`<pre style="white-space:pre-wrap;width:90vw;max-width:600px">${res.content}</pre>`, "", 5000)
        } finally {
            disabledBtn3 = false
        }
    }

    const btn4 = document.createElement('button')
    btn4.textContent = "ADGuard页面"
    btn4.onclick = async (e) => {
        window.open(`${location.protocol}//${location.hostname}:3000`, "_blank")
    }

    const btn5 = document.createElement('button')
    btn5.textContent = "导出ADGuard配置"
    btn5.onclick = async (e) => {
        const res = await runShellWithRoot("timeout 2s  awk '{print}' /data/agh/agh/bin/AdGuardHome.yaml")
        if (!res.success) {
            return createToast("导出配置失败", 'red', 5000)
        }
        const content = res.content;
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "AdGuardHome.yaml";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        createToast("配置导出成功", 'green', 5000);
    }

    document.querySelector('.actions-buttons').appendChild(btn)
    document.querySelector('.actions-buttons').appendChild(btn1)
    document.querySelector('.actions-buttons').appendChild(btn2)
    document.querySelector('.actions-buttons').appendChild(btn3)
    document.querySelector('.actions-buttons').appendChild(btn4)
    document.querySelector('.actions-buttons').appendChild(btn5)
})();
//</script>