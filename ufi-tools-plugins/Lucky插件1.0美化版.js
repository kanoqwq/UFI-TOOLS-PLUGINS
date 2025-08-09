//<script>
(() => {
    /**
     * Toast消息类型枚举
     */
    const TOAST_TYPES = {
        SUCCESS: 'green',
        ERROR: 'red',
        WARNING: 'orange',
        INFO: 'blue',
        DEFAULT: ''
    }

    /**
     * Toast消息管理器
     */
    const ToastManager = {
        /**
         * 显示成功消息
         * @param {string} message - 消息内容
         * @param {number} duration - 显示时长(毫秒)
         */
        success: (message, duration = 3000) => {
            createToast(message, TOAST_TYPES.SUCCESS, duration)
        },

        /**
         * 显示错误消息
         * @param {string} message - 消息内容
         * @param {number} duration - 显示时长(毫秒)
         */
        error: (message, duration = 5000) => {
            createToast(message, TOAST_TYPES.ERROR, duration)
        },

        /**
         * 显示警告消息
         * @param {string} message - 消息内容
         * @param {number} duration - 显示时长(毫秒)
         */
        warning: (message, duration = 4000) => {
            createToast(message, TOAST_TYPES.WARNING, duration)
        },

        /**
         * 显示信息消息
         * @param {string} message - 消息内容
         * @param {number} duration - 显示时长(毫秒)
         */
        info: (message, duration = 3000) => {
            createToast(message, TOAST_TYPES.INFO, duration)
        },

        /**
         * 显示加载中消息
         * @param {string} message - 消息内容
         */
        loading: (message) => {
            createToast(`⏳ ${message}`, TOAST_TYPES.INFO, 2000)
        },

        /**
         * 显示带链接的成功消息
         * @param {string} title - 标题
         * @param {string} url - 链接地址
         * @param {string} linkText - 链接文本
         * @param {string} extraInfo - 额外信息
         * @param {number} duration - 显示时长(毫秒)
         */
        successWithLink: (title, url, linkText, extraInfo = '', duration = 20000) => {
            const message = `<div style="width:300px;text-align:center;pointer-events: all;">
                ${title}<br />
                <a href="${url}" target="_blank">${linkText}</a><br />
                ${extraInfo}
            </div>`
            createToast(message, TOAST_TYPES.SUCCESS, duration)
        },

        /**
         * 显示操作结果消息
         * @param {string} title - 标题
         * @param {string} content - 内容
         * @param {string} type - 消息类型
         * @param {number} duration - 显示时长(毫秒)
         */
        result: (title, content, type = TOAST_TYPES.SUCCESS, duration = 10000) => {
            const message = `<div style="width:300px;text-align:center">
                ${title}<br/>
                ${content.replaceAll('\n', "<br/>")}
            </div>`
            createToast(message, type, duration)
        }
    }

    /**
     * 操作状态管理器
     */
    const OperationManager = {
        /**
         * 执行带状态管理的异步操作
         * @param {Function} operation - 要执行的操作
         * @param {Object} button - 按钮元素
         * @param {string} loadingText - 加载中的文本
         * @returns {Promise<any>} 操作结果
         */
        executeWithState: async (operation, button, loadingText) => {
            const originalText = button.textContent
            const originalDisabled = button.disabled
            
            try {
                button.disabled = true
                button.textContent = loadingText
                ToastManager.loading(loadingText)
                
                const result = await operation()
                return result
            } catch (error) {
                ToastManager.error(`操作失败: ${error.message}`)
                throw error
            } finally {
                button.disabled = originalDisabled
                button.textContent = originalText
            }
        }
    }

    /**
     * 检查高级功能是否开启
     * @returns {Promise<boolean>} 是否有root权限
     */
    const checkAdvanceFunc = async () => {
        const res = await runShellWithRoot('whoami')
        if (res.content) {
            if (res.content.includes('root')) {
                return true
            }
        }
        return false
    }

    /**
     * 验证高级功能权限
     * @returns {Promise<boolean>} 权限验证结果
     */
    const validateAdvancedPermission = async () => {
        if (!(await checkAdvanceFunc())) {
            ToastManager.error("没有开启高级功能，无法使用！")
            return false
        }
        return true
    }

    /**
     * 创建安装Lucky按钮
     */
    const btn_enabled = document.createElement('button')
    btn_enabled.textContent = "安装Lucky"
    let disabled_btn_enabled = false
    
    /**
     * 安装Lucky的核心逻辑
     * @returns {Promise<void>}
     */
    const installLucky = async () => {
        // 权限验证
        if (!(await validateAdvancedPermission())) {
            return
        }

        try {
            // 步骤1: 下载Lucky
            ToastManager.loading("正在下载Lucky...")
            const res1 = await runShellWithRoot(`
            /data/data/com.minikano.f50_sms/files/curl -L https://pan.kanokano.cn/d/UFI-TOOLS-UPDATE/plugins/lucky --output /data/adb/lucky_android
            `, 100 * 1000)
            if (!res1.success) {
                throw new Error("下载Lucky依赖失败!")
            }

            // 步骤2: 配置Lucky文件
            ToastManager.loading("正在配置Lucky文件...")
            const res2 = await runShellWithRoot(`
            cd /data/
            mkdir -p lucky
            mv /data/adb/lucky_android /data/lucky/lucky_android
            `)
            if (!res2.success) {
                throw new Error("配置Lucky文件出错!")
            }

            // 步骤3: 检查Lucky依赖文件
            ToastManager.loading("正在检查Lucky依赖文件...")
            const res3 = await runShellWithRoot(`
            ls /data/lucky
            `)
            if (!res3.success || !res3.content.includes('lucky')) {
                throw new Error("检查Lucky依赖文件失败!")
            }

            // 步骤4: 修改Lucky目录权限
            ToastManager.loading("正在修改Lucky目录权限...")
            const res4 = await runShellWithRoot(`
                chmod 777 /data/lucky/lucky_android
            `)
            if (!res4.success) {
                throw new Error("修改Lucky目录权限失败!")
            }

            // 步骤5: 设置自启动
            ToastManager.loading("正在设置自启动...")
            const res5 = await runShellWithRoot(`
            grep -qxF 'nohup /data/lucky/lucky_android &' /sdcard/ufi_tools_boot.sh || echo 'nohup /data/lucky/lucky_android &' >> /sdcard/ufi_tools_boot.sh
            `)
            if (!res5.success) {
                throw new Error("设置Lucky自启动失败!")
            }

            // 步骤6: 启动Lucky
            ToastManager.loading("正在启动Lucky...")
            const res6 = await runShellWithRoot(`nohup /data/lucky/lucky_android > /dev/null 2>&1 &`, 100)
            
            // 步骤7: 验证Lucky启动状态
            ToastManager.loading("正在验证Lucky启动状态...")
            await new Promise(resolve => setTimeout(resolve, 3000))
            
            const checkRes = await runShellWithRoot(`
            ps | grep lucky | grep -v grep
            `)
            
            if (!checkRes.success || !checkRes.content || !checkRes.content.includes('lucky')) {
                throw new Error("启动Lucky失败!进程未找到")
            }

            // 成功消息
            ToastManager.successWithLink(
                "🎉 启动Lucky成功！<br />web地址(端口默认是16601)",
                "http://192.168.0.1:16601/",
                "http://192.168.0.1:16601/",
                `依赖文件路径:/data/lucky/<br/>进程信息:${checkRes.content.trim()}`
            )
        } catch (error) {
            ToastManager.error(error.message)
        }
    }
    
    btn_enabled.onclick = async (e) => {
        if (disabled_btn_enabled) return
        disabled_btn_enabled = true
        
        try {
            await OperationManager.executeWithState(
                installLucky,
                btn_enabled,
                "安装中..."
            )
        } finally {
            disabled_btn_enabled = false
        }
    }

    /**
     * 创建卸载Lucky按钮
     */
    const btn_disabled = document.createElement('button')
    btn_disabled.textContent = "卸载Lucky"
    let ct = 0
    let tmer = null
    
    /**
     * 卸载Lucky的核心逻辑
     * @returns {Promise<void>}
     */
    const uninstallLucky = async () => {
        try {
            ToastManager.loading("正在停止Lucky服务...")
            const res = await runShellWithRoot(`
            pkill lucky
            sleep 1
            rm -rf /data/lucky
            sed -i '/lucky_android/d' /sdcard/ufi_tools_boot.sh
            `)
            
            if (!res.success) {
                throw new Error("卸载失败！")
            }
            
            ToastManager.result(
                "✅ 卸载完成",
                res.content || "Lucky已成功卸载",
                TOAST_TYPES.SUCCESS
            )
        } catch (error) {
            ToastManager.error(error.message)
        }
    }
    
    btn_disabled.onclick = async () => {
        // 权限验证
        if (!(await validateAdvancedPermission())) {
            return
        }
        
        ct++
        if (ct < 2) { 
            ToastManager.warning("⚠️ 再点一次确认卸载Lucky")
            tmer = setTimeout(() => {
                ct = 0
            }, 3000)
            return
        }
        
        await OperationManager.executeWithState(
            uninstallLucky,
            btn_disabled,
            "卸载中..."
        )
        
        ct = 0
        if (tmer) clearTimeout(tmer)
    }

    /**
     * 创建重启Lucky按钮
     */
    const btn_restart = document.createElement('button')
    btn_restart.textContent = "重启Lucky"
    
    /**
     * 重启Lucky的核心逻辑
     * @returns {Promise<void>}
     */
    const restartLucky = async () => {
        try {
            // 步骤1: 停止Lucky服务
            ToastManager.loading("正在停止Lucky服务...")
            const stopRes = await runShellWithRoot(`
            pkill lucky
            sleep 2
            `)
            
            // 步骤2: 启动Lucky服务
            ToastManager.loading("正在启动Lucky服务...")
            const startRes = await runShellWithRoot(`nohup /data/lucky/lucky_android > /dev/null 2>&1 &`, 100)
            
            // 步骤3: 验证Lucky服务状态
            ToastManager.loading("正在验证Lucky服务状态...")
            await new Promise(resolve => setTimeout(resolve, 3000))
            const checkRes = await runShellWithRoot(`
            ps | grep lucky | grep -v grep
            `)
            
            if (checkRes.success && checkRes.content && checkRes.content.includes('lucky')) {
                ToastManager.successWithLink(
                    "🔄 重启Lucky成功！<br />服务已正常运行",
                    "http://192.168.0.1:16601/",
                    "点击访问Lucky管理界面",
                    `进程信息: ${checkRes.content.trim()}`,
                    15000
                )
            } else {
                ToastManager.warning("⚠️ 重启可能失败，请检查Lucky服务状态")
            }
        } catch (error) {
            ToastManager.error(`重启失败: ${error.message}`)
        }
    }
    
    btn_restart.onclick = async () => {
        // 权限验证
        if (!(await validateAdvancedPermission())) {
            return
        }
        
        await OperationManager.executeWithState(
            restartLucky,
            btn_restart,
            "重启中..."
        )
    }

    /**
     * 创建停止Lucky按钮
     */
    const stopBtn = document.createElement('button')
    stopBtn.classList.add('btn')
    stopBtn.textContent = "停止Lucky"
    
    /**
     * 停止Lucky的核心逻辑
     * @returns {Promise<void>}
     */
    const stopLucky = async () => {
        try {
            ToastManager.loading("正在停止Lucky服务...")
            const res = await runShellWithRoot(`
            pkill lucky
            sleep 1
            `)
            
            if (!res.success) {
                throw new Error("停止失败！")
            }
            
            ToastManager.result(
                "⏹️ 停止完成",
                res.content || "Lucky服务已停止",
                TOAST_TYPES.SUCCESS
            )
        } catch (error) {
            ToastManager.error(error.message)
        }
    }
    
    stopBtn.onclick = async () => {
        // 权限验证
        if (!(await validateAdvancedPermission())) {
            return
        }
        
        await OperationManager.executeWithState(
            stopLucky,
            stopBtn,
            "停止中..."
        )
    }

    /**
     * 创建刷新网页按钮
     */
    const refresh = document.createElement('button')
    refresh.classList.add('btn')
    refresh.textContent = "刷新网页"
    refresh.onclick = () => {
       window.location.reload(true);
    }

    /**
     * 初始化Lucky插件面板
     */
    (() => {
        const mmContainer = document.querySelector('.functions-container')
        mmContainer.insertAdjacentHTML("afterend", `
<div id="IFRAME_LUCKY" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0 ;">
        <strong>🍀Lucky</strong>
        <div style="display: inline-block;" id="collapse_lucky_btn"></div>
    </div>
    <div class="collapse" id="collapse_lucky" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
        <div id="lucky_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap"></div>
            <ul class="deviceList">
<li style="padding:10px">
        <iframe id="lucky_iframe" src="http://192.168.0.1:16601/" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius: 10px;overflow: hidden;opacity: .6;"></iframe>
</li> </ul>
        </div>
    </div>
</div>
`)
        const luckyBox = document.querySelector('#lucky_action_box')
        luckyBox.appendChild(btn_enabled)
        luckyBox.appendChild(stopBtn)
        luckyBox.appendChild(btn_restart)
        luckyBox.appendChild(btn_disabled)
        luckyBox.appendChild(refresh)
        collapseGen("#collapse_lucky_btn", "#collapse_lucky", "#collapse_lucky", (e) => { })
    })()
})()
//</script>