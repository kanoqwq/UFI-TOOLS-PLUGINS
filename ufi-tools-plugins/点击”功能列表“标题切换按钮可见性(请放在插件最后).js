//<script>
//维护一个持久化存储的按钮状态列表
const btnsState = JSON.parse(localStorage.getItem('buttonsState')) || {};
const originBtons = document.querySelectorAll(".functions-container button,.functions-container select")
const init = (reRender = false) => {
    if (typeof btnsState === 'object') {
        originBtons.forEach(el => {
            const id = el.id || el.getAttribute('data-i18n') || el.textContent;
            if (Object.keys(btnsState).includes('toggle_' + id)) {
                if (reRender === false) {
                    if (el.style.display === 'none' && btnsState['toggle_' + id] === "true") return //阻止本来就不显示的按钮显示
                }
                el.style.display = btnsState['toggle_' + id] === "true" ? "" : "none"; // 隐藏按钮
            }
        });
    }
}

const toggle = (e) => {
    e.stopPropagation();
    const id = e.target.id || e.target.getAttribute('data-i18n') || e.target.textContent;
    const isActive = e.currentTarget.dataset.active === "true";
    if (isActive) {
        e.currentTarget.dataset.active = "false";
        e.currentTarget.style.backgroundColor = "";
        btnsState[id] = "false"; // 更新状态
    } else {
        e.currentTarget.dataset.active = "true";
        e.currentTarget.style.backgroundColor = "var(--dark-btn-color-active";
        btnsState[id] = "true"; // 更新状态
    }
    localStorage.setItem('buttonsState', JSON.stringify(btnsState)); // 保存状态到本地存储
    init(true)
}


const genBtns = () => Array.from(originBtons).filter(el => el.style.display !== "none")
    .map(el => {
        let el_new = el.cloneNode(true)
        if (el_new.tagName === "SELECT") {
            const btn = document.createElement("button");
            btn.classList.add('btn')
            btn.onclick = toggle
            btn.id = 'toggle_' + (el_new.id || el_new.getAttribute('data-i18n') || el_new.textContent); // 确保ID唯一
            btnsState[btn.id] = btnsState[btn.id] || "true"; // 初始化状态
            btn.dataset.active = btnsState[btn.id]
            const selectOption = el_new.querySelector("option:checked")
            const i18n = selectOption.getAttribute("data-i18n");
            btn.innerHTML = t(i18n) || selectOption.textContent;
            btn.setAttribute("data-i18n", i18n)
            el_new = btn;
        } else {
            el_new.id = 'toggle_' + (el_new.id || el_new.getAttribute('data-i18n') || el_new.textContent); // 确保ID唯一
            btnsState[el_new.id] = btnsState[el_new.id] || "true"; // 初始化状态
            el_new.dataset.active = btnsState[el_new.id]
            el_new.onclick = toggle
            el_new.style.cssText = ''
        }
        if (el_new.dataset.active === "true") {
            el_new.style.backgroundColor = "var(--dark-btn-color-active)";
        } else {
            el_new.style.backgroundColor = "";
        }
        const classList = Array.from(el_new.classList)
        classList.forEach(cls => {
            el_new.classList.remove(cls);
        })
        return el_new
    });

let buttons = genBtns()

const modal = document.createElement("div");
modal.id = "btnToggleModal";
modal.className = "modal";
modal.style.width = "90%";
modal.style.maxWidth = "500px";
modal.style.opacity = "1";
modal.style.display = "none";
const buttonToggleContainer = `
<div class="title" data-i18n="func_list">功能列表</div>
<div class="content" style="padding: 15px 4px 0 4px;display: flex;flex-wrap: wrap;gap: 10px;">
</div>
<div class="btn" style="text-align: right;">
    <button id="resetAllBtnToggle">重置</button>
    <button onclick="closeModal('#btnToggleModal')">关闭</button>
</div>
`
modal.innerHTML = buttonToggleContainer;
const content = modal.querySelector('.content');

const resetAllBtnToggle = modal.querySelector('#resetAllBtnToggle');
if (resetAllBtnToggle) {
    resetAllBtnToggle.onclick = () => {
        buttons.forEach(btn => {
            if (btn.dataset.active === "false") {
                btn.click(); // 触发点击事件来切换状态
            }
        })
        createToast(t('toast_oprate_success'))
        init()
    }
}

buttons.forEach(btn => {
    content.appendChild(btn)
})

document.querySelector('.container').appendChild(modal);



setTimeout(() => {
    document.querySelector('#collapseBtn_menu > strong').onclick = (e) => {
        e.stopPropagation()
        showModal("#btnToggleModal");
    }
    init();
}, 10);
//</script>