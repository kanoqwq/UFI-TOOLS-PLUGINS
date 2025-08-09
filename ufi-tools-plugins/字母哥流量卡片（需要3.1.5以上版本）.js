<script>
(()=>{
  let cardNumber = '你的卡号'
  let getCornerText= '字母卡'
  const cacheDuration = 60;
  const mainServerFailKey = 'main_server_fail_time_${cardNumber}';
  const mainUrl = `${KANO_baseURL}/proxy/--http://k.2bcnm.top/proxy?cardNo=${cardNumber}`;
  const cacheKey = `zm_traffic_card_cache_${cardNumber}`;
  const cacheTimeKey = `zm_traffic_card_cache_time_${cardNumber}`;
  const now = Math.floor(Date.now() / 1000);
  const lastFetch = parseInt(localStorage.getItem(cacheTimeKey) || '0');
  const cachedData = localStorage.getItem(cacheKey);
  const mainServerFailTime = parseInt(localStorage.getItem(mainServerFailKey) || '0');
  const isMainServerFailedRecently = now - mainServerFailTime < 86400;
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('网络请求失败');
      return await res.json();
    } catch (err) {
      console.error(`请求${url}失败:`, err);
      return null;
    }
  };
  const fetchBackupData = async () => {
    try {
      const formdata = new FormData();
      formdata.append('cardNo', cardNumber);
      const response = await fetch("/api/proxy/--http://cmp.xinghaiwaimai.com/java/front/cmpCard/cardLogin", {
        method: 'POST',
        body: formdata
      });
      if (!response.ok) throw new Error('备用接口请求失败');
      return await response.json();
    } catch (err) {
      console.error('备用接口POST请求失败:', err);
      return null;
    }
  };
  const showData = (data) => {
    const usedData = data.data.card.voidUsedFlow;
    const totalData = data.data.card.voidTotalFlow;
    const expireDate = data.data.card.becomedueDatetime.split('T')[0] || '未知';
    const statusMsg = data.data.card.statusMsg;
    const groupOperator = data.data.card.groupOperator || 0;
    const getOperatorName = (groupOperator) => {
        switch(groupOperator) {
            case 1: return '中国电信';
            case 2: return '中国联通';
            case 3: return '中国移动';
        }
    };
    const operatorName = getOperatorName(groupOperator);
    const dotColor = statusMsg === '已激活' ? '#00ff00' : '#ff0000';
    const netCard = document.querySelector('.net-card');
    const el = document.createElement('div')
    const el_title = document.createElement('div')
    el.style.marginBottom = '0'
    el.style.gridColumn = '1/-1'
    el.style.marginLeft = '0px'
    el.style.marginRight = '0px'
    el_title.innerHTML = `<div style="width:10px; height:10px; border-radius:50%; background:${dotColor};"></div>`;
    el_title.style.position = 'absolute'
    el_title.style.right = '6px'
    el_title.style.top = '6px'
    el.style.width = '200px'
    el.classList.add('wlk')
    el.classList.add('statusCard')
    el.classList.add('net-card')
    el.style.position = 'relative'
    el.style.padding = "8px"
    el.style.fontSize = '12px'
    el.style.boxSizing = 'border-box'
    el.style.height = '80px'
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
        const r = Math.floor(200 * ratio);
        const g = 200;
        const b = 0;
        return `rgb(${r},${g},${b})`;
      } else {
        const ratio = (percent - 80) / 20;
        const r = 200;
        const g = Math.floor(200 * (1 - ratio));
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
      运营商: ${operatorName}
      <div style="width:100%; background:transparent; border:1px solid #eee; border-radius:5px; margin:5px 0; height:20px; position:relative;">
          <div class="progress-bar" style="width:0%; background:${getProgressColor(0)}; height:100%; border-radius:5px;"></div>
          <div style="position:absolute; top:0; left:5px; line-height:20px;">${usedFlowText}GB</div>
          <div class="progress-text" style="position:absolute; top:0; width:100%; text-align:center; line-height:20px;">0%</div>
          <div style="position:absolute; top:0; right:5px; line-height:20px;">${totalFlowText}GB</div>
      </div>
      到期时间：${expireDate.split(' ')[0]}
      <div style="position:absolute; right:6px; bottom:6px; font-size:12px; color:white;">${getCornerText}</div>
    `;
    el.appendChild(el_title);
    netCard?.parentElement?.appendChild(el);
      setTimeout(() => animateProgress(el, progress), 100);
  };
  function handleResponse(data) {
    if (data.code === 0 && data.msg === "卡号不存在") {
      const netCard = document.querySelector('.net-card');
      const el = document.createElement('div');
      el.innerHTML = '卡号不存在';
      el.style.color = 'red';
      el.style.padding = '8px';
      netCard?.parentElement?.appendChild(el);
      return;
    }
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(cacheTimeKey, now.toString());
    showData(data);
  }

  if (cachedData && now - lastFetch < cacheDuration) {
    const parsed = JSON.parse(cachedData);
    showData(parsed);
  } else {
    if (isMainServerFailedRecently) {
      fetchBackupData().then(backupData => {
        if (backupData) {
          handleResponse(backupData);
          return;
        }
        const netCard = document.querySelector('.net-card');
        const el = document.createElement('div');
        el.innerHTML = '主备访问都失败（请检查你的软件版本是否为3.1.5+）';
        el.style.color = 'red';
        el.style.padding = '8px';
        netCard?.parentElement?.appendChild(el);
      });
    } else {
      fetchData(mainUrl).then(async mainData => {
        if (mainData) {
          localStorage.removeItem(mainServerFailKey);
          handleResponse(mainData);
          return;
        }
        localStorage.setItem(mainServerFailKey, now.toString());
        const backupData = await fetchBackupData();
        if (backupData) {
          handleResponse(backupData);
          return;
        }
        const netCard = document.querySelector('.net-card');
        const el = document.createElement('div');
        el.innerHTML = '主地址及备用接口均无法访问';
        el.style.color = 'red';
        el.style.padding = '8px';
        netCard?.parentElement?.appendChild(el);
      });
    }
  }
})();
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
    height: 80px !important;
}
</style>