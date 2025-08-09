//<script>
(async () => {
    const plugin_name = "kano_80_port"
    const plugin_title = "UFI_80端口"
    const SH_FILE = "/data/kano_80_port.sh"
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
        await runShellWithRoot(`sed -i '/${plugin_name}/d' ${BOOT_SH_FILE}`)
        await runShellWithRoot(`rm -f ${SH_FILE}`)
        isBtn1Disabled = false
        isBtnDisabled = false
        return createToast("已卸载,重启生效！")
    }

    //安装
    const install = async () => {
        if (!(await checkRoot())) {
            createToast("没有开启高级功能，无法使用！", "red");
            return false;
        }

        const SCRIPT_CONTENT = `
#!/system/bin/sh
SRC_PORT=80
DST_PORT=2333
SRC_IP="${UFI_DATA.lan_ipaddr || "192.168.0.1"}"
MAX_LOOP=10
LOOP_COUNT=0
EXISTS_OLD_RULE=$(iptables -t nat -L PREROUTING -n | grep -c "tcp dpt:$SRC_PORT")
if [ "$EXISTS_OLD_RULE" -gt 0 ]; then
    LOOP_COUNT=0
    while true; do
        RULE_NUM=$(iptables -t nat -L PREROUTING --line-numbers -n | grep "tcp dpt:$SRC_PORT" | head -n1 | awk '{print $1}')
        if [ -z "$RULE_NUM" ]; then
            break
        fi
        iptables -t nat -D PREROUTING $RULE_NUM

        LOOP_COUNT=$((LOOP_COUNT + 1))
        if [ $LOOP_COUNT -ge $MAX_LOOP ]; then
            echo "Reached max delete attempts ($MAX_LOOP), breaking loop."
            break
        fi
    done
fi
iptables -t nat -A PREROUTING -d $SRC_IP -p tcp --dport $SRC_PORT -j DNAT --to-destination $SRC_IP:$DST_PORT
`

        const res = await runShellWithRoot(`awk '{print}' /sdcard/ufi_tools_boot.sh`)
        if (res.content.includes(`${plugin_name}.sh`)) {
            return createToast(`
            已经启用${plugin_title}了!<br>
            官方web请用8080端口访问<br>
            `, 'red', 5000)
        }

        //上传
        if (!await uploadFile(`${plugin_name}.sh`, SCRIPT_CONTENT, SH_FILE)) {
            return createToast("传输文件失败！", "red")
        }
        await runShellWithRoot(`grep -qxF 'sh /data/${plugin_name}.sh &' ${BOOT_SH_FILE} || echo 'sh /data/${plugin_name}.sh &' >> ${BOOT_SH_FILE}`)
        await runShellWithRoot(`sh ${SH_FILE} &`)
        createToast(`
        已启用${plugin_title}！<br>
        官方web请用8080端口访问<br>
        `, 'green', 10000)
    }

    const btn = document.createElement('button')
    btn.textContent = "启用" + plugin_title
    btn.onclick = async (e) => {
        await install()
    }

    const btn1 = document.createElement('button')
    btn1.textContent = "移除" + plugin_title
    let timer_close = null
    let count_close = 0

    btn1.onclick = async (e) => {
        if (timer_close) clearTimeout(timer_close)
        timer_close = setTimeout(() => {
            count_close = 0
        }, 2000)
        if (count_close++ < 2) {
            return createToast("再点一次移除" + plugin_title)
        }
        await uninstall()
    }

    document.querySelector('.actions-buttons').appendChild(btn)
    document.querySelector('.actions-buttons').appendChild(btn1)
})();
//</script>