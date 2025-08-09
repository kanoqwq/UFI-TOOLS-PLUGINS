<script>
(() => {
    const container = document.querySelector('.functions-container');
    container.insertAdjacentHTML("afterend", `
<div id="NETWORK_QUALITY" style="width: 100%; margin-top: 10px;">
    <div class="title" style="margin: 6px 0; color: #fff; display: flex; align-items: center; gap: 15px;">
        <strong style="color:#fff;">🌐 网络质量检测</strong>
        <div style="display: inline-block;" id="collapse_btn_network"></div>
        <button id="single_test_btn" class="btn" style="margin-left: 10px; padding: 4px 12px; font-size: 12px;">单次检测</button>
        <button id="toggle_monitor_btn" class="btn" style="margin-left: 5px; padding: 4px 12px; font-size: 12px; background: #4CAF50;">监控中</button>
    </div>
    <div class="collapse" id="collapse_network" data-name="close" style="height: 0px; overflow: hidden;">
        <div class="collapse_box">
            <ul class="deviceList" style="margin:0;padding:0;list-style:none;">
                <li style="padding:15px; margin-bottom: 15px;">
                    <div style="font-weight:bold;margin-bottom:12px;color:#fff;font-size:14px">华为云连通性</div>
                    <div style="margin-bottom:8px;">
                        <div style="display:flex;gap:12px;margin-bottom:6px;align-items:center;">
                            <span style="color:#fff;">ICMP延迟: <span id="ping1_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP延迟: <span id="ping1_http" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">ICMP丢包: <span id="loss1_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP丢包: <span id="loss1_http" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">ICMP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                            <div id="status_dots_1_icmp" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_1_icmp" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">HTTP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div id="status_dots_1_http" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_1_http" style="color:#4CAF50;">-</span></span>
                        </div>
                    </div>
                </li>
                <li style="padding:15px; margin-bottom: 15px;">
                    <div style="font-weight:bold;margin-bottom:12px;color:#fff;font-size:14px">Google连通性</div>
                    <div style="margin-bottom:8px;">
                        <div style="display:flex;gap:12px;margin-bottom:6px;align-items:center;">
                            <span style="color:#fff;">ICMP延迟: <span id="ping2_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP延迟: <span id="ping2_http" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">ICMP丢包: <span id="loss2_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP丢包: <span id="loss2_http" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">ICMP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                            <div id="status_dots_2_icmp" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_2_icmp" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">HTTP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div id="status_dots_2_http" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_2_http" style="color:#4CAF50;">-</span></span>
                        </div>
                    </div>
                </li>
                <li style="padding:15px; margin-bottom: 15px;">
                    <div style="font-weight:bold;margin-bottom:12px;color:#fff;font-size:14px">CloudFlare连通性</div>
                    <div style="margin-bottom:8px;">
                        <div style="display:flex;gap:12px;margin-bottom:6px;align-items:center;">
                            <span style="color:#fff;">ICMP延迟: <span id="ping3_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP延迟: <span id="ping3_http" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">ICMP丢包: <span id="loss3_icmp" style="color:#4CAF50;">-</span></span>
                            <span style="color:#fff;">HTTP丢包: <span id="loss3_http" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">ICMP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                            <div id="status_dots_3_icmp" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_3_icmp" style="color:#4CAF50;">-</span></span>
                        </div>
                        <div style="margin-bottom:4px;"><span style="color:#ccc;font-size:11px;">HTTP状态:</span></div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div id="status_dots_3_http" style="display: flex; gap: 2px; align-items: center; min-width: 140px; height: 12px; overflow: hidden;"></div>
                            <span style="color:#ccc;font-size:11px;">平均: <span id="avg_3_http" style="color:#4CAF50;">-</span></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
`);

    // 配置常量 - 统一管理所有配置项
    const CONFIG = {
        MAX_DOTS: 20,
        MAX_HISTORY: 50,
        MONITOR_INTERVAL: 10000,
        PING_TIMEOUT: 3000,
        COLORS: {
            SUCCESS: '#4CAF50',
            WARNING: '#FF9800', 
            ERROR: '#f44336',
            PENDING: '#666'
        },
        THRESHOLDS: {
            ICMP: { GOOD: 100, WARNING: 300 },
            HTTP: { GOOD: 200, WARNING: 500 }
        }
    };

    // 网络质量检测数据 - 优化数据结构
    const networkData = {
        targets: [
            { name: "华为云", host: "connectivitycheck.platform.hicloud.com", httpUrl: "http://connectivitycheck.platform.hicloud.com/generate_204", id: 1 },
            { name: "Google", host: "www.gstatic.com", httpUrl: "http://www.gstatic.com/generate_204", id: 2 },
            { name: "CloudFlare", host: "cp.cloudflare.com", httpUrl: "http://cp.cloudflare.com/", id: 3 }
        ],
        history: new Map(),
        monitoring: true,
        monitorInterval: null,
        // 缓存DOM元素以减少重复查询
        elements: new Map()
    };

    // 初始化历史数据结构
    networkData.targets.forEach(target => {
        networkData.history.set(`${target.id}_icmp`, []);
        networkData.history.set(`${target.id}_http`, []);
    });

    /**
     * 简化的日志函数，删除toast提示节省性能
     * @param {string} message - 日志消息
     */
    const showToastLog = (message) => console.log(`[网络检测] ${message}`);

    /**
     * ICMP Ping 函数 (服务器端) - 优化错误处理和性能
     * 通过系统ping命令进行ICMP延迟测试
     * @param {string} host - 目标主机地址
     * @returns {Promise<{success: boolean, time: number|null}>} 检测结果
     */
    const pingICMP = async (host) => {
        try {
            const timeout = CONFIG.PING_TIMEOUT / 1000;
            const result = await runShellWithRoot(`ping -c 1 -W ${timeout} ${host}`);
            
            if (result?.content) {
                const timeMatch = result.content.match(/time=([0-9.]+)\s*ms/);
                if (timeMatch) {
                    return { success: true, time: parseFloat(timeMatch[1]) };
                }
            }
            return { success: false, time: null };
        } catch {
            return { success: false, time: null };
        }
    };

    /**
     * 更新历史数据 - 抽取公共逻辑
     * @param {string} historyKey - 历史数据键
     * @param {Object} result - 检测结果
     */
    const updateHistory = (historyKey, result) => {
        const history = networkData.history.get(historyKey);
        history.push(result);
        if (history.length > CONFIG.MAX_HISTORY) {
            history.shift();
        }
    };

    /**
     * 执行单个目标的网络检测 - 优化并行处理和数据更新
     * @param {Object} target - 检测目标对象
     */
    const testTarget = async (target) => {
        // 并行执行ICMP和HTTP检测以提高效率
        const [icmpResult, httpResult] = await Promise.all([
            pingICMP(target.host),
            pingHTTP(target.httpUrl)
        ]);
        
        // 批量更新历史数据
        updateHistory(`${target.id}_icmp`, icmpResult);
        updateHistory(`${target.id}_http`, httpResult);
        
        // 批量更新UI显示
        updateTargetDisplay(target.id, icmpResult, httpResult);
        updateStatusDots(target.id, 'icmp', icmpResult);
        updateStatusDots(target.id, 'http', httpResult);
    };
    
    /**
     * 获取延迟对应的颜色 - 使用配置化阈值
     * @param {number} time - 延迟时间
     * @param {string} type - 类型 ('icmp' 或 'http')
     * @returns {string} 颜色值
     */
    const getLatencyColor = (time, type) => {
        const thresholds = CONFIG.THRESHOLDS[type.toUpperCase()];
        if (time < thresholds.GOOD) return CONFIG.COLORS.SUCCESS;
        if (time < thresholds.WARNING) return CONFIG.COLORS.WARNING;
        return CONFIG.COLORS.ERROR;
    };

    /**
     * 获取丢包率对应的颜色 - 简化逻辑
     * @param {number} lossRate - 丢包率
     * @returns {string} 颜色值
     */
    const getLossColor = (lossRate) => {
        if (lossRate === 0) return CONFIG.COLORS.SUCCESS;
        if (lossRate < 10) return CONFIG.COLORS.WARNING;
        return CONFIG.COLORS.ERROR;
    };

    /**
     * 获取或缓存DOM元素 - 减少重复查询
     * @param {string} id - 元素ID
     * @returns {HTMLElement|null} DOM元素
     */
    const getElement = (id) => {
        if (!networkData.elements.has(id)) {
            networkData.elements.set(id, document.getElementById(id));
        }
        return networkData.elements.get(id);
    };

    /**
     * 计算并更新平均延迟显示 - 优化DOM操作和计算
     * @param {number} targetId - 目标ID
     * @param {string} type - 类型 ('icmp' 或 'http')
     */
    const updateAverageDisplay = (targetId, type) => {
        const historyKey = `${targetId}_${type}`;
        const history = networkData.history.get(historyKey);
        const avgElement = getElement(`avg_${targetId}_${type}`);
        
        if (!avgElement || !history?.length) return;
        
        const successfulPings = history.filter(r => r.success && r.time !== null);
        if (successfulPings.length > 0) {
            const avgTime = successfulPings.reduce((sum, r) => sum + r.time, 0) / successfulPings.length;
            avgElement.textContent = `${avgTime.toFixed(1)}ms`;
            avgElement.style.color = getLatencyColor(avgTime, type);
        } else {
            avgElement.textContent = '无数据';
            avgElement.style.color = CONFIG.COLORS.ERROR;
        }
    };

    /**
     * 更新延迟显示 - 抽取公共逻辑
     * @param {number} targetId - 目标ID
     * @param {string} type - 类型
     * @param {Object} result - 检测结果
     */
    const updateLatencyDisplay = (targetId, type, result) => {
        const element = getElement(`ping${targetId}_${type}`);
        if (!element) return;
        
        if (result.success) {
            element.textContent = `${result.time.toFixed(1)}ms`;
            element.style.color = getLatencyColor(result.time, type);
        } else {
            element.textContent = '超时';
            element.style.color = CONFIG.COLORS.ERROR;
        }
    };

    /**
     * 更新丢包率显示 - 抽取公共逻辑
     * @param {number} targetId - 目标ID
     * @param {string} type - 类型
     */
    const updateLossDisplay = (targetId, type) => {
        const historyKey = `${targetId}_${type}`;
        const history = networkData.history.get(historyKey);
        const element = getElement(`loss${targetId}_${type}`);
        
        if (!element || !history?.length) return;
        
        const lossRate = ((history.filter(r => !r.success).length / history.length) * 100).toFixed(1);
        element.textContent = `${lossRate}%`;
        element.style.color = getLossColor(parseFloat(lossRate));
    };

    /**
     * 更新目标的界面显示数据 - 优化DOM操作和逻辑复用
     * @param {number} targetId - 目标ID
     * @param {Object} icmpResult - ICMP检测结果
     * @param {Object} httpResult - HTTP检测结果
     */
    const updateTargetDisplay = (targetId, icmpResult, httpResult) => {
        // 批量更新延迟显示
        updateLatencyDisplay(targetId, 'icmp', icmpResult);
        updateLatencyDisplay(targetId, 'http', httpResult);
        
        // 批量更新丢包率显示
        updateLossDisplay(targetId, 'icmp');
        updateLossDisplay(targetId, 'http');
        
        // 批量更新平均延迟显示
        updateAverageDisplay(targetId, 'icmp');
        updateAverageDisplay(targetId, 'http');
    };
    
    /**
     * HTTP Ping 函数 (客户端) - 优化超时处理和性能测量
     * @param {string} url - 检测服务的URL
     * @returns {Promise<{success: boolean, time: number|null}>} 检测结果
     */
    const pingHTTP = async (url) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.PING_TIMEOUT);
        
        try {
            const startTime = performance.now();
            
            await fetch(url, {
                method: 'GET',
                mode: 'no-cors',
                cache: 'no-cache',
                signal: controller.signal
            });
            
            const latency = performance.now() - startTime;
            return { success: true, time: latency };
        } catch {
            return { success: false, time: null };
        } finally {
            clearTimeout(timeoutId);
        }
    };

    /**
     * 创建状态点元素 - 抽取公共逻辑
     * @param {string} backgroundColor - 背景颜色
     * @param {string} title - 提示文本
     * @returns {HTMLElement} 状态点元素
     */
    const createStatusDot = (backgroundColor = CONFIG.COLORS.PENDING, title = '未检测') => {
        const dot = document.createElement('div');
        dot.className = 'status-dot';
        dot.style.cssText = `
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${backgroundColor};
            flex-shrink: 0;
            margin-right: 1px;
        `;
        dot.title = title;
        return dot;
    };

    /**
     * 初始化状态点图 - 优化DOM创建
     * @param {number} targetId - 目标ID
     * @param {string} type - 检测类型
     */
    const initializeStatusDots = (targetId, type) => {
        const dotsContainer = getElement(`status_dots_${targetId}_${type}`);
        if (!dotsContainer) return;
        
        // 使用文档片段优化DOM操作
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < CONFIG.MAX_DOTS; i++) {
            fragment.appendChild(createStatusDot());
        }
        
        dotsContainer.innerHTML = '';
        dotsContainer.appendChild(fragment);
    };

    /**
     * 更新状态点图显示 - 优化查找和更新逻辑
     * @param {number} targetId - 目标ID
     * @param {string} type - 检测类型
     * @param {Object} result - 检测结果
     */
    const updateStatusDots = (targetId, type, result) => {
        const dotsContainer = getElement(`status_dots_${targetId}_${type}`);
        if (!dotsContainer) return;
        
        const dots = dotsContainer.children;
        let targetDot = null;
        
        // 查找第一个未检测点（灰色）
        for (const dot of dots) {
            const bgColor = dot.style.backgroundColor;
            if (bgColor === 'rgb(102, 102, 102)' || bgColor === CONFIG.COLORS.PENDING) {
                targetDot = dot;
                break;
            }
        }
        
        // 如果没有未检测点，移除第一个并添加新点
        if (!targetDot) {
            dotsContainer.removeChild(dots[0]);
            targetDot = createStatusDot();
            dotsContainer.appendChild(targetDot);
        }
        
        // 更新点的状态
        if (result.success) {
            targetDot.style.backgroundColor = getLatencyColor(result.time, type);
            targetDot.title = `${result.time.toFixed(1)}ms`;
        } else {
            targetDot.style.backgroundColor = CONFIG.COLORS.ERROR;
            targetDot.title = '超时';
        }
        
        // 滚动到最新位置
        dotsContainer.scrollLeft = dotsContainer.scrollWidth;
    };







    /**
     * 执行所有目标的网络检测 - 优化并行处理
     */
    const performNetworkTest = async () => {
        await Promise.all(networkData.targets.map(testTarget));
    };
    
    /**
     * 更新监控按钮状态 - 抽取公共逻辑
     * @param {boolean} isMonitoring - 是否正在监控
     */
    const updateMonitorButton = (isMonitoring) => {
        const toggleBtn = getElement('toggle_monitor_btn');
        if (!toggleBtn) return;
        
        toggleBtn.textContent = isMonitoring ? '监控中' : '已停止';
        toggleBtn.style.background = isMonitoring ? CONFIG.COLORS.SUCCESS : CONFIG.COLORS.ERROR;
    };
    
    /**
     * 开始监控 - 优化状态管理
     */
    const startMonitoring = () => {
        if (networkData.monitorInterval) {
            clearInterval(networkData.monitorInterval);
        }
        
        networkData.monitoring = true;
        networkData.monitorInterval = setInterval(performNetworkTest, CONFIG.MONITOR_INTERVAL);
        updateMonitorButton(true);
        
        // 立即执行一次检测
        performNetworkTest();
    };
    
    /**
     * 停止监控 - 优化状态管理
     */
    const stopMonitoring = () => {
        if (networkData.monitorInterval) {
            clearInterval(networkData.monitorInterval);
            networkData.monitorInterval = null;
        }
        
        networkData.monitoring = false;
        updateMonitorButton(false);
    };



    /**
     * 初始化事件监听器 - 优化事件绑定
     */
    const initEventListeners = () => {
        const singleTestBtn = getElement('single_test_btn');
        const toggleMonitorBtn = getElement('toggle_monitor_btn');
        
        singleTestBtn?.addEventListener('click', performNetworkTest);
        toggleMonitorBtn?.addEventListener('click', () => {
            networkData.monitoring ? stopMonitoring() : startMonitoring();
        });
    };

    /**
     * 初始化插件 - 优化初始化流程
     */
    const init = () => {
        // 批量初始化状态点图
        networkData.targets.forEach(target => {
            ['icmp', 'http'].forEach(type => {
                initializeStatusDots(target.id, type);
            });
        });
        
        // 初始化事件监听器
        initEventListeners();
        
        // 延迟启动监控
        setTimeout(startMonitoring, 1000);
    };

    // 初始化折叠面板和插件
    collapseGen("#collapse_btn_network", "#collapse_network", "#collapse_network", () => {});
    setTimeout(init, 300);
})();
</script>