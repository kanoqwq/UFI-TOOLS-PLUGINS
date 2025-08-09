<script>
    (() => {
        const installBtn = document.createElement('button')
        installBtn.textContent = "安装Aria2"
        installBtn.onclick = async () => {
            createToast("开始下载安装包...")

            // 下载压缩包
            const res1 = await runShellWithRoot(`
cd /data && /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/kano_aria2.zip -o kano_aria2.zip
        `, 100 * 1000)
            if (!res1.success) return createToast("下载Aria2压缩包失败", 'red')

            // 解压
            createToast("解压安装包...")
            const res2 = await runShellWithRoot(`
cd /data && rm -rf aria2 && mkdir -p aria2 && unzip kano_aria2.zip -d /data/aria2
        `)
            if (!res2.success) return createToast("解压失败", 'red')

            // 设置权限
            createToast("设置执行权限...")
            const res3 = await runShellWithRoot(`
chmod +x /data/aria2/aria2c /data/aria2/aria2.sh
        `)
            if (!res3.success) return createToast("设置权限失败", 'red')

            // 设置默认密码
            createToast("设置默认密码...")
            const resPwd = await runShellWithRoot(`
echo "kanokano" > /sdcard/aria2_pwd
        `)
            if (!resPwd.success) return createToast("设置默认密码失败", 'red')

            // 设置自启动
            createToast("设置Aria2自启动...")
            const res4 = await runShellWithRoot(`
grep -qxF '/data/aria2/aria2.sh start' /sdcard/ufi_tools_boot.sh || echo '/data/aria2/aria2.sh start' >> /sdcard/ufi_tools_boot.sh
        `)
            if (!res4.success) return createToast("写入自启动失败", 'red')

            // 启动
            createToast("启动Aria2...")
            const res5 = await runShellWithRoot(`/data/aria2/aria2.sh start`)
            if (!res5.success) return createToast("启动失败", 'red')

            // 复制 index.html 为 aria2.html
            createToast("复制前端页面...")
            const res6 = await runShellWithRoot(`
mkdir -p /data/data/com.minikano.f50_sms/files/uploads && cp /data/aria2/index.html /data/data/com.minikano.f50_sms/files/uploads/aria2.html
        `)
            if (!res6.success) return createToast("复制 aria2.html 失败", 'red')

            createToast(`Aria2 安装成功！,刷新网页即可食用！<br>
            默认token:kanokano<br>
            默认端口：6800<br>
            密码可在文件中更改:/sdcard/aria2_pwd<br>
            `, '', 10000)
        }

        const uninstallBtn = document.createElement('button')
        uninstallBtn.textContent = "卸载Aria2"
        uninstallBtn.onclick = async () => {
            createToast("正在停止Aria2...")
            await runShellWithRoot(`/data/aria2/aria2.sh stop`)

            createToast("清理目录和自启动...")
            const res1 = await runShellWithRoot(`
rm -rf /data/aria2
sed -i '/^\\/data\\/aria2\\/aria2.sh start$/d' /sdcard/ufi_tools_boot.sh
rm -f /data/data/com.minikano.f50_sms/files/uploads/aria2.html
rm -f /sdcard/aria2_pwd
        `)
            if (!res1.success) return createToast("卸载失败", 'red')

            createToast("卸载成功", 'green')
        }

        const stopBtn = document.createElement('button')
        stopBtn.textContent = "停止Aria2"
        stopBtn.onclick = async () => {
            const res = await runShellWithRoot(`/data/aria2/aria2.sh stop`)
            if (!res.success) return createToast("停止失败", 'red')
            createToast("已停止", 'green')
        }

        const restartBtn = document.createElement('button')
        restartBtn.textContent = "重启Aria2"
        restartBtn.onclick = async () => {
            const res = await runShellWithRoot(`/data/aria2/aria2.sh restart`)
            if (!res.success) return createToast("重启失败", 'red')
            createToast("已重启", 'green')
        }

        const mmContainer = document.querySelector('.functions-container')
        mmContainer.insertAdjacentHTML("afterend", `
<div id="IFRAME_KANO_ARIA2" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0 ;">
        <strong>Aria2</strong>
        <div style="display: inline-block;" id="collapse_aria2_btn"></div>
    </div>
    <div class="collapse" id="collapse_aria2" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
        <div id="aria2_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap"></div>
            <ul class="deviceList">
<li style="padding:10px">
        <iframe id="aria2_iframe" src="/api/uploads/aria2.html" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius: 10px;overflow: hidden;opacity: .6;"></iframe>
</li> </ul>
        </div>
    </div>
</div>
`)
        const refresh = document.createElement('button')
        refresh.classList.add('btn')
        refresh.textContent = "刷新网页"
        refresh.onclick = () => {
            window.location.reload(true);
        }
        const mmBox = document.querySelector('#aria2_action_box')
        mmBox.appendChild(installBtn)
        mmBox.appendChild(uninstallBtn)
        mmBox.appendChild(stopBtn)
        mmBox.appendChild(restartBtn)
        collapseGen("#collapse_aria2_btn", "#collapse_aria2", "#collapse_aria2", (e) => { })
    })()
</script>