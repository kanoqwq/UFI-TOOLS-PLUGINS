//<script>
(async () => {

    //白色低温灯，蓝色中温灯，红色高温灯
    const LOW_TEMP = 50; // 低温阈值(0-50为白灯)
    const MID_TEMP = 70; // 中温-高温阈值(50-70为蓝灯，高于70为红灯)
    const BRIGHTNESS = 255; // 灯的亮度(0-255)
    const CHECK_TIME = 4; // 检查温度的间隔时间(秒)
    const BLINK_INTERVAL = 0.5; // 闪烁间隔时间(秒)

    /**
     * 下面脚本勿动
     * 下面脚本勿动
     * 下面脚本勿动
     * 下面脚本勿动
     */

    const SH_FILE = "/data/kano_temp_led.sh"
    const BOOT_SH_FILE = "/sdcard/ufi_tools_boot.sh"
    const SCRIPT_CONTENT = `
#!/vendor/bin/sh

# 中兴V50的LED路径
LED_RED="/sys/class/leds/red/brightness"
LED_WHITE="/sys/class/leds/white/brightness"
LED_BLUE="/sys/class/leds/blue/brightness"

set_color() {
    echo "$1" > "$LED_RED"
    echo "$2" > "$LED_WHITE"
    echo "$3" > "$LED_BLUE"
}

off_all() {
    set_color 0 0 0
}

get_max_temp() {
    max_temp=0
    for zone in /sys/class/thermal/thermal_zone*/temp; do
        if [ -f "$zone" ]; then
            temp=$(cat "$zone" 2>/dev/null)
            if [ -n "$temp" ] && [ "$temp" -gt "$max_temp" ]; then
                max_temp=$temp
            fi
        fi
    done
    echo $max_temp
}

get_target_color() {
    # 参数是温度 *1000，比如 31232 表示31.232℃
    temp=$1
    temp_c=$(($temp / 1000))

    if [ "$temp_c" -le ${LOW_TEMP} ]; then
        # 低温 白色
        echo "0 ${BRIGHTNESS} 0"
    elif [ "$temp_c" -le ${MID_TEMP} ]; then
        # 中温 蓝色
        echo "0 0 ${BRIGHTNESS}"
    else
        # 高温 红色
        echo "${BRIGHTNESS} 0 0"
    fi
}

blink_led() {
    tgt_r=$1
    tgt_g=$2
    tgt_b=$3
    
    while true; do
        # 亮灯
        set_color $tgt_r $tgt_g $tgt_b
        sleep ${BLINK_INTERVAL}
        # 灭灯
        off_all
        sleep ${BLINK_INTERVAL}
        
        # 检查是否需要更新颜色
        current_temp=$(get_max_temp)
        if [ -z "$current_temp" ]; then
            current_temp=0
        fi
        read new_r new_g new_b <<EOF
$(get_target_color $current_temp)
EOF
        
        # 如果温度区间变化，退出当前闪烁循环
        if [ "$new_r" -ne "$tgt_r" ] || [ "$new_g" -ne "$tgt_g" ] || [ "$new_b" -ne "$tgt_b" ]; then
            break
        fi
    done
}

off_all

while true; do
    max_temp=$(get_max_temp)
    if [ -z "$max_temp" ]; then
        max_temp=0
    fi

    read tgt_r tgt_g tgt_b <<EOF
$(get_target_color $max_temp)
EOF

    blink_led $tgt_r $tgt_g $tgt_b
done
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


    //杀死指定进程
    const killProcessByName = async (processName) => {
        const psResult = await runShellWithRoot(`ps -ef | grep "${processName}" | grep -v grep`);
        const lines = psResult.content.trim().split('\n');

        if (lines.length === 0 || (lines.length === 1 && lines[0].trim() === '')) {
            return {
                success: false,
                content: "未找到相关进程"
            };
        }

        let killed = 0;

        for (const line of lines) {
            const parts = line.trim().split(/\s+/);
            const pid = parts[1];
            const name = parts.slice(2).join(' ');
            if (pid && /^\d+$/.test(pid)) {
                const res = await runShellWithRoot(`kill ${pid}`);
                killed++;
            }
        }

        if (killed === 0) {
            return {
                success: false,
                content: "未找到可杀死的进程"
            };
        } else {
            return {
                success: true,
                content: `已杀死 ${killed} 个进程`
            };
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
        await runShellWithRoot(`sed -i '/kano_temp_led/d' ${BOOT_SH_FILE}`)
        await runShellWithRoot(`rm -f ${SH_FILE}`)
        await killProcessByName('kano_temp_led.sh')
        isBtn1Disabled = false
        isBtnDisabled = false
        return createToast("已卸载")
    }

    //灯
    const toggleLight = async (flag = true) => {
        try {
            const cookie = await login()
            if (!cookie) {
                createToast(t('toast_login_failed_check_network'), 'red')
                out()
                return null
            }
            let res1 = await (await postData(cookie, {
                goformId: 'INDICATOR_LIGHT_SETTING',
                indicator_light_switch: flag ? '1' : '0'
            })).json()
            if (res1.result == 'success') {
                createToast(t('toast_oprate_success'), 'green')
            } else {
                createToast(t('toast_oprate_failed'), 'red')
            }
        } catch (e) {
            createToast(e.message, 'red')
        }
    }

    //安装
    const install = async () => {
        if (!(await checkRoot())) {
            createToast("没有开启高级功能，无法使用！", "red");
            return false;
        }

        const res = await runShellWithRoot(`awk '{print}' /sdcard/ufi_tools_boot.sh`)
        if (res.content.includes("kano_temp_led.sh")) {
            return createToast(`
            温控灯已经启用啦~<br>
            温度阈值:[${LOW_TEMP},${MID_TEMP}]<br>
            指示灯亮度:${BRIGHTNESS}<br>
            监测间隔:${CHECK_TIME}S<br>
            闪烁间隔:${BLINK_INTERVAL}S<br>
            请根据实际情况在插件内调整`, 'red', 5000)
        }

        //上传
        if (!await uploadFile("kano_temp_led.sh", SCRIPT_CONTENT, SH_FILE)) {
            return createToast("传输文件失败！", "red")
        }
        await runShellWithRoot(`grep -qxF 'sh /data/kano_temp_led.sh &' ${BOOT_SH_FILE} || echo 'sh /data/kano_temp_led.sh &' >> ${BOOT_SH_FILE}`)
        await runShellWithRoot(`sh ${SH_FILE} &`)
        createToast(`
        已启用温控灯！<br>
        温度阈值:[${LOW_TEMP},${MID_TEMP}]<br>
        指示灯亮度:${BRIGHTNESS}<br>
        监测间隔:${CHECK_TIME}S<br>
        闪烁间隔:${BLINK_INTERVAL}S<br>
        请根据实际情况在插件内调整`, 'green', 5000)
    }

    const btn = document.createElement('button')
    btn.textContent = "启用温控灯"
    btn.onclick = async (e) => {
        await install()
    }

    const btn1 = document.createElement('button')
    btn1.textContent = "移除温控灯"
    let timer_close = null
    let count_close = 0

    btn1.onclick = async (e) => {
        if (timer_close) clearTimeout(timer_close)
        timer_close = setTimeout(() => {
            count_close = 0
        }, 2000)
        if (count_close++ < 2) {
            return createToast("再点一次移除温控灯")
        }
        await uninstall()
        //开关一下灯
        await toggleLight(false)
        await toggleLight(true)
    }
    
    document.querySelector('.actions-buttons').appendChild(btn)
    document.querySelector('.actions-buttons').appendChild(btn1)
})();
//</script>