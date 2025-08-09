<script>
    (async () => {
        const SH_DIR = "/data/US_3M"
        const SH_FILE = "/data/US_3M.sh"
        const BOOT_SH_FILE = "/sdcard/ufi_tools_boot.sh"
        const SCRIPT_CONTENT = `#!/system/bin/sh
umount /system/etc/hosts 2>/dev/null
umount /system/bin/tc 2>/dev/null

if [ -d /data/US_3M ]; then
    rm -rf /data/US_3M
fi

mkdir /data/US_3M
cat <<EOF > /data/US_3M/hosts
127.0.0.1       localhost
::1             ip6-localhost
127.0.0.1 ctm.zte.com.cn
127.0.0.1 zte.com.cn
127.0.0.1 report.server.nubia.cn
127.0.0.1 nubia.cn
127.0.0.1 www.myzte.cn
127.0.0.1 myzte.cn
127.0.0.1 www.ztedevices.com
127.0.0.1 ztedevices.com
127.0.0.1 ztedevice.com
127.0.0.1 rot-dispatch-asia.ztesmarthome.com
127.0.0.1 ztesmarthome.com
127.0.0.1 61.145.136.87
127.0.0.1 zx.zte.com.cn
127.0.0.1 link.ztehome.com.cn
127.0.0.1 ztehome.com.cn
127.0.0.1 asia.ztesmarthome.com
127.0.0.1 ztesmarthome.com
127.0.0.1 ztems.com
127.0.0.1 seecom.com.cn
127.0.0.1 ufi.seecom.com.cn
127.0.0.1 dmcn.ztems.com
127.0.0.1 rot-dispatch-asia.ztesmarthome.com
127.0.0.1 rot-dispatch-eu.ztesmarthome.com
127.0.0.1 rot-dispatch-link.ztehome.com.cn
127.0.0.1 rot-dispatch-fmc.zx.zte.com.cn
127.0.0.1 rot-dispatch-fmc-test2.zx.zte.com.cn
127.0.0.1 36.133.8.210
192.168.0.1 ufi.tools
EOF

touch /data/US_3M/tc

mount --bind /data/US_3M/hosts /system/etc/hosts
mount --bind /data/US_3M/tc /system/bin/tc
sync
`

        //检查高级功能是否开启
        const checkRoot = async () => {
            try {
                const res = await runShellWithRoot('whoami');
                return res.success && res.content.includes('root');
            } catch {
                return false;
            }
        };


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

        //卸载
        const uninstall = async () => {
            if (!(await checkRoot())) {
                createToast("没有开启高级功能，无法使用！", "red");
                return false;
            }
            createToast("卸载中...")
            await runShellWithRoot(`sed -i '/US_3M/d' /sdcard/ufi_tools_boot.sh`)
            await runShellWithRoot(`
            umount /system/etc/hosts 2>/dev/null
            umount /system/bin/tc 2>/dev/null
            `)
            await runShellWithRoot(`rm -rf ${SH_FILE}`)
            await runShellWithRoot(`rm -rf ${SH_DIR}`)

            isBtn1Disabled = false
            isBtnDisabled = false
            return createToast("已卸载")
        }

        //安装
        const install = async () => {
            if (!(await checkRoot())) {
                createToast("没有开启高级功能，无法使用！", "red");
                return false;
            }
            //上传
            if (!await uploadFile("US_3M.sh", SCRIPT_CONTENT, SH_FILE)) {
                return createToast("传输文件失败！", "red")
            }
            await runShellWithRoot(`grep -qxF 'sh /data/US_3M.sh &' /sdcard/ufi_tools_boot.sh || echo 'sh /data/US_3M.sh &' >> /sdcard/ufi_tools_boot.sh`)
            await runShellWithRoot(`sh ${SH_FILE} &`)
            createToast("已启用3M好脚本")
        }

        const btn = document.createElement('button')
        btn.textContent = "启用3M好脚本"
        btn.onclick = async (e) => {
            await install()
        }

        const btn1 = document.createElement('button')
        btn1.textContent = "移除3M好脚本"

        btn1.onclick = async (e) => {
            await uninstall()
        }
        document.querySelector('.actions-buttons').appendChild(btn)
        document.querySelector('.actions-buttons').appendChild(btn1)
    })();
</script>