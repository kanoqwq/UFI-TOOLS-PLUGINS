<script>
    (async () => {
        const SH_DIR = "/data/kano_hosts"
        const SH_FILE = "/data/kano_hosts.sh"
        const BOOT_SH_FILE = "/sdcard/ufi_tools_boot.sh"
        const CONF_FILE = "/data/kano_hosts_conf"
        const html = `
<div class="modal" style="padding:15px;width: 77%; max-width: 300px; opacity: 1;">
    <div class="title">HOSTS 编辑</div>
    <div class="content" style="max-height: 350px;padding: 15px 0px 0 0px;">
        <textarea style="width:100%;min-height: 200px;box-sizing: border-box;border: none;" placeholder="#你可以像以下这样设置hosts\n127.0.0.1 kanokano.cn\n#本插件默认集成 192.168.0.1 ufi.tools"></textarea>
    </div>
    <div class="btn" style="text-align: right;margin-top: 10px;">
        <button onclick="saveHosts()">保存</button>
        <button onclick="restoreHosts()">还原</button>
        <button onclick="closeModal('#hostsModal')">关闭</button>
    </div>
</div>
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

        const genSH = (content = '') => {
            return `#!/system/bin/sh
umount /system/etc/hosts 2>/dev/null

if [ -d /data/kano_hosts ]; then
    rm -rf /data/kano_hosts
fi

mkdir /data/kano_hosts
cat <<EOF > /data/kano_hosts/hosts
127.0.0.1       localhost
::1             ip6-localhost
${content}
192.168.0.1 ufi.tools
EOF

mount --bind /data/kano_hosts/hosts /system/etc/hosts
sync
`
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

        const restore = async () => {
            if (!(await checkRoot())) {
                createToast("没有开启高级功能，无法使用！", "red");
                return false;
            }
            createToast("还原中...")
            await runShellWithRoot(`sed -i '/kano_hosts/d' /sdcard/ufi_tools_boot.sh`)
            await runShellWithRoot(`
            umount /system/etc/hosts 2>/dev/null
            sync
            `)
            await runShellWithRoot(`rm -rf ${SH_FILE}`)
            await runShellWithRoot(`rm -rf ${SH_DIR}`)
            await runShellWithRoot(`rm -rf ${CONF_FILE}`)
            init()

            isBtn1Disabled = false
            isBtnDisabled = false
            return createToast("已还原并取消自启")
        }

        //save
        const save = async () => {
            if (!(await checkRoot())) {
                createToast("没有开启高级功能，无法使用！", "red");
                return false;
            }
            const textarea = document.querySelector('#hostsModal textarea');
            if (textarea) {
                const hosts_text = textarea.value.trim();
                createToast("保存中...")
                //保存配置供前端读取
                if (!await uploadFile("kano_hosts_conf", hosts_text, CONF_FILE)) {
                    return createToast("传输文件失败！", "red")
                }
                //上传
                if (!await uploadFile("US_3M.sh", genSH(hosts_text), SH_FILE)) {
                    return createToast("传输文件失败！", "red")
                }
                await runShellWithRoot(`grep -qxF 'sh ${SH_FILE} &' /sdcard/ufi_tools_boot.sh || echo 'sh ${SH_FILE} &' >> /sdcard/ufi_tools_boot.sh`)
                await runShellWithRoot(`sh ${SH_FILE} &`)
                init()
                createToast("已保存并设置自启")
            }
        }

        const init = async () => {
            const textarea = document.querySelector('#hostsModal textarea');
            if (!(await checkRoot())) {
                return;
            }
            if (textarea) {
                const conf = await runShellWithRoot(`timeout 2s  awk '{print}' ${CONF_FILE}`)
                textarea.value = conf.content.trim();
            }
        }

        window.saveHosts = () => {
            save()
        }

        window.restoreHosts = () => {
            restore()
        }

        const modal = document.createElement('div')
        modal.classList.add('mask')
        modal.id = "hostsModal"
        modal.style.display = 'none'
        modal.innerHTML = html;

        modal.onclick = (e) => {
            if (e.target === modal) {
                closeModal('#hostsModal');
            }
        }

        document.querySelector('.container').appendChild(modal);

        const btn = document.createElement('button')
        btn.textContent = "自定义HOSTS"
        btn.onclick = async (e) => {
            await init()
            showModal('#hostsModal')
        }

        document.querySelector('.actions-buttons').appendChild(btn)
    })();
</script>