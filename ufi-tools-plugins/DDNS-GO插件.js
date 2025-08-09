<script>
    (() => {
        const btn_enabled = document.createElement('button')
        btn_enabled.textContent = "安装DDNS_GO"
        btn_enabled.onclick = async () => {
            createToast("下载ddns_go...")
            const res1 = await runShellWithRoot(`
        /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS/ddns-go --output /data/adb/ddns_go_android
        `,100*1000)
            if (!res1.success) return createToast("下载ddns_go依赖失败!", 'red')

            createToast("配置ddns_go文件...")
            const res2 = await runShellWithRoot(`
        cd /data/
        mkdir -p ddns_go
        mv /data/adb/ddns_go_android /data/ddns_go/ddns_go_android
        `)
            if (!res2.success) return createToast("配置ddns_go文件出错!", 'red')

            createToast("检查ddns_go依赖文件，可能需要一点时间...")
            const res3 = await runShellWithRoot(`
        ls /data/ddns_go
        `)
            if (!res3.success || !res3.content.includes('ddns_go')) return createToast("检查ddns_go依赖文件失败!", 'red')

            createToast("修改ddns_go目录权限...")
            const res4 = await runShellWithRoot(`
            chmod 777 /data/ddns_go/ddns_go_android
        `)
            if (!res4.success) return createToast("修改ddns_go目录权限失败!", 'red')

            createToast("设置自启动...")
            const res5 = await runShellWithRoot(`
grep -qxF 'nohup /data/ddns_go/ddns_go_android &' /sdcard/ufi_tools_boot.sh || echo 'nohup /data/ddns_go/ddns_go_android &' >> /sdcard/ufi_tools_boot.sh
        `)
            if (!res5.success) return createToast("设置ddns_go自启动失败!", 'red')

            createToast("启动ddns_go...")
            await runShellWithRoot(`/data/ddns_go/ddns_go_android`,100)
            createToast(`<div style="width:300px;text-align:center;pointer-events:all">
                设置成功！<br />
                <a href="http://192.168.0.1:9876" target="_blank">点我跳转到ddns_go网页</a>(默认端口9876)<br />
                配置文件已保存在: /sdcard/.ddns_go_config.yaml
        </div>
        `, '', 10000)
        }
        const btn_disabled = document.createElement('button')
        btn_disabled.textContent = "卸载DDNS_GO"
        btn_disabled.onclick = async () => {
            await runShellWithRoot('pkill ddns_go')
            await runShellWithRoot('rm -rf /data/ddns_go')
            const res = await runShellWithRoot(`sed -i '/ddns_go_android/d' /sdcard/ufi_tools_boot.sh`)
            if (!res.success) return createToast("卸载失败！", 'red')
            createToast("卸载成功！")
        }
        collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_enabled)
        collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_disabled);
    })()
</script>