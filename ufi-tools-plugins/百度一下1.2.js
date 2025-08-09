<script>
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
        success: (message, duration = 3000) => {
            createToast(message, TOAST_TYPES.SUCCESS, duration)
        },
        error: (message, duration = 5000) => {
            createToast(message, TOAST_TYPES.ERROR, duration)
        },
        warning: (message, duration = 4000) => {
            createToast(message, TOAST_TYPES.WARNING, duration)
        },
        info: (message, duration = 3000) => {
            createToast(message, TOAST_TYPES.INFO, duration)
        },
        loading: (message) => {
            createToast(`⏳ ${message}`, TOAST_TYPES.INFO, 2000)
        }
    }

    /**
     * 操作状态管理器
     */
    const OperationManager = {
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
     * 格式化URL，确保包含协议头
     * @param {string} url - 输入的URL
     * @returns {string} 格式化后的URL
     */
    const formatURL = (url) => {
        if (!url) return 'https://www.baidu.com'
        url = url.trim()
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url
        }
        return url
    }

    /**
     * 创建网页浏览插件面板
     */
    (() => {
        // 创建面板HTML结构
        const mmContainer = document.querySelector('.functions-container')
        mmContainer.insertAdjacentHTML("afterend", `
            <div id="IFRAME_BROWSER" style="width: 100%; margin-top: 10px;">
                <div class="title" style="margin: 6px 0;">
                    <strong>🌐 网页浏览器</strong>
                    <div style="display: inline-block;" id="collapse_browser_btn"></div>
                </div>
                <div class="collapse" id="collapse_browser" data-name="close" style="height: 0px; overflow: hidden;">
                    <div class="collapse_box">
                        <div id="browser_action_box" style="margin-bottom:10px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
                            <input type="text" id="url_input" placeholder="输入网址（如 www.baidu.com）" style="flex:1;padding:8px;border-radius:5px;border:1px solid #ccc;min-width:200px;" value="https://www.baidu.com">
                            <button id="load_url_btn" class="btn">加载</button>
                            <button id="search_btn" class="btn">百度搜索</button>
                            <button id="refresh_btn" class="btn">刷新</button>
                        </div>
                        <ul class="deviceList">
                            <li style="padding:10px">
                                <iframe id="browser_iframe" src="https://www.baidu.com" style="border:none;padding:0;margin:0;width:100%;height:500px;border-radius:10px;overflow:hidden;opacity:1;"></iframe>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `)

        // 获取DOM元素
        const urlInput = document.querySelector('#url_input')
        const loadUrlBtn = document.querySelector('#load_url_btn')
        const searchBtn = document.querySelector('#search_btn')
        const refreshBtn = document.querySelector('#refresh_btn')
        const iframe = document.querySelector('#browser_iframe')

        // 跟踪iframe加载状态
        let isIframeLoaded = false
        iframe.addEventListener('load', () => {
            isIframeLoaded = true
        })
        iframe.addEventListener('error', () => {
            isIframeLoaded = false
            ToastManager.error("网页加载失败！")
        })

        /**
         * 加载URL到iframe
         */
        const loadURL = async () => {
            const url = formatURL(urlInput.value)
            try {
                ToastManager.loading("正在加载网页...")
                iframe.src = url
                urlInput.value = url
                ToastManager.success("网页加载成功！")
            } catch (error) {
                ToastManager.error("网页加载失败！")
            }
        }

        /**
         * 执行百度搜索
         */
        const performSearch = async () => {
            const query = urlInput.value.trim()
            if (!query) {
                ToastManager.warning("请输入搜索内容或网址！")
                return
            }
            try {
                ToastManager.loading("正在搜索...")
                const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`
                iframe.src = searchUrl
                urlInput.value = searchUrl
                ToastManager.success("搜索完成！")
            } catch (error) {
                ToastManager.error("搜索失败！")
            }
        }

        /**
         * 刷新网页
         */
        const refreshPage = async () => {
            try {
                ToastManager.loading("正在刷新网页...")
                if (!iframe.src || iframe.src === 'about:blank') {
                    throw new Error("iframe没有有效的URL")
                }
                if (!isIframeLoaded) {
                    throw new Error("网页尚未加载完成")
                }
                iframe.src = iframe.src // 通过重设src刷新，避免跨域问题
                ToastManager.success("网页刷新成功！")
            } catch (error) {
                console.error("刷新失败:", error.message)
                ToastManager.error(`网页刷新失败: ${error.message}`)
            }
        }

        // 防抖标志
        let isRefreshing = false

        // 绑定按钮事件
        loadUrlBtn.onclick = async () => {
            await OperationManager.executeWithState(loadURL, loadUrlBtn, "加载中...")
        }

        searchBtn.onclick = async () => {
            await OperationManager.executeWithState(performSearch, searchBtn, "搜索中...")
        }

        refreshBtn.onclick = async () => {
            if (isRefreshing) return
            isRefreshing = true
            try {
                await OperationManager.executeWithState(refreshPage, refreshBtn, "刷新中...")
            } finally {
                isRefreshing = false
            }
        }

        // 回车键触发加载或搜索
        urlInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                if (urlInput.value.includes('.')) {
                    await OperationManager.executeWithState(loadURL, loadUrlBtn, "加载中...")
                } else {
                    await OperationManager.executeWithState(performSearch, searchBtn, "搜索中...")
                }
            }
        })

        // 初始化折叠面板
        collapseGen("#collapse_browser_btn", "#collapse_browser", "#collapse_browser", () => {})
    })()
})()
</script>