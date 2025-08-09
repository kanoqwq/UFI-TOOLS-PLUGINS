<script>
(()=>{
  let cardNumber = '你的卡号'
  const cacheDuration = 60; // 缓存设置 默认60秒
  const cacheKey = `xj_traffic_cache_${cardNumber}`;
  const cacheTimeKey = `xj_cache_time_${cardNumber}`;


  const now = Math.floor(Date.now() / 1000);
  const lastFetch = parseInt(localStorage.getItem(cacheTimeKey) || '0');
  const cachedData = localStorage.getItem(cacheKey);

  const fetchData = async () => {
    try {
      const res = await fetch(`${KANO_baseURL}/proxy/--http://xj.iot998.cn/app/simCard/phoneSimCard?card=${cardNumber}`);
      return await res.json();
    } catch (err) {
      console.error('网络请求失败:', err);
      return null;
    }
  };

  const showData = (data) => {
    if(data.code === 10 && data.msg === "卡号不存在") {
      const netCard = document.querySelector('.net-card');
      const el = document.createElement('div')
      el.innerHTML = '卡号填写错误或未填写'
      el.style.color = 'red'
      el.style.padding = '8px'
      netCard?.parentElement?.appendChild(el)
      return
    }
    const cardData = data.data;
    const usedData = cardData.consumeFlow;
    const totalData = cardData.sumFlow;
    const expireDate = cardData.mealEndTime;
    const statusMsg = cardData.state === 0 ? '正常' : '停机';
    const name = cardData.name;
    const netCard = document.querySelector('.net-card');
    const el = document.createElement('div')
    const el_title = document.createElement('div')
    el.style.marginBottom = '0'
    el.style.gridColumn = '1/-1'
    el.style.marginLeft = '0px'
    el.style.marginRight = '0px'
    el_title.innerHTML = statusMsg
    el_title.style.position = 'absolute'
    el_title.style.right = '6px'
    el_title.style.top = '6px'
    el.style.width = '200px'
    el.classList.add('wlk')
    el.classList.add('statusCard')
    el.classList.add('net-card')
    el.style.position = 'relative'
  el.style.padding = "6px 8px 8px 8px"
    el.style.fontSize = '12px'
    el.style.boxSizing = 'border-box'
    el.style.height = '60px'
    const progress = Math.min(Number(usedData)/Number(totalData)*100, 100).toFixed(2);
    const formatFlow = (flow) => {
        const num = Number(flow)/1024;
        return num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);
    };
    const usedFlowText = formatFlow(usedData);
    const totalFlowText = formatFlow(totalData);
    const getProgressColor = (percent) => {
      if(percent <= 80) {
        const ratio = percent / 80;
        const r = Math.floor(255 * ratio);
        const g = 255;
        const b = 0;
        return `rgb(${r},${g},${b})`;
      } else {
        const ratio = (percent - 80) / 20;
        const r = 255;
        const g = Math.floor(255 * (1 - ratio));
        const b = 0;
        return `rgb(${r},${g},${b})`;
      }
    };
    const animateProgress = (element, targetProgress) => {
      let startTime = null;
      const duration = 1000;
      const progressBar = element.querySelector('.progress-bar');
      const progressText = element.querySelector('.progress-text');
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentProgress = progress * targetProgress;
        
        progressBar.style.width = `${currentProgress}%`;
        progressBar.style.background = getProgressColor(currentProgress);
        progressText.textContent = `${currentProgress.toFixed(2)}%`;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };
    el.innerHTML = `
    运营商: ${name}
    <div style="width:100%; background:transparent; border:1px solid #eee; border-radius:5px; margin:5px 0; height:20px; position:relative;">
        <div class="progress-bar" style="width:0%; background:${getProgressColor(0)}; height:100%; border-radius:5px;"></div>
        <div style="position:absolute; top:0; left:5px; line-height:20px;">${usedFlowText}GB</div>
        <div class="progress-text" style="position:absolute; top:0; width:100%; text-align:center; line-height:20px;">0%</div>
        <div style="position:absolute; top:0; right:5px; line-height:20px;">${totalFlowText}GB</div>
    </div>
    到期时间：${expireDate ? expireDate.split(' ')[0] : '未知'}`;
    el.appendChild(el_title);
    netCard?.parentElement?.appendChild(el);
    setTimeout(() => animateProgress(el, progress), 100);
  }
  // 缓存检查逻辑：优先使用有效缓存
  if (cachedData && now - lastFetch < cacheDuration) {
    showData(JSON.parse(cachedData));
  } else {
    fetchData().then(data => {
      if (data) {
        // 成功获取数据后更新缓存
        localStorage.setItem(cacheKey, JSON.stringify(data));
        localStorage.setItem(cacheTimeKey, now.toString());
        showData(data);
      }
    });
  }
})()
</script>
<style>
.statusCard{box-sizing:border-box}
@media (max-width: 650px) {
    .wlk {
        margin-left:3px !important;
        margin-right:3px !important;
        height: 80px !important;
    }
}

.wlk.statusCard {
    height: 80px !important;
}

.cpu-card {
    height: 60px;
}

.chart.statusCard {
    max-width: 200px !important;
    height: 80px !important;
}
</style>