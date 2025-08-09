<script>
    (() => {
        const btn_enabled = document.createElement('button')
        btn_enabled.textContent = "安装Lucky"
        btn_enabled.onclick = async () => {
            createToast("下载Lucky...")
            const res1 = await runShellWithRoot(`
        /data/data/com.minikano.f50_sms/files/curl -L 下载连接 --output /data/adb/lucky_android
        `,100*1000)
            if (!res1.success) return createToast("下载Lucky依赖失败!", 'red')

            createToast("配置Lucky文件...")
            const res2 = await runShellWithRoot(`
        cd /data/
        mkdir -p lucky
        mv /data/adb/lucky_android /data/lucky/lucky_android
        `)
            if (!res2.success) return createToast("配置Lucky文件出错!", 'red')

            createToast("检查Lucky依赖文件，可能需要一点时间...")
            const res3 = await runShellWithRoot(`
        ls /data/lucky
        `)
            if (!res3.success || !res3.content.includes('lucky')) return createToast("检查Lucky依赖文件失败!", 'red')

            createToast("修改Lucky目录权限...")
            const res4 = await runShellWithRoot(`
            chmod 777 /data/lucky/lucky_android
        `)
            if (!res4.success) return createToast("修改Lucky目录权限失败!", 'red')

            createToast("设置自启动...")
            const res5 = await runShellWithRoot(`
        grep -qxF 'nohup /data/lucky/lucky_android &' /sdcard/ufi_tools_boot.sh || echo 'nohup /data/lucky/lucky_android &' >> /sdcard/ufi_tools_boot.sh
        `)
            if (!res5.success) return createToast("设置Lucky自启动失败!", 'red')

            createToast("启动Lucky...")
            await runShellWithRoot(`/data/lucky/lucky_android`,100)
            createToast(`<div style="width:300px;text-align:center;pointer-events:all">
                设置成功！<br />
                <a href="http://192.168.0.1:16601" target="_blank">点我跳转到Lucky网页</a>(默认端口16601)<br />
        </div>
        `, '', 10000)
        }
        const btn_disabled = document.createElement('button')
        btn_disabled.textContent = "卸载Lucky"
        btn_disabled.onclick = async () => {
            await runShellWithRoot('pkill lucky')
            await runShellWithRoot('rm -rf /data/lucky')
            const res = await runShellWithRoot(`sed -i '/lucky_android/d' /sdcard/ufi_tools_boot.sh`)
            if (!res.success) return createToast("卸载失败！", 'red')
            createToast("卸载成功！")
        }
        collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_enabled)
        collapseBtn_menu.nextElementSibling.querySelector('.collapse_box').appendChild(btn_disabled);
    })()
</script>