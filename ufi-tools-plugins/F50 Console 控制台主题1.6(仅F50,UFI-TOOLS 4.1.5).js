<style>
/* Boot curtain: plain page background until the console shell exists. */
html.f50-booting {background:#f5f6f8;}
html.f50-booting[data-f50-theme=dark] {background:#15181d;}
html.f50-booting body {visibility:hidden;background:transparent!important;}
/* F50 Console — local, reversible UFI-TOOLS theme */
html.f50-console {
  --f-bg:#f5f6f8; --f-panel:#fff; --f-text:#202631; --f-muted:#667085;
  --f-border:#e5e8ed; --f-blue:#006fff; --f-selected:#edf4ff; --f-green:#17845b;
  --f-button-bg:oklch(0.546504 0.216293 259.42166); --f-button-text:#fff;
  --f-button-hover:color-mix(in srgb,var(--f-button-bg) 88%,black);
  --f-button-active:color-mix(in srgb,var(--f-button-bg) 78%,black);
  --dark-text-color:var(--f-text)!important; --dark-bg-color:var(--f-panel)!important;
  --dark-bg-color-transparent:var(--f-panel)!important; --dark-bgi-color:var(--f-panel)!important;
  --dark-card-bg:var(--f-panel)!important; --dark-tag-color:var(--f-bg)!important;
  --dark-tag-color-active:var(--f-selected)!important; --dark-btn-color:var(--f-bg)!important;
  --dark-btn-color-active:var(--f-button-bg)!important; --dark-title-color:var(--f-blue)!important;
  --dark-btn-disabled-color:#e5e8ed!important; --blur-rate:0px!important; color-scheme:light;
}
html.f50-console[data-f50-theme=dark] {
  --f-bg:#15181d; --f-panel:#1e2229; --f-text:#e9edf4; --f-muted:#9ba6b6;
  --f-border:#303640; --f-blue:#579bff; --f-selected:#25364e; --f-green:#55c596;
  --dark-btn-disabled-color:#343b45!important; color-scheme:dark;
}

/* Login: compact hierarchy, field-specific guidance, shared input/reveal surface. */
.f50-console #tokenModal .f50-login-dialog {width:min(440px,calc(100vw - 32px))!important;padding:24px!important;border-radius:12px!important;text-align:left;}
.f50-console #tokenModal .modal>.title:first-child {align-items:center;gap:16px;font-size:22px!important;font-weight:600;line-height:1.4;margin:0!important;}
.f50-console #tokenModal .f50-login-help {display:grid;place-items:center;width:36px;height:36px;min-height:36px;padding:8px!important;border:0!important;border-radius:6px!important;background:transparent;color:var(--f-muted);flex-shrink:0;}
.f50-console #tokenModal .f50-login-help svg {width:20px;height:20px;}
.f50-console #tokenModal .f50-login-subtitle {font-size:13px;color:var(--f-muted);line-height:1.6;margin:4px 0 16px;}
.f50-console #tokenModal .f50-login-legacy-notes {display:none!important;}
.f50-console #tokenModal form.content {display:flex!important;align-items:stretch!important;gap:16px;padding:0!important;overflow:visible!important;max-height:none!important;}
.f50-console #tokenModal :is(.f50-login-method,.f50-login-field) {display:flex;flex-direction:column;gap:6px;min-width:0;}
.f50-console #tokenModal :is(.f50-login-method>label,#TOKEN_LABEL,#token_div_label2) {margin:0!important;font-size:13px!important;line-height:20px;font-weight:500;color:var(--f-text);align-self:stretch!important;}
.f50-console #tokenModal .f50-login-method-row {gap:8px;align-items:stretch;min-width:0;}
.f50-console #tokenModal #login_method {flex:1;min-width:0;height:44px;min-height:44px;font-size:14px!important;}
.f50-console #tokenModal [data-i18n=no_pass_login_btn] {height:44px;margin:0!important;padding:10px 14px!important;font-size:13px!important;white-space:nowrap;}
.f50-console #tokenModal .f50-login-input {position:relative;gap:0!important;margin:0!important;min-width:0;}
.f50-console #tokenModal :is(#TOKEN,#PWDINPUT) {width:100%!important;min-width:0;height:44px!important;min-height:44px!important;font-size:14px!important;line-height:22px;padding:10px 48px 10px 12px!important;border-radius:7px!important;background:var(--f-panel)!important;transition:border-color 140ms ease;}
.f50-console #tokenModal :is(#TOKEN,#PWDINPUT)::placeholder {color:var(--f-muted);opacity:1;}
.f50-console #tokenModal :is(#TOKEN,#PWDINPUT):focus-visible {border-color:var(--f-blue)!important;outline-offset:2px;}
.f50-console #tokenModal .f50-login-input>button {position:absolute;inset:1px 1px 1px auto;width:42px;min-height:0;padding:0!important;margin:0!important;border:0!important;background:transparent!important;color:var(--f-muted)!important;border-radius:6px!important;}
.f50-console #tokenModal .f50-login-input>button svg {width:18px;height:18px;stroke-width:1.6;}
.f50-console #tokenModal .f50-login-hint {display:block;font-size:12px;font-weight:400;line-height:1.6;color:var(--f-muted);}
.f50-console #tokenModal .f50-login-remember {align-self:flex-start!important;display:flex!important;align-items:center;justify-content:flex-start!important;gap:8px;font-size:13px!important;line-height:20px;min-height:28px;margin:-4px 0 0!important;color:var(--f-muted);cursor:pointer;}
.f50-console #tokenModal #loginRememberMe {width:16px;height:16px;min-height:0;margin:0!important;flex-shrink:0;}
.f50-console #tokenModal .f50-login-footer {display:flex;justify-content:flex-end;gap:8px;border-top:1px solid var(--f-border)!important;margin:16px -24px -24px!important;padding:16px 24px!important;background:var(--f-panel)!important;}
.f50-console #tokenModal .f50-login-footer>button {margin:0!important;height:40px;min-width:80px;padding:8px 20px!important;border-radius:7px!important;font-size:14px!important;}
@media(hover:hover){
 .f50-console #tokenModal :is(.f50-login-help,.f50-login-input>button):hover {background:var(--f-subtle)!important;color:var(--f-text)!important;}
}
@media(max-width:600px){
 .f50-console #tokenModal .f50-login-dialog {padding:20px!important;}
 .f50-console #tokenModal .modal>.title:first-child {font-size:21px!important;}
 .f50-console #tokenModal .f50-login-help {width:44px;height:44px;min-height:44px;}
 .f50-console #tokenModal :is(#TOKEN,#PWDINPUT,#login_method) {font-size:16px!important;}
 .f50-console #tokenModal .f50-login-input>button {inset:0 0 0 auto;width:44px;}
 .f50-console #tokenModal .f50-login-remember {min-height:44px;margin:-8px 0 -4px!important;}
 .f50-console #tokenModal .f50-login-footer {margin:16px -20px -20px!important;padding:16px 20px!important;}
 .f50-console #tokenModal .f50-login-footer>button {height:44px;min-height:44px;flex:1;}
}
.f50-console body#BG {margin:0!important;background:var(--f-bg)!important;background-image:none!important;color:var(--f-text)!important;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif!important;font-size:14px!important;font-weight:400;word-break:normal;}
.f50-console #BG_OVERLAY {background:var(--f-bg)!important;backdrop-filter:none!important;}
.f50-console #BG_OVERLAY>.container {display:block!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important;overflow:auto!important;align-items:stretch!important;transition:none!important;}
.f50-console .main-title,.f50-console .func_list_container,.f50-console .footer,.f50-console .toolbar {display:none!important;}
.f50-console *, .f50-console *::before, .f50-console *::after {box-sizing:border-box;text-shadow:none!important;box-shadow:none!important;}
.f50-console button,.f50-console select,.f50-console input,.f50-console textarea {font-family:inherit;backdrop-filter:none!important;}
.f50-console button,.f50-console select {font-size:13px!important;border:1px solid var(--f-border);background:var(--f-panel);color:var(--f-text);border-radius:6px;padding:8px 12px;min-height:36px;cursor:pointer;box-shadow:none!important;}
@media(hover:hover){.f50-console button:hover {background:var(--f-selected);border-color:var(--f-blue);}}
.f50-console button:disabled {opacity:.45;cursor:not-allowed;}
.f50-console :focus-visible {outline:2px solid var(--f-blue)!important;outline-offset:3px;}
.f50-console input,.f50-console textarea {font-size:14px!important;border:1px solid var(--f-border)!important;background:var(--f-panel);padding:8px;color:var(--f-text)!important;}
.f50-console option {background:var(--f-panel);color:var(--f-text);}
.f50-console a {color:var(--f-blue);}
.f50-console .title {border-left:0;padding-left:0;font-size:15px;}
.f50-console .title strong {font-weight:600;}
.f50-console .modal {background:var(--f-panel)!important;color:var(--f-text)!important;border:1px solid var(--f-border);padding:24px;border-radius:10px;box-shadow:none!important;backdrop-filter:none!important;max-width:calc(100vw - 32px);}
.f50-console .modal .content {max-height:65dvh;}
.f50-console dialog {background:var(--f-panel)!important;color:var(--f-text)!important;border:1px solid var(--f-border);box-shadow:none!important;}
.f50-console dialog::backdrop {background:#10182855;}
.f50-console .nice-table {width:100%;border-collapse:collapse;color:var(--f-text);font-size:13px;}
.f50-console .nice-table th,.f50-console .nice-table td {border-bottom:1px solid var(--f-border);padding:12px 10px;background:transparent;white-space:nowrap;}
.f50-console .nice-table th {background:var(--f-bg);font-weight:500;color:var(--f-muted);}
.f50-console .deviceList li {background:var(--f-panel)!important;border:1px solid var(--f-border);box-shadow:none!important;}
.f50-console .deviceList strong {font-weight:500!important;font-size:13px!important;box-shadow:none!important;background:transparent!important;color:var(--f-text)!important;}
.f50-console .deviceList strong span {color:inherit;}
.f50-console .statusCard {background:var(--f-panel)!important;box-shadow:none!important;border:1px solid var(--f-border);}
#f50-shell {min-height:100dvh;line-height:1.5;}
#f50-shell [hidden] {display:none!important;}
#f50-sidebar {width:204px;position:fixed;inset:0 auto 0 0;background:var(--f-panel);border-right:1px solid var(--f-border);z-index:5;display:flex;flex-direction:column;padding:24px 12px 16px;}
.f50-brand {display:flex;align-items:center;gap:10px;padding:0 10px 26px;}
.f50-brand-mark {width:32px;height:32px;border-radius:8px;background:var(--f-button-bg);color:var(--f-button-text);display:grid;place-items:center;font-size:13px;font-weight:700;letter-spacing:-.5px;}
.f50-brand strong {display:block;font-size:15px;font-weight:650;}
.f50-brand small {font-size:10px;color:var(--f-muted);white-space:nowrap;}
.f50-nav-label {color:var(--f-muted);font-size:11px;padding:0 12px 8px;}
#f50-sidebar nav {display:flex;flex-direction:column;gap:4px;}
#f50-sidebar .f50-nav {display:flex;align-items:center;gap:12px;width:100%;background:transparent;border:0;text-align:left;height:43px;padding:10px 12px;color:var(--f-muted);}
#f50-sidebar .f50-nav[aria-current=page] {background:var(--f-selected);color:var(--f-blue);font-weight:600;}
.f50-icon {width:18px;height:18px;flex-shrink:0;}
.f50-sidebar-bottom {margin-top:auto;padding:20px 10px 0;display:flex;flex-direction:column;gap:12px;font-size:12px;color:var(--f-muted);}
.f50-sidebar-bottom a {text-decoration:none;color:var(--f-muted);}
.f50-sidebar-bottom a:hover {color:var(--f-blue);}
.f50-device-dot {display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--f-muted);margin-right:6px;}
#f50-workspace {margin-left:204px;min-width:0;}
#f50-topbar {position:sticky;top:0;z-index:4;height:65px;background:var(--f-panel);border-bottom:1px solid var(--f-border);display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 32px;}
.f50-crumb {font-size:13px;color:var(--f-muted);display:flex;align-items:center;gap:14px;}
.f50-crumb b {color:var(--f-text);font-weight:500;}
.f50-header-actions {display:flex;gap:8px;align-items:center;}
.f50-header-actions button {font-size:12px!important;padding:6px 10px;min-height:32px;}
#f50-pages {max-width:1480px;margin:auto;padding:28px 32px 40px;}
.f50-page[hidden] {display:none!important;}
.f50-page-heading {display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:24px;}
.f50-page-heading h1 {font-size:25px;font-weight:600;letter-spacing:-.6px;margin:0 0 4px;}
.f50-subtitle {font-size:13px;color:var(--f-muted);margin:0;}
.f50-connection {display:grid;grid-template-columns:160px minmax(0,1fr) 160px minmax(0,1fr) 160px;align-items:start;gap:0;margin-bottom:20px;padding:0 0 4px;color:var(--f-muted);font-size:12px;}
.f50-connection-item {display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0;text-align:center;}
.f50-connection-symbol {display:grid;place-items:center;width:56px;height:52px;flex-shrink:0;color:var(--f-muted);}
.f50-connection-item .f50-icon {width:42px;height:42px;stroke-width:1.35;}
.f50-carrier-logo {display:block;width:42px;height:42px;}
.f50-device-art {display:block;width:52px;height:46px;}
.f50-connection-ip {font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;}
.f50-connection-copy {min-width:0;width:100%;}
.f50-connection-item strong {display:block;color:var(--f-text);font-weight:500;font-size:14px;line-height:20px;overflow-wrap:anywhere;}
.f50-connection-detail {display:block;margin-top:3px;line-height:18px;}
.f50-connection-line {height:0;position:relative;z-index:0;margin:26px -52px 0;border-top:1px solid currentColor;color:var(--f-border);}
.f50-connection-line:nth-child(4) {border-top-style:dashed;}
.f50-connection[data-state=online] .f50-connection-line:nth-child(2),.f50-connection[data-local-state=online] .f50-connection-line:nth-child(4) {color:var(--f-green);}
.f50-connection-meta {display:flex;flex-direction:column;align-items:center;gap:0;min-height:39px;margin-top:3px;line-height:18px;}
.f50-connection-status {display:inline-flex;align-items:center;color:var(--f-green);font-size:12px;line-height:18px;white-space:nowrap;}
.f50-connection-status[data-state=waiting],.f50-connection-status[data-state=stale] {color:var(--f-muted);}
.f50-connection-status[data-state=offline] {color:var(--f-danger);}

.f50-main-grid {display:grid;grid-template-columns:minmax(0,1.8fr) minmax(270px,1fr);gap:20px;}
.f50-panel {background:var(--f-panel);border:1px solid var(--f-border);border-radius:8px;padding:22px;min-width:0;}
.f50-panel-heading {display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:20px;}
.f50-panel-heading h2 {font-size:14px;font-weight:600;margin:0;}
.f50-caption {color:var(--f-muted);font-size:11px;}
.f50-rate-row {display:flex;gap:44px;margin-bottom:12px;}
.f50-rate-label {color:var(--f-muted);font-size:12px;margin-bottom:4px;display:block;}
.f50-rate-value {font-size:29px;letter-spacing:-1px;font-weight:500;font-variant-numeric:tabular-nums;}
.f50-rate-unit {font-size:12px;letter-spacing:0;color:var(--f-muted);margin-left:4px;}
.f50-chart {height:160px;position:relative;}
.f50-chart-foot {display:flex;justify-content:space-between;color:var(--f-muted);font-size:10px;padding-top:8px;}
.f50-signal-summary {display:flex;flex-direction:column;gap:4px;margin:-4px 0 20px;}
.f50-signal-summary>strong {font-size:22px;font-weight:500;line-height:28px;letter-spacing:-.4px;color:var(--f-signal-tone);}
.f50-signal-summary>span {font-size:12px;line-height:18px;color:var(--f-muted);}
.f50-signal-reading {display:flex;align-items:baseline;justify-content:flex-end;gap:10px;white-space:nowrap;}
.f50-signal-grade {font-size:11px;line-height:18px;color:var(--f-signal-tone);}
:is(.f50-signal-summary,.f50-signal-grade,.f50-signal-fill) {--f-signal-tone:var(--f-muted);}
:is(.f50-signal-summary,.f50-signal-grade,.f50-signal-fill)[data-grade="0"] {--f-signal-tone:var(--f-danger);}
:is(.f50-signal-summary,.f50-signal-grade,.f50-signal-fill)[data-grade="1"] {--f-signal-tone:var(--f-warning);}
:is(.f50-signal-summary,.f50-signal-grade,.f50-signal-fill)[data-grade="2"] {--f-signal-tone:var(--f-blue);}
:is(.f50-signal-summary,.f50-signal-grade,.f50-signal-fill)[data-grade="3"] {--f-signal-tone:var(--f-green);}
.f50-signal-row {display:grid;grid-template-columns:1fr auto;gap:6px;margin:16px 0;font-size:12px;color:var(--f-muted);}
.f50-signal-row b {color:var(--f-text);font-size:14px;font-weight:500;font-variant-numeric:tabular-nums;}
.f50-signal-track {grid-column:1/-1;height:4px;background:var(--f-bg);border-radius:2px;overflow:hidden;}
.f50-signal-fill {height:100%;background:var(--f-signal-tone);width:0;}
.f50-signal-meta {display:flex;gap:18px;padding-top:15px;margin-top:16px;border-top:1px solid var(--f-border);font-size:12px;color:var(--f-muted);}
.f50-signal-meta strong {color:var(--f-text);font-weight:500;}
.f50-bottom-grid {display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;}
.f50-summary-number {font-size:26px;font-weight:500;letter-spacing:-.6px;font-variant-numeric:tabular-nums;}
.f50-summary-bottom {display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--f-muted);margin-top:12px;}
.f50-text-button {background:transparent!important;border:0!important;color:var(--f-blue)!important;padding:0!important;min-height:28px!important;}
.f50-health {display:grid;grid-template-columns:repeat(5,minmax(0,1fr));margin-top:20px;padding:20px 22px;background:var(--f-panel);border:1px solid var(--f-border);border-radius:8px;gap:20px;}
.f50-health>div+div {border-left:1px solid var(--f-border);padding-left:20px;}
.f50-health-metric {min-width:0;}
.f50-health-label {display:block;color:var(--f-muted);font-size:12px;margin-bottom:8px;}
.f50-health strong {display:flex;align-items:baseline;gap:5px;font-weight:500;font-size:20px;line-height:28px;font-variant-numeric:tabular-nums;}
.f50-health-metric:last-child strong {font-size:16px;}
.f50-health .f50-metric-status {display:block;margin-top:4px;}
.f50-metric-unit {font-size:12px;font-weight:400;color:var(--f-muted);letter-spacing:0;}
.f50-metric-status {font-size:12px;line-height:18px;color:var(--f-muted);white-space:nowrap;}
.f50-metric-status[data-tone=good] {color:var(--f-green);}
.f50-metric-status[data-tone=info] {color:var(--f-blue);}
.f50-metric-status[data-tone=warning] {color:var(--f-warning);}
.f50-metric-status[data-tone=danger] {color:var(--f-danger);}
.f50-notice {font-size:12px;color:var(--f-muted);margin:18px 0 0;}
.f50-actions {background:var(--f-panel);border:1px solid var(--f-border);border-radius:8px;overflow:hidden;margin-bottom:20px;}
.f50-action-row {display:flex;justify-content:space-between;align-items:center;gap:20px;padding:16px 20px;border-bottom:1px solid var(--f-border);min-height:75px;}
.f50-action-row:last-child {border-bottom:0;}
.f50-action-row strong {font-size:14px;font-weight:500;}
.f50-action-row p {font-size:12px;color:var(--f-muted);margin:3px 0 0;}
.f50-action-row button {flex-shrink:0;}
.f50-action-row button[aria-pressed=true] {color:var(--f-blue);background:var(--f-selected);border-color:var(--f-blue);}
.f50-select-row {display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;}
.f50-select-row label {display:flex;align-items:center;gap:10px;font-size:12px;color:var(--f-muted);}
.f50-console .f50-page .kano_function_main {margin:20px 0;padding:20px;background:var(--f-panel);border:1px solid var(--f-border);border-radius:8px;overflow-x:auto;}
.f50-console .f50-page .kano_function_main>.title {margin-bottom:16px!important;}
.f50-console .f50-page .kano_function_main>.collapse {height:auto!important;}
.f50-console .f50-page .collapse_box {overflow-x:auto;min-width:0;}
.f50-console .f50-page .kano_function_main>.title [id^=collapse_] {display:none!important;}
.f50-console #TTYD {display:block!important;}
.f50-console #TTYD iframe {min-height:380px;}
.f50-console #STATUS li p {display:flex;gap:14px;flex-wrap:wrap;}
.f50-console .f50-page .status-container .title {flex-wrap:wrap;}
.f50-menu-toggle {display:none;}
@media (max-width:1100px) {
  #f50-pages {padding:24px;} #f50-topbar {padding:0 24px;}
  .f50-main-grid {grid-template-columns:minmax(0,1.4fr) minmax(240px,1fr);gap:14px;}
  .f50-panel {padding:18px;} .f50-rate-row {gap:24px;} .f50-rate-value {font-size:25px;}
}
@media (max-width:850px) {
  #f50-sidebar {transform:translateX(-100%);width:220px;box-shadow:none!important;}
  #f50-shell[data-menu=open] #f50-sidebar {transform:none;}
  #f50-workspace {margin-left:0;} .f50-menu-toggle {display:inline-flex;align-items:center;}
  #f50-pages {padding:20px;} #f50-topbar {padding:0 20px;}
}
@media (max-width:600px) {
  .f50-console button,.f50-console select {min-height:44px;}
  .f50-main-grid,.f50-bottom-grid {grid-template-columns:1fr;gap:14px;}
  #f50-pages {padding:20px 14px;} #f50-topbar {height:58px;padding:0 14px;}
  .f50-page-heading h1 {font-size:23px;} .f50-page-heading {align-items:flex-start;margin-bottom:20px;}
  .f50-connection {grid-template-columns:88px minmax(0,1fr) 88px minmax(0,1fr) 88px;padding:0 0 2px;margin-bottom:14px;}
  .f50-connection-item {gap:6px;}
  .f50-connection-symbol {width:44px;height:44px;}
  .f50-connection-item .f50-icon {width:34px;height:34px;}
  .f50-carrier-logo {width:34px;height:34px;}
  .f50-device-art {width:44px;height:39px;}
  .f50-connection-ip {font-size:11px;}
  .f50-connection-item strong {font-size:13px;line-height:20px;}
  .f50-connection-detail {font-size:11px;line-height:17px;}
  .f50-connection-line {margin:22px -22px 0;}
  .f50-connection-status {font-size:11px;}
  .f50-health {grid-template-columns:1fr 1fr;gap:20px;padding:18px;}
  .f50-health>div+div {border:0;padding-left:0;}
  .f50-health-metric:last-child {grid-column:1/-1;}
  .f50-action-row {padding:15px;gap:12px;}
  .f50-action-row p {max-width:220px;} .f50-crumb {gap:8px;font-size:12px;}
  #f50-updated {display:none;} .f50-rate-row {gap:38px;}
}
@media (prefers-reduced-motion:reduce) {.f50-console * {transition:none!important;animation:none!important;}}

/* Console 1.1 — common surfaces, typography and application chrome. */
.f50-console {--f-danger:#b94343;--f-warning:#976627;--f-soft-warning:#fff9ed;--f-soft-danger:#fcf2f2;--f-subtle:#f8f9fb;}
.f50-console[data-f50-theme=dark] {--f-danger:#f58f8f;--f-warning:#d6b177;--f-soft-warning:#302a20;--f-soft-danger:#35262a;--f-subtle:#242931;}
.f50-console body {font-weight:400!important;font-variant-numeric:tabular-nums;}
.f50-console .mask {inset:0;background:#10182838!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:none!important;transform:none;transition:opacity 160ms ease!important;}
.f50-console .modal,.f50-console dialog {line-height:1.65;font-size:13px;}
.f50-console .modal .title {font-size:14px!important;font-weight:500;margin-top:16px;gap:8px;}
.f50-console .modal>.title:first-child {font-size:19px!important;font-weight:600;margin:0 0 24px!important;line-height:1.4;}
.f50-console .modal i {font-style:normal;color:var(--f-muted)!important;font-size:12px;line-height:1.7;}
.f50-console .modal p {line-height:1.65;}
.f50-console .modal b,.f50-console .modal strong {font-weight:500;}
.f50-console .modal .content {width:100%!important;max-width:100%!important;box-sizing:border-box;min-height:0!important;}
.f50-console .modal .content .title {font-size:13px!important;}
.f50-console .modal :is(input[type=text],input[type=password],input[type=number],input[type=time],input[type=datetime-local],select,textarea) {font-size:13px!important;min-height:36px;border:1px solid var(--f-border)!important;border-radius:5px!important;background:var(--f-panel)!important;color:var(--f-text)!important;text-indent:0!important;}
.f50-console .modal :is(input[type=checkbox],input[type=radio]) {padding:0;width:15px;height:15px;accent-color:var(--f-blue);cursor:pointer;}
.f50-console input::placeholder,.f50-console textarea::placeholder {color:var(--f-muted)!important;opacity:.8;}
.f50-console .modal textarea {font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;line-height:1.6;tab-size:2;padding:12px!important;}
.f50-console .modal :is(.label-name,label) {font-size:13px;color:var(--f-muted);font-weight:400;}
.f50-console .modal [style*="font-size: 10px"],.f50-console .modal [style*="font-size:10px"] {font-size:12px!important;}
.f50-console .modal [style*="color: yellow"],.f50-console .modal [style*="color: pink"],.f50-console .modal [style*="color: skyblue"] {color:var(--f-muted)!important;}
.f50-console .modal [data-i18n*="warning"],.f50-console .modal [data-i18n*="tip1"] {color:var(--f-warning)!important;}
.f50-console .modal :is([data-i18n=at_warning_1],[data-i18n=advance_warning]) {display:block;padding:12px 14px;background:var(--f-soft-warning);border-radius:5px;line-height:1.7;}
.f50-console .modal .dash-border-round {border:0!important;border-bottom:1px solid var(--f-border)!important;border-radius:0!important;padding:14px 0!important;}
.f50-console .modal .green,.f50-console .modal .blue,.f50-console .modal .pink {color:var(--f-text)!important;}
.f50-console .modal .red {color:var(--f-danger)!important;}
.f50-console .modal .btn:not(button) {background:none;border:0;}
.f50-console .modal [style*="font-style"] {font-style:normal!important;font-weight:400!important;}
.f50-console .modal button {font-weight:500;border-radius:5px!important;transition:background 120ms ease,border-color 120ms ease!important;}
.f50-console .f50-danger {color:var(--f-danger)!important;background:var(--f-panel)!important;border-color:var(--f-border)!important;}
.f50-console .f50-danger:hover {background:var(--f-soft-danger)!important;border-color:var(--f-danger)!important;}
.f50-console .f50-detail {position:fixed!important;inset:auto!important;top:50%!important;left:50%!important;margin:0!important;transform:translate(-50%,-50%)!important;border-radius:10px!important;border:1px solid var(--f-border)!important;width:min(580px,calc(100vw - 32px))!important;max-width:calc(100vw - 32px)!important;height:auto!important;max-height:calc(100dvh - 48px)!important;padding:26px!important;overflow:auto!important;box-shadow:none!important;transition:opacity 160ms ease!important;}
.f50-console .f50-detail.f50-wide-detail {width:min(780px,calc(100vw - 32px))!important;}
.f50-console .f50-detail .content {max-height:none!important;overflow:visible!important;}
.f50-console .f50-detail {display:flex!important;flex-direction:column;}
.f50-console .f50-detail[style*="display: none"],.f50-console .f50-detail[style*="display:none"],.f50-console dialog.f50-detail:not([open]) {display:none!important;}
.f50-console .f50-detail>form {flex:1;display:flex;flex-direction:column;min-height:0;}
.f50-console .f50-detail>.content,.f50-console .f50-detail>form>.content {flex:1;min-height:0!important;overflow:auto!important;}
.f50-console .f50-detail>.btn:last-child {position:sticky;bottom:-26px;z-index:2;background:var(--f-panel)!important;border-top:1px solid var(--f-border);padding:16px 26px!important;margin:24px -26px -26px!important;display:flex;gap:8px;justify-content:flex-end;}
.f50-console .f50-compact-dialog {inset:auto!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;width:min(440px,calc(100vw - 32px))!important;max-height:calc(100dvh - 48px)!important;padding:26px!important;border:1px solid var(--f-border)!important;border-radius:8px!important;}
.f50-console dialog.f50-detail {margin:0!important;width:min(620px,calc(100vw - 32px))!important;}
.f50-console dialog h3 {font-size:19px!important;font-weight:600;margin:0 0 18px;}
.f50-console dialog p {font-size:13px;color:var(--f-muted);margin:0 0 22px;}
.f50-console dialog pre,.f50-console #AT_RESULT,.f50-console #AD_RESULT {background:var(--f-subtle);border:1px solid var(--f-border);border-radius:5px;padding:16px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;line-height:1.6;}
.f50-console :is(#AT_RESULT,#AD_RESULT):empty {display:none;}
.f50-console #ATModal .modal button {margin:4px 4px 4px 0;}
.f50-console .advanced-btns {display:flex;flex-wrap:wrap;gap:8px;padding-top:16px;}
.f50-console .advanced-btns button {margin:0!important;}
.f50-console #advanceModal.f50-advanced .content {display:flex;flex-direction:column;gap:24px;overflow:visible!important;}
.f50-advanced-status {display:grid;grid-template-columns:1fr 1fr 1fr 1.5fr;gap:16px;margin:0;padding:0 0 24px;border-bottom:1px solid var(--f-border);}
.f50-advanced-status>div {min-width:0;}
.f50-advanced-status dt {color:var(--f-muted);font-size:12px;margin-bottom:8px;}
.f50-advanced-status dd {margin:0;font-size:14px;font-weight:600;overflow-wrap:anywhere;}
.f50-advanced-status [data-field=firmware] dd {font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;font-weight:500;}
.f50-advanced-status [data-tone=success] dd {color:var(--f-green);}
.f50-advanced-status [data-tone=error] dd {color:var(--f-danger);}
.f50-console #advanceModal .f50-advanced-notice [data-i18n=advance_warning] {padding:12px 16px;font-size:13px!important;font-style:normal;font-weight:400;line-height:1.75;}
.f50-advanced-essentials {margin:10px 0 0;color:var(--f-muted);font-size:13px;line-height:1.75;}
.f50-advanced-tools {display:grid;grid-template-columns:1fr 1fr;gap:24px 32px;}
.f50-advanced-group {min-width:0;}
.f50-advanced-group h3 {font-size:14px;font-weight:600;margin:0 0 4px;}
.f50-advanced-group>p {color:var(--f-muted);font-size:12px;margin:0 0 12px;line-height:1.6;}
.f50-advanced-actions {display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;}
.f50-console #advanceModal .f50-advanced-actions button {margin:0!important;min-height:38px;padding:8px 12px;max-width:100%;white-space:normal;}
.f50-advanced-details {border-top:1px solid var(--f-border);padding-top:20px;}
.f50-advanced-details summary {cursor:pointer;font-size:13px;font-weight:500;color:var(--f-muted);width:fit-content;}
.f50-console #advanceModal [data-i18n=advance_feature_list] {margin:12px 0 0;max-width:68ch;color:var(--f-muted);font-size:13px!important;font-weight:400!important;line-height:1.85;overflow-wrap:anywhere;}
.f50-advanced-output {border-top:1px solid var(--f-border);padding-top:20px;}
.f50-console #advanceModal [data-i18n=advance_result] {font-size:14px!important;font-weight:600;margin:0 0 12px!important;}
.f50-advanced-empty {margin:0;background:var(--f-subtle);border:1px dashed var(--f-border);border-radius:6px;padding:20px 16px;color:var(--f-muted);font-size:13px;}
.f50-console #advanceModal #AD_RESULT {margin:0!important;white-space:pre-wrap;overflow-wrap:anywhere;max-height:360px;overflow:auto;}
.f50-console #advanceModal.f50-advanced .modal>.btn:last-child {display:none;}
@media(max-width:650px){
 .f50-advanced-status {grid-template-columns:1fr 1fr;gap:20px 16px;padding-bottom:20px;}
 .f50-advanced-tools {grid-template-columns:1fr;gap:20px;}
 .f50-advanced-group+.f50-advanced-group {border-top:1px solid var(--f-border);padding-top:20px;}
 .f50-console #advanceModal.f50-advanced .content {gap:20px;}
 .f50-console #advanceModal .f50-advanced-actions button {min-height:44px;font-size:14px!important;}
 .f50-advanced-status dt,.f50-advanced-group>p,.f50-advanced-essentials,.f50-advanced-details summary,.f50-advanced-empty {font-size:14px;}
 .f50-console #advanceModal :is([data-i18n=advance_warning],[data-i18n=advance_feature_list]) {font-size:14px!important;}
}
.f50-console #AT_INPUT {max-width:none!important;width:calc(100% - 76px)!important;}
.f50-console .signal_bar {background:var(--f-subtle)!important;opacity:1;border-radius:4px;border:1px solid var(--f-border);padding:7px 10px;min-width:54px;}
.f50-console .signal_bar_progress {display:none;}
.f50-console .signal_bar .text {color:var(--f-text)!important;font-weight:500;}
.f50-console .nice-table th {font-size:12px;text-align:left;}
.f50-console .nice-table td {font-size:13px;font-weight:400;}
.f50-console .nice-table tbody tr:hover {background:var(--f-subtle);}
.f50-console .nice-table button {min-height:30px;padding:4px 9px;font-size:12px!important;}
.f50-console .plugin-list {display:flex!important;flex-direction:column;gap:0!important;}
.f50-console .plugin-list>li {padding:15px 4px!important;margin:0!important;border-bottom:1px solid var(--f-border);border-radius:0!important;background:transparent!important;}
.f50-console .plugin-list>li>span {flex:1;text-align:left;cursor:pointer;}
.f50-console .plugin-list .delete-btn {cursor:pointer;min-width:28px;}
.f50-console .plugin-items>li {background:var(--f-panel)!important;border:1px solid var(--f-border);border-radius:6px;padding:16px!important;margin-bottom:12px!important;}
.f50-console .searchBox {display:flex;gap:8px;align-items:center;margin:16px 0;}
.f50-console .searchInput {min-width:0;flex:1;}
.f50-console #pluginSearchInput {width:100%;}
.f50-console #switchRepoBox {flex-wrap:wrap;}
.f50-console #sortable-list .handle {color:var(--f-muted);}
.f50-console #toastContainer {position:fixed!important;inset:0!important;width:100%!important;height:100dvh!important;max-height:none!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;align-items:center!important;gap:10px!important;padding:24px 16px max(24px,env(safe-area-inset-bottom))!important;z-index:10000;pointer-events:none!important;overflow:visible!important;transform:none!important;filter:none!important;backdrop-filter:none!important;}
.f50-console .toastkano {font-weight:400!important;font-size:13px!important;line-height:1.5;color:var(--f-text)!important;padding:14px 16px!important;width:100%!important;border:1px solid var(--f-border);border-left:3px solid var(--f-blue);border-radius:6px!important;box-shadow:none!important;background:var(--f-panel)!important;backdrop-filter:none!important;}
.f50-console .toastkano[data-f50-tone=warning] {border-left-color:var(--f-warning);}
.f50-console #toastContainer>.toastkano:not(.f50-action-dialog) {position:relative!important;inset:auto!important;flex:none;max-width:100%!important;width:min(420px,calc(100vw - 32px))!important;margin:0!important;pointer-events:auto;overflow-wrap:anywhere;transform-origin:bottom center!important;border-radius:10px!important;}
.f50-console .toastkano[data-f50-tone=success] {border-left-color:var(--f-green);}
.f50-tabs {display:flex;gap:24px;border-bottom:1px solid var(--f-border);margin:0 0 24px;overflow-x:auto;}
.f50-tabs button {padding:12px 0!important;margin:0;background:none!important;border:0!important;border-bottom:2px solid transparent!important;border-radius:0!important;color:var(--f-muted);font-size:13px!important;white-space:nowrap;}
.f50-tabs button[aria-selected=true] {color:var(--f-blue);border-bottom-color:var(--f-blue)!important;font-weight:500;}
.f50-tab-panel>.kano_function_main:first-child {margin-top:0!important;}
.f50-rate-label {display:flex;align-items:center;gap:5px;}
.f50-rate-label .f50-icon {width:13px;height:13px;}
.f50-text-button {display:inline-flex;align-items:center;gap:5px;font-weight:400;}
.f50-text-button .f50-icon,.f50-sidebar-bottom .f50-icon {width:12px;height:12px;vertical-align:middle;}
.f50-sidebar-bottom a {display:flex;align-items:center;gap:6px;}
.f50-actions {border-radius:6px;}
.f50-action-row {min-height:72px;padding:16px 22px;}
.f50-action-row strong {font-size:13px;}
.f50-action-row p {font-size:12px;line-height:1.6;}
.f50-action-row button {font-size:12px!important;padding:6px 12px;min-width:76px;}
.f50-action-row button[aria-pressed] {min-width:48px;width:48px;height:26px;min-height:26px;border-radius:15px;padding:0!important;font-size:0!important;border:0!important;background:var(--f-border)!important;position:relative;}
.f50-action-row button[aria-pressed]::after {content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:white;box-shadow:none!important;}
.f50-action-row button[aria-pressed=true] {background:var(--f-blue)!important;}
.f50-action-row button[aria-pressed=true]::after {left:25px;}
.f50-select-row {background:var(--f-panel);padding:18px 22px;border:1px solid var(--f-border);border-radius:6px;gap:20px;}
.f50-select-row label {flex:1;min-width:180px;justify-content:space-between;}
.f50-select-row select {min-width:150px;}
.f50-console #STATUS>li {padding:0!important;margin:0!important;border:0;background:transparent!important;}
.f50-console #STATUS>li>p {display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:0!important;margin:0;}
.f50-console #STATUS .title {margin:26px 0 10px!important;font-size:14px;}
.f50-console #STATUS .f50-field {display:flex!important;flex-direction:column;align-items:flex-start;justify-content:flex-start;white-space:normal!important;overflow:hidden;padding:14px 16px!important;margin:0!important;min-width:0;width:100%;border:0!important;border-bottom:1px solid var(--f-border)!important;border-radius:0!important;line-height:1.6;}
.f50-field-label {color:var(--f-muted)!important;font-size:12px!important;font-weight:400!important;}
.f50-field-value {display:block;font-size:13px!important;font-weight:500!important;max-width:100%;overflow-wrap:anywhere;word-break:break-word;}
.f50-field-value>span {max-width:100%!important;text-align:left!important;width:auto!important;}
.f50-console .devices-mon .charts {display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;min-width:0;width:100%;}
.f50-console .devices-mon .chart {max-width:none!important;width:100%!important;height:84px!important;min-width:0;}
.f50-console .devices-mon .cpu-card .card-inner {max-width:100%;}
.f50-console #smsList {display:flex;flex-direction:column;}
.f50-console #smsList[style*="display: none"] {display:none!important;}
.f50-console #smsList .content {flex:1;min-height:160px!important;overflow-y:auto!important;margin:16px 0;}
.f50-console #smsList .action {display:flex;align-items:center;gap:10px;background:var(--f-subtle)!important;padding:12px;border:1px solid var(--f-border);border-radius:5px;}
.f50-console #smsList .sms-item {box-shadow:none!important;border:1px solid var(--f-border);background:var(--f-subtle)!important;border-radius:6px;color:var(--f-text);font-weight:400;}
.f50-console #smsList .sms-item .arrow {display:none;}
.f50-console #smsList .sms-item p {font-size:13px!important;line-height:1.65;}
.f50-console .spin:empty {display:inline-block;width:20px;height:20px;border:2px solid var(--f-border);border-top-color:var(--f-blue);border-radius:50%;animation:f50-spin 700ms linear infinite;}
@keyframes f50-spin {to{transform:rotate(360deg);}}
/* Console 1.2 — aligned controls and settings within the workspace. */
.f50-brand {padding:3px 12px 28px;min-height:55px;}
.f50-brand strong {font-size:17px;letter-spacing:-.3px;line-height:24px;font-weight:600;}
.f50-console button {line-height:20px;vertical-align:middle;}
.f50-console {--f-download:#32c5ff;--f-upload:#a447f8;--f-download-label:#087cad;--f-upload-label:#8541c2;--f-download-soft:#effaff;}
.f50-console[data-f50-theme=dark] {--f-download:#49caff;--f-upload:#bb7cff;--f-download-label:#49caff;--f-upload-label:#bb7cff;--f-download-soft:#203247;}
.f50-rate-row {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
.f50-rate-row>div:first-child .f50-rate-label {color:var(--f-download-label);}
.f50-rate-row>div:last-child .f50-rate-label {color:var(--f-upload-label);}
.f50-rate-value {font-size:38px;letter-spacing:-1px;line-height:1.25;}
.f50-rate-unit {font-size:12px;margin-left:7px;white-space:nowrap;}
.f50-speed-display {margin:16px 0 24px;background:var(--f-panel);border:1px solid var(--f-border);border-radius:8px;overflow:hidden;padding:24px 0 0;}
.f50-speed-heading {position:relative;text-align:center;color:var(--f-download-label);font-size:16px;font-weight:500;padding:24px 16px 0;}
.f50-speed-state {position:absolute;inset:-10px 16px auto auto;color:var(--f-muted);font-size:12px;font-weight:400;}
.f50-speed-display[data-state=error] .f50-speed-state {color:var(--f-danger);}
.f50-speed-reading {display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px 16px 32px;}
.f50-speed-reading strong {font-size:72px!important;font-weight:500!important;letter-spacing:-2px;line-height:1.2;font-variant-numeric:tabular-nums;}
.f50-speed-reading>span {font-size:16px;color:var(--f-muted);}
.f50-speed-display>svg {display:block;width:100%;height:160px;overflow:visible;}
.f50-speed-display[data-state=idle]>svg {display:none;}
.f50-speed-line {fill:none;stroke:var(--f-download);stroke-width:2;stroke-linecap:round;vector-effect:non-scaling-stroke;}
.f50-speed-area {fill-opacity:1;}

/* Both measurements share the existing speed surface and semantic direction colors. */
.f50-speed-controls {display:flex;align-items:center;gap:16px;margin:8px 0 20px;}
.f50-speed-controls>label {display:flex;align-items:center;gap:12px;font-size:13px;color:var(--f-muted);}
.f50-speed-controls select {min-width:168px;}
.f50-duplex-heading {display:flex;justify-content:space-between;gap:16px;align-items:center;font-size:13px;color:var(--f-muted);}
.f50-duplex-state {color:var(--f-muted);font-size:12px;}
.f50-duplex-speed [data-state=error] .f50-duplex-state {color:var(--f-danger);}
.f50-duplex-speed [data-state=running] .f50-duplex-state {color:var(--f-blue);}
.f50-duplex-readings {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:28px 0 24px;text-align:center;}
.f50-duplex-readings>div {min-width:0;}
.f50-duplex-label {display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:500;color:var(--f-download-label);}
.f50-duplex-label svg {width:16px;height:16px;}
.f50-duplex-readings [data-direction=up] .f50-duplex-label {color:var(--f-upload-label);}
.f50-duplex-value {display:flex;flex-direction:column;align-items:center;gap:4px;margin:12px 0 8px;}
.f50-duplex-value strong {font-size:52px!important;line-height:1.15;font-weight:500!important;letter-spacing:-1.5px;font-variant-numeric:tabular-nums;}
.f50-duplex-value>span {font-size:14px;color:var(--f-muted);}
.f50-duplex-readings small {font-size:12px;color:var(--f-muted);}
.f50-speed-upload-line {stroke:var(--f-upload);}
.f50-speed-grid {stroke:var(--f-border);stroke-width:1;fill:none;vector-effect:non-scaling-stroke;}
.f50-duplex-speed .f50-speed-address {margin:0 0 20px;}
.f50-duplex-speed .f50-speed-address label+label {margin-top:12px;}
.f50-duplex-speed .f50-speed-upload-size {margin:16px 0;align-items:center;}
.f50-speed-option-hint {font-size:12px;color:var(--f-muted);margin:12px 0;}
@media(max-width:600px){
 .f50-duplex-readings {gap:12px;padding:24px 0;}
 .f50-duplex-value strong {font-size:38px!important;letter-spacing:-1px;}
 .f50-speed-controls>label {width:100%;justify-content:space-between;}
 .f50-speed-controls select {min-width:0;flex:1;max-width:200px;}
 .f50-duplex-speed .f50-settings-actions {flex-wrap:wrap;}
 .f50-duplex-speed .f50-settings-actions>button {min-width:0;flex:1;min-height:44px;}
}
.f50-speed-display>p {font-size:12px;color:var(--f-muted);text-align:center;margin:0;padding:14px 16px;background:var(--f-panel);border-top:1px solid var(--f-border);}
.f50-speed-details {font-size:12px;color:var(--f-muted);margin:16px 0;}
.f50-speed-details summary {cursor:pointer;width:fit-content;}
.f50-console .modal button.f50-speed-start {padding:9px 24px;min-width:128px;}
.f50-console .modal .speedtest {font-size:13px!important;color:var(--f-muted)!important;line-height:1.8;text-align:left;background:none!important;padding:12px 0;}
.f50-console :focus-visible {outline-offset:1px;}
.f50-console .modal .item {margin:6px 0;}
.f50-console .modal .dash-border-round {margin-bottom:0;padding:10px 0!important;}
.f50-action-row {min-height:64px;}
.f50-wifi-qr {margin-top:16px;color:var(--f-muted);font-size:13px;}
.f50-wifi-qr summary {cursor:pointer;width:fit-content;padding:8px 0;}
.f50-wifi-qr img {max-width:100%;}
.f50-console svg.f50-icon {display:block;overflow:visible;}
.f50-console .drag li::after {content:none!important;display:none!important;}
.f50-console .nice-table thead {opacity:1;}
.f50-console .nice-table th,.f50-console .nice-table td {text-align:left;vertical-align:middle;}
.f50-console :is(select,select.select),.f50-console .modal :is(select,select.select) {appearance:none!important;-webkit-appearance:none!important;height:38px;min-height:38px;line-height:20px;text-align:left!important;text-align-last:left;padding:8px 34px 8px 12px!important;margin:0!important;border:1px solid var(--f-border)!important;border-radius:6px;background:var(--f-panel)!important;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='m4 6 4 4 4-4' stroke='%23667085' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")!important;background-position:right 10px center!important;background-size:16px 16px!important;background-repeat:no-repeat!important;max-width:100%;min-width:0;}
.f50-console[data-f50-theme=dark] :is(select,select.select),.f50-console[data-f50-theme=dark] .modal :is(select,select.select) {background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='m4 6 4 4 4-4' stroke='%239ba6b6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")!important;}
.f50-console select[multiple],.f50-console select[size]:not([size="1"]) {background-image:none!important;height:auto;}
.f50-select-row {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding:20px;gap:24px;}
.f50-select-row label {display:flex;gap:10px;justify-content:flex-start;min-width:0;flex-wrap:wrap;}
.f50-select-row label>span {min-width:72px;}
.f50-select-row select {width:200px;min-width:0;}
.f50-console .modal :is(label,.item) {min-width:0;}
.f50-console .modal .label-name {display:inline-block;min-width:90px;flex-shrink:0;line-height:20px;}
.f50-console .modal input:not([type=checkbox]):not([type=radio]),.f50-console .modal textarea {min-width:0;line-height:20px;}
.f50-console .modal .content {padding-left:0!important;padding-right:0!important;}
.f50-redundant-hint,.f50-inline-close,.f50-quiet-toast {display:none!important;}
.f50-storage-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;}
.f50-storage-grid h2 {font-size:14px;font-weight:600;margin:0 0 20px;}
.f50-storage-value {display:block;font-size:26px;font-weight:500;line-height:1.5;}
.f50-storage-track {height:6px;background:var(--f-border);border-radius:3px;margin:20px 0 12px;overflow:hidden;}
.f50-storage-track span {display:block;height:100%;background:var(--f-blue);width:0;}
.f50-storage-grid p {font-size:13px;color:var(--f-muted);margin:0;}
.f50-page.f50-has-inline>:not(.f50-page-heading):not(.f50-inline-host):not(.f50-persistent-tabs) {display:none!important;}
.f50-back {margin:0 0 16px;min-width:64px;color:var(--f-muted)!important;}
.f50-inline-host {max-width:960px;}
.f50-console .f50-inline-host .f50-inline-view {position:static!important;inset:auto!important;transform:none!important;opacity:1!important;background:transparent!important;backdrop-filter:none!important;padding:0!important;width:100%!important;max-width:none!important;height:auto!important;min-height:0;box-shadow:none!important;z-index:auto;transition:none!important;}
.f50-console .f50-inline-host .mask {display:block;}
.f50-console .f50-inline-host .modal[data-f50-inline] {position:static!important;inset:auto!important;transform:none!important;width:100%!important;max-width:none!important;height:auto!important;max-height:none!important;padding:24px!important;border:1px solid var(--f-border)!important;border-radius:8px!important;background:var(--f-panel)!important;box-shadow:none!important;overflow:visible!important;}
.f50-console .f50-inline-host .modal[data-f50-inline]>form {display:block;}
.f50-console .f50-inline-host .modal[data-f50-inline] .content {overflow:auto!important;max-height:none!important;}
.f50-console .f50-inline-host .modal[data-f50-inline] .content {padding:0!important;}
.f50-console .f50-inline-host .modal[data-f50-inline]>.btn:last-child {position:static;margin:24px 0 0!important;padding:18px 0 0!important;}
.f50-console .f50-inline-host #smsList .content {min-height:260px!important;max-height:45dvh!important;}
.f50-console .f50-inline-host .modal[data-f50-inline]>.title:first-child {font-size:16px!important;margin-bottom:20px!important;}
@media (max-width:600px) {
  .f50-select-row,.f50-storage-grid {grid-template-columns:1fr;gap:16px;}
  .f50-rate-row .f50-rate-unit {display:block;margin:4px 0 0;}
  .f50-select-row {padding:16px;}
  .f50-select-row label {justify-content:space-between;}
  .f50-select-row select {width:min(210px,65%);}
  .f50-console :is(input:not([type=checkbox]):not([type=radio]),textarea,select),.f50-console .modal :is(input[type=text],input[type=password],input[type=number],select,textarea) {font-size:16px!important;}
  .f50-console :is(select,select.select),.f50-console .modal :is(select,select.select) {height:44px;min-height:44px;}
  .f50-console .f50-inline-host .modal[data-f50-inline] {padding:16px!important;}
  .f50-console .modal .label-name {min-width:72px;}
  .f50-header-actions button,#f50-theme-toggle,.f50-menu-toggle {height:44px;min-height:44px;min-width:44px;}
  .f50-text-button {min-height:44px!important;}
  .f50-action-row button[aria-pressed] {height:44px;min-height:44px;background:transparent!important;}
  .f50-action-row button[aria-pressed]::before {content:"";position:absolute;width:48px;height:26px;top:9px;left:0;border-radius:15px;background:var(--f-border);}
  .f50-action-row button[aria-pressed=true]::before {background:var(--f-blue);}
  .f50-action-row button[aria-pressed]::after {top:12px;}
}
@media (max-width:1000px) {.f50-console #STATUS>li>p {grid-template-columns:repeat(2,minmax(0,1fr));}}
@media (max-width:600px) {
  .f50-console .f50-detail {padding:20px!important;}
  .f50-console .f50-detail>.btn:last-child {bottom:-20px;padding:14px 20px!important;margin:20px -20px -20px!important;flex-wrap:wrap;}
  .f50-console .modal :is(input[type=text],input[type=password],input[type=number],select,textarea) {min-height:42px;}
  .f50-tabs {gap:20px;margin-bottom:18px;}
  .f50-select-row {padding:14px;gap:12px;}
  .f50-select-row label {width:100%;min-width:0;}
  .f50-action-row {padding:15px;}
  .f50-console .devices-mon .charts {grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}
  .f50-console #STATUS .f50-field {padding:12px 6px!important;}
  .f50-console .f50-page .kano_function_main {padding:16px;}
  .f50-console #smsList .action {flex-wrap:wrap;}
  .f50-console #smsList .action .btn {width:100%;justify-content:flex-end!important;}
}

/* Stable monitor geometry: headings and live values sit outside the plotting area. */
.f50-console .devices-mon .charts {grid-auto-rows:156px;align-items:stretch;}
.f50-console .devices-mon .chart {position:relative!important;display:block!important;height:156px!important;min-height:156px!important;max-height:156px!important;min-width:0!important;margin:0!important;padding:16px!important;overflow:hidden;transform:none!important;transition:none!important;contain:layout;}
.f50-monitor-heading {display:flex;flex-direction:column;align-items:flex-start;gap:4px;line-height:1.5;white-space:nowrap;}
.f50-monitor-heading>span {font-size:13px;color:var(--f-muted);}
.f50-monitor-reading {display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;row-gap:0;min-width:0;}
.f50-monitor-reading>strong {display:flex;align-items:baseline;gap:5px;font-size:20px;font-weight:500;font-variant-numeric:tabular-nums;line-height:1.5;}
.f50-monitor-plot {position:absolute;inset:auto 12px 12px;height:64px;min-height:64px;min-width:0;}
.f50-console .devices-mon canvas {display:block!important;width:100%!important;height:64px!important;margin:0!important;}
.f50-console .devices-mon .cpu-card .card-inner {display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%;height:64px;margin:0;align-content:center;gap:6px;}
.f50-console .devices-mon .cpu-card .signal_bar {width:100%!important;margin:0!important;min-width:0;}
.f50-console .devices-mon .cpu-card .signal_bar .text {font-size:12px!important;font-variant-numeric:tabular-nums;}
.f50-core-frequency {min-width:0;display:flex;flex-direction:column;gap:3px;}
.f50-core-frequency>span:first-child {display:flex;align-items:baseline;justify-content:space-between;gap:3px;font-size:10px;line-height:16px;color:var(--f-muted);white-space:nowrap;}
.f50-core-frequency b {font-weight:500;font-size:11px;color:var(--f-text);font-variant-numeric:tabular-nums;}
.f50-core-frequency small {font-size:9px;font-weight:400;margin-left:2px;color:var(--f-muted);}
.f50-core-meter {height:3px;width:100%;background:var(--f-bg);overflow:hidden;}
.f50-core-meter i {display:block;height:100%;background:var(--f-blue);}
.f50-core-meter i[data-paused=true] {background:var(--f-muted);}
.f50-core-empty {font-size:12px;grid-column:1/-1;color:var(--f-muted);}
@media(max-width:600px){
 .f50-console .devices-mon :is(.cpu-card,.net-card) {grid-column:1/-1;}
 .f50-monitor-reading>strong {font-size:18px;}
 .f50-monitor-reading {gap:6px;}
 .f50-monitor-reading .f50-metric-status {font-size:11px;}
}
#f50-monitor-traffic {font-size:14px;}
.f50-console #STATUS .f50-field-value,.f50-health strong,.f50-summary-number {font-variant-numeric:tabular-nums;}
.f50-console #STATUS .f50-field {min-height:76px;}
.f50-console #CONN_CLIENT_LIST .card-item {display:grid!important;grid-template-columns:minmax(0,1fr) auto;align-items:center;padding:20px!important;gap:20px;margin:12px 0!important;overflow:visible!important;}
.f50-console #CONN_CLIENT_LIST .card-item>div:first-child {margin:0!important;min-width:0;}
.f50-console #CONN_CLIENT_LIST .card-item p {display:flex;gap:12px;align-items:center;margin:8px 0;font-size:13px;line-height:1.5;}
.f50-console #CONN_CLIENT_LIST .card-item p>span:first-child {color:var(--f-muted);min-width:72px;}
.f50-console #CONN_CLIENT_LIST .f50-client-name>span:nth-child(2) {font-size:16px;font-weight:600;overflow-wrap:anywhere;}
.f50-client-model {display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0;}
.f50-client-model>span {font-size:13px;color:var(--f-muted);min-width:72px;}
.f50-client-model>strong {font-size:14px;font-weight:500;}
.f50-console .f50-client-model>button {border:0;color:var(--f-blue);background:transparent;padding:4px 8px;}
.f50-client-editor {display:flex;flex-wrap:wrap;gap:8px;flex-basis:100%;}
.f50-client-editor input {flex:1;min-width:140px;max-width:100%;}
.f50-console #CONN_CLIENT_LIST .card-item>div:last-child>button {padding:8px 16px!important;color:var(--f-danger);}
.f50-console #CONN_CLIENT_LIST svg[role=button] {cursor:pointer;min-width:32px;min-height:32px;padding:8px;}
@media(max-width:600px){
 .f50-console .devices-mon .charts {grid-template-columns:minmax(0,1fr)!important;grid-auto-rows:148px;gap:12px;}
 .f50-console .devices-mon .chart {height:148px!important;min-height:148px!important;max-height:148px!important;}
 .f50-speed-reading strong {font-size:56px!important;}
 .f50-speed-display>svg {height:120px;}
 .f50-console #CONN_CLIENT_LIST .card-item {grid-template-columns:minmax(0,1fr);padding:16px!important;gap:12px;}
 .f50-console #CONN_CLIENT_LIST .card-item p {flex-wrap:wrap;}
 .f50-console #CONN_CLIENT_LIST .card-item>div:last-child {text-align:left!important;}
 .f50-console #CONN_CLIENT_LIST .card-item button {min-height:44px;}
}

/* Native status HTML is replaced every tick. Apply field styles before the next paint. */
.f50-console #STATUS,.f50-console #STATUS * {transition:none!important;animation:none!important;transform:none!important;}
.f50-console #STATUS>li>p {overflow:visible!important;grid-auto-rows:96px;}
.f50-console #STATUS .f50-field {height:96px!important;min-height:96px!important;max-height:96px!important;}
.f50-console #STATUS .f50-field-value {width:100%;min-height:0;overflow:hidden;max-height:52px;scrollbar-width:thin;}
.f50-console #CONN_CLIENT_LIST .card-item {background:var(--f-panel)!important;border:1px solid var(--f-border);transform:none!important;transition:none!important;}
.f50-console #CONN_CLIENT_LIST .card-item p {padding:0!important;}
.f50-console #CONN_CLIENT_LIST .f50-client-model>strong {display:block;width:auto;margin:0!important;padding:0!important;transform:none!important;border:0!important;border-radius:0;}
@media(max-width:600px){
 .f50-console #STATUS>li>p {grid-auto-rows:108px;}
 .f50-console #STATUS .f50-field {height:108px!important;min-height:108px!important;max-height:108px!important;}
 .f50-console #STATUS .f50-field-value {max-height:64px;}
}

.f50-speed-details-values {white-space:pre-line;margin:12px 0;font:inherit;line-height:1.8;color:var(--f-muted);}
@media(max-width:600px){
 .f50-console button {min-height:44px!important;font-size:14px!important;}
 .f50-console #STATUS .f50-field-label {font-size:13px!important;}
 .f50-console #STATUS .f50-field-value {font-size:14px!important;}
 .f50-console #CONN_CLIENT_LIST svg[role=button] {min-width:44px;min-height:44px;padding:12px;}
 .f50-console .nice-table {font-size:14px;}
}

#f50-monitor-traffic {display:flex;gap:12px;}
.f50-monitor-download {color:var(--f-download-label);}
.f50-monitor-upload {color:var(--f-upload-label);}
@media(max-width:600px){
 .f50-console .devices-mon .charts {grid-template-columns:repeat(2,minmax(0,1fr))!important;}
 #f50-monitor-traffic {display:block;font-size:14px;line-height:1.3;}
 #f50-monitor-traffic>span {display:block;}
 .f50-console .devices-mon .net-card .f50-monitor-plot {height:52px;min-height:52px;}
 .f50-console .devices-mon .net-card canvas {height:52px!important;}
 .f50-console label:has(input[type=checkbox]),.f50-console label:has(input[type=radio]) {min-height:44px;cursor:pointer;}
 .f50-console input:is([type=checkbox],[type=radio]) {width:18px;height:18px;flex-shrink:0;}
}

.f50-band-check {display:inline-flex;align-items:center;justify-content:center;}
@media(max-width:600px){.f50-band-check {min-width:44px;min-height:44px;}}
@media(min-width:601px) and (max-width:1100px){.f50-console .devices-mon .charts {grid-template-columns:repeat(2,minmax(0,1fr));}}

@media(max-width:600px){.f50-console #STATUS .f50-field[data-f50-wide=true] {grid-column:1/-1;}.f50-console #STATUS .f50-field-value {overflow:hidden;}}


@media(max-width:360px){.f50-console .devices-mon .charts {grid-template-columns:minmax(0,1fr)!important;}}

/* Console 1.3 — bounded settings, readable metrics and shared form/action alignment. */
.f50-console .signal_bar .text {position:static!important;display:block;transform:none!important;line-height:1.5;text-align:center;font-variant-numeric:tabular-nums;}
.f50-console :is(#STATUS,.freq-lock-container) .signal_bar {display:inline-block!important;position:static!important;width:auto!important;min-width:0!important;height:auto!important;padding:0!important;margin:0!important;background:none!important;border:0!important;border-radius:0;overflow:visible!important;vertical-align:baseline;}
.f50-console :is(#STATUS,.freq-lock-container) .signal_bar .text {font:inherit!important;text-align:left;}
.f50-console #STATUS .f50-field-value:has(.signal_bar) {display:block;line-height:1.5;}
.f50-console .f50-page:is(#f50-page-apps,#f50-page-cellular,#f50-page-network,#f50-page-sms,#f50-page-advanced) {max-width:1040px;}
.f50-console .f50-actions,.f50-console .f50-select-row {max-width:960px;}
.f50-console .f50-action-row {padding:16px 20px;gap:24px;}
.f50-console .f50-action-row>div {min-width:0;}
.f50-console .f50-action-row>button:not([aria-pressed]) {width:88px;min-width:88px;}
.f50-console :is(.band-lock-container,.freq-lock-container) {max-width:960px;overflow:visible!important;}
.f50-console :is(.band-lock-container,.freq-lock-container) .collapse_box {overflow:visible!important;}
.f50-table-scroll {width:100%;max-width:100%;min-width:0;overflow-x:auto;border:1px solid var(--f-border);border-radius:6px;scrollbar-width:thin;}
.f50-console .f50-table-scroll .nice-table {margin:0!important;border:0!important;border-radius:0!important;table-layout:fixed;}
.f50-console .f50-table-scroll .nice-table :is(th,td) {padding:12px 14px!important;border-bottom:1px solid var(--f-border)!important;white-space:normal;overflow-wrap:anywhere;line-height:1.5;}
.f50-console .f50-table-scroll .nice-table th {background:var(--f-subtle)!important;font-weight:500;}
.f50-console .f50-table-scroll .nice-table tbody tr:last-child td {border-bottom:0!important;}
.f50-console .band-lock-container .nice-table {min-width:640px;}
.f50-console .band-lock-container .nice-table :is(th,td):first-child {width:48px;text-align:center;padding:4px!important;}
.f50-console .band-lock-container .nice-table th:nth-child(2) {width:76px;}
.f50-console .band-lock-container .nice-table th:nth-child(3) {width:35%;}
.f50-console .band-lock-container .nice-table th:nth-child(4) {width:124px;}
.f50-console .band-lock-container .f50-band-check {min-height:36px;}
.f50-console .freq-lock-container .nice-table {min-width:620px;}
.f50-console .freq-lock-container .nice-table th:first-child {width:76px;}
.f50-console .freq-lock-container .nice-table th:nth-child(2) {width:140px;}
.f50-console .freq-lock-container .nice-table th:nth-child(3) {width:76px;}
.f50-console .freq-lock-container #LOCKED_CELL_FORM {min-width:0;}
.f50-console .freq-lock-container #LOCKED_CELL_FORM th {width:33.333%;}
.f50-console .freq-lock-container .f50-section-heading {display:flex!important;align-items:center;justify-content:space-between;gap:16px;margin:24px 0 12px!important;}
.f50-console .freq-lock-container .f50-section-heading strong {font-size:14px;margin:0!important;}
.f50-console .freq-lock-container [data-i18n=cell_tip] {display:block;font-style:normal;font-size:12px!important;line-height:1.6;color:var(--f-muted);}
.f50-console #cellForm {overflow:visible!important;}
.f50-console .f50-cell-editor {max-width:640px;padding-top:20px;}
.f50-console .f50-cell-choice {padding:0!important;margin:0 0 14px!important;gap:12px;min-height:36px;}
.f50-console .f50-cell-choice>strong {width:104px;flex-shrink:0;font-size:13px;font-weight:400;color:var(--f-muted);}
.f50-console .f50-cell-choice label {gap:6px;margin:0 12px 0 0!important;font-size:13px;}
.f50-console .f50-cell-input {display:grid!important;grid-template-columns:104px minmax(0,1fr) 64px;align-items:center;gap:12px!important;margin:12px 0!important;}
.f50-console .f50-cell-input>label {font-size:13px;color:var(--f-muted);}
.f50-console .f50-cell-input>input {min-width:0;width:100%!important;height:36px;border-radius:5px;}
.f50-console .f50-settings-actions {display:flex!important;justify-content:flex-end;align-items:center;gap:10px;margin:24px 0 0!important;padding:16px 0 0!important;border-top:1px solid var(--f-border)!important;}
.f50-console .f50-settings-actions>button {width:auto!important;min-width:108px;min-height:36px;margin:0!important;padding:8px 16px!important;font-size:13px!important;flex:none;}
.f50-console #DataManagementModal .f50-data-tabs {width:100%!important;display:flex;margin:0 0 24px!important;gap:24px!important;border-bottom:1px solid var(--f-border);}
.f50-console #DataManagementModal .f50-data-tabs>button {flex:none!important;min-width:0;min-height:40px;padding:10px 0!important;margin:0!important;border:0!important;border-bottom:2px solid transparent!important;border-radius:0!important;background:transparent!important;color:var(--f-muted)!important;box-shadow:none!important;}
.f50-console #DataManagementModal .f50-data-tabs>button.active {color:var(--f-blue)!important;border-bottom-color:var(--f-blue)!important;font-weight:500;}
.f50-console #DataManagementModal form {max-width:640px;}
.f50-console .f50-inline-host:has(#DataManagementModal) {max-width:720px;}
.f50-console #DataManagementModal form>.title {display:none!important;}
.f50-console #DataManagementModal .f50-data-form {width:100%!important;max-width:640px!important;padding:0!important;overflow:visible!important;}
.f50-console #DataManagementModal .item {margin:0 0 14px!important;min-height:36px;}
.f50-console #DataManagementModal .f50-form-controls {display:grid!important;grid-template-columns:120px minmax(0,1fr) 80px;align-items:center;gap:12px;min-height:36px;}
.f50-console #DataManagementModal .f50-form-controls>span:first-child {font-size:13px!important;color:var(--f-muted);line-height:1.5;}
.f50-console #DataManagementModal .f50-form-controls>input {margin:0!important;min-width:0;width:100%!important;min-height:36px;height:36px!important;padding:8px 10px!important;}
.f50-console #DataManagementModal .f50-form-controls>select {margin:0!important;width:80px;min-height:36px;height:36px;padding-left:10px!important;}
.f50-console #DataManagementModal .f50-form-suffix {font-size:13px;color:var(--f-muted);padding-left:10px;}
.f50-console #DataManagementModal .f50-form-check {display:grid!important;grid-template-columns:120px minmax(0,1fr);gap:12px;align-items:center;min-height:36px;}
.f50-console #DataManagementModal .f50-form-check>input {margin:0!important;justify-self:start;}
.f50-console #DataManagementModal .f50-form-choice {display:grid!important;grid-template-columns:120px minmax(0,1fr);gap:12px!important;align-items:center;}
.f50-console #DataManagementModal .f50-form-choice>span {font-size:13px!important;color:var(--f-muted);}
.f50-console #DataManagementModal .f50-form-options {display:flex;gap:20px;flex-wrap:wrap;}
.f50-console #DataManagementModal .f50-form-options>label {gap:6px;}
.f50-console #DataManagementModal .f50-form-options input {margin:0!important;}
.f50-console .freq-lock-container .title:has([data-i18n=cell_tip]) {margin:0 0 20px!important;}
.f50-console .freq-lock-container .title:has([data-i18n=cell_tip]) br {display:none;}
.f50-console .f50-inline-host:has(:is(#speedTestModal,#CellularTestModal)) {max-width:720px;}
.f50-console :is(#speedTestModal,#CellularTestModal) .content {overflow:visible!important;}
.f50-console .f50-speed-display {border:0;border-radius:0;margin:0 0 20px;padding-top:12px;}
.f50-console .f50-speed-heading {font-size:16px;padding-top:20px;}
.f50-console .f50-speed-state {inset:-10px 0 auto auto;}
.f50-console .f50-speed-reading {padding:12px 16px 20px;}
.f50-console .f50-speed-display>svg,.f50-console .f50-speed-display[data-state=idle]>svg {display:block;height:160px;}
.f50-console .f50-speed-display>p {border:0;padding:12px 0 0;}
.f50-console .f50-speed-details,.f50-console .f50-speed-options {margin:0;color:var(--f-muted);font-size:13px;border-top:1px solid var(--f-border);}
.f50-console :is(.f50-speed-details,.f50-speed-options)>summary {padding:12px 0;min-height:42px;cursor:pointer;width:fit-content;}
.f50-console .f50-speed-options>.item {margin:0 0 16px!important;}
.f50-console .f50-speed-options label {display:grid!important;grid-template-columns:104px minmax(0,1fr);gap:12px;}
.f50-console .f50-speed-address {margin:18px 0 0;}
.f50-console .f50-speed-address label {display:grid!important;grid-template-columns:104px minmax(0,1fr);gap:12px;align-items:center;font-size:13px!important;color:var(--f-muted);}
.f50-console .f50-speed-address input {min-width:0;width:100%!important;min-height:38px;padding:8px 10px!important;}
.f50-console .f50-speed-address p {margin:8px 0 0 116px;font-size:12px;color:var(--f-muted);line-height:1.6;}
@media(max-width:640px){
 .f50-console .f50-speed-address label {grid-template-columns:minmax(0,1fr);gap:8px;}
 .f50-console .f50-speed-address input {min-height:44px;font-size:16px!important;}
 .f50-console .f50-speed-address p {margin-left:0;}
}
.f50-console .f50-speed-options #ckSize {width:104px!important;flex:none!important;min-height:36px;padding:8px!important;}
.f50-console .f50-speed-options .f50-speed-option-row {display:grid!important;grid-template-columns:104px minmax(0,1fr) 32px;gap:12px;align-items:center;min-height:36px;margin-top:14px!important;color:var(--f-muted);font-size:13px!important;}
.f50-console .f50-speed-option-value {padding:0!important;text-align:right;color:var(--f-text);font-variant-numeric:tabular-nums;}
.f50-console .f50-speed-options input[type=range] {appearance:none;height:36px;min-width:0;width:100%;margin:0;padding:0;border:0!important;background:transparent!important;accent-color:var(--f-blue);cursor:pointer;}
.f50-console .f50-speed-options input[type=range]::-webkit-slider-runnable-track {height:4px;border-radius:2px;background:var(--f-border);}
.f50-console .f50-speed-options input[type=range]::-webkit-slider-thumb {appearance:none;width:16px;height:16px;margin-top:-6px;border:2px solid var(--f-panel);border-radius:50%;background:var(--f-blue);}
.f50-console .f50-speed-options input[type=range]::-moz-range-track {height:4px;border-radius:2px;background:var(--f-border);}
.f50-console .f50-speed-options input[type=range]::-moz-range-progress {height:4px;border-radius:2px;background:var(--f-blue);}
.f50-console .f50-speed-options input[type=range]::-moz-range-thumb {width:12px;height:12px;border:2px solid var(--f-panel);border-radius:50%;background:var(--f-blue);}
.f50-console .modal button.f50-speed-start {min-width:108px;padding:8px 16px;}
@media(max-width:600px){
 .f50-console .f50-action-row {padding:14px;gap:16px;}
 .f50-console .f50-action-row>button:not([aria-pressed]) {width:76px;min-width:76px;}
 .f50-console .f50-settings-actions {flex-wrap:wrap;gap:8px;}
 .f50-console .f50-settings-actions>button {min-height:44px;min-width:0;padding:10px 14px!important;font-size:14px!important;}
 .f50-console .f50-cell-choice>strong {width:70px;}
 .f50-console .f50-cell-input {grid-template-columns:70px minmax(0,1fr) 56px;gap:8px!important;}
 .f50-console .f50-cell-input>input {height:44px;font-size:16px!important;}
 .f50-console .freq-lock-container .f50-section-heading {gap:8px;}
 .f50-console .freq-lock-container .f50-section-heading button {padding:8px!important;}
 .f50-console #DataManagementModal .f50-form-controls {grid-template-columns:88px minmax(0,1fr) 64px;gap:8px;min-height:44px;}
 .f50-console #DataManagementModal .f50-form-controls>input {height:44px!important;font-size:16px!important;}
 .f50-console #DataManagementModal .f50-form-controls>select {width:64px;height:44px;min-height:44px;padding-left:8px!important;padding-right:24px!important;font-size:14px!important;}
 .f50-console #DataManagementModal :is(.f50-form-check,.f50-form-choice) {grid-template-columns:88px minmax(0,1fr);gap:8px!important;min-height:44px;}
 .f50-console #DataManagementModal .f50-form-options {gap:12px;}
 .f50-console #DataManagementModal .item {margin-bottom:12px!important;}
 .f50-console .f50-speed-display>svg,.f50-console .f50-speed-display[data-state=idle]>svg {height:120px;}
 .f50-console :is(.f50-speed-details,.f50-speed-options)>summary {min-height:44px;}
 .f50-console .f50-speed-options #ckSize {height:44px;font-size:16px!important;}
 .f50-console .f50-speed-options .f50-speed-option-row {grid-template-columns:104px minmax(0,1fr) 24px;gap:8px;min-height:44px;}
 .f50-console .f50-speed-options input[type=range] {height:44px;}
}

/* Quiet, consistently sized toolbar controls; mobile keeps a full touch target. */
.f50-console #f50-topbar .f50-header-actions {gap:6px;}
.f50-console #f50-topbar :is(.f50-icon-button,#f50-account) {align-items:center;justify-content:center;gap:7px;flex-shrink:0;height:40px;min-height:40px!important;min-width:40px;margin:0;padding:0!important;border:1px solid transparent!important;border-radius:10px!important;background:transparent!important;color:var(--f-muted)!important;font-size:13px!important;font-weight:500;line-height:1;transform:none;transition:background-color 150ms ease-out,color 150ms ease-out,transform 150ms ease-out!important;}
.f50-console #f50-topbar .f50-header-actions>button {display:inline-flex;}
.f50-console #f50-topbar .f50-icon-button {width:40px;}
.f50-console #f50-topbar #f50-account {padding:0 12px!important;}
.f50-console #f50-topbar :is(.f50-icon-button,#f50-account) .f50-icon {display:block;width:18px;height:18px;pointer-events:none;}
.f50-console #f50-topbar .f50-account-label {pointer-events:none;}
@media(hover:hover){
 .f50-console #f50-topbar :is(.f50-icon-button,#f50-account):hover {background:var(--f-bg)!important;color:var(--f-text)!important;}
}
.f50-console #f50-topbar :is(.f50-icon-button,#f50-account):active {background:var(--f-selected)!important;color:var(--f-text)!important;transform:scale(.96);}
.f50-console #f50-topbar :is(.f50-icon-button,#f50-account):focus-visible {outline:2px solid var(--f-muted)!important;outline-offset:2px;}
@media(max-width:850px){
 .f50-console #f50-topbar :is(.f50-icon-button,#f50-account) {height:44px;min-height:44px!important;min-width:44px;}
 .f50-console #f50-topbar .f50-icon-button {width:44px;}
}
@media(max-width:600px){
 .f50-console #f50-topbar #f50-account {width:44px;padding:0!important;}
 .f50-console #f50-topbar .f50-account-label {display:none;}
 .f50-console #f50-topbar .f50-header-actions {gap:4px;}
 .f50-console #f50-topbar .f50-crumb {gap:6px;min-width:0;}
}
@media(prefers-reduced-motion:reduce){
 .f50-console #f50-topbar :is(.f50-icon-button,#f50-account) {transition:none!important;}
 .f50-console #f50-topbar :is(.f50-icon-button,#f50-account):active {transform:none;}
}

/* Device artwork beside the native management controls. */
.f50-console #CONN_CLIENT_LIST .card-item[data-f50-client] {grid-template-columns:112px minmax(0,1fr) auto;gap:24px;padding:22px!important;}
.f50-client-visual {display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;align-self:start;padding-top:6px;}
.f50-client-picture {display:block;width:112px;height:102px;object-fit:contain;flex-shrink:0;}
.f50-client-type {font-size:11px;line-height:1.4;color:var(--f-muted);text-align:center;}
.f50-console #CONN_CLIENT_LIST .f50-client-details {min-width:0;margin:0!important;}
.f50-console #CONN_CLIENT_LIST .f50-client-name {margin:0 0 2px;gap:8px;}
.f50-console #CONN_CLIENT_LIST .f50-client-name>span:first-child,.f50-console #CONN_CLIENT_LIST .f50-client-ip>span:first-child {display:none;}
.f50-console #CONN_CLIENT_LIST .f50-client-name>span:nth-child(2) {font-size:17px;line-height:1.4;min-width:0;}
.f50-console #CONN_CLIENT_LIST .f50-client-name svg[role=button] {margin-left:0!important;flex-shrink:0;}
.f50-console #CONN_CLIENT_LIST .f50-client-ip {margin:0 0 14px;color:var(--f-muted);font-variant-numeric:tabular-nums;}
.f50-console #CONN_CLIENT_LIST .f50-client-details>p>span:nth-child(2) {min-width:0;overflow-wrap:anywhere;}
.f50-console #CONN_CLIENT_LIST .f50-client-model {gap:8px 12px;margin:10px 0 12px;}
.f50-console #CONN_CLIENT_LIST .f50-client-model>button {margin-left:4px;}
.f50-console #CONN_CLIENT_LIST .f50-client-editor {display:grid;grid-template-columns:minmax(0,1fr) minmax(140px,.7fr);gap:12px;margin-top:8px;padding:16px;background:var(--f-bg);border:1px solid var(--f-border);border-radius:8px;}
.f50-client-editor label {display:flex;flex-direction:column;gap:6px;min-width:0;font-size:12px;color:var(--f-muted);}
.f50-console .f50-client-editor input,.f50-console .f50-client-editor select {width:100%;min-width:0;max-width:none;min-height:40px;margin:0;}
.f50-client-editor small,.f50-client-save-error {grid-column:1/-1;font-size:12px;color:var(--f-muted);}
.f50-client-save-error {color:var(--f-danger);}
.f50-console #CONN_CLIENT_LIST .f50-client-editor>button {justify-self:start;min-width:76px;}
@media(max-width:760px){
 .f50-console #CONN_CLIENT_LIST .card-item[data-f50-client] {grid-template-columns:76px minmax(0,1fr);gap:16px;padding:16px!important;}
 .f50-client-picture {width:76px;height:82px;}
 .f50-console #CONN_CLIENT_LIST .card-item[data-f50-client]>div:last-child {grid-column:2;text-align:left!important;}
 .f50-console #CONN_CLIENT_LIST .f50-client-name {flex-wrap:nowrap;}
 .f50-console #CONN_CLIENT_LIST .f50-client-name>span:nth-child(2) {font-size:16px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-details>p {gap:4px 8px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-details>p>span:first-child,.f50-console #CONN_CLIENT_LIST .f50-client-model>span {min-width:64px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-model {gap:4px 8px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-model>button {margin-left:0;padding-left:0;min-height:44px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-editor {grid-template-columns:minmax(0,1fr);padding:12px;}
 .f50-console #CONN_CLIENT_LIST .f50-client-editor>button {justify-self:stretch;}
 .f50-console #CONN_CLIENT_LIST .f50-client-name svg[role=button] {min-width:44px;min-height:44px;padding:14px;}
 .f50-console .f50-client-editor input,.f50-console .f50-client-editor select {min-height:44px;}
}
@media(max-width:360px){
 .f50-console #CONN_CLIENT_LIST .card-item[data-f50-client] {grid-template-columns:60px minmax(0,1fr);gap:10px;padding:12px!important;}
 .f50-client-picture {width:60px;height:74px;}
}

/* Operation dialogs share viewport centering, including legacy interactive toasts. */
.f50-console .modal:not([data-f50-inline]),.f50-console dialog {
 position:fixed!important;inset:auto!important;top:50%!important;left:50%!important;
 margin:0!important;transform:translate(-50%,-50%)!important;
 max-width:calc(100vw - 32px)!important;max-height:calc(100dvh - 48px)!important;
 height:auto!important;overflow:auto!important;box-shadow:none!important;
}
.f50-console #toastContainer {transform:none!important;}
.f50-console .toastkano.f50-action-dialog {
 position:fixed!important;inset:auto!important;top:50%!important;left:50%!important;
 transform:translate(-50%,-50%)!important;transform-origin:center!important;
 width:min(440px,calc(100vw - 32px))!important;max-width:calc(100vw - 32px)!important;
 max-height:calc(100dvh - 48px)!important;overflow:auto!important;
 padding:24px!important;border:1px solid var(--f-border)!important;border-radius:10px!important;
 background:var(--f-panel)!important;color:var(--f-text)!important;pointer-events:auto;
 font-weight:400!important;box-shadow:none!important;transition:opacity 160ms ease!important;
}
.f50-console .f50-action-dialog>div {width:100%!important;max-width:none!important;min-width:0;}
.f50-console .f50-action-dialog .title {font-size:18px!important;font-weight:600;line-height:1.4;margin:0 0 16px!important;}
.f50-console .f50-action-dialog :is(input,textarea,select) {max-width:100%;border-radius:6px;min-height:40px;}
.f50-console .f50-action-dialog :is(input[type=checkbox],input[type=radio]) {min-height:0;}
.f50-console .f50-action-dialog input:disabled {color:var(--f-muted)!important;background:var(--f-bg)!important;}
.f50-console body:has(.f50-action-dialog)::after {content:"";position:fixed;inset:0;background:#10182855;z-index:9999;pointer-events:auto;}
@media(max-width:600px){
 .f50-console .modal:not([data-f50-inline]),.f50-console dialog,.f50-console .toastkano.f50-action-dialog {max-height:calc(100dvh - 32px)!important;}
 .f50-console .toastkano.f50-action-dialog {padding:20px!important;}
 .f50-console .f50-action-dialog :is(input:not([type=checkbox]):not([type=radio]),textarea,select) {min-height:44px;font-size:16px!important;}
}

/* System details: compact groups, with room for long live values. */
.f50-console #f50-page-system .status-container {overflow:visible!important;}
.f50-console .f50-page .status-container>.f50-status-header {display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 4px!important;}
.f50-console .f50-status-header>strong {font-size:15px!important;flex-shrink:0;}
.f50-console .f50-status-tools {display:flex!important;align-items:center;gap:8px;margin:0!important;}
.f50-console .f50-status-tools :is(button,select) {margin:0!important;padding:6px 10px!important;min-height:34px;}
.f50-console .f50-status-tools select {width:88px!important;}
.f50-console #STATUS {margin:0!important;padding:0!important;}
.f50-console #STATUS>.title {margin:20px 0 4px!important;padding:0 12px!important;line-height:24px;font-size:12px!important;font-weight:600;color:var(--f-muted);}
.f50-console #STATUS>li>p {grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:minmax(68px,auto)!important;align-items:stretch;}
.f50-console #STATUS .f50-field {height:auto!important;min-height:68px!important;max-height:none!important;padding:10px 12px!important;gap:3px;line-height:1.45;overflow:visible!important;}
.f50-console #STATUS .f50-field-label {font-size:12px!important;line-height:18px;color:var(--f-muted)!important;}
.f50-console #STATUS .f50-field-value {font-size:14px!important;line-height:21px;max-height:none!important;overflow:visible!important;overflow-wrap:anywhere;font-weight:550;}
.f50-console #STATUS .f50-field[data-f50-wide=true] {grid-column:auto;}
.f50-console #STATUS .f50-field[data-f50-long=true] {grid-column:span 2;}
.f50-console #STATUS .f50-field-unit {font-size:11px!important;font-weight:400;color:var(--f-muted)!important;margin-left:5px;}
.f50-console #STATUS [hidden] {display:none!important;}
@media(hover:hover){.f50-console #STATUS .f50-field[onclick]:hover {background:var(--f-bg)!important;cursor:pointer;}}
@media(min-width:1400px){.f50-console #STATUS>li>p {grid-template-columns:repeat(4,minmax(0,1fr))!important;}}
@media(max-width:1000px){.f50-console #STATUS>li>p {grid-template-columns:repeat(2,minmax(0,1fr))!important;}.f50-console #STATUS .f50-field[data-f50-wide=true] {grid-column:span 2;}}
@media(max-width:600px){
 .f50-console .f50-page .status-container {padding:16px!important;}
 .f50-console .f50-page .status-container>.f50-status-header {align-items:flex-start;gap:10px;}
 .f50-console .f50-status-tools {width:100%;}
 .f50-console .f50-status-tools :is(button,select) {min-height:40px;padding:6px 8px!important;}
 .f50-console .f50-status-tools select {margin-left:auto!important;}
 .f50-console #STATUS>.title {padding:0 4px!important;margin-top:16px!important;}
 .f50-console #STATUS .f50-field {padding:10px 4px!important;min-height:68px!important;}
}

/* Field chooser reuses the native inputs, persistence and drag ordering. */
.f50-console #dictionaryModal.f50-field-dialog {width:min(640px,calc(100vw - 32px))!important;max-width:calc(100vw - 32px)!important;padding:24px!important;overflow:hidden!important;z-index:10000;}
.f50-console body:has(#dictionaryModal:not([style*="display: none"]):not([style*="display:none"]))::after {content:"";position:fixed;inset:0;background:#10182838;z-index:9999;pointer-events:auto;}
.f50-console #dictionaryModal>.title {margin:0!important;font-size:18px!important;line-height:26px;}
.f50-console #dictionaryModal .f50-field-note {margin:8px 0 18px!important;line-height:20px;font-size:12px!important;color:var(--f-muted);}
.f50-console .f50-field-tabs {display:flex;flex-shrink:0;border-bottom:1px solid var(--f-border);gap:20px;}
.f50-console .f50-field-tabs>button {display:flex;align-items:center;gap:6px;position:relative;border:0!important;border-radius:0!important;background:transparent!important;margin:0!important;padding:9px 0!important;min-height:38px;color:var(--f-muted);white-space:nowrap;}
.f50-console .f50-field-tabs>button[aria-selected=true] {color:var(--f-blue);font-weight:600;}
.f50-console .f50-field-tabs>button[aria-selected=true]::after {content:"";position:absolute;inset:auto 0 -1px;height:2px;background:var(--f-blue);}
.f50-console .f50-field-tab-count {font-size:11px;color:var(--f-muted);font-variant-numeric:tabular-nums;}
.f50-console .f50-field-group-tools {display:flex;align-items:center;gap:12px;min-height:48px;flex-shrink:0;font-size:12px;color:var(--f-muted);}
.f50-console .f50-field-group-tools>span {margin-right:auto;}
.f50-console .f50-field-group-tools>button {border:0!important;background:transparent!important;color:var(--f-blue);padding:4px 0!important;min-height:32px;font-size:12px!important;}
.f50-console #dictionaryModal #DIC_LIST {display:block!important;align-items:normal;padding:0!important;margin:0!important;height:360px;max-height:min(360px,calc(100dvh - 300px))!important;flex:0 1 auto;overflow-x:hidden!important;overflow-y:auto!important;scrollbar-width:thin;overscroll-behavior:contain;}
.f50-console #dictionaryModal .f50-field-native-heading {display:none!important;}
.f50-console #dictionaryModal #DIC_LIST>ul {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-content:start;gap:4px 12px;width:100%!important;margin:0!important;padding:0!important;}
.f50-console #dictionaryModal #DIC_LIST>ul[hidden] {display:none!important;}
.f50-console #dictionaryModal #DIC_LIST li {width:100%!important;max-width:none!important;margin:0!important;padding:0!important;min-width:0;list-style:none;background:transparent!important;border:0!important;border-radius:5px;}
.f50-console #dictionaryModal #DIC_LIST label {display:flex;align-items:center;gap:9px;width:100%;min-height:36px;margin:0!important;padding:7px 9px!important;font-size:13px;line-height:20px;cursor:pointer;color:var(--f-text)!important;}
.f50-console #dictionaryModal #DIC_LIST li:has(input:checked) {background:var(--f-bg)!important;}
.f50-console #dictionaryModal #DIC_LIST input[type=checkbox] {width:15px!important;height:15px!important;min-height:0!important;padding:0!important;margin:0!important;flex-shrink:0;accent-color:var(--f-blue);}
.f50-console #dictionaryModal>.btn:last-child {position:static;margin:16px -24px -24px!important;padding:14px 24px!important;align-items:center;flex-shrink:0;}
.f50-console .f50-field-total {margin-right:auto;font-size:12px;color:var(--f-muted);font-variant-numeric:tabular-nums;}
@media(max-width:600px){
 .f50-console #dictionaryModal.f50-field-dialog {padding:20px!important;}
 .f50-console #dictionaryModal .f50-field-note {margin:6px 0 12px!important;}
 .f50-console .f50-field-tabs {gap:16px;}
 .f50-console .f50-field-tabs>button {min-height:44px;gap:4px;font-size:12px!important;}
 .f50-console #dictionaryModal #DIC_LIST>ul {gap:4px 8px;}
 .f50-console #dictionaryModal #DIC_LIST label {min-height:44px;padding:6px!important;gap:7px;font-size:12px;}
 .f50-console #dictionaryModal>.btn:last-child {margin:14px -20px -20px!important;padding:12px 20px!important;gap:6px;}
 .f50-console #dictionaryModal>.btn>button {padding:6px 8px!important;font-size:12px!important;}
}

/* Conversation workspace: native SMS transport and confirmation controls retained. */
.f50-console .f50-inline-host:has(#smsList) {max-width:none;}
.f50-console #f50-page-sms {max-width:1200px!important;}
.f50-console #f50-page-sms .f50-page-heading {display:flex;align-items:center;justify-content:space-between;gap:16px;}
.f50-console .f50-inline-host #smsList.f50-messages {display:grid!important;grid-template-columns:280px minmax(0,1fr);height:clamp(480px,72dvh,760px)!important;min-height:0!important;padding:0!important;overflow:hidden!important;border-radius:14px!important;}
.f50-console #smsList.f50-messages[style*="display: none"] {display:none!important;}
.f50-console #smsList.f50-messages>.title {display:none!important;}
.f50-console .f50-conversations {min-width:0;display:flex;flex-direction:column;background:var(--f-bg);border-right:1px solid var(--f-border);overflow:hidden;}
.f50-console .f50-conversation-toolbar {display:flex;align-items:center;justify-content:space-between;padding:22px 20px 16px;gap:16px;}
.f50-console .f50-conversation-toolbar h2 {margin:0;font-size:23px;line-height:1.3;font-weight:650;letter-spacing:-.6px;}
.f50-console .f50-conversation-count {display:block;margin-top:4px;color:var(--f-muted);font-size:12px;}
.f50-console .f50-new-message {width:38px;min-width:38px;height:38px;padding:8px!important;border:0!important;border-radius:50%!important;background:transparent!important;color:var(--f-blue)!important;}
.f50-console .f50-new-message svg {width:22px;height:22px;}
.f50-console .f50-message-search {margin:0 16px 16px;display:flex;align-items:center;gap:8px;background:var(--f-panel);border:1px solid var(--f-border);border-radius:9px;padding:0 10px;}
.f50-console .f50-message-search>svg {width:17px;height:17px;flex:none;color:var(--f-muted);}
.f50-console .f50-message-search .sr-only {position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;}
.f50-console .f50-message-search input {width:100%;min-width:0;height:36px;border:0!important;background:transparent!important;padding:6px 0!important;font-size:13px!important;outline-offset:1px!important;}
.f50-console .f50-thread-list {padding:0 8px 16px;overflow-y:auto;min-height:0;}
.f50-console button.f50-thread {display:flex;width:100%;gap:12px;align-items:center;text-align:left;padding:15px 12px!important;margin:2px 0!important;border:0!important;border-radius:10px!important;background:transparent!important;min-height:82px;}
.f50-console button.f50-thread[aria-pressed=true] {background:var(--f-selected)!important;}
.f50-console button.f50-thread:hover {background:var(--f-panel)!important;}
.f50-console button.f50-thread[aria-pressed=true]:hover {background:var(--f-selected)!important;}
.f50-console .f50-contact-avatar {display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;flex:none;background:var(--f-selected);color:var(--f-blue);font-size:14px;font-weight:600;font-variant-numeric:tabular-nums;}
.f50-console .f50-thread-copy {display:flex;flex-direction:column;gap:6px;min-width:0;flex:1;}
.f50-console .f50-thread-heading {display:flex;align-items:center;gap:8px;justify-content:space-between;min-width:0;}
.f50-console .f50-thread-heading strong {font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;}
.f50-console .f50-thread-heading time {font-size:10px;font-variant-numeric:tabular-nums;flex:none;color:var(--f-muted);}
.f50-console .f50-thread-preview {display:block;font-size:12px;color:var(--f-muted);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:1.5;}
.f50-console .f50-thread-empty {font-size:13px;color:var(--f-muted);text-align:center;padding:24px 12px;}
.f50-console .f50-message-chat {min-width:0;min-height:0;display:flex;flex-direction:column;background:var(--f-panel);}
.f50-console .f50-chat-header {display:flex;align-items:center;gap:12px;min-height:82px;border-bottom:1px solid var(--f-border);padding:16px 24px;}
.f50-console .f50-chat-contact {min-width:0;}
.f50-console .f50-chat-contact h2 {font-size:15px;line-height:1.5;font-weight:600;margin:0;overflow-wrap:anywhere;}
.f50-console .f50-chat-contact p {font-size:12px;color:var(--f-muted);margin:2px 0 0;}
.f50-console .f50-chat-back {display:none;}
.f50-console #smsList.f50-messages .f50-message-recipient {flex:none;margin:0!important;border:0!important;border-bottom:1px solid var(--f-border)!important;border-radius:0!important;padding:12px 24px!important;background:transparent!important;}
.f50-console .f50-message-recipient>span {font-size:13px;color:var(--f-muted);flex:none;}
.f50-console #smsList.f50-messages .f50-message-recipient input {background:transparent!important;border:0!important;padding:0!important;height:36px;}
.f50-console #smsList.f50-messages .content {flex:1;min-height:0!important;max-height:none!important;width:100%!important;margin:0!important;padding:0!important;overflow:auto!important;overscroll-behavior:contain;}
.f50-console #sms-list {list-style:none;margin:0;padding:24px!important;display:flex;flex-direction:column;gap:14px;min-height:100%;}
.f50-console #smsList.f50-messages #sms-list .sms-item {position:relative;flex:none;display:flex;flex-direction:column;width:fit-content!important;min-width:90px;max-width:85%!important;margin:0!important;padding:0!important;background:transparent!important;border:0!important;border-radius:0!important;align-self:flex-start;overflow:visible!important;}
.f50-console #smsList.f50-messages #sms-list .sms-item[data-direction=outgoing] {align-self:flex-end;}
.f50-console #smsList.f50-messages .sms-item .f50-message-sender {display:none!important;}
.f50-console #smsList.f50-messages .sms-item .f50-message-bubble {margin:0!important;padding:11px 16px!important;border-radius:17px 17px 17px 5px;background:var(--f-bg)!important;color:var(--f-text)!important;font-size:14px!important;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;word-break:break-word;}
.f50-console #smsList.f50-messages .sms-item[data-direction=outgoing] .f50-message-bubble {border-radius:17px 17px 5px 17px;background:#087afa!important;color:#fff!important;}
.f50-console #smsList.f50-messages .sms-item .f50-message-time {text-align:left!important;margin:5px 4px 0!important;font-size:11px!important;color:var(--f-muted)!important;line-height:1.5;}
.f50-console #smsList.f50-messages .sms-item[data-direction=outgoing] .f50-message-time {text-align:right!important;}
.f50-console .f50-message-day {align-self:center;list-style:none;margin:2px 0 10px;color:var(--f-muted);font-size:11px;line-height:1.5;flex:none;}
.f50-console .f50-message-actions {position:absolute;top:6px;right:-34px;}
.f50-console .f50-message-more {width:30px;height:30px;min-height:30px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;font-size:11px!important;color:var(--f-muted)!important;letter-spacing:1px;}
.f50-console .sms-item[data-direction=outgoing] .f50-message-actions {right:auto;left:-34px;}
.f50-console #smsList.f50-messages .sms-item>.f50-native-message-action {display:none!important;position:relative!important;inset:auto!important;width:32px!important;height:32px!important;min-width:32px;align-self:flex-start;margin:4px 0 0!important;padding:8px;border-radius:6px;color:var(--f-muted);cursor:pointer;}
.f50-console #smsList.f50-messages .sms-item[data-actions=open]>.f50-native-message-action {display:flex!important;align-items:center;justify-content:center;}
.f50-console #smsList.f50-messages .sms-item>.f50-native-message-action>svg {position:static!important;width:16px!important;height:16px!important;fill:currentColor!important;}
.f50-console #smsList.f50-messages .sms-item>.f50-native-message-action>span {position:absolute!important;left:38px;right:auto!important;top:0!important;min-width:130px!important;width:130px!important;padding:7px!important;font-size:12px;background:var(--f-panel)!important;border:1px solid var(--f-border);color:#c63737!important;z-index:1;}
.f50-console .f50-chat-welcome {flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--f-muted);padding:32px;}
.f50-console .f50-chat-welcome>.f50-icon {width:48px;height:48px;color:var(--f-blue);stroke-width:1.3;margin-bottom:20px;}
.f50-console .f50-chat-welcome h3 {color:var(--f-text);font-size:19px;font-weight:550;margin:0 0 10px;}
.f50-console .f50-chat-welcome p {font-size:13px;line-height:1.7;margin:0;}
.f50-console #smsList.f50-messages .f50-message-composer {flex:none;display:flex!important;flex-wrap:nowrap!important;align-items:flex-end!important;padding:8px 10px 8px 16px!important;margin:16px 24px 0!important;border:1px solid var(--f-border)!important;border-radius:24px!important;background:var(--f-bg)!important;gap:8px;}
.f50-console #smsList.f50-messages textarea#SMSInput {display:block;resize:none;border:0!important;flex:1;width:100%!important;min-width:0;max-height:120px;line-height:24px;font-size:14px!important;padding:8px 0!important;margin:0!important;background:transparent!important;border-radius:0!important;}
.f50-console #smsList.f50-messages .f50-message-composer>.btn {width:auto!important;min-width:40px!important;display:flex!important;margin:0!important;padding:0!important;}
.f50-console #smsList.f50-messages .f50-message-send {display:flex;align-items:center;justify-content:center;min-height:40px!important;width:40px!important;height:40px!important;border:0!important;border-radius:50%!important;padding:10px!important;margin:0!important;}
.f50-console .f50-composer-hint {flex:none;display:flex;justify-content:space-between;font-size:10px;color:var(--f-muted);margin:8px 36px 16px;line-height:1.5;}
.f50-console #smsList.f50-messages [hidden] {display:none!important;}
@media(max-width:700px){
 .f50-console .f50-inline-host #smsList.f50-messages {grid-template-columns:minmax(0,1fr);height:calc(100dvh - 202px)!important;min-height:380px!important;border-radius:12px!important;}
 .f50-console #smsList.f50-messages:not([data-mobile-view=chat]) .f50-message-chat {display:none;}
 .f50-console #smsList.f50-messages[data-mobile-view=chat] .f50-conversations {display:none;}
 .f50-console .f50-conversations {border-right:0;}
 .f50-console .f50-chat-header {padding:14px 16px;min-height:76px;gap:10px;}
 .f50-console .f50-chat-back {display:flex;align-items:center;justify-content:center;width:32px;min-width:32px;min-height:44px;border:0;padding:5px;margin-left:-6px;background:transparent;}
 .f50-console .f50-chat-back svg {width:22px;height:22px;}
 .f50-console #sms-list {padding:20px!important;}
 .f50-console #smsList.f50-messages #sms-list .sms-item {max-width:85%!important;}
 .f50-console #smsList.f50-messages .f50-message-composer {margin:12px 14px 0!important;}
 .f50-console .f50-composer-hint {margin:7px 24px 12px;}
 .f50-console #smsList.f50-messages textarea#SMSInput {font-size:16px!important;}
 .f50-console #smsList.f50-messages .f50-message-recipient {padding:10px 20px!important;}
 .f50-console .f50-new-message {min-height:44px!important;width:44px;height:44px;}
 .f50-console .f50-thread-heading strong {font-size:14px;}
 .f50-console .f50-thread-heading time {font-size:11px;}
 .f50-console .f50-thread-preview {font-size:13px;}
 .f50-console .f50-message-search input {height:40px;font-size:16px!important;}
 .f50-console .f50-message-more {min-height:36px!important;width:32px;height:36px;}
}

/* Forwarding preferences: status, destination and readable advanced configuration. */
.f50-console .f50-inline-host:has(#smsForwardModal) {max-width:880px;}
.f50-console .f50-forward-settings>.title {margin:0!important;}
.f50-console .f50-forward-intro {font-size:13px;color:var(--f-muted);line-height:1.7;margin:8px 0 26px;}
.f50-console .f50-forward-status {display:flex;justify-content:space-between;align-items:center;gap:20px;padding:0 0 22px;margin-bottom:6px;border-bottom:1px solid var(--f-border);}
.f50-console .f50-forward-status-heading {display:flex;align-items:center;gap:12px;}
.f50-console .f50-forward-status strong,.f50-console .f50-forward-preference strong {font-size:14px;font-weight:550;}
.f50-console .f50-forward-status p,.f50-console .f50-forward-preference p {font-size:12px;color:var(--f-muted);margin:6px 0 0;line-height:1.6;}
.f50-console #collapse_smsforward_btn {flex:none;margin:0!important;display:flex!important;align-items:center;}
.f50-console :is(#collapse_smsforward_btn,#collapse_smsforward_power_status_btn) .Switch {display:flex;align-items:center;}
.f50-console :is(#collapse_smsforward_btn,#collapse_smsforward_power_status_btn) label {margin:0;}
.f50-console :is(#collapse_smsforward_btn,#collapse_smsforward_power_status_btn) .Switch .text:empty {display:none;}
.f50-console #smsForwardModal .f50-forward-tabs {display:flex!important;gap:24px!important;margin:14px 0 0!important;width:100%!important;border-bottom:1px solid var(--f-border);}
.f50-console #smsForwardModal .f50-forward-tabs>button {flex:none!important;min-width:0;min-height:46px;padding:12px 0!important;margin:0!important;border:0!important;border-bottom:2px solid transparent!important;border-radius:0!important;background:transparent!important;color:var(--f-muted)!important;font-size:13px!important;}
.f50-console #smsForwardModal .f50-forward-tabs>button.active {border-bottom-color:var(--f-blue)!important;color:var(--f-blue)!important;font-weight:550;}
.f50-console #smsForwardModal #collapse_smsforward {height:auto!important;overflow:visible!important;transition:none!important;}
.f50-console #smsForwardModal .collapse_box>div:empty {display:none!important;}
.f50-console #smsForwardModal form .content {width:100%!important;max-width:none!important;margin:0!important;padding:24px 0 0!important;font-size:13px;}
.f50-console .f50-forward-destination {display:flex;align-items:flex-start;gap:16px;padding:4px 0 24px;}
.f50-console .f50-forward-service-icon {width:44px;height:44px;flex:none;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--f-selected);color:var(--f-blue);}
.f50-console .f50-forward-service-icon svg {width:25px;height:25px;}
.f50-console .f50-forward-destination>div {min-width:0;}
.f50-console .f50-forward-destination>div>span {font-size:11px;color:var(--f-muted);}
.f50-console .f50-forward-destination h3 {font-size:18px;font-weight:600;line-height:1.4;margin:3px 0 6px;}
.f50-console .f50-forward-destination p {font-size:13px;color:var(--f-muted);line-height:1.7;margin:0;}
.f50-console .f50-forward-advanced {border:1px solid var(--f-border);border-radius:8px;padding:0 18px;margin:0 0 26px;}
.f50-console .f50-forward-advanced>summary {padding:16px 0;cursor:pointer;min-height:52px;font-size:13px;font-weight:500;}
.f50-console .f50-forward-command-label {display:block;margin:8px 0 6px;font-size:13px;font-weight:500;}
.f50-console .f50-forward-help {font-size:12px;color:var(--f-muted);line-height:1.7;margin:6px 0 12px;}
.f50-console #smsForwardModal textarea#curl_text {font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;font-size:12px!important;line-height:1.8;width:100%!important;height:156px!important;min-height:120px;max-height:420px;padding:12px!important;resize:vertical;overflow-wrap:anywhere;white-space:pre-wrap;background:var(--f-bg);border-radius:6px;}
.f50-console .f50-forward-reference {border-top:1px solid var(--f-border);padding:0;font-size:12px;}
.f50-console .f50-forward-reference>summary {padding:13px 0;cursor:pointer;color:var(--f-muted);min-height:44px;}
.f50-console .f50-forward-reference .title {font-size:12px!important;font-weight:400!important;line-height:1.8;overflow-wrap:anywhere;user-select:text;color:var(--f-muted);padding:0 0 12px;}
.f50-console .f50-forward-templates {grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;margin:8px 0 16px!important;}
.f50-console .f50-forward-templates button {font-size:12px!important;min-height:38px;padding:8px!important;}
.f50-console #smsForwardModal .f50-settings-actions {margin:12px 0 18px!important;padding-top:16px!important;}
.f50-console .f50-forward-preferences {border-top:1px solid var(--f-border);padding-top:22px;}
.f50-console .f50-forward-preferences>h3 {font-size:12px;color:var(--f-muted);font-weight:500;margin:0 0 4px;}
.f50-console .f50-forward-preference {display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 0;border-bottom:1px solid var(--f-border);}
.f50-console .f50-forward-preference:last-child {border:0;padding-bottom:0;}
.f50-console .f50-forward-preference>div:first-child {min-width:0;}
.f50-console .f50-forward-preference>button {width:auto!important;min-width:92px;flex:none!important;margin:0!important;background:transparent;}
.f50-console #collapse_smsforward_power_status_btn {margin:0!important;padding:0!important;flex:none;}
.f50-console #smsForwardModal .f50-forward-field {display:grid!important;grid-template-columns:120px minmax(0,1fr);gap:16px;align-items:center;min-width:0;}
.f50-console #smsForwardModal .f50-forward-field>span {position:static!important;font-size:13px!important;width:auto!important;min-width:0!important;line-height:20px;color:var(--f-muted);}
.f50-console #smsForwardModal .f50-forward-field>input {width:100%!important;min-width:0;min-height:38px;padding:8px 10px!important;border-radius:6px;}
.f50-console #smsForwardModal .f50-forward-check {display:flex!important;flex-direction:row-reverse;justify-content:flex-end;align-items:center;gap:10px;font-size:13px!important;}
.f50-console #smsForwardModal form .content>.title {font-size:12px!important;font-weight:400;line-height:1.8;margin:0 0 20px;color:var(--f-muted);}
@media(max-width:600px){
 .f50-console #smsForwardModal .f50-forward-tabs {gap:20px!important;}
 .f50-console #smsForwardModal .f50-forward-tabs>button {font-size:12px!important;white-space:nowrap;}
 .f50-console .f50-forward-intro {margin-bottom:22px;}
 .f50-console .f50-forward-status {gap:12px;}
 .f50-console .f50-forward-status-heading {gap:8px;flex-wrap:wrap;}
 .f50-console .f50-forward-preference {gap:16px;}
 .f50-console .f50-forward-preference>button {min-width:80px;min-height:44px;padding:8px 10px!important;}
 .f50-console .f50-forward-preference p {font-size:11px;}
 .f50-console .f50-forward-advanced {padding:0 14px;}
 .f50-console #smsForwardModal .f50-forward-field {grid-template-columns:minmax(0,1fr);gap:8px;}
 .f50-console #smsForwardModal .f50-forward-field>input {min-height:44px;font-size:16px!important;}
 .f50-console #smsForwardModal textarea#curl_text {font-size:13px!important;}
 .f50-console .f50-forward-service-icon {width:40px;height:40px;border-radius:10px;}
 .f50-console .f50-forward-destination {gap:12px;}
}

/* Focus stays within field borders; composite message fields share one rounded ring. */
.f50-console .Switch .outer {position:relative;align-items:center;min-height:36px;cursor:pointer;}
.f50-console .Switch .outer input[type=checkbox] {display:block!important;position:absolute!important;width:1px!important;height:1px!important;min-height:0!important;margin:-1px!important;padding:0!important;border:0!important;clip-path:inset(50%);overflow:hidden;white-space:nowrap;}
.f50-console .Switch .outer input:focus-visible {outline:none!important;}
.f50-console .Switch .outer:has(input:focus-visible) .switch {outline:2px solid var(--f-blue)!important;outline-offset:3px;}
@media(max-width:600px){.f50-console .Switch .outer {min-height:44px;}}
.f50-console :is(input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=hidden]),textarea,select):focus {
 outline:none!important;border-color:var(--f-blue)!important;box-shadow:inset 0 0 0 1px var(--f-blue)!important;
}
.f50-console #smsList.f50-messages :is(.f50-message-composer,.f50-message-search):focus-within {
 border-color:var(--f-blue)!important;box-shadow:inset 0 0 0 1px var(--f-blue)!important;
}
.f50-console #smsList.f50-messages :is(textarea#SMSInput,.f50-message-search input,.f50-message-recipient input):focus {
 outline:none!important;border:0!important;box-shadow:none!important;
}
.f50-console #smsList.f50-messages .f50-message-recipient:focus-within {border-bottom-color:var(--f-blue)!important;}
.f50-console #smsForwardModal .f50-forward-field {overflow:visible!important;}
.f50-console #smsForwardModal .f50-forward-field>input {margin:0!important;}

/* Filled actions share one accessible blue/white pair in both themes.
   Link, tab and switch colors continue to follow the theme accent. */
.f50-console :is(
 button.f50-primary,
 .modal button.f50-speed-start,
 button[style*="--dark-btn-color-active"],
 button.active:not(.tab-btn):not([role=tab]),
 #CONN_CLIENT_LIST .f50-client-editor>button[type=submit],
 #smsList.f50-messages .f50-message-composer .f50-message-send
):not(.f50-danger) {
 background:var(--f-button-fill,var(--f-button-bg))!important;
 border-color:var(--f-button-fill,var(--f-button-bg))!important;
 color:var(--f-button-foreground,var(--f-button-text))!important;
 opacity:1;
}
@media(hover:hover){
 .f50-console button:hover:not(:disabled) {--f-button-fill:var(--f-button-hover);}
}
.f50-console button:active:not(:disabled) {--f-button-fill:var(--f-button-active);}
.f50-console button:disabled {--f-button-fill:var(--f-border);--f-button-foreground:var(--f-muted);}
.f50-console :is(button.f50-primary,button.f50-speed-start,button.f50-message-send,button[style*="--dark-btn-color-active"]):focus-visible {outline-offset:3px;}

.f50-console .f50-unread-dot {display:inline-block;width:7px;height:7px;min-width:7px;border-radius:50%;background:#e44848;flex:none;vertical-align:middle;}
.f50-console .f50-unread-dot[hidden] {display:none!important;}
.f50-console .f50-nav>.f50-unread-dot {margin-left:auto;}
.f50-console #f50-page-sms h1>.f50-unread-dot {margin-left:10px;}
.f50-console .f50-thread-heading>.f50-unread-dot {margin-left:1px;}
.f50-console .f50-thread[data-unread=true] .f50-thread-preview {color:var(--f-text);font-weight:550;}
.f50-console .f50-menu-toggle[data-sms-unread=true] {position:relative;}
.f50-console .f50-menu-toggle[data-sms-unread=true]::after {content:'';position:absolute;right:5px;top:6px;width:6px;height:6px;background:#e44848;border-radius:50%;}
@media(max-width:360px){.f50-console #smsForwardModal .f50-forward-tabs {gap:12px!important;}.f50-console #smsForwardModal .f50-forward-tabs>button {font-size:11px!important;}}

/* Shared transient feedback and operation-dialog layout. */
.f50-console .toastkano.f50-action-dialog {z-index:10001;scroll-padding:20px;overscroll-behavior:contain;}
.f50-console .f50-action-dialog .f50-dialog-description {font-size:13px;line-height:1.7;color:var(--f-muted);margin:0 0 20px;}
.f50-console .f50-action-dialog .f50-dialog-field-label {display:block!important;font-size:13px!important;line-height:20px!important;font-weight:500!important;color:var(--f-text)!important;margin:16px 0 8px!important;}
.f50-console .f50-action-dialog :is(input:not([type=checkbox]):not([type=radio]),textarea,select) {display:block;width:100%!important;margin:0!important;padding:10px 12px!important;line-height:1.6;}
.f50-console .f50-action-dialog textarea {resize:vertical;min-height:92px!important;max-height:220px;}
.f50-console .f50-action-dialog .f50-dialog-actions {display:flex!important;justify-content:flex-end;gap:8px!important;margin:24px 0 0!important;padding-top:16px;border-top:1px solid var(--f-border);}
.f50-console .f50-action-dialog .f50-dialog-actions>button {width:auto!important;flex:none;min-width:80px;min-height:40px;margin:0!important;padding:8px 18px!important;font-size:13px!important;}
@media(max-width:600px){
 .f50-console #toastContainer {padding-bottom:max(16px,env(safe-area-inset-bottom))!important;}
 .f50-console .f50-action-dialog .f50-dialog-actions>button {flex:1;min-height:44px;}
}
@media(prefers-reduced-motion:reduce){.f50-console #toastContainer>.toastkano {transition:none!important;}}
.f50-console .toastkano[data-f50-tone=error] {border-left-color:var(--f-danger,#c63737);}
/* Usage history and LAN settings: compact controls, clear groups and readable data. */
.f50-console :is(.f50-history-host,.f50-lan-host)>.f50-back {display:inline-flex;align-items:center;min-height:36px!important;margin:0 0 16px;padding:4px 0!important;border:0!important;background:transparent!important;color:var(--f-muted)!important;}
.f50-console .f50-lan-host {max-width:720px;}
.f50-console .f50-settings-intro {font-size:13px;line-height:1.6;color:var(--f-muted);margin:-12px 0 24px;}
.f50-console .f50-settings-field {display:flex!important;flex-direction:column;align-items:stretch!important;gap:8px!important;margin:0!important;min-width:0;}
.f50-console .f50-settings-field>span {font-size:13px;line-height:20px;font-weight:500;color:var(--f-text);}
.f50-console :is(.f50-usage-history,.f50-lan-settings) input:not([type=checkbox]):not([type=radio]) {flex:none!important;width:100%!important;height:40px;min-height:40px;margin:0!important;padding:9px 12px!important;font-size:14px!important;font-variant-numeric:tabular-nums;box-sizing:border-box;}
.f50-console .f50-history-filters {display:grid;grid-template-columns: minmax(0,220px) minmax(0,220px) auto;align-items:end;gap:16px;padding:0 0 24px;border-bottom:1px solid var(--f-border);}
.f50-console .f50-history-actions {display:flex;gap:8px;align-items:center;}
.f50-console .f50-history-actions>button {width:auto!important;min-height:40px!important;margin:0!important;padding:8px 16px!important;white-space:nowrap;}
.f50-console .f50-history-query {background:var(--f-button-fill,var(--f-button-bg))!important;color:var(--f-button-text)!important;border-color:var(--f-button-fill,var(--f-button-bg))!important;}
.f50-console .f50-history-summary {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin:24px 0 28px;max-width:600px;}
.f50-console .f50-history-summary>div {display:flex;flex-direction:column;gap:8px;}
.f50-console .f50-history-summary>div+div {padding-left:24px;border-left:1px solid var(--f-border);}
.f50-console .f50-history-summary>div>span:first-child {font-size:13px;font-weight:400;color:var(--f-muted);}
.f50-console .f50-history-summary :is(#data_usage_history_sum,#data_usage_history_avg) {font-size:30px!important;font-weight:600!important;line-height:1.2;letter-spacing:-.6px;font-variant-numeric:tabular-nums;}
.f50-console .f50-history-section-heading {display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 12px;}
.f50-console .f50-history-section-heading h3 {margin:0;font-size:14px;font-weight:600;line-height:20px;}
.f50-console .f50-history-section-heading>span {font-size:12px;color:var(--f-muted);line-height:20px;}
.f50-console .f50-history-plot {height:240px!important;width:100%!important;margin:0!important;padding:0!important;position:relative;}
.f50-console .f50-history-plot canvas {width:100%!important;height:100%!important;}
.f50-console .f50-history-details {margin-top:24px;padding-top:20px;border-top:1px solid var(--f-border);}
.f50-console .f50-history-table-scroll {max-height:320px;overflow:auto;scrollbar-gutter:stable;overscroll-behavior:contain;border-bottom:1px solid var(--f-border);}
.f50-console .f50-history-table-scroll:focus-visible {outline:2px solid var(--f-blue);outline-offset:3px;}
.f50-console .f50-usage-history .nice-table {margin:0!important;border:0!important;border-radius:0!important;table-layout:fixed;}
.f50-console .f50-usage-history .nice-table :is(th,td) {padding:12px 14px!important;line-height:20px;font-variant-numeric:tabular-nums;}
.f50-console .f50-usage-history .nice-table th {position:sticky;top:0;z-index:1;background:var(--f-bg)!important;}
.f50-console .f50-usage-history .nice-table :is(th,td):last-child:not([colspan]) {text-align:right;}
.f50-console .f50-usage-history .nice-table tbody tr:last-child td {border-bottom:0;}
.f50-console .f50-usage-history>.btn {display:none!important;}
.f50-console .f50-lan-settings h3 {font-size:14px;font-weight:600;margin:0 0 6px;line-height:20px;}
.f50-console .f50-lan-settings h4 {font-size:13px;font-weight:600;margin:0 0 14px;}
.f50-console .f50-lan-settings section p {font-size:13px;color:var(--f-muted);line-height:1.6;margin:0 0 20px;}
.f50-console .f50-lan-fields {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;}
.f50-console .f50-lan-dhcp {border-top:1px solid var(--f-border);padding-top:24px;margin-top:28px;}
.f50-console .f50-lan-dhcp-heading {display:flex;align-items:center;justify-content:space-between;gap:20px;}
.f50-console .f50-lan-dhcp-heading p {margin:0!important;}
.f50-console #collapse_dhcp_switch {flex:none;}
.f50-console #LANManagementModal #collapse_dhcp {height:auto!important;overflow:visible!important;transition:none!important;}
.f50-console #LANManagementModal #collapse_dhcp[data-name=close] {display:none!important;}
.f50-console #LANManagementModal #collapse_dhcp .collapse_box {padding:24px 0 0!important;overflow:visible!important;}
.f50-console .f50-lan-lease {margin-top:24px!important;max-width:220px;}
.f50-console .f50-lan-lease-input {display:flex;align-items:center;gap:12px;}
.f50-console .f50-lan-lease-input>span {flex:none;color:var(--f-muted);font-size:13px;}
.f50-console .f50-lan-footer {display:flex;justify-content:flex-end;gap:8px;border-top:1px solid var(--f-border);margin:28px 0 0!important;padding:20px 0 0!important;}
.f50-console .f50-lan-footer>button {width:auto!important;min-height:40px!important;margin:0!important;padding:8px 20px!important;}
@media(max-width:760px){
 .f50-console .f50-history-filters {grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;}
 .f50-console .f50-history-actions {grid-column:1/-1;}
}
@media(max-width:600px){
 .f50-console :is(.f50-history-host,.f50-lan-host)>.f50-back {min-height:44px!important;margin-bottom:12px;}
 .f50-console :is(.f50-usage-history,.f50-lan-settings) input:not([type=checkbox]):not([type=radio]) {height:44px;min-height:44px;font-size:16px!important;padding:10px!important;}
 .f50-console .f50-history-filters {gap:12px;padding-bottom:20px;}
 .f50-console .f50-history-actions>button {min-height:44px!important;}
 .f50-console .f50-history-summary {gap:16px;margin:20px 0 24px;}
 .f50-console .f50-history-summary>div+div {padding-left:16px;}
 .f50-console .f50-history-summary :is(#data_usage_history_sum,#data_usage_history_avg) {font-size:24px!important;}
 .f50-console .f50-history-section-heading {flex-wrap:wrap;gap:4px;}
 .f50-console .f50-history-plot {height:210px!important;}
 .f50-console .f50-lan-fields {grid-template-columns:1fr;gap:20px;}
 .f50-console .f50-lan-footer>button {min-height:44px!important;}
}
/* Common settings layout shared by full-page forms and secondary editors. */
.f50-console .f50-form-host {max-width:720px;}
.f50-console .f50-status-host {max-width:560px;}
.f50-console .f50-status-host.f50-usb-host {max-width:760px;}
.f50-console #USBStatusModal>.title:first-child {margin:0!important;font-size:16px!important;line-height:24px;font-weight:600;}
.f50-console #USBStatusModal>.f50-usb-intro {margin:6px 0 28px;font-size:13px;font-weight:400;line-height:1.6;color:var(--f-muted);}
.f50-console #USBStatusModal>.f50-usb-source,.f50-console #USBStatusModal>.btn {display:none!important;}
.f50-console .f50-usb-overview {display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);column-gap:28px;row-gap:16px;padding-bottom:24px;border-bottom:1px solid var(--f-border);}
.f50-console .f50-usb-mode {display:flex;align-items:flex-start;gap:14px;min-width:0;}
.f50-console .f50-usb-icon {display:grid;place-items:center;flex:none;width:44px;height:44px;border:1px solid var(--f-border);border-radius:10px;color:var(--f-muted);}
.f50-console .f50-usb-icon svg {width:24px;height:24px;}
.f50-console .f50-usb-eyebrow,.f50-console .f50-usb-specs dt {font-size:12px;line-height:18px;color:var(--f-muted);}
.f50-console .f50-usb-mode h3 {font-size:20px;font-weight:600;line-height:28px;margin:4px 0 6px;}
.f50-console .f50-usb-mode p {font-size:12px;color:var(--f-muted);line-height:1.6;margin:0;}
.f50-console .f50-usb-specs {display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:0;padding-left:24px;border-left:1px solid var(--f-border);align-content:start;}
.f50-console .f50-usb-specs dd {font-size:18px;line-height:28px;font-weight:550;font-variant-numeric:tabular-nums;margin:8px 0 0;overflow-wrap:anywhere;}
.f50-console .f50-usb-speed-note {grid-column:2;font-size:11px;color:var(--f-muted);line-height:1.6;margin:0;padding-left:24px;}
.f50-console .f50-usb-devices {padding-top:22px;}
.f50-console .f50-usb-devices-heading {display:flex;align-items:center;justify-content:space-between;gap:12px;}
.f50-console .f50-usb-devices-heading h3 {margin:0;font-size:14px;font-weight:550;line-height:22px;}
.f50-console .f50-usb-devices-heading>span {font-size:12px;color:var(--f-muted);}
.f50-console .f50-usb-devices>ul {list-style:none;margin:0;padding:0;}
.f50-console .f50-usb-devices li {padding:18px 0;border-bottom:1px solid var(--f-border);}
.f50-console .f50-usb-devices li:last-child {padding-bottom:0;border-bottom:0;}
.f50-console .f50-usb-devices li>strong {display:block;font-size:14px;font-weight:550;line-height:22px;overflow-wrap:anywhere;}
.f50-console .f50-usb-devices li dl {display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin:12px 0 0;}
.f50-console .f50-usb-devices li dl>div {display:flex;gap:10px;align-items:baseline;min-width:0;}
.f50-console .f50-usb-devices li dt {flex:none;font-size:12px;line-height:20px;color:var(--f-muted);}
.f50-console .f50-usb-devices li dd {margin:0;font-size:12px;line-height:20px;overflow-wrap:anywhere;}
.f50-console .f50-usb-empty {margin:14px 0 0;font-size:13px;line-height:1.7;color:var(--f-muted);}
.f50-console .f50-usb-state {margin:0;padding:12px 0;font-size:13px;line-height:1.7;color:var(--f-muted);}
@media(max-width:600px){
 .f50-console #USBStatusModal>.f50-usb-intro {margin-bottom:22px;}
 .f50-console .f50-usb-overview {grid-template-columns:minmax(0,1fr);gap:20px;}
 .f50-console .f50-usb-specs {border-left:0;border-top:1px solid var(--f-border);padding:18px 0 0;}
 .f50-console .f50-usb-speed-note {grid-column:1;padding:0;margin-top:-10px;}
 .f50-console .f50-usb-devices li dl {grid-template-columns:minmax(0,1fr);gap:6px;}
}
.f50-console .f50-settings-back {display:inline-flex;align-items:center;min-height:36px!important;margin:0 0 16px;padding:4px 0!important;border:0!important;background:transparent!important;color:var(--f-muted)!important;}
.f50-console .modal .btn:has(>.f50-inline-close):not(:has(>button:not(.f50-inline-close))) {display:none!important;}
.f50-console .modal :is(.f50-settings-actions,.f50-lan-footer) {display:flex!important;justify-content:flex-end;align-items:center;gap:8px;margin:24px 0 0!important;padding:20px 0 0!important;border:0!important;border-top:1px solid var(--f-border)!important;}
.f50-console .modal :is(.f50-settings-actions,.f50-lan-footer)>button {flex:none;width:auto!important;min-width:88px;min-height:40px!important;margin:0!important;padding:8px 18px!important;}
.f50-console .modal button.f50-primary {background:var(--f-button-fill,var(--f-button-bg))!important;color:var(--f-button-text)!important;border-color:var(--f-button-fill,var(--f-button-bg))!important;}
.f50-console .f50-settings-check {display:flex!important;align-items:center!important;gap:10px!important;margin:0!important;min-height:36px;}
.f50-console .f50-settings-check>.label-name {min-width:0!important;}
.f50-console .f50-settings-check input[type=checkbox] {flex:none;margin:0!important;}
.f50-console .f50-wifi-settings .content {margin:0!important;overflow:visible!important;}
.f50-console .f50-wifi-settings .dash-border-round {padding:20px 0!important;}
.f50-console .f50-wifi-settings .dash-border-round:first-child {padding-top:0!important;}
.f50-console .f50-wifi-settings .item {margin:0!important;}
.f50-console .f50-wifi-settings .item+.item {margin-top:8px!important;}
.f50-console .f50-wifi-settings .f50-settings-field>span {min-width:0!important;color:var(--f-text);}
.f50-console .f50-wifi-settings .f50-settings-field>:is(input,select) {min-height:40px!important;margin:0!important;padding:9px 12px!important;}
.f50-console .f50-wifi-max-clients {max-width:220px;}
.f50-console #APNManagementForm>.content {display:flex!important;gap:20px!important;overflow:visible!important;}
.f50-console #APNManagementForm>.content>div>span:first-child {flex:none;width:96px;color:var(--f-muted);font-size:13px;}
.f50-console #APNManagementForm>.content>div:first-child {padding-bottom:18px;border-bottom:1px solid var(--f-border);}
.f50-console #APNManagementForm>.content>div {align-items:center;flex-wrap:wrap;min-height:40px;}
.f50-console #APNManagementForm .profileItems {min-width:0;}
.f50-console #APNManagementForm .profileItems>div:first-child {min-width:150px;}
.f50-console #APNManagementForm .options {display:flex;gap:6px;flex-wrap:wrap;}
.f50-console .f50-standard-editor :is(.f50-editor-field,.f50-editor-field.flex) {display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:8px!important;margin:0!important;}
.f50-console .f50-editor-field>span {font-size:13px;font-weight:500;color:var(--f-text);}
.f50-console .f50-editor-field>:is(input,select,textarea) {width:100%!important;max-width:none!important;min-width:0!important;min-height:40px;margin:0!important;padding:9px 12px!important;box-sizing:border-box;}
.f50-console #AddTaskForm {gap:20px!important;}
.f50-console .f50-task-templates {border-top:1px solid var(--f-border);padding-top:14px;color:var(--f-muted);}
.f50-console .f50-task-templates summary {font-size:13px;cursor:pointer;min-height:36px;line-height:36px;color:var(--f-text);}
.f50-console .f50-task-templates p {font-size:12px;line-height:1.7;margin:6px 0 12px;}
.f50-console .f50-task-templates button {margin:0!important;}
.f50-console #ScheduledTasksModal .deviceList {margin:16px 0 0!important;padding:0!important;max-height:none!important;overflow:visible!important;}
.f50-console #ScheduledTasksModal [data-i18n=scheduled_tasks_info] {font-size:13px!important;line-height:1.6;color:var(--f-muted);font-style:normal;}
.f50-console #SCHEDULED_TASK_LIST .card-item {width:100%!important;min-width:0;box-sizing:border-box;}
.f50-console #ATModal .f50-at-command {display:flex;gap:10px;align-items:center;margin:12px 0 24px!important;}
.f50-console #ATModal #AT_INPUT {flex:1;min-width:0;width:100%!important;max-width:none!important;min-height:40px;margin:0!important;padding:9px 12px!important;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;}
.f50-console #ATModal .f50-at-command>button {flex:none;min-width:88px;min-height:40px;margin:0!important;}
.f50-console .f50-at-tools {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin:0 0 24px;}
.f50-console .f50-at-tools h3 {font-size:13px;font-weight:600;margin:0 0 12px;}
.f50-console #ATModal .f50-at-shortcuts {display:flex;flex-wrap:wrap;gap:8px;}
.f50-console #ATModal .f50-at-shortcuts>button {margin:0!important;min-height:36px;}
.f50-console #ATModal #AT_RESULT {min-height:140px;max-height:400px;overflow:auto;padding:16px!important;margin:12px 0 0!important;box-sizing:border-box;background:var(--f-subtle);border:1px solid var(--f-border);border-radius:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre-wrap;overflow-wrap:anywhere;}
.f50-console #ATModal #AT_RESULT:empty::before {content:'执行结果将在这里显示';font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:var(--f-muted);}
@media(max-width:600px){
 .f50-console .f50-settings-back {min-height:44px!important;margin-bottom:12px;}
 .f50-console .modal :is(.f50-settings-actions,.f50-lan-footer)>button {min-height:44px!important;min-width:80px;}
 .f50-console .f50-wifi-settings .dash-border-round:has(#WIFI_SWITCH) {align-items:flex-start!important;flex-direction:column;gap:10px;}
 .f50-console .f50-settings-check {min-height:44px;}
 .f50-console .f50-wifi-settings .f50-settings-field>:is(input,select),.f50-console .f50-editor-field>:is(input,select,textarea) {min-height:44px!important;font-size:16px!important;}
 .f50-console #APNManagementForm>.content>div>span:first-child {width:100%;}
 .f50-console #APNManagementForm .profileItems {flex-basis:100%!important;}
 .f50-console #APNManagementForm .profileItems>div:first-child {min-width:0;}
 .f50-console .f50-at-tools {grid-template-columns:1fr;gap:20px;}
 .f50-console #ATModal .f50-at-command>button,.f50-console #ATModal #AT_INPUT {min-height:44px;}
 .f50-console #ATModal .f50-at-shortcuts>button {min-height:44px;}
}
.f50-console .f50-wifi-settings #wifiInfo {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:24px;}
.f50-console .f50-wifi-settings #wifiInfo .dash-border-round {padding:0!important;border:0!important;}
.f50-console .f50-wifi-settings #WIFI_FORM_SHOWABLE {grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
.f50-console .f50-wifi-settings .f50-wifi-qr {grid-column:1/-1;border-top:1px solid var(--f-border);padding-top:12px;}
.f50-console .f50-wifi-settings .f50-wifi-qr summary {min-height:36px;line-height:36px;cursor:pointer;}
@media(max-width:600px){
 .f50-console .f50-wifi-settings #wifiInfo,.f50-console .f50-wifi-settings #WIFI_FORM_SHOWABLE {grid-template-columns:minmax(0,1fr);gap:24px;}
}
.f50-console .f50-history-trend:not([data-state=ready]) canvas {visibility:hidden;}
.f50-console .f50-history-trend:not([data-state=ready]) .f50-history-plot::after {content:attr(data-empty-text);position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--f-muted);font-size:13px;background:var(--f-subtle);border-radius:6px;}
.f50-console #scheduleRebootForm #SCHEDULE_TIME {width:160px!important;max-width:100%!important;min-height:40px;margin-top:8px!important;}
.f50-console #scheduleRebootForm p {margin:16px 0!important;}
.f50-console #pluginDropZone .f50-plugin-toolbar {display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
.f50-console #pluginDropZone .f50-plugin-toolbar>button {flex:none!important;width:auto!important;min-height:40px!important;margin:0!important;padding:8px 14px!important;}
.f50-console #pluginDropZone .f50-plugin-toolbar>.f50-danger {margin-left:auto!important;}
.f50-console #ATModal #AT_RESULT[data-empty=true]::before {content:'执行结果将在这里显示';font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:var(--f-muted);}
@media(max-width:600px){.f50-console #pluginDropZone .f50-plugin-toolbar>button {min-height:44px!important;}.f50-console #pluginDropZone .f50-plugin-toolbar>.f50-danger {margin-left:0!important;}}
.f50-console .f50-history-table-scroll {max-height:none;}
.f50-console .f50-history-details[data-long-range=true] .f50-history-table-scroll {max-height:420px;}
.f50-console .f50-usage-history .nice-table {overflow:visible!important;}
.f50-console #APNEditModal .content {display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px!important;}
@media(max-width:600px){.f50-console #APNEditModal .content {grid-template-columns:minmax(0,1fr);}}

/* v1.5 — action feedback replaces plain success toasts; spacing between CJK and Latin is visual only. */
html.f50-console {text-autospace:normal;}
.f50-console :is(input,textarea,pre,code,#AT_RESULT,#AD_RESULT) {text-autospace:no-autospace;}
.f50-action-feedback {display:inline-flex;align-items:center;gap:4px;margin-inline-end:12px;font-size:13px;line-height:20px;color:var(--f-green);white-space:nowrap;animation:f50-feedback-in .16s ease-out;}
.f50-action-feedback .f50-icon {width:16px;height:16px;}
.f50-action-row>.f50-action-feedback {margin-inline-start:auto;}
@keyframes f50-feedback-in {from{opacity:0;transform:translateY(2px);}to{opacity:1;transform:none;}}
@media(prefers-reduced-motion:reduce){.f50-action-feedback {animation:none;}}

.f50-console .f50-stored-secret {display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--f-text);}
.f50-console .f50-stored-secret>span:first-child {color:var(--f-muted);}
.f50-console .f50-stored-secret:not([data-revealed=true]) #official_web_pwd {-webkit-text-security:disc;}
.f50-console .f50-stored-secret #official_web_pwd {font-family:ui-monospace,SFMono-Regular,Menlo,monospace;}
.f50-console #changePassModal .f50-settings-intro>span:first-child {display:block;}

.f50-console #scheduleRebootForm>div:not(.title):not(.btn) {display:flex;flex-direction:column;gap:16px;margin-top:16px;}
.f50-console #scheduleRebootForm>div:not(.title):not(.btn)>p {margin:0;}
.f50-console .f50-schedule-time>label {font-size:13px;font-weight:500;color:var(--f-text);}
.f50-console .f50-schedule-time>input {max-width:160px!important;font-variant-numeric:tabular-nums;}

/* Software update: status, check result and changelog read as one panel stack. */
.f50-console #updateSoftwareModal .modal>:is(.socat_status,.adb_status) {display:block!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important;font-size:13px!important;font-weight:400!important;line-height:22px!important;color:var(--f-muted)!important;white-space:normal;}
.f50-console #updateSoftwareModal .modal>.socat_status {margin-top:4px!important;}
.f50-console #updateSoftwareModal .modal>.f50-settings-intro {display:block!important;height:auto!important;margin:12px 0 0!important;}
.f50-console #updateSoftwareModal #OTATextContent {margin:16px 0 0!important;padding:12px 14px!important;border:1px solid var(--f-border)!important;border-left:3px solid var(--f-blue)!important;border-radius:8px!important;background:var(--f-bg)!important;color:var(--f-text)!important;font-size:13px!important;line-height:1.6;}
.f50-console #updateSoftwareModal .content {margin:12px 0 0!important;max-height:320px!important;}
.f50-console #updateSoftwareModal #ChangelogTextContent {padding:12px 14px!important;border:1px solid var(--f-border)!important;border-radius:8px!important;background:transparent!important;font-size:13px!important;line-height:1.6;}
.f50-console #updateSoftwareModal .content:has(#ChangelogTextContent:empty) {display:none!important;}
.f50-console #updateSoftwareModal .modal>button[onclick^=forceEnableOTABtn] {position:absolute!important;width:24px;height:24px;min-height:0!important;padding:0!important;border:0!important;background:transparent!important;}
.f50-console .f50-inline-host #updateSoftwareModal .modal[data-f50-inline] {position:relative!important;}
/* One footer order everywhere: status, secondary actions, then the primary action on the right. */
.f50-console :is(.modal,.toastkano.f50-action-dialog) :is(.btn,.f50-settings-actions):has(>button.f50-primary) {display:flex!important;justify-content:flex-end;align-items:center;flex-wrap:wrap;gap:8px;}
.f50-console :is(.btn,.f50-settings-actions)>button.f50-primary {order:1;}
.f50-console :is(.btn,.f50-settings-actions)>.f50-action-feedback {order:-1;}
.f50-console .f50-select-row:not(:has(>label:not([hidden]))) {display:none!important;}
.f50-console .f50-action-row>button {white-space:nowrap;}

.f50-console #tokenModal .f50-login-method[hidden] {display:none!important;}

/* v1.5.1 — overview columns, single traffic chart, tab-named titles. */
.f50-overview-columns {display:grid;grid-template-columns:minmax(0,1fr);gap:20px;}
.f50-overview-primary,.f50-overview-secondary {display:contents;}
.f50-overview-columns .f50-traffic-panel {order:1;}
.f50-overview-columns .f50-signal-panel {order:2;}
.f50-overview-columns .f50-bottom-grid {order:3;margin-top:0;}
.f50-overview-columns .f50-health {order:4;margin-top:0;}
@media(min-width:1200px){
  .f50-overview-columns {grid-template-columns:minmax(0,1.8fr) minmax(300px,1fr);align-items:start;}
  .f50-overview-primary,.f50-overview-secondary {display:flex;flex-direction:column;gap:20px;min-width:0;}
  .f50-overview-columns .f50-health {grid-template-columns:1fr;gap:0;padding:4px 20px;}
  .f50-overview-columns .f50-health>div+div {border-left:0;padding-left:0;border-top:1px solid var(--f-border);}
  .f50-overview-columns .f50-health-metric {display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:10px;align-items:baseline;padding:11px 0;}
  .f50-overview-columns .f50-health-label {margin:0;font-size:13px;}
  .f50-overview-columns .f50-health strong,.f50-overview-columns .f50-health-metric:last-child strong {grid-column:3;grid-row:1;justify-self:end;font-size:15px;line-height:22px;}
  .f50-overview-columns .f50-health .f50-metric-status {grid-column:2;grid-row:1;margin:0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
}
@media(min-width:851px) and (max-width:1199px){
  .f50-overview-columns {grid-template-columns:minmax(0,1.4fr) minmax(240px,1fr);}
  .f50-overview-columns :is(.f50-bottom-grid,.f50-health) {grid-column:1/-1;}
}
.f50-console .devices-mon .chart:has(#kanoNetChart) {display:none!important;}
.f50-console .f50-forward-settings>.f50-tab-named-title {position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0 0 0 0);white-space:nowrap;border:0!important;}

/* v1.5.2 — sign-in page: opaque backdrop, brand, single primary action. */
.f50-console #tokenModal {background:var(--f-bg)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;}
.f50-console #tokenModal .f50-login-dialog {width:min(400px,calc(100vw - 32px))!important;padding:32px 28px 24px!important;border-radius:14px!important;box-shadow:0 1px 2px rgb(16 24 40 / .04),0 12px 32px rgb(16 24 40 / .08)!important;}
.f50-console #tokenModal .f50-login-brand {display:flex;align-items:center;gap:10px;margin:0 0 24px;font-size:15px;font-weight:600;color:var(--f-text);}
.f50-console #tokenModal .f50-login-brand-art {display:grid;place-items:center;width:36px;height:36px;border-radius:9px;background:var(--f-selected);overflow:hidden;}
.f50-console #tokenModal .f50-login-brand-art svg {width:28px;height:25px;}
.f50-console #tokenModal .modal>.title:first-child,.f50-console #tokenModal .f50-login-dialog>.title {font-size:22px!important;}
.f50-console #tokenModal .f50-login-subtitle {margin:4px 0 24px;}
.f50-console #tokenModal .f50-login-footer {flex-direction:column-reverse;align-items:stretch;gap:4px;border-top:0!important;margin:20px 0 0!important;padding:0!important;}
.f50-console #tokenModal .f50-login-footer>button {width:100%!important;height:44px!important;min-height:44px;flex:none!important;}
.f50-console #tokenModal .f50-login-footer>.f50-login-cancel {background:transparent!important;border-color:transparent!important;color:var(--f-muted)!important;font-weight:400;}
.f50-console #tokenModal .f50-login-footer>.f50-login-cancel:hover {color:var(--f-text)!important;background:var(--f-subtle,transparent)!important;}
.f50-console #tokenModal .f50-login-submit {position:relative;}
html.f50-console #tokenModal .f50-login-footer>button.f50-login-submit[data-busy=true] {color:transparent!important;-webkit-text-fill-color:transparent;cursor:progress;}
html.f50-console #tokenModal .f50-login-footer>button.f50-login-submit[data-busy=true]::after {-webkit-text-fill-color:var(--f-button-text,#fff);}
.f50-console #tokenModal .f50-login-submit[data-busy=true]::after {content:'正在验证…';position:absolute;inset:0;display:grid;place-items:center;color:var(--f-button-text,#fff);}
@media(max-width:600px){.f50-console #tokenModal .f50-login-dialog {padding:28px 20px 20px!important;}}
.f50-console #tokenModal .f50-login-hint[hidden] {display:none!important;}
.f50-console #tokenModal .f50-login-field[hidden] {display:none!important;}

.f50-console #tokenModal .f50-login-error {display:flex;align-items:flex-start;gap:8px;margin:16px 0 -4px;padding:10px 12px;border-radius:8px;background:color-mix(in srgb,var(--f-danger,#c63737) 9%,transparent);color:var(--f-danger,#c63737);font-size:13px;line-height:20px;}
.f50-console #tokenModal .f50-login-error[hidden] {display:none!important;}
.f50-console #tokenModal .f50-login-error .f50-icon {flex:none;width:16px;height:16px;margin-top:2px;}
/* v1.5.5 — notices sit in the middle of the content area as a small card, tone shown by an icon. */
.f50-console #toastContainer {justify-content:center!important;pointer-events:none;}
@media(min-width:851px){.f50-console #toastContainer {padding-left:calc(204px + 16px)!important;}}
.f50-console #toastContainer>.toastkano:not(.f50-action-dialog):not(.f50-quiet-toast) {display:flex!important;align-items:center;justify-content:center;gap:10px;width:auto!important;min-width:min(240px,calc(100vw - 48px));max-width:min(420px,calc(100vw - 48px))!important;padding:14px 20px!important;border:1px solid var(--f-border)!important;border-left-width:1px!important;border-radius:12px!important;box-shadow:0 2px 6px rgb(16 24 40 / .06),0 16px 40px rgb(16 24 40 / .14)!important;font-size:14px!important;line-height:22px;text-align:center;transform-origin:center!important;}
.f50-console #toastContainer>.toastkano:not(.f50-action-dialog)::before {content:"";flex:none;width:18px;height:18px;background:currentColor;color:var(--f-blue);-webkit-mask:var(--f50-toast-icon) center/contain no-repeat;mask:var(--f50-toast-icon) center/contain no-repeat;--f50-toast-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M12 11v5M12 8v.5'/%3E%3C/svg%3E");}
.f50-console #toastContainer>.toastkano[data-f50-tone=error]::before {color:var(--f-danger,#c63737);--f50-toast-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M12 7.5v5.5M12 16v.5'/%3E%3C/svg%3E");}
.f50-console #toastContainer>.toastkano[data-f50-tone=warning]::before {color:var(--f-warning,#976627);--f50-toast-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8v5M12 16.5v.5M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z'/%3E%3C/svg%3E");}
.f50-console #toastContainer>.toastkano[data-f50-tone=success]::before {color:var(--f-green);--f50-toast-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M8 12.5l2.8 2.8L16.5 9.5'/%3E%3C/svg%3E");}
.f50-console #toastContainer>.toastkano.f50-quiet-toast {display:none!important;}

/* Files page: toolbar, storage meter, upload queue and a single list panel. */
.f50-files {position:relative;max-width:960px;display:flex;flex-direction:column;gap:16px;}
.f50-files-toolbar {display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
.f50-files-crumbs {display:flex;align-items:center;gap:4px;min-width:0;flex:1;flex-wrap:wrap;font-size:14px;}
.f50-files-crumbs>button {min-height:32px;padding:4px 8px!important;margin:0!important;border:0!important;border-radius:6px!important;background:transparent!important;color:var(--f-blue)!important;font-size:14px!important;font-weight:400;}
.f50-files-crumbs>button:hover {background:var(--f-selected)!important;}
.f50-files-crumbs>span[aria-current] {padding:4px 8px;font-weight:600;color:var(--f-text);overflow-wrap:anywhere;}
.f50-files-sep {color:var(--f-muted);}
.f50-files-actions {display:flex;gap:8px;flex:none;}
.f50-files-actions>button {display:inline-flex;align-items:center;gap:6px;min-height:36px;margin:0!important;padding:8px 14px!important;font-size:13px!important;}
.f50-files-actions .f50-icon {width:16px;height:16px;}
.f50-files-alert {margin:0;padding:10px 12px;border-radius:8px;background:color-mix(in srgb,var(--f-danger,#c63737) 9%,transparent);color:var(--f-danger,#c63737);font-size:13px;line-height:20px;}
.f50-files-alert[hidden],.f50-files-queue[hidden],.f50-files-drop[hidden],.f50-files-state[hidden],.f50-files-head[hidden] {display:none!important;}
.f50-files-panel {background:var(--f-panel);border:1px solid var(--f-border);border-radius:10px;overflow:hidden;}
.f50-file-row {display:flex;align-items:center;border-bottom:1px solid var(--f-border);}
.f50-file-row:last-child {border-bottom:0;}
.f50-file-main {display:flex;align-items:center;gap:12px;flex:1;min-width:0;min-height:56px;margin:0!important;padding:8px 8px 8px 16px!important;border:0!important;border-radius:0!important;background:transparent!important;color:var(--f-text)!important;text-align:left;font-weight:400;}
.f50-file-main:hover,.f50-file-more:hover {background:var(--f-selected)!important;}
.f50-file-icon {display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:8px;background:var(--f-bg);color:var(--f-muted);}
.f50-file-icon[data-kind=folder] {background:var(--f-selected);color:var(--f-blue);}
.f50-file-icon .f50-icon {width:20px;height:20px;}
.f50-file-copy {display:flex;flex-direction:column;min-width:0;}
.f50-file-copy strong {font-size:14px;font-weight:500;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.f50-file-copy small {font-size:12px;line-height:18px;color:var(--f-muted);font-variant-numeric:tabular-nums;}
.f50-file-more {display:grid;place-items:center;flex:none;width:48px;min-height:56px;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;color:var(--f-muted)!important;}
.f50-file-more .f50-icon {width:20px;height:20px;stroke-width:2.6;}
.f50-files-state {margin:0;padding:40px 16px;text-align:center;font-size:13px;color:var(--f-muted);}
.f50-files-queue {display:flex;flex-direction:column;background:var(--f-panel);border:1px solid var(--f-border);border-radius:10px;padding:4px 16px;}
.f50-files-queue-heading {display:flex;align-items:center;justify-content:space-between;min-height:40px;font-size:13px;}
.f50-files-task {display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:8px;padding:8px 0;border-top:1px solid var(--f-border);}
.f50-files-task-copy {display:flex;justify-content:space-between;gap:12px;min-width:0;font-size:13px;}
.f50-files-task-copy strong {font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.f50-files-task-copy small {flex:none;color:var(--f-muted);font-variant-numeric:tabular-nums;}
.f50-files-task[data-state=failed] small {color:var(--f-danger,#c63737);}
.f50-files-task[data-state=done] small {color:var(--f-green);}
.f50-files-task-track {grid-column:1;height:4px;margin-top:6px;border-radius:2px;background:var(--f-border);overflow:hidden;}
.f50-files-task-track>span {display:block;height:100%;background:var(--f-blue);transition:width .2s ease-out;}
.f50-files-task[data-state=done] .f50-files-task-track>span {background:var(--f-green);}
.f50-files-task-cancel {grid-column:2;grid-row:1/span 2;display:grid;place-items:center;width:36px;height:36px;min-height:36px;margin:0!important;padding:0!important;border:0!important;background:transparent!important;color:var(--f-muted)!important;}
.f50-files-task-cancel .f50-icon {width:16px;height:16px;}
.f50-files-drop {position:absolute;inset:-8px;z-index:3;display:grid;place-items:center;border:2px dashed var(--f-blue);border-radius:12px;background:color-mix(in srgb,var(--f-panel) 88%,transparent);pointer-events:none;}
.f50-files-drop>div {display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--f-blue);font-size:13px;}
.f50-files-drop .f50-icon {width:32px;height:32px;}
.f50-files-drop strong {font-size:15px;color:var(--f-text);}
.f50-files-dialog {width:min(400px,calc(100vw - 32px));padding:24px;border:1px solid var(--f-border);border-radius:14px;background:var(--f-panel);color:var(--f-text);box-shadow:0 12px 32px rgb(16 24 40 / .14);}
.f50-files-dialog::backdrop {background:rgb(15 18 24 / .32);}
.f50-files-dialog h2 {margin:0 0 12px;font-size:17px;font-weight:600;line-height:24px;overflow-wrap:anywhere;}
.f50-files-dialog-body p {margin:0 0 4px;font-size:14px;line-height:22px;color:var(--f-muted);}
.f50-files-dialog-body input {width:100%;box-sizing:border-box;min-height:44px;padding:10px 12px!important;font-size:14px!important;}
.f50-files-dialog-actions {display:flex;justify-content:flex-end;gap:8px;margin-top:20px;}
.f50-files-dialog-actions>button {min-width:80px;min-height:40px;margin:0!important;}
.f50-files-dialog-actions>.f50-primary {order:1;}
.f50-files-dialog[data-menu=true] .f50-files-dialog-actions {flex-direction:column;align-items:stretch;gap:4px;margin-top:4px;}
.f50-files-dialog[data-menu=true] .f50-files-dialog-actions>button {justify-content:flex-start;text-align:left;min-height:44px;border-color:transparent!important;background:transparent!important;color:var(--f-text)!important;}
.f50-files-dialog[data-menu=true] .f50-files-dialog-actions>button:hover {background:var(--f-selected)!important;}
.f50-files-dialog[data-menu=true] .f50-files-dialog-actions>button:not(.f50-files-menu-item) {justify-content:center;text-align:center;margin-top:8px;border-color:var(--f-border)!important;color:var(--f-muted)!important;}
.f50-files-dialog .f50-files-danger,.f50-files-dialog[data-menu=true] .f50-files-dialog-actions>button.f50-files-danger {color:var(--f-danger,#c63737)!important;}
.f50-files-dialog .f50-files-danger.f50-primary {background:var(--f-danger,#c63737)!important;border-color:var(--f-danger,#c63737)!important;color:#fff!important;}
@media(max-width:600px){
  .f50-files-actions {width:100%;}
  .f50-files-actions>button {flex:1;justify-content:center;min-height:44px;}
    .f50-file-main {padding-left:12px!important;}
  .f50-files-dialog-actions>button {flex:1;min-height:44px;}
}
/* .f50-danger opts these buttons out of the console's blue primary rule. */
html.f50-console .f50-files-dialog .f50-files-dialog-actions>button.f50-primary.f50-files-danger {background:var(--f-danger,#c63737)!important;border-color:var(--f-danger,#c63737)!important;color:#fff!important;}
html.f50-console .f50-files-dialog .f50-files-dialog-actions>button.f50-primary.f50-files-danger:hover {background:color-mix(in srgb,var(--f-danger,#c63737) 88%,black)!important;}

.f50-files-sort {display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--f-muted);}
.f50-files-sort select {min-height:36px;padding:6px 28px 6px 10px!important;font-size:13px!important;margin:0!important;}
.f50-file-row[data-empty=true] .f50-file-icon {background:var(--f-bg);color:var(--f-muted);opacity:.6;}
.f50-file-row[data-empty=true] .f50-file-copy strong {color:var(--f-muted);font-weight:400;}
@media(max-width:600px){.f50-files-actions {flex-wrap:wrap;} .f50-files-sort {width:100%;} .f50-files-sort select {flex:1;min-height:44px;}}

/* v1.6.4 — Finder list view: columns, sortable headers, status bar, thumbnails and Quick Look. */
.f50-files-head {display:grid;grid-template-columns:minmax(0,1fr) 150px 84px 150px 48px;align-items:center;padding:0 0 0 64px;border-bottom:1px solid var(--f-border);background:var(--f-bg);}
.f50-files-head>button {display:flex;align-items:center;gap:4px;min-height:32px;margin:0!important;padding:6px 8px!important;border:0!important;border-radius:0!important;background:transparent!important;color:var(--f-muted)!important;font-size:12px!important;font-weight:500;text-align:left;}
.f50-files-head>button[data-sort=size] {justify-content:flex-end;}
.f50-files-head>button[data-active=true] {color:var(--f-text)!important;}
.f50-files-head>button[data-dir=asc]::after {content:"▲";font-size:8px;}
.f50-files-head>button[data-dir=desc]::after {content:"▼";font-size:8px;}
.f50-file-main {display:grid!important;grid-template-columns:36px minmax(0,1fr) 150px 84px 150px;column-gap:12px;}
.f50-file-col {font-size:12px;color:var(--f-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums;padding:0 8px 0 0;}
.f50-file-col[data-col=size] {text-align:right;}
.f50-file-copy small {display:none;}
.f50-file-icon[data-thumb=true] {background:var(--f-bg);overflow:hidden;}
.f50-file-icon img {width:100%;height:100%;object-fit:cover;display:block;}
.f50-files-status {margin:0;padding:10px 16px;border-top:1px solid var(--f-border);font-size:12px;color:var(--f-muted);text-align:center;font-variant-numeric:tabular-nums;}
.f50-files-status:empty {display:none;}
.f50-files-sort {display:none;}
@media(max-width:760px){
  .f50-files-head {display:none!important;}
  .f50-file-main {grid-template-columns:36px minmax(0,1fr);}
  .f50-file-col {display:none;}
  .f50-file-copy small {display:block;}
  .f50-files-sort {display:inline-flex;}
}
.f50-files-preview {width:min(1040px,calc(100vw - 32px));height:min(820px,calc(100dvh - 32px));max-width:none;max-height:none;padding:0;border:1px solid var(--f-border);border-radius:14px;background:var(--f-panel);color:var(--f-text);box-shadow:0 24px 64px rgb(0 0 0 / .32);overflow:hidden;}
.f50-files-preview[open] {display:flex;flex-direction:column;}
.f50-files-preview::backdrop {background:rgb(10 12 16 / .62);}
.f50-files-preview header {display:flex;align-items:center;gap:12px;padding:10px 12px 10px 20px;border-bottom:1px solid var(--f-border);}
.f50-files-preview-title {display:flex;flex-direction:column;flex:1;min-width:0;}
.f50-files-preview-title strong {font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.f50-files-preview-title small {font-size:12px;color:var(--f-muted);font-variant-numeric:tabular-nums;}
.f50-files-preview-tools {display:flex;gap:4px;flex:none;}
.f50-files-preview-tools>button {display:grid;place-items:center;width:40px;height:40px;min-height:40px;margin:0!important;padding:0!important;border:0!important;border-radius:8px!important;background:transparent!important;color:var(--f-text)!important;}
.f50-files-preview-tools>button:hover {background:var(--f-selected)!important;}
.f50-files-preview-tools>button:disabled {opacity:.3;}
.f50-files-preview-tools .f50-icon {width:20px;height:20px;}
.f50-files-preview-stage {position:relative;flex:1;min-height:0;display:grid;place-items:center;background:var(--f-bg);overflow:auto;}
.f50-files-preview-stage>img,.f50-files-preview-stage>video {max-width:100%;max-height:100%;object-fit:contain;display:block;}
.f50-files-preview-stage[data-kind=image]>img {cursor:zoom-out;}
.f50-files-preview-stage>audio {width:min(480px,90%);}
.f50-files-preview-stage>iframe {width:100%;height:100%;border:0;background:#fff;}
.f50-files-preview-stage>pre {align-self:stretch;justify-self:stretch;margin:0;padding:16px 20px;overflow:auto;font:12px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre-wrap;word-break:break-word;color:var(--f-text);}
.f50-files-preview-note {margin:0;padding:24px;font-size:13px;color:var(--f-muted);text-align:center;}
@media(max-width:600px){.f50-files-preview {width:100vw;height:100dvh;border-radius:0;border:0;} .f50-files-preview-tools>button {width:44px;height:44px;}}

/* The console's generic dialog rules set width and margins; the viewer keeps its own frame. */
html.f50-console #f50-files-preview {position:fixed!important;inset:0!important;margin:auto!important;transform:none!important;width:min(1040px,calc(100vw - 32px))!important;height:min(820px,calc(100dvh - 32px))!important;max-width:none!important;max-height:none!important;padding:0!important;border-radius:14px!important;}
html.f50-console #f50-files-preview p {margin:0;}
html.f50-console #f50-files-preview pre {border:0!important;border-radius:0!important;background:transparent!important;padding:16px 20px!important;}
@media(max-width:600px){html.f50-console #f50-files-preview {width:100vw!important;height:100dvh!important;border-radius:0!important;border:0!important;}}

.f50-files-preview-open {position:absolute;right:16px;bottom:16px;z-index:1;padding:8px 14px;border-radius:8px;background:var(--f-panel);border:1px solid var(--f-border);color:var(--f-blue);font-size:13px;text-decoration:none;box-shadow:0 2px 8px rgb(0 0 0 / .12);}
.f50-files-preview-stage>video {width:100%;height:100%;background:#000;}

</style>
<script>
/* F50 Console v1.6 — no additional network requests, original controls retained. */
(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('f50_native') === '1') return;
  if (document.getElementById('f50-shell')) return;
  // Hide the native page until the console is assembled, so a reload never flashes the old UI.
  const root = document.documentElement;
  try { root.dataset.f50Theme = localStorage.getItem('f50-console-theme') === 'dark' ? 'dark' : 'light'; } catch {}
  root.classList.add('f50-booting');
  // The tab names the console from the first frame; native code that rewrites the title is corrected at once.
  const consoleTitle = 'F50 Console';
  const keepTitle = () => { if (document.title !== consoleTitle) document.title = consoleTitle; };
  keepTitle();
  new MutationObserver(keepTitle).observe(document.head || root, { childList: true, characterData: true, subtree: true });
  const revealPage = () => root.classList.remove('f50-booting');
  setTimeout(revealPage, 4000);
  // Inline SVG keeps the tab icon available offline, including on the login page.
  const favicon = document.createElement('link');
  favicon.id = 'f50-favicon';
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.sizes = 'any';
  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#006fff"/>
  <path d="M7 7h14v4H11v4h8v4h-8v6H7V7Z" fill="#fff"/>
  <path d="M19 25v-3m4 3v-6m4 6V15" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>`);
  document.head.querySelectorAll('link[rel~="icon"]').forEach(link => link.remove());
  document.head.appendChild(favicon);
  const $ = s => document.querySelector(s);
  const paths = {
    overview:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    cellular:'M5 20v-4 M10 20v-8 M15 20V8 M20 20V4',
    network:'M8 16h8v5H8z M12 16V8 M4 8h16 M4 8V3 M20 8V3',
    sms:'M4 4h16v13H9l-5 4z M8 8h8 M8 12h5',
    files:'M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z',
    apps:'M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z',
    system:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
    advanced:'M4 6l6 6-6 6 M12 18h8',
    globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c-5 5-5 13 0 18 M12 3c5 5 5 13 0 18',
    device:'M6 4h12v16H6z M10 17h4',
    wifi:'M3 8c5-5 13-5 18 0 M6 12c3-3 9-3 12 0 M9 16c2-2 4-2 6 0 M12 20h.01',
    gateway:'M4 12h16v8H4z M7 12V3 M10 5c2 2 2 4 0 6 M13 3c3 3 3 6 0 9 M8 16h.01 M12 16h5',
    clients:'M3 5h13v11H3z M1 19h17 M6 16v3 M18 9h5v12h-5z M20 18h1',
    menu:'M4 6h16 M4 12h16 M4 18h16',
    external:'M14 4h6v6 M20 4l-9 9 M10 4H4v16h16v-6',
    down:'M12 4v16 M6 14l6 6 6-6',
    up:'M12 20V4 M6 10l6-6 6 6',
    account:'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    alert:'M12 8v5m0 3.5v.5M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
    check:'M5 12.5l4.5 4.5L19 7.5',
    moon:'M20.9 13a9 9 0 1 1-9.9-9.9 7 7 0 0 0 9.9 9.9',
    sun:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5L19 19 M5 19l1.5-1.5 M17.5 6.5L19 5'
  };
  const icon = key => `<svg class="f50-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[key] || paths.system}"/></svg>`;
  // Carrier symbols are bundled at build time, so the LAN UI works offline.
  const carrierLogos = {
    telecom: `<svg xmlns="http://www.w3.org/2000/svg" class="f50-carrier-logo" viewBox="0 0 1589 1540" aria-hidden="true"><path d="m1004.4 258.8c0 0-27.8-30.7-64.4-30.7 0 0-80.2 0-134.7 173.4 0 0-46.5 151.5-46.5 376.4 0 0 0 212 43.6 361.6 0 0 43.5 151.6 106.9 151.6 0 0 44.6 0 82.2-83.2 0 0 37.6-83.2 53.5-219l118.8-29.7c0 0-30.7 252.7-125.8 416.1 0 0-98 164.5-221.8 164.5 0 0-148.5 0-253.4-222.9 0 0-105-222.9-105-539 0 0 0-316 105-540.9 0 0 104.9-223.9 253.4-223.9 0 0 148.6 0 254.5 227.9zm417.8 304.1c0 0-204.9 169.4-531.7 251.6 0 0-327.7 81.3-588.1 27.8 0 0-260.4-55.5-299-215 0 0-32.7-132.8 110.9-279.4 0 0 141.6-145.6 396-242.7l16.9 65.4c0 0-148.5 63.4-230.7 143.6 0 0-84.2 84.2-65.4 156.6 0 0 24.8 92.1 199 119.8 0 0 173.3 26.8 398.1-28.7 0 0 222.7-55.5 365.3-161.5 0 0 140.6-107 116.8-200.1 0 0-19.8-80.2-162.3-114.9l-21.8-85.2c0 0 185.1 6.9 307.9 68.3 0 0 125.7 61.5 151.5 165.5 0 0 40.6 158.5-163.4 328.9z" fill="#02489d" /></svg>`,
    unicom: `<svg xmlns="http://www.w3.org/2000/svg" class="f50-carrier-logo" viewBox="0 0 1551 1172" aria-hidden="true"><path fill-rule="evenodd" d="m393.2 680.3q-24.4 24.6-49.1 49c-78.1 78.9-206.3 78.9-285 0-39.8-39.5-58.8-91.4-58.8-142.3 0-51.6 19.5-103.8 58.8-143.1 78.7-78.6 206.9-78.6 285 0l49.1 49.1 74.2-73.5 93.8 92.2-74 75.3 74 73.7-93.8 93.3zm-93.2-93.5c0 0-27-27.8-48.9-49.6-27.5-27.2-71.4-27.2-98.6 0-12.6 13.3-19.6 31.1-19.6 49.6 0 17.2 6.5 35.2 19.6 48.5 27.2 27.5 71.1 27.5 98.6 0 21.9-22.1 48.9-48.5 48.9-48.5zm1250.8-0.5c0 51.1-19.8 102.5-59.1 142.3-78.4 78.8-206.3 78.8-285 0-22.1-22.4-49-49.1-49-49.1l-74 74-93.3-93.3 74-73.7-74-75 93.3-92.5 74.2 73.7c0 0 27-26.2 49.4-49.3 78.3-78.1 206.3-78.1 284.9 0 39.1 39.6 58.6 91.5 58.6 142.9zm-132.3 0.5c0-18.3-6.5-36-20.1-49.6-27-27.2-70.6-27.2-98.1 0-22.1 21.8-49.1 49.6-49.1 49.6 0 0 27 26.4 49.1 48.5 27.5 27.5 71.1 27.5 98.1 0 13.9-13.3 20.1-31.3 20.1-48.5zm-308.1 240.7c78.9 78.6 78.9 206.5 0 285.4-78.4 78.6-206.1 78.6-285 0-30.8-31.4-49.1-49.8-49.1-49.8 0 0-17.7 18.4-48.5 49.8-79.2 78.6-206.6 78.6-285.2 0-78.9-78.9-78.9-206.8 0-285.4 21.5-22.4 241-240.7 241-240.7l-241-241.3c-78.9-78.8-78.9-206.2 0-285.6 78.6-78.6 206-78.6 285.2 0 30.8 31.6 48.5 49.6 48.5 49.6 0 0 18.3-18 49.1-49.6 78.9-78.6 206.6-78.6 285 0 78.9 79.4 78.9 206.8 0 285.6-21.6 21.9-240.5 241.3-240.5 241.3 0 0 218.9 218.3 240.5 240.7zm-335.1-333.2c0 0 213-213.7 241.3-242.3 27.2-27.4 27.2-70.9 0-98.1-26.7-26.7-70.7-26.7-97.9 0-26.2 26-49.3 49.3-49.3 49.3l74.2 73.8-93 93.7-74.5-74.5-74.3 74.5-93-93.7 74.5-73.8-49.6-49.3c-26.7-26.7-70.6-26.7-97.9 0-26.9 27.2-26.9 70.7 0 98.1 27.8 28.6 239.5 242.3 239.5 242.3zm242.3 426.4c-28.5-28.5-241.5-242.2-241.5-242.2 0 0-212.3 213.7-240 242.2-27 27-27 71.4 0 98.2 27.2 26.9 71.2 26.9 97.9 0 26.5-26 49.6-48.8 49.6-48.8l-74.5-74.5 93-93.6 74.2 74.5 74.8-74.2 93 93.5-74 74.5c0 0 22.9 22.9 49.1 48.8 27.2 27 71.2 27 97.9 0 27.5-26.7 27.5-71.4 0.5-98.4z" fill="#db2c1c" /></svg>`,
    mobile: `<svg xmlns="http://www.w3.org/2000/svg" class="f50-carrier-logo" viewBox="0 0 1552 1538" aria-hidden="true"><path d="m1516.3 966.9c-6 17.8-17.8 41.5-17.8 41.5 0 0-50.4-62.3-112.7-130.6-86-89-160.1-157.3-204.6-195.9-26.7-23.7-53.4-35.6-77.1-35.6-26.7 0-53.4 11.9-71.2 29.7-5.9 5.9-17.8 14.8-32.6 29.7-71.2 68.2-225.4 207.7-305.5 276-8.9 8.9-20.7 17.8-26.7 23.7-32.6 26.8-71.1 44.6-109.7 44.6-38.5 0-80-14.9-118.6-47.5-210.5-181.1-364.7-365.1-397.4-412.6-2.9-5.9-8.9-11.8-2.9-26.7 5.9-14.8 17.8-38.6 17.8-38.6 0 0 50.4 62.4 112.7 130.6 100.8 112.8 186.8 181.1 204.6 198.9 26.7 23.7 53.3 35.6 77.1 35.6 26.7 0 53.4-11.9 71.1-29.7 6-5.9 258-237.4 338.1-305.7 11.9-8.9 20.8-17.8 26.7-23.7 32.6-26.7 71.2-44.5 109.7-44.5 38.6 0 80.1 14.8 118.6 47.4 56.4 47.5 261 231.5 397.4 412.6 3 2.9 8.9 11.9 3 20.8z" fill="#95c11f" /><path d="m1021 266.4c86 47.5 308.4 234.5 519 537.2 8.9 17.8 5.9 38.6 5.9 38.6-2.9 20.8-8.9 44.5-8.9 44.5-32.6-50.4-231.3-314.6-453.7-480.8-91.9-68.2-192.7-62.3-278.7 11.9-29.7 23.7-258 225.6-370.7 338.3-14.8 17.8-35.6 20.8-50.4 6-59.3-50.5-100.9-95-100.9-95 56.4-65.3 347-335.4 418.2-385.8 112.7-83.1 228.3-65.3 320.2-14.9zm-62.2-228.5c80 41.6 201.6 109.8 394.4 335.4 97.8 112.8 166 228.5 180.9 258.2 5.9 8.9 8.9 20.8 8.9 26.7 8.8 38.6 8.8 68.3 8.8 68.3-77.1-109.9-145.3-207.8-252-323.5-83-86.1-139.4-136.6-204.6-187-175-136.5-349.9-124.7-501.2-8.9-88.9 68.2-243.2 210.7-385.5 347.2-11.9 8.9-20.8 11.9-32.6 3-53.4-53.4-89-98-89-98 47.5-50.4 234.3-222.5 376.6-338.3 192.8-151.4 394.4-136.5 495.3-83.1zm-430 1231.7c-86-47.5-308.4-234.5-519-537.2-8.9-17.8-5.9-38.6-5.9-38.6 3-20.8 8.9-44.5 8.9-44.5 32.6 50.4 231.3 314.6 453.7 480.8 91.9 68.3 192.8 62.3 278.8-11.9 29.6-23.7 257.9-225.5 373.6-335.4 14.8-17.8 35.6-20.7 50.4-5.9 59.3 50.5 100.8 95 100.8 95-56.3 65.3-346.9 335.4-418.1 385.8-112.7 80.1-225.4 65.3-323.2 11.9zm65.2 231.5c-80.1-41.6-201.6-109.8-394.4-335.4-97.8-115.7-166.1-231.5-180.9-261.2-5.9-8.9-5.9-20.7-8.9-26.7-8.9-41.5-8.9-68.2-8.9-68.2 77.1 109.8 145.3 207.7 252.1 323.5 83 86 139.4 136.5 204.6 186.9 175 136.6 349.9 124.7 501.2 8.9 88.9-68.2 243.1-210.7 385.5-347.2 8.9-8.9 17.8-11.9 29.6-3 53.4 53.5 89 98 89 98-47.5 50.4-234.3 222.6-376.6 338.3-186.8 154.3-391.5 136.5-492.3 86.1z" fill="#0085cc" /></svg>`
  };
  const carrierKey = provider => {
    const name = String(provider || '').replace(/[\s_-]+/g, '').toLowerCase();
    if (/电信|電信|chinatelecom|chnct|ctcc/.test(name)) return 'telecom';
    if (/联通|聯通|chinaunicom|chncu|cucc/.test(name)) return 'unicom';
    if (/移动|移動|chinamobile|chncm|cmcc/.test(name)) return 'mobile';
    return 'unknown';
  };
  const updateCarrierLogo = provider => {
    const symbol = $('#f50-provider-icon'), key = carrierKey(provider);
    if (!symbol || symbol.dataset.carrier === key) return;
    symbol.innerHTML = carrierLogos[key] || icon('globe');
    symbol.dataset.carrier = key;
  };
  const f50DeviceArt = `<svg class="f50-device-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 84" fill="none" aria-hidden="true"><path d="M17 5h60a13 13 0 0 1 13 13v48a13 13 0 0 1-13 13H17A13 13 0 0 1 4 66V18A13 13 0 0 1 17 5Z" fill="#d7dce2"/><rect x="8" y="4" width="84" height="75" rx="13" fill="#fdfdfe" stroke="#cdd3da" stroke-width="1"/><path d="M8.5 31h83v35a12.5 12.5 0 0 1-12.5 12.5H21A12.5 12.5 0 0 1 8.5 66Z" fill="#f3f5f7"/><path d="M12.0 34.0H88.0M12.0 36.4H88.0M12.0 38.8H88.0M12.0 41.2H88.0M12.0 43.6H88.0M12.0 46.0H88.0M12.0 48.4H88.0M12.0 50.8H88.0M12.0 53.2H88.0M12.0 55.6H88.0M12.0 58.0H88.0M12.0 60.4H88.0M12.0 62.8H88.0M12.0 65.2H88.0M12.1 67.6H87.9M12.7 70.0H87.3M13.8 72.4H86.2M15.6 74.8H84.4" stroke="#dde2e7" stroke-width=".9" stroke-linecap="round" stroke-dasharray="0 2.4"/><circle cx="23" cy="17.5" r="7" fill="#e5252d"/><text x="23" y="20.2" text-anchor="middle" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="7.4" font-weight="700" font-style="italic">5G</text><circle cx="68" cy="13" r="1.1" fill="#b7bfc8"/><circle cx="80" cy="13" r="1.1" fill="#b7bfc8"/><path d="M64.5 17.5h7m5.5 0h6" stroke="#c3cad2" stroke-width="1.2" stroke-linecap="round"/><rect x="4.6" y="36" width="1.8" height="12" rx=".9" fill="#b9c0c8"/></svg>`;
  const healthSpecs = [
    ['temperature','temp','内部温度'],
    ['frequency','frequency','CPU 频率'],
    ['cpu','cpu','CPU 使用率'],
    ['memory','mem','内存使用率'],
    ['uptime','uptime','连接时长']
  ];
  const pages = [
    ['overview','总览','查看连接、信号与设备运行状态'],
    ['cellular','蜂窝网络','管理网络制式、频段与基站'],
    ['network','本地网络','管理 Wi-Fi、接入设备与有线连接'],
    ['sms','短信','收发消息与配置短信转发'],
    ['files','文件','上传、下载与管理设备存储中的文件'],
    ['apps','应用与插件','管理扩展功能与自动化任务'],
    ['system','系统','设备信息、账户与系统维护'],
    ['advanced','高级工具','终端、AT 指令与调试功能']
  ];
  // Strip decorations from application chrome, preserving message contents, code and values.
  const emoji = /(?:\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:[\u{1F3FB}-\u{1F3FF}])?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:[\u{1F3FB}-\u{1F3FF}])?)*|\p{Regional_Indicator}{2}|[#*0-9]\uFE0F?\u20E3)/gu;
  const cleanChrome = value => value.replace(/⬇\uFE0F?/gu,'下载 ').replace(/⬆\uFE0F?/gu,'上传 ').replace(emoji,'').replace(/[\uFE0F\uFE0E!！]/g,'').replace(/一键/g,'').replace(/USB\s*上网[:：]\s*自动/g,'自动').replace(/WIFI[:：]\s*2\.4G/gi,'2.4 GHz').replace(/WIFI[:：]\s*5G/gi,'5 GHz').replace(/WIFI[:：]\s*关闭/gi,'关闭').replace(/锁频段/g,'锁定频段').replace(/解除锁定频段/g,'解除频段锁定').replace(/锁基站/g,'锁定基站').replace(/解除锁定基站/g,'解除基站锁定').replace(/\bWIFI\b/gi,'Wi-Fi').replace(/此选项即时更改无需确认[。.]?/g,'更改后立即生效').replace(/5g\.band\.[a-z0-9]+/gi,'未提供');
  const protectedContent='script,style,textarea,input,pre,code,svg,canvas,iframe,#sms-list,#AT_RESULT,#AD_RESULT,[data-f50-preserve]';
  const routes = new Map();
  let filesView = null;
  const boot = () => {
    const container = $('#BG_OVERLAY>.container');
    if (!container || !$('.actions-buttons')) { revealPage(); return; }
    const shell = document.createElement('div'); shell.id='f50-shell';
    shell.innerHTML=`<aside id="f50-sidebar"><div class="f50-brand"><span class="f50-brand-mark">F50</span><div><strong>F50 Console</strong><small>NETWORK MANAGEMENT</small></div></div><div class="f50-nav-label">设备管理</div><nav aria-label="主导航">${pages.map(([key,label])=>`<button type="button" class="f50-nav" data-page="${key}">${icon(key)}${label}</button>`).join('')}</nav><div class="f50-sidebar-bottom"><span>F50 Console · 1.6</span><a href="https://github.com/kanoqwq/UFI-TOOLS" target="_blank" rel="noopener">基于 UFI-TOOLS</a></div></aside><main id="f50-workspace"><header id="f50-topbar"><div class="f50-crumb"><button type="button" class="f50-menu-toggle f50-icon-button" title="展开导航" aria-label="展开导航" aria-expanded="false">${icon('menu')}</button><span>F50</span><span>/</span><b id="f50-crumb-page">总览</b></div><div class="f50-header-actions"><button id="f50-theme-toggle" class="f50-icon-button" type="button">深色</button><button id="f50-account" type="button" aria-label="账户设置" title="账户设置">${icon('account')}<span class="f50-account-label">账户</span></button></div></header><div id="f50-pages">${pages.map(([key,label,desc])=>`<section id="f50-page-${key}" class="f50-page" ${key==='overview'?'':'hidden'}><div class="f50-page-heading"><div><h1>${label}</h1><p class="f50-subtitle">${desc}</p></div></div></section>`).join('')}</div></main>`;
    container.appendChild(shell);
    shell.querySelector('.f50-brand').innerHTML='<strong>F50 Console</strong>';
    const overview=$('#f50-page-overview');
    overview.insertAdjacentHTML('beforeend',`<div class="f50-connection" data-state="waiting" role="group" aria-label="网络连接路径"><div class="f50-connection-item"><span id="f50-provider-icon" class="f50-connection-symbol">${icon('globe')}</span><div class="f50-connection-copy"><strong id="f50-provider">蜂窝网络</strong><div class="f50-connection-meta"><span id="f50-wan-ip" class="f50-connection-ip" title="蜂窝 IP">—</span><span id="f50-online" class="f50-connection-status" data-state="waiting" role="status" aria-live="polite" aria-atomic="true">等待数据</span></div></div></div><span class="f50-connection-line" aria-hidden="true"></span><div class="f50-connection-item"><span class="f50-connection-symbol">${f50DeviceArt}</span><div class="f50-connection-copy"><strong>F50</strong><span id="f50-gateway-ip" class="f50-connection-detail f50-connection-ip" title="F50 网关 IP">—</span></div></div><span class="f50-connection-line" aria-hidden="true"></span><div class="f50-connection-item"><span class="f50-connection-symbol">${icon('clients')}</span><div class="f50-connection-copy"><strong>本地网络</strong><span id="f50-local-ip" class="f50-connection-detail f50-connection-ip" title="当前访问设备 IP">—</span><span id="f50-client-link" class="f50-connection-detail">— 台 Wi-Fi 设备</span></div></div></div><div class="f50-main-grid"><section class="f50-panel"><div class="f50-panel-heading"><h2>实时流量</h2><span id="f50-updated" class="f50-caption">等待数据</span></div><div class="f50-rate-row"><div><span class="f50-rate-label">↓ 下载</span><span id="f50-dl" class="f50-rate-value">—</span><span id="f50-dl-unit" class="f50-rate-unit">Mbps</span></div><div><span class="f50-rate-label">↑ 上传</span><span id="f50-ul" class="f50-rate-value">—</span><span id="f50-ul-unit" class="f50-rate-unit">Mbps</span></div></div><div class="f50-chart"><canvas id="f50-traffic-chart" role="img" aria-label="本次页面打开后的上下行流量趋势"></canvas></div><div class="f50-chart-foot"><span>本次访问 · 最近 60 个采样</span></div></section><section class="f50-panel"><div class="f50-panel-heading"><h2>信号质量</h2><span id="f50-signal-type" class="f50-caption">—</span></div><div id="f50-signal-summary" class="f50-signal-summary" data-grade="unknown" role="group" aria-label="综合信号评级" title="参考当前 RSRP、SINR、RSRQ，取三项中较低等级；不代表实际网速或连接稳定性。"><strong id="f50-signal-rating">等待数据</strong><span id="f50-signal-guidance">获取信号数据后自动评估</span></div>${[['rsrp','信号强度 · RSRP'],['sinr','信噪比 · SINR'],['rsrq','接收质量 · RSRQ']].map(([key,label])=>`<div class="f50-signal-row"><span>${label}</span><span class="f50-signal-reading"><b id="f50-${key}">—</b><span id="f50-${key}-grade" class="f50-signal-grade" data-grade="unknown">—</span></span><div class="f50-signal-track"><div id="f50-${key}-bar" class="f50-signal-fill"></div></div></div>`).join('')}<div class="f50-signal-meta"><span>频段 <strong id="f50-band">—</strong></span><span>PCI <strong id="f50-pci">—</strong></span></div></section></div><div class="f50-bottom-grid"><section class="f50-panel"><div class="f50-panel-heading"><h2>本月流量</h2><button type="button" class="f50-text-button" data-action="DataUsageHistory">查看历史 ↗</button></div><div id="f50-monthly" class="f50-summary-number">—</div><div class="f50-summary-bottom"><span id="f50-today">今日 —</span><button type="button" class="f50-text-button" data-action="DataManagement">流量管理</button></div></section><section class="f50-panel"><div class="f50-panel-heading"><h2>Wi-Fi 接入设备</h2><button type="button" class="f50-text-button" data-action="ClientManagement">管理设备 ↗</button></div><div class="f50-summary-number"><span id="f50-clients">—</span><span class="f50-rate-unit">台</span></div><div class="f50-summary-bottom"><span>查看在线设备与连接详情</span><button type="button" class="f50-text-button" data-action="WIFIManagement">Wi-Fi 设置</button></div></section></div><div class="f50-health" role="group" aria-label="设备运行状态">${healthSpecs.map(([metric,key,label])=>`<div class="f50-health-metric"><span class="f50-health-label">${label}</span><strong id="f50-${key}"><span class="f50-metric-number">—</span><span class="f50-metric-unit"></span></strong><span id="f50-${key}-status" class="f50-metric-status" data-tone="unknown">等待数据</span></div>`).join('')}</div><p class="f50-notice" id="f50-data-note">实时数据来自设备后台；图表在本次访问期间采样。</p>`);
    // Wide screens read as two columns: throughput and usage left, radio and device health right.
    {const columns=document.createElement('div');columns.className='f50-overview-columns';const primary=document.createElement('div'),secondary=document.createElement('div');primary.className='f50-overview-primary';secondary.className='f50-overview-secondary';
      const main=overview.querySelector('.f50-main-grid'),[traffic,signal]=main.children;traffic.classList.add('f50-traffic-panel');signal.classList.add('f50-signal-panel');
      primary.append(traffic,overview.querySelector('.f50-bottom-grid'));secondary.append(signal,overview.querySelector('.f50-health'));columns.append(primary,secondary);main.replaceWith(columns);}
    overview.querySelectorAll('.f50-text-button').forEach(button=>{button.textContent=cleanChrome(button.textContent).replace('↗','').trim();});
    overview.querySelectorAll('.f50-rate-label').forEach((label,index)=>{label.innerHTML=icon(index?'up':'down')+(index?'上传':'下载');});
    const groups = {
      cellular:[['APNManagement','APN 设置','运营商接入点与拨号参数'],['CECULLAR','移动数据','管理蜂窝数据连接'],['ROAM','网络漫游','管理漫游时的联网行为'],['DataManagement','流量管理','流量统计与套餐限额'],['DataUsageHistory','流量历史','查看每日流量记录'],['CellularSpeedTestBtn','蜂窝测速','测试移动网络速度，会消耗流量']],
      network:[['WIFIManagement','Wi-Fi 设置','无线网络名称、密码与频段'],['ClientManagement','接入设备','查看和管理连接到热点的设备'],['LANManagement','内网设置','网关与 DHCP 配置'],['USBStatusManagement','USB 状态','USB 连接与设备详情'],['SpeedTestBtn','内网测速','测试本地网络传输速度'],['SMB','文件共享','后台高级功能、文件页与 Mihomo 管理依赖此服务，请保持开启']],
      sms:[['SMS','短信收发','查看消息与发送短信'],['smsForward','短信转发','自动转发与通知配置']],
      apps:[['f50-mihomo-button','Mihomo 管理','代理内核、规则与节点管理'],['PLUGIN_SETTING','插件管理','添加、编辑或停用扩展插件'],['ScheduledTaskManagement','定时任务','管理自动化脚本与任务']],
      system:[['CLEAR','后台登录','退出后需重新输入口令与密码'],['CHANGETOKEN','后台口令','更改控制台登录口令'],['CHANGEPWD','原厂后台密码','管理设备原厂后台密码'],['OTA','软件更新','检查后台服务更新'],['SCHEDULE_REBOOT','定时重启','设置设备重启计划'],['LIGHT','指示灯','管理设备状态指示灯'],['REBOOT','重启设备','中断当前网络连接并重新启动设备'],['SHUTDOWN','关闭设备','关闭设备并中断网络连接']],
      advanced:[['AT','AT 指令','查看与执行调制解调器指令'],['ADVANCE','高级功能','设备调试与系统功能']]
    };
    const actionRows=[];
    // One verb per action type; native idle labels only repeat the row title.
    const confirmLabels={'再点二次':'再点两次确认','再点一次':'再点一次确认'};
    const idleVerbs={CellularSpeedTestBtn:'开始',SpeedTestBtn:'开始',CHANGETOKEN:'更改',CHANGEPWD:'更改',OTA:'检查更新',SCHEDULE_REBOOT:'设置',REBOOT:[/^重启设备$/,'重启'],SHUTDOWN:[/^关闭电源$/,'关机']};
    const actionLabel=(id,native)=>{
      if(id==='CLEAR')return typeof KANO_TOKEN!=='undefined'&&KANO_TOKEN?'退出登录':'登录';
      const verb=idleVerbs[id];if(Array.isArray(verb))return verb[0].test(native)?verb[1]:confirmLabels[native]||native;
      return verb||openLabels[id]||native;
    };
    const openLabels={APNManagement:'设置',DataManagement:'设置',DataUsageHistory:'查看',WIFIManagement:'设置',ClientManagement:'查看',LANManagement:'设置',USBStatusManagement:'查看',SMS:'打开',smsForward:'设置','f50-mihomo-button':'管理',PLUGIN_SETTING:'管理',ScheduledTaskManagement:'管理',AT:'打开',ADVANCE:'打开'};
    for (const [page,items] of Object.entries(groups)) {
      const list=document.createElement('div');list.className='f50-actions';
      for (const [id,title,note] of items) {
        const row=document.createElement('div');row.className='f50-action-row';row.hidden=true;
        row.innerHTML=`<div><strong>${title}</strong><p>${note}</p></div><button type="button" data-action="${id}">打开</button>`;
        row.querySelector('p').hidden=!['CellularSpeedTestBtn','REBOOT','SHUTDOWN','CHANGETOKEN','CHANGEPWD','SMB'].includes(id);
        list.appendChild(row);actionRows.push([id,row]);routes.set(id,page);
      }
      $(`#f50-page-${page}`).appendChild(list);
    }
    const moveSelects=(page,items)=> {
      const row=document.createElement('div');row.className='f50-select-row';
      for(const [id,title] of items) {
        const select=document.getElementById(id);if(!select)continue;
        const label=document.createElement('label');const text=document.createElement('span');text.textContent=title;
        label.append(text,select);row.appendChild(label);
      }
      if(row.children.length)$(`#f50-page-${page}`).querySelector('.f50-page-heading').after(row);
    };
    moveSelects('cellular',[['NET_TYPE','网络制式'],['SIM_CARD_TYPE','SIM 卡'],['SIM_CARD_TYPE_V50','SIM 卡']]);
    moveSelects('network',[['USB_TYPE','USB 上网']]);
    // Console copy is Chinese; the native language switch would only translate leftover strings.
    moveSelects('system',[['SLEEP_TIME','休眠']]);
    const move=(selector,page)=>{const node=$(selector);if(node)$(`#f50-page-${page}`).appendChild(node);};
    move('.band-lock-container','cellular');move('.freq-lock-container','cellular');
    move('.devices-mon','system');move('.status-container','system');move('#TTYD','advanced');
    // Keep native refresh controls and field handlers in a single compact header.
    const statusContainer=$('.status-container'),statusHeading=statusContainer?.querySelector(':scope>.title'),statusTools=$('#DICTIONARY')?.parentElement;
    if(statusHeading&&statusTools){
      statusHeading.classList.add('f50-status-header');statusTools.classList.add('f50-status-tools');
      const title=statusHeading.querySelector('strong');if(title){title.removeAttribute('data-i18n');title.textContent='状态详情';}
      statusHeading.append(statusTools);
    }
    const dictionary=$('#dictionaryModal'),dictionaryList=$('#DIC_LIST');
    if(dictionary&&dictionaryList){
      dictionary.classList.add('f50-field-dialog');
      const title=dictionary.querySelector(':scope>.title');title.removeAttribute('data-i18n');title.textContent='管理显示字段';
      const note=dictionary.querySelector(':scope>p');note.textContent='勾选后立即生效，设备未提供的字段自动隐藏。';note.className='f50-field-note';
      const tabs=document.createElement('div');tabs.className='f50-field-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','字段分组');note.after(tabs);
      const tools=document.createElement('div');tools.className='f50-field-group-tools';
      const selection=document.createElement('span');
      const selectAll=document.createElement('button');selectAll.type='button';selectAll.textContent='全选本组';
      const clear=document.createElement('button');clear.type='button';clear.textContent='清空本组';tools.append(selection,selectAll,clear);tabs.after(tools);
      const total=document.createElement('span');total.className='f50-field-total';dictionary.querySelector(':scope>.btn').prepend(total);
      const groups=[['draggable_status','运行状态'],['draggable_signal','信号参数'],['draggable_props','设备属性']].map(([id,label],index)=>{
        const list=$('#'+id);list.previousElementSibling?.classList.add('f50-field-native-heading');
        const tab=document.createElement('button');tab.type='button';tab.id='f50-field-tab-'+index;tab.setAttribute('role','tab');tab.setAttribute('aria-controls',id);tab.append(document.createTextNode(label));
        const count=document.createElement('span');count.className='f50-field-tab-count';tab.append(count);tabs.append(tab);
        list.setAttribute('role','tabpanel');list.setAttribute('aria-labelledby',tab.id);
        return {list,tab,count};
      });
      let selected=0;
      const sync=()=>{
        let checked=0,all=0;
        groups.forEach(({list,tab,count},index)=>{
          const inputs=Array.from(list.querySelectorAll('input[type=checkbox]')),n=inputs.filter(input=>input.checked).length;
          checked+=n;all+=inputs.length;count.textContent=String(inputs.length);
          const active=index===selected;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;list.hidden=!active;
          if(active){selection.textContent=`本组已选 ${n} / ${inputs.length}`;selectAll.disabled=n===inputs.length;clear.disabled=n===0;}
        });
        total.textContent=`共选 ${checked} / ${all}`;
      };
      const selectGroup=index=>{selected=index;sync();dictionaryList.scrollTop=0;};
      groups.forEach(({tab},index)=>{tab.onclick=()=>selectGroup(index);});
      tabs.addEventListener('keydown',event=>{
        const index=groups.findIndex(group=>group.tab===event.target);if(index<0)return;
        let next=index;if(event.key==='ArrowRight')next=(index+1)%groups.length;else if(event.key==='ArrowLeft')next=(index+groups.length-1)%groups.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=groups.length-1;else return;
        event.preventDefault();selectGroup(next);groups[next].tab.focus();
      });
      const setGroup=value=>{groups[selected].list.querySelectorAll('input[type=checkbox]').forEach(input=>{if(input.checked!==value)input.click();});sync();};
      selectAll.onclick=()=>setGroup(true);clear.onclick=()=>setGroup(false);
      dictionaryList.addEventListener('change',sync);
      const observer=new MutationObserver(sync);observer.observe(dictionary,{attributes:true,attributeFilter:['style']});
      // Native checkbox clicks still persist visibility through UFI's own handler.
      dictionary._f50FieldObserver=observer;sync();
    }
    const polishStatusSections=()=>{
      const status=$('#STATUS');if(!status?.querySelector(':scope>li>p'))return;
      if(!status.querySelector(':scope>.f50-status-basic-heading')){
        const title=document.createElement('div');title.className='title f50-status-basic-heading';title.textContent='运行状态';status.prepend(title);
      }
      status.querySelectorAll(':scope>.title').forEach(title=>{title.setAttribute('role','heading');title.setAttribute('aria-level','3');});
      status.querySelectorAll(':scope>li').forEach(item=>{item.hidden=!item.querySelector('.f50-field');const title=item.previousElementSibling;if(title?.classList.contains('title'))title.hidden=item.hidden;});
    };
    // Keep native inputs, handlers and form ownership while giving settings a shared layout.
    const settingsObservers=[];
    const wrapTable=table=>{const scroller=document.createElement('div');scroller.className='f50-table-scroll';scroller.tabIndex=0;scroller.setAttribute('role','region');scroller.setAttribute('aria-label',table.closest('.band-lock-container')?'可横向滚动的频段列表':'可横向滚动的基站列表');table.before(scroller);scroller.append(table);};
    document.querySelectorAll('.band-lock-container table,.freq-lock-container table').forEach(wrapTable);
    for(const [formId,submit,unlock] of [['bandsForm',$('#lockBandBtn'),$('#unlockBandBtn')],['cellForm',$('#cellForm>button[type=submit]'),$('.freq-lock-container button[onclick="unlockAllCell()"]')]]){
      const form=$('#'+formId);if(!form||!submit||!unlock)continue;
      const footer=document.createElement('div');footer.className='f50-settings-actions';
      submit.setAttribute('form',formId);submit.classList.add('f50-primary');unlock.type='button';
      form.after(footer);footer.append(unlock,submit);
    }
    document.querySelectorAll('.freq-lock-container .title:has(button)').forEach(heading=>heading.classList.add('f50-section-heading'));
    const cellForm=$('#cellForm');
    if(cellForm){
      const editor=document.createElement('div');editor.className='f50-cell-editor';cellForm.append(editor);
      const choice=cellForm.querySelector(':scope>div:has(input[name=RAT])');if(choice){choice.classList.add('f50-cell-choice');editor.append(choice);}
      for(const id of ['PCI','EARFCN']){const input=$('#'+id),row=input?.parentElement;if(!row)continue;row.classList.add('f50-cell-input');const label=document.createElement('label');label.htmlFor=id;label.textContent=id;row.prepend(label);input.setAttribute('aria-label',id);const reset=row.querySelector('button');if(reset){reset.removeAttribute('data-i18n');reset.textContent='清空';reset.setAttribute('aria-label','清空 '+id);}editor.append(row);}
    }
    const dataModal=$('#DataManagementModal'),dataTabs=dataModal?.querySelector('.tabs');
    if(dataTabs){
      dataTabs.classList.add('f50-data-tabs');dataTabs.setAttribute('role','tablist');dataTabs.setAttribute('aria-label','流量管理方式');
      const buttons=Array.from(dataTabs.querySelectorAll('button'));
      const sync=()=>buttons.forEach(button=>{const selected=button.classList.contains('active'),form=$('#'+(button.dataset.method==='ufi'?'UFIDataManagementForm':'DataManagementForm'));button.setAttribute('role','tab');button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;button.setAttribute('aria-controls',form.id);form.setAttribute('role','tabpanel');form.setAttribute('aria-labelledby',button.id);});
      const observer=new MutationObserver(sync);buttons.forEach(button=>observer.observe(button,{attributes:true,attributeFilter:['class']}));settingsObservers.push(observer);sync();
      dataTabs.addEventListener('keydown',event=>{const index=buttons.indexOf(event.target);if(index<0)return;let next=index;if(event.key==='ArrowRight'||event.key==='ArrowLeft')next=1-index;else if(event.key==='Home')next=0;else if(event.key==='End')next=1;else return;event.preventDefault();buttons[next].click();buttons[next].focus();});
      for(const content of dataModal.querySelectorAll('.content')){
        content.classList.add('f50-data-form');
        for(const item of content.querySelectorAll(':scope>.item')){
          if(item.querySelector('input:is([type=text],[type=number])')){
            const controls=item.firstElementChild;controls.classList.add('f50-form-controls');
            const input=controls.querySelector('input'),label=controls.querySelector(':scope>span[data-i18n]');
            if(label){if(!label.id)label.id='f50-label-'+input.name;input.setAttribute('aria-labelledby',label.id);controls.querySelector('select')?.setAttribute('aria-label',label.textContent.replace(/[：:]/g,'')+'单位');}
            if(!controls.querySelector('select')){const suffix=document.createElement('span');suffix.className='f50-form-suffix';suffix.textContent=input.name==='traffic_clear_date'?'日':'%';Array.from(controls.childNodes).filter(node=>node.nodeType===Node.TEXT_NODE).forEach(node=>node.remove());controls.append(suffix);}
          }else if(item.querySelector('input[type=checkbox]'))item.querySelector('label')?.classList.add('f50-form-check');
          else if(item.querySelector('input[type=radio]')){item.classList.add('f50-form-choice');const choices=document.createElement('div');choices.className='f50-form-options';Array.from(item.querySelectorAll(':scope>label')).forEach(label=>choices.append(label));item.append(choices);}
        }
      }
      dataModal.querySelectorAll('form>.btn').forEach(footer=>{footer.classList.add('f50-settings-actions');const save=footer.querySelector('button[type=submit]');if(save){save.removeAttribute('data-i18n');save.textContent='保存设置';save.classList.add('f50-primary');}});
    }
    // Give responsive canvases an independent, fixed plot box; live values never size a row.
    const monitorSpecs=[['kanoCpuChart','CPU 使用率','cpu'],['kanoCpuCoreChart','核心使用率','cores'],['cpuFreqList','CPU 频率','frequency'],['kanoMemChart','内存使用率','memory'],['kanoTempChart','内部温度','temperature'],['kanoNetChart','实时流量','traffic']];
    for(const [id,label,key] of monitorSpecs){
      const node=document.getElementById(id),card=node?.closest('.chart');if(!card)continue;
      card.querySelector(':scope>span[data-i18n]')?.remove();
      const heading=document.createElement('div');heading.className='f50-monitor-heading';
      const name=document.createElement('span');name.textContent=label;
      const value=document.createElement('strong');value.id='f50-monitor-'+key;value.innerHTML='<span class="f50-metric-number">—</span><span class="f50-metric-unit"></span>';if(key==='traffic')value.textContent='—';
      const reading=document.createElement('div');reading.className='f50-monitor-reading';reading.append(value);heading.append(name,reading);
      if(key!=='traffic'){const status=document.createElement('span');status.id=value.id+'-status';status.className='f50-metric-status';status.dataset.tone='unknown';status.textContent='等待数据';reading.append(status);} 
      const plot=document.createElement('div');plot.className='f50-monitor-plot';card.append(heading,plot);plot.append(node);
      if(node.matches('canvas')){node.setAttribute('role','img');node.setAttribute('aria-label',label+'趋势');}
    }
    const storage=document.createElement('div');storage.className='f50-storage-grid';
    storage.innerHTML=['internal','external'].map(key=>`<section class="f50-panel"><h2>${key==='internal'?'内置存储':'SD 卡'}</h2><strong class="f50-storage-value" id="f50-${key}-storage">等待数据</strong><div class="f50-storage-track"><span id="f50-${key}-storage-bar"></span></div><p id="f50-${key}-storage-detail"></p>${key==='internal'?'<button type="button" class="f50-text-button" data-page="files">管理文件</button>':''}</section>`).join('');
    $('#f50-page-system').appendChild(storage);
    const qrImage=$('#QRCodeImg'),qrGroup=qrImage?.closest('.dash-border-round');
    if(qrGroup){const details=document.createElement('details');details.className='f50-wifi-qr';const summary=document.createElement('summary');summary.textContent='Wi-Fi 二维码';qrGroup.before(details);details.append(summary,qrGroup);qrGroup.querySelector('[data-i18n=wifi_qrcode_label]')?.remove();}
    const tabGroups=[];
    const addTabs=(page,specs)=>{
      const section=$(`#f50-page-${page}`),tabs=document.createElement('div');
      tabs.className='f50-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label',pages.find(p=>p[0]===page)[1]);
      const pairs=[];
      specs.forEach(([name,selectors],index)=>{
        const button=document.createElement('button');button.type='button';button.textContent=name;button.id=`f50-tab-${page}-${index}`;
        button.setAttribute('role','tab');button.setAttribute('aria-selected',String(!index));button.tabIndex=index?-1:0;
        const panel=document.createElement('div');panel.className='f50-tab-panel';panel.id=`f50-tab-panel-${page}-${index}`;panel.hidden=Boolean(index);
        panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);button.setAttribute('aria-controls',panel.id);
        selectors.forEach(selector=>{const node=section.querySelector(selector);if(node)panel.appendChild(node);});
        tabs.appendChild(button);section.appendChild(panel);pairs.push([button,panel]);
      });
      const select=index=>{pairs.forEach(([button,panel],i)=>{panel.hidden=i!==index;button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;});};
      pairs.forEach(([button],index)=>button.addEventListener('click',()=>select(index)));
      tabs.addEventListener('keydown',event=>{const i=pairs.findIndex(p=>p[0]===event.target);if(i<0)return;let next=i;if(event.key==='ArrowRight')next=(i+1)%pairs.length;else if(event.key==='ArrowLeft')next=(i+pairs.length-1)%pairs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=pairs.length-1;else return;event.preventDefault();select(next);pairs[next][0].focus();});
      section.querySelector('.f50-page-heading').after(tabs);tabGroups.push(pairs);
    };
    addTabs('cellular',[['连接设置',['.f50-select-row','.f50-actions']],['频段管理',['.band-lock-container']],['基站管理',['.freq-lock-container']]]);
    addTabs('system',[['设备信息',['.devices-mon','.status-container']],['管理与维护',['.f50-select-row','.f50-actions']],['存储',['.f50-storage-grid']]]);
    addTabs('advanced',[['管理工具',['.f50-actions']],['终端',['#TTYD']]]);
    // UFI-TOOLS gains root through the Samba service, so switching file sharing off also stops advanced features.
    const confirmSambaOff=()=>{
      let dialog=$('#f50-samba-confirm');
      if(!dialog){
        dialog=document.createElement('dialog');dialog.id='f50-samba-confirm';dialog.className='f50-files-dialog';
        dialog.innerHTML='<form method="dialog"><h2>关闭文件共享？</h2><div class="f50-files-dialog-body"><p>后台通过这个服务获得系统权限。关闭后，高级功能、文件页、Mihomo 管理与守护的系统操作都会失效，直到重新开启。</p></div><div class="f50-files-dialog-actions"><button type="button" value="cancel">取消</button><button type="button" value="off" class="f50-primary f50-files-danger f50-danger" data-f50-primary="true" data-f50-danger="true">仍然关闭</button></div></form>';
        dialog.querySelectorAll('button').forEach(button=>{button.onclick=()=>{dialog.close(button.value);};});
        dialog.addEventListener('close',()=>{if(dialog.returnValue==='off'){$('#SMB')?.click();requestAnimationFrame(()=>render(false));}});
        document.body.append(dialog);
      }
      dialog.returnValue='';dialog.showModal();
    };
    shell.addEventListener('click',event=> {
      const nav=event.target.closest('[data-page]');if(nav)showPage(nav.dataset.page);
      const action=event.target.closest('[data-action]');if(action){if(action.dataset.action==='SMB'&&action.getAttribute('aria-pressed')==='true'){confirmSambaOff();return;}document.getElementById(action.dataset.action)?.click();requestAnimationFrame(()=>render(false));}
    });
    const showPage=(key,keepInline=false)=> {
      if(!pages.some(p=>p[0]===key))key='overview';
      if(!keepInline)inlineViews.forEach(view=>{if(view.root.style.display!=='none')closeInline(view);});
      document.querySelectorAll('.f50-page').forEach(p=>p.hidden=p.id!==`f50-page-${key}`);
      document.querySelectorAll('.f50-nav').forEach(n=>{if(n.dataset.page===key)n.setAttribute('aria-current','page');else n.removeAttribute('aria-current');});
      $('#f50-crumb-page').textContent=pages.find(p=>p[0]===key)[1];
      shell.dataset.menu='closed';$('.f50-menu-toggle').setAttribute('aria-expanded','false');$('.f50-menu-toggle').setAttribute('aria-label','展开导航');$('.f50-menu-toggle').title='展开导航';container.scrollTop=0;
      updateSidebar();
      if(key==='overview')chart?.resize();
      if(key==='sms'&&!keepInline)$('#SMS')?.click();
      if(key==='files')filesView?.refresh();
    };
    function updateSidebar(){const sidebar=$('#f50-sidebar');const closed=innerWidth<=850&&shell.dataset.menu!=='open';if(closed&&sidebar.contains(document.activeElement))$('.f50-menu-toggle').focus();sidebar.inert=closed;}
    $('.f50-menu-toggle').onclick=()=>{const open=shell.dataset.menu!=='open';shell.dataset.menu=open?'open':'closed';$('.f50-menu-toggle').setAttribute('aria-expanded',String(open));$('.f50-menu-toggle').setAttribute('aria-label',open?'收起导航':'展开导航');$('.f50-menu-toggle').title=open?'收起导航':'展开导航';updateSidebar();};
    shell.addEventListener('keydown',event=>{if(event.key==='Escape'){shell.dataset.menu='closed';$('.f50-menu-toggle').setAttribute('aria-expanded','false');$('.f50-menu-toggle').setAttribute('aria-label','展开导航');$('.f50-menu-toggle').title='展开导航';updateSidebar();}});
    window.addEventListener('resize',updateSidebar);
    $('#f50-account').onclick=()=>{showPage('system');$('#f50-tab-system-1').click();};
    // Primary settings belong in the workspace; reserve overlays for nested edits and confirmations.
    const inlineViews=[];
    const closeInline=view=>{if(view.root.id==='speedTestModal'){const loop=view.modal.querySelector('[data-i18n=speedtest_loop_btn]');if(/停止|Stop/i.test(loop?.textContent||''))loop.click();const start=view.modal.querySelector('[data-i18n=speedtest_start_btn]');if(/停止|Stop/i.test(start?.textContent||''))start.click();}const close=Array.from(view.modal.querySelectorAll('button')).find(button=>/^(关闭|Close)$/.test(button.textContent.trim()));if(close)close.click();else if(view.root.id==='CellularTestModal'&&typeof closeCellularTest==='function')closeCellularTest('#CellularTestModal');else closeModal('#'+view.root.id);};
    const inlineSpecs={APNManagementModal:'cellular',DataManagementModal:'cellular',DataUsageHistoryModal:'cellular',CellularTestModal:'cellular',WIFIManagementModal:'network',LANManagementModal:'network',ClientManagementModal:'network',USBStatusModal:'network',speedTestModal:'network',smsList:'sms',smsForwardModal:'sms',PluginModal:'apps',ScheduledTasksModal:'apps',ATModal:'advanced',advanceModal:'advanced',changeTokenModal:'system',changePassModal:'system',updateSoftwareModal:'system',scheduleRebootModal:'system'};
    for(const [id,page] of Object.entries(inlineSpecs)){
      const root=document.getElementById(id);if(!root)continue;
      const modal=root.matches('.modal')?root:root.querySelector('.modal');if(!modal)continue;
      const host=document.createElement('div');host.className='f50-inline-host';host.hidden=true;
      const back=document.createElement('button');back.type='button';back.className='f50-back';back.textContent='返回';back.setAttribute('aria-label','返回'+pages.find(p=>p[0]===page)[1]);
      back.onclick=()=>closeInline({root,modal});host.append(back,root);$('#f50-page-'+page).appendChild(host);
      root.classList.add('f50-inline-view');modal.dataset.f50Inline='true';
      inlineViews.push({root,modal,host,page});
    }
    // Keep native settings fields and handlers; only reorganize their presentation.
    const setCopy=(node,text)=>{if(node){node.removeAttribute('data-i18n');node.textContent=text;}};
    const history=$('#DataUsageHistoryModal');
    if(history){
      history.classList.add('f50-usage-history');
      setCopy(history.querySelector(':scope>.title'),'流量历史');
      const content=history.querySelector('.content'),start=$('#start_time_data_usage_history'),end=$('#end_time_data_usage_history');
      const query=history.querySelector('[onclick="doDataUsageHistorySearch()"]'),reset=history.querySelector('[onclick="resetUsageModalData()"]');
      const sum=$('#data_usage_history_sum'),average=$('#data_usage_history_avg'),canvas=$('#kanoDataHistoryChart'),plot=canvas.parentElement,table=$('#DataUsageHistoryBody').closest('table');
      const filters=document.createElement('div');filters.className='f50-history-filters';filters.setAttribute('role','group');filters.setAttribute('aria-label','流量查询日期');
      for(const [input,label] of [[start,'开始日期'],[end,'结束日期']]){
        const field=document.createElement('label');field.className='f50-settings-field';field.innerHTML='<span>'+label+'</span>';input.setAttribute('aria-label',label);field.append(input);filters.append(field);
      }
      const actions=document.createElement('div');actions.className='f50-history-actions';setCopy(query,'查询');setCopy(reset,'重置筛选');query.classList.add('f50-history-query');actions.append(query,reset);filters.append(actions);
      const summary=document.createElement('div');summary.className='f50-history-summary';
      for(const [value,label] of [[sum,'总用量'],[average,'日均用量']]){const metric=document.createElement('div');metric.innerHTML='<span>'+label+'</span>';metric.append(value);summary.append(metric);}
      const trend=document.createElement('section');trend.className='f50-history-trend';trend.innerHTML='<div class="f50-history-section-heading"><h3>每日用量</h3><span class="f50-history-period"></span></div>';plot.classList.add('f50-history-plot');trend.append(plot);
      canvas.setAttribute('role','img');canvas.setAttribute('aria-label','所选日期范围内的每日流量用量');
      const details=document.createElement('section');details.className='f50-history-details';details.innerHTML='<div class="f50-history-section-heading"><h3>用量明细</h3><span class="f50-history-count"></span></div><div class="f50-history-table-scroll" tabindex="0" role="region" aria-label="每日用量明细，可滚动"></div>';
      table.querySelectorAll('th').forEach((th,index)=>{setCopy(th,index?'用量':'日期');th.scope='col';});details.lastElementChild.append(table);
      content.replaceChildren(filters,summary,trend,details);
      const note=document.createElement('p');note.className='f50-settings-intro';note.textContent='按日期查看每日流量与累计用量。';history.querySelector(':scope>.title').after(note);
      const sync=()=>{
        const rows=Array.from($('#DataUsageHistoryBody').rows).filter(row=>row.cells.length===2),count=rows.length;
        details.dataset.longRange=String(count>14);
        const loading=!!$('#DataUsageHistoryBody .spin');trend.dataset.state=count?'ready':loading?'loading':'empty';plot.dataset.emptyText=loading?'正在查询用量…':'暂无用量记录';
        for(const value of [sum,average])if(value.textContent==='N/A')value.textContent='—';
        const period=count?`${rows[0].cells[0].textContent} — ${rows[count-1].cells[0].textContent}`:'选择日期后查询';
        const periodEl=trend.querySelector('.f50-history-period'),countEl=details.querySelector('.f50-history-count');
        if(periodEl.textContent!==period)periodEl.textContent=period;
        const countText=count?`${count} 天${count>14?' · 滚动查看全部':''}`:loading?'查询中':'暂无记录';if(countEl.textContent!==countText)countEl.textContent=countText;
      };
      details.lastElementChild.addEventListener('keydown',event=>{if(event.target!==details.lastElementChild||!['Home','End'].includes(event.key)||details.dataset.longRange!=='true')return;event.preventDefault();details.lastElementChild.scrollTop=event.key==='Home'?0:details.lastElementChild.scrollHeight;});
      const observer=new MutationObserver(sync);observer.observe($('#DataUsageHistoryBody'),{childList:true,subtree:true,characterData:true});settingsObservers.push(observer);sync();
      const view=inlineViews.find(view=>view.root===history);view.host.classList.add('f50-history-host');view.host.querySelector('.f50-back').textContent='← 返回蜂窝网络';
    }
    const lan=$('#LANManagementForm');
    if(lan){
      lan.classList.add('f50-lan-settings');lan.setAttribute('aria-label','内网与 DHCP 设置');
      const content=lan.querySelector('.content'),gateway=document.createElement('section'),dhcp=document.createElement('section');gateway.className='f50-lan-gateway';dhcp.className='f50-lan-dhcp';
      gateway.innerHTML='<h3>网关</h3><p>F50 在本地网络中的地址。</p><div class="f50-lan-fields"></div>';
      const lanInputs=new Map(Array.from(lan.querySelectorAll('input[name]')).map(input=>[input.name,input]));
      const field=(name,label)=>{const input=lanInputs.get(name),wrap=document.createElement('label');wrap.className='f50-settings-field';wrap.innerHTML='<span>'+label+'</span>';input.setAttribute('aria-label',label);wrap.append(input);return wrap;};
      gateway.lastElementChild.append(field('lanIp','网关地址'),field('lanNetmask','子网掩码'));
      dhcp.innerHTML='<div class="f50-lan-dhcp-heading"><div><h3>DHCP 服务</h3><p>自动为接入设备分配 IP 地址。</p></div></div>';
      const toggle=$('#collapse_dhcp_switch'),enabled=$('#enableDHCP'),collapse=$('#collapse_dhcp'),box=collapse.querySelector('.collapse_box');toggle.setAttribute('aria-label','DHCP 服务开关');dhcp.firstElementChild.append(toggle,enabled);dhcp.append(collapse);
      const range=document.createElement('div');range.className='f50-lan-range';range.innerHTML='<h4>地址分配范围</h4><div class="f50-lan-fields"></div>';range.lastElementChild.append(field('dhcpStart','起始地址'),field('dhcpEnd','结束地址'));
      const lease=field('dhcpLease','地址租期'),input=lease.querySelector('input'),unit=document.createElement('div');unit.className='f50-lan-lease-input';unit.append(input);const suffix=document.createElement('span');suffix.textContent='小时';unit.append(suffix);lease.append(unit);lease.classList.add('f50-lan-lease');
      box.replaceChildren(range,lease);content.replaceChildren(gateway,dhcp);
      const footer=lan.querySelector(':scope>.btn');footer.classList.add('f50-lan-footer');setCopy(footer.querySelector('[type=submit]'),'保存设置');
      const view=inlineViews.find(view=>view.root.id==='LANManagementModal');view.host.classList.add('f50-lan-host');view.host.querySelector('.f50-back').textContent='← 返回本地网络';
    }
    // USB presentation follows the native poll; keep its .content node and close handler.
    const usb=$('#USBStatusModal');
    if(usb){
      const source=usb.querySelector('.content');source.classList.add('f50-usb-source');source.dataset.f50Preserve='true';source.hidden=true;
      const intro=usb.querySelector(':scope>.title:nth-child(2)');intro.className='f50-usb-intro';intro.textContent='查看 Type-C 接口的工作模式与外接设备。';
      const presentation=document.createElement('div');presentation.className='f50-usb-presentation';
      presentation.innerHTML='<p class="f50-usb-state" role="status"></p><section class="f50-usb-overview" aria-label="USB 连接概况"><div class="f50-usb-mode"><span class="f50-usb-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4m6-4v4M7 7h10v4a5 5 0 0 1-10 0V7Zm5 9v5"/></svg></span><div><span class="f50-usb-eyebrow">当前工作模式</span><h3></h3><p></p></div></div><dl class="f50-usb-specs"><div><dt>接口规格</dt><dd data-usb-spec="standard">—</dd></div><div><dt>最大速率</dt><dd data-usb-spec="speed">—</dd></div></dl><p class="f50-usb-speed-note">接口能力，仅供参考；非实时传输速度。</p></section><section class="f50-usb-devices"><div class="f50-usb-devices-heading"><h3>外接设备</h3><span></span></div><ul aria-label="Type-C 外接设备列表"></ul><p class="f50-usb-empty"></p></section>';
      source.after(presentation);
      const overview=presentation.querySelector('.f50-usb-overview'),devices=presentation.querySelector('.f50-usb-devices'),state=presentation.querySelector('.f50-usb-state');
      const value=text=>text.replace(/^[^:：]*[:：]\s*/,'').trim();
      let lastSource=null;
      const syncUsb=()=>{
        if(source.innerHTML===lastSource)return;lastSource=source.innerHTML;
        const list=source.querySelector('ul.deviceList'),ready=!!list;
        overview.hidden=!ready;devices.hidden=!ready;state.hidden=ready;
        if(!ready){state.textContent=!source.textContent.trim()||/loading|加载/i.test(source.textContent)?'正在读取 USB 状态…':'暂时无法读取 USB 状态，请检查设备连接或登录状态。';return;}
        const fields=Array.from(source.firstElementChild.children).map(row=>value(row.textContent));
        const speed=fields[0]||'—',rawMode=(fields[1]||'').split('/')[0].trim().toLowerCase(),gadget=rawMode==='gadget',host=rawMode==='host';
        presentation.querySelector('.f50-usb-mode h3').textContent=gadget?'设备模式':host?'主机模式':rawMode||'模式未知';
        presentation.querySelector('.f50-usb-mode p').textContent=gadget?'F50 作为 USB 设备，供电脑连接。':host?'F50 作为 USB 主机，识别外接设备。':'设备尚未提供可识别的工作模式。';
        presentation.querySelector('[data-usb-spec=standard]').textContent=speed.match(/USB\s*[\d.]+/i)?.[0]||'未提供';
        presentation.querySelector('[data-usb-spec=speed]').textContent=(speed.match(/[（(]([^）)]+)[）)]/)?.[1]||speed).replace(/(\d)\s*([KMGT]?bps)/ig,'$1 $2');
        const rows=Array.from(list.children),target=presentation.querySelector('ul');target.replaceChildren();
        for(const row of rows){
          const values=Array.from(row.children).map(field=>value(field.textContent));
          const item=document.createElement('li'),name=document.createElement('strong'),detail=document.createElement('dl');
          name.textContent=values[1]||'未命名 USB 设备';name.dataset.f50Preserve='true';
          for(const [label,text] of [['设备路径',values[0]],['连接速率',values[2]]]){const pair=document.createElement('div'),term=document.createElement('dt'),reading=document.createElement('dd');term.textContent=label;reading.textContent=text||'—';reading.dataset.f50Preserve='true';pair.append(term,reading);detail.append(pair);}
          item.append(name,detail);target.append(item);
        }
        presentation.querySelector('.f50-usb-devices-heading span').textContent=rows.length?`${rows.length} 台设备`:'无设备记录';
        const empty=presentation.querySelector('.f50-usb-empty');empty.hidden=rows.length>0;
        empty.textContent=gadget?'设备模式下，此处不列出所连接的电脑。':host?'暂无外接 USB 设备。接入后会自动更新。':'当前没有可显示的外接设备。';
      };
      const observer=new MutationObserver(syncUsb);observer.observe(source,{childList:true,subtree:true,characterData:true});settingsObservers.push(observer);syncUsb();
      inlineViews.find(view=>view.root===usb).host.classList.add('f50-usb-host');
    }
    const formPages=new Set(['APNManagementModal','WIFIManagementModal','LANManagementModal','DataManagementModal','changeTokenModal','changePassModal','scheduleRebootModal','updateSoftwareModal']);
    const viewTitles={APNManagementModal:'APN 设置',WIFIManagementModal:'Wi-Fi 设置',LANManagementModal:'内网设置',ClientManagementModal:'接入设备',USBStatusModal:'USB 状态',ScheduledTasksModal:'定时任务',ATModal:'AT 指令',advanceModal:'高级功能',changeTokenModal:'后台口令',changePassModal:'原厂后台密码',updateSoftwareModal:'软件更新',scheduleRebootModal:'定时重启'};
    for(const view of inlineViews){
      if(view.root.id!=='smsList'){
        const back=view.host.querySelector('.f50-back');back.classList.add('f50-settings-back');if(view.root.id!=='smsForwardModal')back.textContent='← 返回'+pages.find(p=>p[0]===view.page)[1];
      }
      if(formPages.has(view.root.id))view.host.classList.add('f50-form-host');
      if(view.root.id==='USBStatusModal')view.host.classList.add('f50-status-host');
      if(viewTitles[view.root.id])setCopy(view.modal.querySelector(':scope>.title'),viewTitles[view.root.id]);
      if(!['smsList','smsForwardModal','speedTestModal','CellularTestModal'].includes(view.root.id)){
        const forms=view.modal.matches('form')?[view.modal]:Array.from(view.modal.querySelectorAll('form'));
        for(const form of forms){
          form.classList.add('f50-settings-form');
          const footer=form.querySelector(':scope>.btn');footer?.classList.add('f50-settings-actions');
          for(const button of footer?.querySelectorAll('button')||[]){if(button.type==='submit'||button.name==='submit'){button.dataset.f50Primary='true';setCopy(button,'保存设置');}}
        }
      }
    }
    const wifi=$('#WIFIManagementForm');
    if(wifi){
      wifi.classList.add('f50-wifi-settings');
      for(const label of wifi.querySelectorAll('.item>label'))label.classList.add(label.querySelector('[type=checkbox]')?'f50-settings-check':'f50-settings-field');
      const labels={SSID:'网络名称',Password:'Wi-Fi 密码',AuthMode:'安全模式',ApMaxStationNumber:'最多接入设备'};
      for(const [name,text] of Object.entries(labels)){const input=wifi.querySelector('[name="'+name+'"]');if(input){input.setAttribute('aria-label',text);setCopy(input.closest('label')?.querySelector('.label-name'),text);}}
      wifi.querySelector('[name=ApMaxStationNumber]')?.closest('.item').classList.add('f50-wifi-max-clients');
      $('#WIFI_SWITCH').setAttribute('aria-label','Wi-Fi 工作频段');
    }
    // Secondary editors use the same labels and footer as the full-page settings.
    for(const id of ['APNEditModal','AddTaskForm','scheduleRebootForm','changePassForm','changeTokenForm']){
      const root=$('#'+id);if(!root)continue;root.classList.add('f50-standard-editor');
      for(const label of root.querySelectorAll('label')){if(label.querySelector('input:not([type=checkbox]):not([type=radio]),textarea,select'))label.classList.add('f50-editor-field');else if(label.querySelector('[type=checkbox],[type=radio]'))label.classList.add('f50-settings-check');}
      const footer=root.querySelector(':scope>.btn')||root.querySelector('form>.btn');footer?.classList.add('f50-settings-actions');
      for(const button of footer?.querySelectorAll('button[type=submit]')||[]){button.dataset.f50Primary='true';setCopy(button,'保存设置');}
    }
    const task=$('#AddTaskForm');
    if(task){
      const shortcuts=Array.from(task.children).find(child=>child.querySelector('[onclick^="fillAction"]'));
      if(shortcuts){const details=document.createElement('details');details.className='f50-task-templates';details.innerHTML='<summary>动作模板</summary><p>选择模板会替换上方的动作参数，保存后生效。</p>';shortcuts.before(details);details.append(shortcuts);}
      const name=task.querySelector('[name=id]'),time=task.querySelector('[name=date_time]');
      const fields=document.createElement('div');fields.className='f50-lan-fields';name.closest('label').before(fields);fields.append(name.closest('label'),time.closest('label'));
      for(const [control,label] of [[name,'任务名称'],[time,'触发时间'],[$('#taskAction'),'动作参数（JSON）']])control?.setAttribute('aria-label',label);
      const footer=task.lastElementChild;footer.classList.add('f50-settings-actions');const cancel=footer.querySelector('[type=button]');if(cancel)footer.prepend(cancel);setCopy(footer.querySelector('[type=submit]'),'保存任务');
    }
    const plugins=$('#pluginDropZone');
    if(plugins){
      const add=plugins.querySelector('[data-i18n=plugin_modal_add_plugin_btn]'),store=$('#plugin_store_btn'),exportButton=plugins.querySelector('[data-i18n=plugin_modal_export_btn]'),clear=plugins.querySelector('[data-i18n=plugin_modal_clear_btn]');
      const toolbar=document.createElement('div');toolbar.className='f50-plugin-toolbar';add.parentElement.parentElement.before(toolbar);toolbar.append(add,store,exportButton,clear);clear.dataset.f50Danger='true';
      plugins.querySelector(':scope>.btn')?.classList.add('f50-settings-actions');
    }
    const rebootTime=$('#SCHEDULE_TIME');if(rebootTime){rebootTime.setAttribute('aria-label','每日重启时间');const label=rebootTime.parentElement.querySelector('label');if(label)label.htmlFor=rebootTime.id;}
    // Account and maintenance editors open in the System workspace with the shared form vocabulary.
    const intro=(node,text)=>{if(!node)return;node.className='f50-settings-intro';node.removeAttribute('style');node.removeAttribute('data-i18n');if(text!==undefined)node.textContent=text;};
    const fieldLabels=(root,labels)=>{for(const [name,label] of Object.entries(labels)){const control=root?.querySelector('[name="'+name+'"]');if(!control)continue;control.setAttribute('aria-label',label);setCopy(control.closest('label')?.querySelector('span'),label);}};
    const tokenEditor=$('#changeTokenModal>.modal');
    if(tokenEditor){intro(tokenEditor.querySelector(':scope>.title:nth-of-type(2)'),'至少 8 位，需同时包含字母和数字。修改后需使用新口令重新登录。');fieldLabels(tokenEditor,{newToken:'新口令',confirmToken:'确认新口令'});}
    const passEditor=$('#changePassModal>.modal');
    if(passEditor){
      const note=passEditor.querySelector(':scope>.title:nth-of-type(2)'),stored=$('#official_web_pwd');
      if(note&&stored){
        intro(note);const tip=document.createElement('span');tip.textContent='请在这里修改原厂后台密码，控制台会同步记录；直接在原厂后台修改会导致定时任务等功能失效。';
        const current=document.createElement('span');current.className='f50-stored-secret';current.innerHTML='<span>当前记录的密码</span>';
        const reveal=document.createElement('button');reveal.type='button';reveal.className='f50-text-button';reveal.textContent='显示';reveal.setAttribute('aria-pressed','false');
        reveal.onclick=()=>{const shown=current.dataset.revealed!=='true';current.dataset.revealed=String(shown);reveal.textContent=shown?'隐藏':'显示';reveal.setAttribute('aria-pressed',String(shown));};
        stored.dataset.f50Preserve='true';current.append(stored,reveal);note.replaceChildren(tip,current);
      }
      fieldLabels(passEditor,{oldPassword:'当前密码',newPassword:'新密码',confirmPassword:'确认新密码'});
    }
    const rebootEditor=$('#scheduleRebootForm');
    if(rebootEditor){
      setCopy(rebootEditor.querySelector(':scope>.title'),'定时重启');
      setCopy($('#SCHEDULE_ENABLED')?.closest('label')?.querySelector('span'),'每天自动重启');
      setCopy(rebootEditor.querySelector('label[data-i18n=schedule_reboot_time]'),'重启时间');
      const hint=document.createElement('p');hint.className='f50-settings-intro';hint.textContent='使用 24 小时制，例如 04:30。重启期间网络会中断。';rebootEditor.querySelector(':scope>.title').after(hint);
      $('#SCHEDULE_TIME')?.parentElement.classList.add('f50-editor-field','f50-schedule-time');
    }
    const updateView=$('#updateSoftwareModal>.modal');
    if(updateView){
      const notes=updateView.querySelector('[data-i18n=update_notice_1]')?.closest('.title');
      intro(notes,'更新需开启 USB 调试与网络 ADB。更新过程中请勿断电，确认能正常进入后台后再重启设备。');
      const footer=updateView.querySelector(':scope>.btn');footer?.classList.add('f50-settings-actions');
      setCopy($('#doUpdate'),'安装更新');$('#doUpdate')&&($('#doUpdate').dataset.f50Primary='true');setCopy($('#downloadAPK'),'下载安装包');
      if(footer&&$('#downloadAPK'))footer.prepend($('#downloadAPK'));
    }
    const apnEditor=$('#APNEditModal');
    if(apnEditor){
      for(const [name,label] of [['profile_name','配置名称'],['apn','APN'],['username','用户名'],['password','密码'],['auth_method','认证方式'],['pdp_method','IP 协议']]){
        const control=apnEditor.querySelector('[name="'+name+'"]');if(!control)continue;control.parentElement.classList.add('f50-editor-field');control.setAttribute('aria-label',label);setCopy(control.parentElement.querySelector('span'),label);if(name==='password')control.type='password';
      }
    }
    const at=$('#ATModal')?.querySelector('.modal');
    if(at){
      at.classList.add('f50-at-workspace');const input=$('#AT_INPUT'),execute=at.querySelector('[data-i18n=at_exec_btn]'),slot=$('#AT_SLOT');
      const row=input.parentElement;row.classList.add('f50-at-command');input.setAttribute('aria-label','AT 指令');slot.setAttribute('aria-label','AT 执行槽位');execute.dataset.f50Primary='true';
      const quick=at.querySelector('[data-i18n=at_quick_label]')?.parentElement;
      if(quick){
        const groups=[['信息查询',['at_qos','at_imei','at_force_imei','at_modem','at_imsi']],['设备与通话',['at_fill_imei','at_modem_reboot','at_high_rail_mode']]];
        const tools=document.createElement('div');tools.className='f50-at-tools';
        for(const [title,keys] of groups){const section=document.createElement('section');section.innerHTML='<h3>'+title+'</h3><div class="f50-at-shortcuts"></div>';for(const key of keys){const button=quick.querySelector('[data-i18n="'+key+'"]');if(button)section.lastElementChild.append(button);}tools.append(section);}
        const rest=Array.from(quick.querySelectorAll('button'));if(rest.length)tools.lastElementChild.lastElementChild.append(...rest);
        quick.replaceWith(tools);
      }
      const output=$('#AT_RESULT');output.setAttribute('role','log');output.setAttribute('aria-label','AT 执行结果');output.setAttribute('aria-live','polite');
      const sync=()=>output.dataset.empty=String(!output.textContent.trim()&&!output.querySelector('img,canvas,svg'));
      const observer=new MutationObserver(sync);observer.observe(output,{childList:true,subtree:true,characterData:true});settingsObservers.push(observer);sync();
    }
    let updateSmsUnread=()=>{};
    let syncSmsTabs=()=>{};
    // Messages-style workspace, retaining native SMS nodes, IDs and action handlers.
    const smsModal=$('#smsList'),smsList=$('#sms-list'),phone=$('#PhoneInput'),nativeMessage=$('#SMSInput');
    if(smsModal&&smsList&&phone&&nativeMessage){
      smsModal.classList.add('f50-messages');
      const smsTitle=smsModal.querySelector(':scope>.title');smsTitle.hidden=true;smsTitle.removeAttribute('data-i18n');smsTitle.textContent='信息';
      const recipient=phone.closest('.action'),composer=nativeMessage.closest('.action'),content=smsList.closest('.content');
      const aside=document.createElement('aside');aside.className='f50-conversations';aside.setAttribute('aria-label','短信会话');
      aside.innerHTML='<div class="f50-conversation-toolbar"><div><h2>信息</h2><span class="f50-conversation-count">正在同步</span></div><button type="button" class="f50-new-message" aria-label="新建短信" title="新建短信"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 5H5v14h14v-8M14 4l6 6M11 13l2-6 4-4 4 4-4 4-6 2Z"/></svg></button></div><label class="f50-message-search"><span class="sr-only">搜索号码或短信</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input type="search" placeholder="搜索" aria-label="搜索号码或短信"></label><div class="f50-thread-list" data-f50-preserve></div><p class="f50-thread-empty">正在同步短信…</p>';
      const chat=document.createElement('section');chat.className='f50-message-chat';chat.setAttribute('aria-label','短信聊天');
      const header=document.createElement('header');header.className='f50-chat-header';
      header.innerHTML='<button type="button" class="f50-chat-back" aria-label="返回会话列表"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m15 5-7 7 7 7"/></svg></button><span class="f50-contact-avatar" aria-hidden="true"></span><div class="f50-chat-contact"><h2>选择一个会话</h2><p>运营商短信</p></div>';
      const welcome=document.createElement('div');welcome.className='f50-chat-welcome';welcome.innerHTML=icon('sms')+'<h3>你的信息，就在这里</h3><p>选择左侧会话，或新建一条短信。</p>';
      const message=document.createElement('textarea');message.id='SMSInput';message.rows=1;message.placeholder='短信';message.setAttribute('aria-label','短信内容');message.setAttribute('data-f50-preserve','');nativeMessage.replaceWith(message);
      phone.type='tel';phone.inputMode='tel';phone.setAttribute('aria-label','收件人号码');phone.placeholder='号码';phone.removeAttribute('data-i18n-placeholder');
      recipient.classList.add('f50-message-recipient');recipient.querySelector('span').textContent='收件人';recipient.querySelector('span').removeAttribute('data-i18n');
      composer.classList.add('f50-message-composer');
      const send=composer.querySelector('[data-i18n=sms_modal_send_btn]');send.removeAttribute('data-i18n');send.innerHTML=icon('up');send.setAttribute('aria-label','发送短信');send.title='发送短信（Ctrl / ⌘ + Enter）';send.classList.add('f50-message-send');
      const helper=document.createElement('p');helper.className='f50-composer-hint';helper.innerHTML='<span>SMS · 运营商短信</span><span class="f50-message-length">0 字</span>';
      chat.append(header,recipient,welcome,content,composer,helper);smsModal.append(aside,chat);
      const list=aside.querySelector('.f50-thread-list'),search=aside.querySelector('input'),empty=aside.querySelector('.f50-thread-empty');
      let groups=[],active=null,composing=false,signature='',lastVisible='',wasAtBottom=true,newRecipient='';
      const smsMetadata=new Map(),readPending=new Set();let serverUnread=0;
      const smsNav=$('.f50-nav[data-page=sms]'),navDot=document.createElement('span');navDot.className='f50-unread-dot';navDot.hidden=true;smsNav?.append(navDot);
      const syncUnread=()=>{
        const count=Math.max(serverUnread,Array.from(smsMetadata.values()).filter(item=>item.unread).length);
        navDot.hidden=count===0;navDot.setAttribute('aria-label',`${count} 条未读短信`);
        $('.f50-menu-toggle').dataset.smsUnread=String(count>0);
      };
      updateSmsUnread=sample=>{serverUnread=Number(sample?.sms_unread_num)||0;syncUnread();};
      const isConversationVisible=number=>!composing&&active===number&&!$('#f50-page-sms').hidden&&smsModal.style.display!=='none'&&(innerWidth>700||smsModal.dataset.mobileView==='chat')&&document.visibilityState==='visible';
      const markConversationRead=()=>{
        if(typeof readSmsByIds!=='function'||!isConversationVisible(active))return;
        const ids=Array.from(smsMetadata.entries()).filter(([id,item])=>item.phone===active&&item.unread&&!readPending.has(id)).map(([id])=>id);
        if(!ids.length)return;ids.forEach(id=>readPending.add(id));
        readSmsByIds(ids).catch(()=>{}).finally(()=>ids.forEach(id=>readPending.delete(id)));
      };
      // Native UFI marks every loaded SMS read. Restrict that request to the visible conversation.
      // Inspect existing list responses to retain the device's unread tags without extra polling.
      const smsFetch=window.fetch;
      window.fetch=async function(resource,init){
        const url=typeof resource==='string'?new URL(resource,location.href):null;
        const params=url?.pathname.endsWith('/goform/goform_set_cmd_process')&&init?.body?new URLSearchParams(init.body):null;
        const readId=params?.get('goformId')==='SET_MSG_READ'?String(params.get('msg_id')):null;
        if(readId&&!isConversationVisible(smsMetadata.get(readId)?.phone))return new Response(JSON.stringify({result:'success'}),{headers:{'Content-Type':'application/json'}});
        const response=await smsFetch.call(this,resource,init);
        if(url?.pathname.endsWith('/goform/goform_get_cmd_process')&&url.searchParams.get('cmd')==='sms_data_total'){
          try{const data=await response.clone().json();if(Array.isArray(data.messages)){
            smsMetadata.clear();for(const item of data.messages)smsMetadata.set(String(item.id),{phone:String(item.number),unread:String(item.tag)==='1',outgoing:['2','3'].includes(String(item.tag))});
            serverUnread=Array.from(smsMetadata.values()).filter(item=>item.unread).length;refreshMessages();syncUnread();
          }}catch{}
        }else if(readId){
          try{if((await response.clone().json()).result==='success'){const item=smsMetadata.get(readId);if(item?.unread){item.unread=false;serverUnread=Math.max(0,serverUnread-1);refreshMessages();syncUnread();}}}catch{}
        }
        return response;
      };
      const drafts=new Map();
      const syncComposer=()=>{send.disabled=!Number(phone.value.trim())||!message.value.trim();helper.querySelector('.f50-message-length').textContent=message.value.length+' 字';message.style.height='auto';message.style.height=Math.min(120,Math.max(40,message.scrollHeight))+'px';};
      const saveDraft=()=>{drafts.set(composing?'new':active,message.value);if(composing)newRecipient=phone.value;};
      const selectConversation=(number,newMessage=false)=>{
        saveDraft();active=number;composing=newMessage;phone.value=newMessage?newRecipient:number||'';message.value=drafts.get(newMessage?'new':number)||'';
        smsModal.dataset.mobileView='chat';renderConversation(true);renderThreads();syncComposer();
        markConversationRead();
        if(newMessage)phone.focus();
      };
      const renderThreads=()=>{
        list.replaceChildren();const query=search.value.trim().toLowerCase();
        const filtered=groups.filter(group=>(group.phone+' '+group.items.map(item=>item.body).join(' ')).toLowerCase().includes(query));
        for(const group of filtered){
          const latest=group.items[group.items.length-1],button=document.createElement('button');button.type='button';button.className='f50-thread';
          button.setAttribute('aria-pressed',String(!composing&&active===group.phone));
          const unread=group.items.some(item=>smsMetadata.get(item.id)?.unread);button.dataset.unread=String(unread);
          const avatar=document.createElement('span');avatar.className='f50-contact-avatar';avatar.textContent=group.phone.slice(-2)||'?';avatar.setAttribute('aria-hidden','true');
          const copy=document.createElement('span');copy.className='f50-thread-copy';
          const heading=document.createElement('span');heading.className='f50-thread-heading';const name=document.createElement('strong');name.textContent=group.phone;
          const date=document.createElement('time');date.textContent=latest.clock;heading.append(name,date);
          if(unread){const dot=document.createElement('span');dot.className='f50-unread-dot';dot.setAttribute('aria-label','未读短信');heading.append(dot);}
          const preview=document.createElement('span');preview.className='f50-thread-preview';preview.textContent=(latest.outgoing?'我：':'')+latest.body;
          copy.append(heading,preview);button.append(avatar,copy);button.onclick=()=>selectConversation(group.phone);list.append(button);
        }
        empty.hidden=filtered.length>0;empty.textContent=query?'未找到匹配的短信':groups.length?'没有会话':'正在同步短信…';
        aside.querySelector('.f50-conversation-count').textContent=groups.length?groups.length+' 个会话':'短信';
      };
      const renderConversation=(forceScroll=false)=>{
        const group=groups.find(group=>group.phone===active),visible=!composing&&!!group;
        header.querySelector('h2').textContent=composing?'新建短信':group?.phone||'选择一个会话';
        header.querySelector('.f50-contact-avatar').textContent=composing?'+':group?.phone.slice(-2)||'…';
        header.querySelector('p').textContent=visible?group.items.length+' 条短信 · SMS':'运营商短信';
        recipient.hidden=!composing;welcome.hidden=visible||composing;content.hidden=!visible;composer.hidden=!visible&&!composing;helper.hidden=composer.hidden;
        for(const row of smsList.querySelectorAll('.sms-item'))row.hidden=!visible||row.dataset.smsPhone!==active;
        for(const separator of smsList.querySelectorAll('.f50-message-day'))separator.remove();
        if(visible){let lastDay='';for(const item of group.items){if(item.day!==lastDay){const day=document.createElement('li');day.className='f50-message-day';day.textContent=item.day;item.node.before(day);lastDay=item.day;}}}
        const next=visible?group.items.map(item=>item.id).join(','):'';
        if(forceScroll||(next!==lastVisible&&wasAtBottom))content.scrollTop=content.scrollHeight;
        lastVisible=next;syncComposer();
      };
      content.addEventListener('scroll',()=>{wasAtBottom=content.scrollHeight-content.scrollTop-content.clientHeight<80;},{passive:true});
      const decorateMessage=row=>{
        const paragraphs=Array.from(row.children).filter(child=>child.tagName==='P');if(paragraphs.length<3)return null;
        const body=paragraphs[1].textContent,date=paragraphs[2].textContent;
        const parts=date.match(/\d+/g)||[],clock=parts.length>=6?parts.slice(3,6).map(n=>n.padStart(2,'0')).join(':'):'';
        const day=parts.length>=3?`${parts[0].length===2?'20':''}${parts[0]}年${Number(parts[1])}月${Number(parts[2])}日`:date;
        const outgoing=smsMetadata.get(row.dataset.smsId)?.outgoing??(!!row.querySelector('[onclick^="deleteAndReSendSms"]')||row.getAttribute('style')?.includes('margin-right'));
        if(!row.dataset.f50Message){
          row.dataset.f50Message='true';row.dataset.direction=outgoing?'outgoing':'incoming';
          paragraphs[0].className='f50-message-sender';paragraphs[1].className='f50-message-bubble';paragraphs[2].className='f50-message-time';paragraphs[2].textContent=clock+(row.querySelector('[onclick^="deleteAndReSendSms"]')?' · 发送失败':outgoing?' · 已发送':'');
          // Keep the confirmation span inside its original parent: native deletion removes that parent's parent.
          const actions=document.createElement('div');actions.className='f50-message-actions';
          const more=document.createElement('button');more.type='button';more.className='f50-message-more';more.textContent='•••';more.setAttribute('aria-label','消息操作');more.setAttribute('aria-expanded','false');
          for(const action of Array.from(row.children).filter(child=>child.hasAttribute('onclick'))){
            const retry=action.getAttribute('onclick').startsWith('deleteAndReSendSms');
            const label=retry?'重新发送':'删除短信';action.setAttribute('role','button');action.setAttribute('tabindex','0');action.setAttribute('aria-label',label);action.title=label;
            action.classList.add('f50-native-message-action');action.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();action.click();}});
            // Native action remains a direct child of the message for its delete handler.
          }
          more.onclick=()=>{const open=row.dataset.actions!=='open';row.dataset.actions=open?'open':'closed';more.setAttribute('aria-expanded',String(open));};
          actions.append(more);row.append(actions);row.dataset.f50Day=day;row.dataset.f50Clock=clock;
        }
        return {node:row,id:row.dataset.smsId,phone:row.dataset.smsPhone,body,outgoing,day:row.dataset.f50Day,clock:row.dataset.f50Clock};
      };
      const observer=new MutationObserver(()=>refreshMessages());
      const observe=()=>observer.observe(smsList,{childList:true,subtree:true,characterData:true});
      const refreshMessages=()=>{
        observer.disconnect();
        const rows=Array.from(smsList.querySelectorAll('.sms-item')),fresh=rows.some(row=>!row.dataset.f50Message);
        const next=rows.map(row=>row.dataset.smsId+':'+row.dataset.smsContent+':'+!!smsMetadata.get(row.dataset.smsId)?.unread).join('|');
        if(next!==signature||fresh){
          signature=next;const map=new Map(),items=(fresh?rows.reverse():rows).map(decorateMessage).filter(Boolean);
          if(fresh)for(const item of items)smsList.append(item.node);
          items.forEach((item,index)=>{if(!map.has(item.phone))map.set(item.phone,{phone:item.phone,items:[],latestIndex:index});const group=map.get(item.phone);group.items.push(item);group.latestIndex=index;});
          groups=Array.from(map.values()).sort((a,b)=>b.latestIndex-a.latestIndex);
          if(active&&!groups.some(group=>group.phone===active)&&!composing)active=null;
          if(!active&&!composing&&groups.length&&innerWidth>700){active=groups[0].phone;phone.value=active;message.value=drafts.get(active)||'';}
          renderThreads();renderConversation();
        }
        observe();
        syncUnread();markConversationRead();
      };
      search.addEventListener('input',renderThreads);
      aside.querySelector('.f50-new-message').onclick=()=>selectConversation(null,true);
      header.querySelector('.f50-chat-back').onclick=()=>{saveDraft();smsModal.dataset.mobileView='list';};
      message.addEventListener('input',syncComposer);phone.addEventListener('input',syncComposer);
      message.addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)&&!event.isComposing){event.preventDefault();if(!send.disabled)send.click();}});
      // Messages and forwarding are sibling views; a tab bar replaces the extra header button.
      const smsTabs=document.createElement('div');smsTabs.className='f50-tabs f50-persistent-tabs';smsTabs.setAttribute('role','tablist');smsTabs.setAttribute('aria-label','短信');
      const smsTabSpecs=[['信息','smsList',()=>$('#smsForwardModal').style.display!=='none'?closeModal('#smsForwardModal',0,()=>$('#SMS')?.click()):$('#SMS')?.click()],['转发设置','smsForwardModal',()=>$('#smsList').style.display!=='none'?closeModal('#smsList',0,()=>$('#smsForward')?.click()):$('#smsForward')?.click()]];
      const smsTabButtons=smsTabSpecs.map(([label,id,open],index)=>{const button=document.createElement('button');button.type='button';button.id='f50-tab-sms-'+index;button.textContent=label;button.setAttribute('role','tab');button.setAttribute('aria-controls',id);button.dataset.view=id;button.onclick=()=>{if($('#'+id)?.style.display==='none')open();};smsTabs.append(button);return button;});
      smsTabs.addEventListener('keydown',event=>{const index=smsTabButtons.indexOf(event.target);if(index<0||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?1:1-index;smsTabButtons[next].focus();smsTabButtons[next].click();});
      syncSmsTabs=()=>{const active=smsTabButtons.find(button=>$('#'+button.dataset.view)?.style.display!=='none');smsTabButtons.forEach((button,index)=>{const selected=active?button===active:index===0;if(button.getAttribute('aria-selected')!==String(selected)){button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;}});};
      $('#f50-page-sms .f50-page-heading').after(smsTabs);syncSmsTabs();
      inlineViews.find(view=>view.root.id==='smsList').host.querySelector('.f50-back').hidden=true;
      settingsObservers.push(observer);refreshMessages();renderThreads();renderConversation();
    }
    // Forwarding settings: clear status first, destination second, command editing on demand.
    let updateSmsForwarding=()=>{};
    const forwardRoot=$('#smsForwardModal'),forwardModal=forwardRoot?.querySelector('.modal');
    const senderName=$('#smsForwardModal [name=smtp_from_name]');if(senderName?.placeholder==='UFI-TOOLS')senderName.placeholder='F50';
    if(forwardModal){
      forwardModal.classList.add('f50-forward-settings');
      const title=forwardModal.querySelector('[data-i18n=sms_forward_title]');title.removeAttribute('data-i18n');title.textContent='短信转发';title.closest('.title')?.classList.add('f50-tab-named-title');
      const intro=document.createElement('p');intro.className='f50-forward-intro';intro.textContent='将收到的短信自动送到你常用的消息服务。';forwardModal.querySelector(':scope>.title').after(intro);
      const enabledHost=$('#collapse_smsforward_btn'),enabledLabel=forwardModal.querySelector('[data-i18n=sms_forward_toggle]');
      const status=document.createElement('div');status.className='f50-forward-status';
      status.innerHTML='<div><div class="f50-forward-status-heading"><strong>自动转发</strong></div><p>新短信按已保存的配置转发</p></div>';
      enabledLabel.replaceWith(status);status.append(enabledHost);enabledHost.querySelector('input')?.setAttribute('aria-label','自动转发');
      const tabs=forwardModal.querySelector('.tabs');tabs.classList.add('f50-forward-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','转发方式');
      const tabLabels={smtp:'电子邮件',curl:'Webhook / 自定义',dingtalk:'钉钉机器人'};
      const tabForms={smtp:'smsForwardForm',curl:'smsForwardCurlForm',dingtalk:'smsForwardDingTalkForm'};
      for(const button of tabs.querySelectorAll('button')){button.removeAttribute('data-i18n');button.textContent=tabLabels[button.dataset.method];button.setAttribute('role','tab');button.setAttribute('aria-controls',tabForms[button.dataset.method]);}
      tabs.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;const buttons=Array.from(tabs.querySelectorAll('button')),current=buttons.indexOf(event.target);if(current<0)return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(current+(event.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();buttons[next].click();});
      for(const [method,id] of Object.entries(tabForms)){
        const form=$('#'+id);form.setAttribute('role','tabpanel');form.setAttribute('aria-labelledby',method+'_btn');
        form.querySelector(':scope>.btn')?.classList.add('f50-settings-actions');
        const submit=form.querySelector('[type=submit]');if(submit){submit.removeAttribute('data-i18n');submit.textContent='保存配置';}
        for(const label of form.querySelectorAll('.item>label'))label.classList.add(label.querySelector('[type=checkbox]')?'f50-forward-check':'f50-forward-field');
      }
      const curlForm=$('#smsForwardCurlForm'),curlContent=curlForm.querySelector('.content'),curlText=$('#curl_text');
      const destination=document.createElement('section');destination.className='f50-forward-destination';
      destination.innerHTML='<span class="f50-forward-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m3 10 18-7-6 18-4-8-8-3Z M11 13 21 3"/></svg></span><div><span>转发目标</span><h3>读取配置中</h3><p>正在加载已保存的转发配置。</p></div>';
      const advanced=document.createElement('details');advanced.className='f50-forward-advanced';
      const advancedSummary=document.createElement('summary');advancedSummary.textContent='高级配置';advanced.append(advancedSummary);
      const commandLabel=document.createElement('label');commandLabel.htmlFor='curl_text';commandLabel.textContent='转发命令';commandLabel.className='f50-forward-command-label';
      const commandNote=document.createElement('p');commandNote.className='f50-forward-help';commandNote.textContent='命令使用单行格式；修改后点击「保存配置」生效。';
      const help=curlContent.querySelector('.title'),presets=help.nextElementSibling,commandItem=curlText.closest('.item');
      const variables=document.createElement('details');variables.className='f50-forward-reference';const variablesSummary=document.createElement('summary');variablesSummary.textContent='占位符与命令说明';variables.append(variablesSummary,help);
      const oldHint=help.querySelector('[data-i18n=curl_hint]');oldHint.removeAttribute('data-i18n');oldHint.textContent='以下占位符在转发时替换为短信或设备数据，可点击复制。';
      const templates=document.createElement('details');templates.className='f50-forward-reference';const templatesSummary=document.createElement('summary');templatesSummary.textContent='使用转发模板';
      const templateNote=document.createElement('p');templateNote.className='f50-forward-help';templateNote.textContent='套用模板会替换编辑区中的命令，保存后生效。';presets.classList.add('f50-forward-templates');templates.append(templatesSummary,templateNote,presets);
      advanced.append(commandLabel,commandNote,commandItem,variables,templates,curlForm.querySelector(':scope>.btn'));
      curlContent.replaceChildren(destination,advanced);curlText.rows=5;curlText.setAttribute('aria-label','转发命令');curlText.setAttribute('spellcheck','false');
      const preferences=document.createElement('section');preferences.className='f50-forward-preferences';
      const preferencesTitle=document.createElement('h3');preferencesTitle.textContent='通知与规则';preferences.append(preferencesTitle);
      for(const [id,label,caption,action] of [['collapse_smsforward_power_status_btn','电源状态通知','设备电量和电源状态变化时通知',null],['forward_method_setting_btn','转发过滤','排除指定号码或包含关键词的短信','管理规则'],['forward_nickname_setting_btn','设备别名','在转发消息中区分不同设备','设置别名']]){
        const control=$('#'+id),row=document.createElement('div');row.className='f50-forward-preference';
        const copy=document.createElement('div'),name=document.createElement('strong'),note=document.createElement('p');name.textContent=label;note.textContent=caption;copy.append(name,note);
        if(action){control.removeAttribute('data-i18n');control.textContent=action;}else{control.querySelector('[data-i18n=power_status_forward_title]')?.remove();control.querySelector('input')?.setAttribute('aria-label','电源状态通知');}
        row.append(copy,control);preferences.append(row);
      }
      forwardModal.append(preferences);
      const labels={smtp_host:'SMTP 服务器',smtp_port:'端口',smtp_username:'登录账号',smtp_from:'发件邮箱',smtp_from_name:'发件人名称',smtp_password:'密码 / 授权码',smtp_to:'接收邮箱',dingtalk_webhook:'Webhook 地址',dingtalk_secret:'加签密钥'};
      for(const [id,label] of Object.entries(labels)){const input=$('#'+id),span=input?.parentElement.querySelector('span');if(span){span.removeAttribute('data-i18n');span.textContent=label;}input?.setAttribute('aria-label',label);}
      $('#dingtalk_secret').type='password';
      const back=inlineViews.find(view=>view.root===forwardRoot)?.host.querySelector('.f50-back');if(back)back.hidden=true;
      updateSmsForwarding=()=>{
        for(const button of tabs.querySelectorAll('button')){const selected=button.classList.contains('active');button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;}
        const value=curlText.value,service=/f50-telegram\.curl|api\.telegram\.org/i.test(value)?'Telegram':/qyapi\.weixin\.qq\.com/i.test(value)?'企业微信':/pushplus/i.test(value)?'PushPlus':/api\.day\.app|bark/i.test(value)?'Bark':value.trim()?'自定义转发':'尚未配置';
        destination.querySelector('h3').textContent=service;
        destination.querySelector('p').textContent=service==='Telegram'?'投递到已配置的 Telegram 会话。':service==='尚未配置'?'展开高级配置，填写转发命令或选择模板。':`通过已配置的 ${service==='自定义转发'?'服务':service} 接收短信。`;
      };
      curlText.addEventListener('input',updateSmsForwarding);
      const forwardObserver=new MutationObserver(updateSmsForwarding);forwardObserver.observe(tabs,{attributes:true,subtree:true,attributeFilter:['class']});forwardObserver.observe($('#collapse_smsforward'),{attributes:true,attributeFilter:['data-name']});settingsObservers.push(forwardObserver);updateSmsForwarding();
    }
    // Keep the native controls and status sources; only reorganize their presentation.
    const advanced=$('#advanceModal'),advancedContent=advanced?.querySelector('.content');
    if(advancedContent){
      const warning=advanced.querySelector('[data-i18n=advance_warning]'),features=advanced.querySelector('[data-i18n=advance_feature_list]');
      const socat=advanced.querySelector('.socat_status'),adb=advanced.querySelector('.adb_status'),buttons=advanced.querySelector('.advanced-btns');
      const result=$('#AD_RESULT'),resultTitle=advanced.querySelector('[data-i18n=advance_result]');
      if(warning&&features&&socat&&adb&&buttons&&result&&resultTitle){
        advanced.classList.add('f50-advanced');
        const status=document.createElement('dl');status.className='f50-advanced-status';status.setAttribute('aria-label','当前设备状态');
        for(const [key,label] of [['feature','高级功能'],['network','网络 ADB'],['usb','USB 调试'],['firmware','固件版本']]){
          const field=document.createElement('div');field.dataset.field=key;
          const term=document.createElement('dt');term.textContent=label;
          const value=document.createElement('dd');value.textContent='读取中';field.append(term,value);status.append(field);
        }
        const sources=document.createElement('div');sources.hidden=true;sources.append(socat,adb);
        const notice=document.createElement('aside');notice.className='f50-advanced-notice';notice.append(warning);
        const essentials=document.createElement('p');essentials.className='f50-advanced-essentials';
        essentials.textContent='开启后请保持文件共享开启。使用 USB 网络共享时，建议通过无线 ADB 调试，避免有线 ADB 占用 USB 端口造成断流。';notice.append(essentials);
        const details=document.createElement('details');details.className='f50-advanced-details';
        const summary=document.createElement('summary');summary.textContent='功能说明与故障处理';details.append(summary,features);
        const tools=document.createElement('div');tools.className='f50-advanced-tools';
        const groups=[
          ['功能管理','添加或移除设备的高级能力',['advance_add','advance_remove']],
          ['调试连接','有线与无线 ADB 调试入口',['usb_debugging','adb_autostart']],
          ['脚本与固件','启动脚本、Boot 备份与固件更新',['edit_boot_script','advance_dump_boot','advance_disable_update']],
          ['运行模式','调整唤醒锁与设备性能',['wake_lock_enabled','wake_lock_disabled','performance_mode']]
        ];
        for(const [title,note,keys] of groups){
          const section=document.createElement('section');section.className='f50-advanced-group';
          const heading=document.createElement('h3');heading.textContent=title;
          const caption=document.createElement('p');caption.textContent=note;
          const actions=document.createElement('div');actions.className='f50-advanced-actions';
          for(const key of keys){const button=buttons.querySelector(`[data-i18n="${key}"]`);if(button)actions.append(button);}
          section.append(heading,caption,actions);tools.append(section);
        }
        // Future native controls remain visible even if a firmware adds new actions.
        if(buttons.children.length){const extra=document.createElement('section');extra.className='f50-advanced-group';const heading=document.createElement('h3');heading.textContent='其他操作';extra.append(heading,buttons);tools.append(extra);}
        const output=document.createElement('section');output.className='f50-advanced-output';
        const empty=document.createElement('p');empty.className='f50-advanced-empty';empty.textContent='尚未执行操作，结果将在这里显示。';
        result.setAttribute('role','log');result.setAttribute('aria-live','polite');result.setAttribute('aria-label','高级功能执行结果');
        output.append(resultTitle,empty,result);
        advancedContent.replaceChildren(status,sources,notice,tools,details,output);
        const updateAdvanced=()=>{
          const copy=adb.cloneNode(true);copy.querySelectorAll('br').forEach(br=>br.replaceWith('\n'));
          const raw=cleanChrome(copy.textContent),feature=cleanChrome(socat.textContent).split(/[:：]/).slice(1).join('：').trim();
          const values={feature:feature||'读取中',network:raw.match(/网络\s*ADB\s*状态\s*[:：]\s*([^\n]+)/i)?.[1]?.trim()||'—',usb:raw.match(/USB\s*调试开关\s*[:：]\s*([^\n]+)/i)?.[1]?.trim()||'—',firmware:raw.match(/固件版本\s*[:：]\s*([^\n]+)/)?.[1]?.trim()||'—'};
          for(const [key,value] of Object.entries(values)){
            const field=status.querySelector(`[data-field="${key}"]`),reading=field.querySelector('dd');
            if(reading.textContent!==value)reading.textContent=value;
            const tone=/异常|失败|错误/.test(value)?'error':/未开启|关闭|禁用|未连接/.test(value)?'neutral':/已开启|正常|开启/.test(value)?'success':'neutral';
            if(field.dataset.tone!==tone)field.dataset.tone=tone;
          }
          const hasResult=!!result.textContent.trim()||!!result.querySelector('img,canvas,svg');empty.hidden=hasResult;
        };
        const observer=new MutationObserver(updateAdvanced);for(const source of [socat,adb,result])observer.observe(source,{childList:true,subtree:true,characterData:true});settingsObservers.push(observer);updateAdvanced();
      }
    }
    // The native loop handler resolves the duplicated start-button ID globally.
    // Preserve its original order: local measurement before cellular measurement.
    $('#f50-pages').insertBefore($('#f50-page-network'),$('#f50-page-cellular'));
    const syncInlineViews=()=>{
      const closing=[];
      inlineViews.forEach(view=>{
        const open=view.root.style.display!=='none',wasOpen=!view.host.hidden;
        if(!open&&wasOpen&&(view.host.contains(document.activeElement)||document.activeElement===document.body))closing.push(view);
        view.host.hidden=!open;
        if(open&&!wasOpen){view.opener=document.activeElement;showPage(view.page,true);view.host.hidden=false;view.modal.tabIndex=-1;view.modal.focus({preventScroll:true});}
      });
      syncSmsTabs();
      for(const [page] of pages)$('#f50-page-'+page).classList.toggle('f50-has-inline',inlineViews.some(view=>view.page===page&&!view.host.hidden));
      closing.forEach(view=>{if(view.opener?.isConnected&&view.opener.getClientRects().length)view.opener.focus({preventScroll:true});else{const heading=$('#f50-page-'+view.page+' h1');if(heading?.getClientRects().length){heading.tabIndex=-1;heading.focus({preventScroll:true});}}});
    };
    // Files: browse, upload, download, rename and delete within internal storage through the root shell.
// The root shell reports no exit status, so every command prints its own result marker.
const installFilesPage = (page, icon) => {
  const ROOT = '/sdcard', RAW = '/data/media/0', UPLOADS = '/data/data/com.minikano.f50_sms/files/uploads';
  const CHUNK = 16 * 1024 * 1024, OK = '__F50_OK__', FAIL = '__F50_FAIL__';
  const enc = text => btoa(unescape(encodeURIComponent(text)));
  const arg = text => `"$(printf %s '${enc(text)}' | base64 -d)"`;
  const shell = async (script, timeout = 30000) => {
    if (typeof runShellWithRoot !== 'function') throw Error('后台服务不可用');
    const res = await runShellWithRoot(script, timeout);
    const out = String(res?.content ?? '');
    const fail = out.split(FAIL)[1];
    if (fail !== undefined) throw Error(fail.trim().split('\n')[0] || '操作失败');
    if (!out.includes(OK)) throw Error('设备没有返回结果，请确认已登录并开启高级功能');
    return out.split(OK)[0];
  };
  const step = (command, message) => `{ ${command} ; } >/dev/null 2>&1 || { echo '${FAIL}${message}'; exit 0; }`;
  const signedIn = () => typeof KANO_TOKEN !== 'undefined' && !!KANO_TOKEN;
  let segments = [], entries = [], allNames = new Set(), busy = false, folderTotal = 0, freeBytes = 0, sortKey = 'name', sortDir = 1;
  try { [sortKey = 'name', sortDir = 1] = JSON.parse(localStorage.getItem('f50-files-sort-v2') || '[]'); } catch {}
  if (!['name', 'time', 'size', 'kind'].includes(sortKey)) sortKey = 'name';
  // Android recreates its standard folders at boot; empty ones at the root stay out of view instead of being deleted.
  const standardFolders = /^(Alarms|Audiobooks|DCIM|Documents|Download|Movies|Music|Notifications|Pictures|Podcasts|Recordings|Ringtones)$/;
  // System items at the storage root stay out of view: app data, firmware staging, logs and the boot script that starts Mihomo.
  const hiddenAtRoot = name => /^(Android|Upgrade|sd_logs|lost\+found)$/.test(name) || /^ufi_|^unlock_samba\.sh$|\.(sh|log|lock|flag)$/i.test(name);
  const pathOf = (...extra) => [ROOT, ...segments, ...extra].join('/');
  const rawOf = (...extra) => [RAW, ...segments, ...extra].join('/');
  const validName = name => !!name && name.length <= 200 && !/[\/\0]/.test(name) && name !== '.' && name !== '..';

  // Sizes and dates follow macOS Finder: decimal units, three significant digits, 今天 / 昨天.
  const formatSize = bytes => {
    if (bytes < 1000) return bytes + ' 字节';
    const units = ['KB', 'MB', 'GB', 'TB']; let value = bytes, unit = -1;
    do { value /= 1000; unit++; } while (value >= 999.5 && unit < units.length - 1);
    return (value >= 100 ? value.toFixed(0) : value >= 10 ? value.toFixed(1) : value.toFixed(1)).replace(/\.0$/, '') + ' ' + units[unit];
  };
  const formatTime = seconds => {
    const date = new Date(seconds * 1000), now = new Date(), pad = n => String(n).padStart(2, '0');
    const clock = `${pad(date.getHours())}:${pad(date.getMinutes())}`, day = d => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const diff = Math.round((day(now) - day(date)) / 86400000);
    if (diff === 0) return '今天 ' + clock;
    if (diff === 1) return '昨天 ' + clock;
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${clock}`;
  };
  const extOf = name => name.includes('.') ? name.split('.').pop().toLowerCase() : '';
  const kindOf = name => {
    const ext = extOf(name);
    if (/^(jpe?g|png|gif|webp|bmp|svg|avif)$/.test(ext)) return 'image';
    if (/^(heic|heif)$/.test(ext)) return 'photo';
    if (/^(mp4|mov|webm|m4v)$/.test(ext)) return 'video';
    if (/^(mkv|avi|wmv|flv)$/.test(ext)) return 'movie';
    if (/^(mp3|flac|wav|m4a|aac|ogg|opus)$/.test(ext)) return 'audio';
    if (ext === 'pdf') return 'pdf';
    if (/^(txt|md|log|json|csv|xml|yaml|yml|ini|conf|sh|js|css|html|py)$/.test(ext)) return 'text';
    if (/^(zip|rar|7z|gz|tar|xz|apk)$/.test(ext)) return 'archive';
    return 'file';
  };
  const kindLabels = { jpg: 'JPEG 图像', jpeg: 'JPEG 图像', png: 'PNG 图像', gif: 'GIF 图像', webp: 'WebP 图像', heic: 'HEIC 图像', heif: 'HEIF 图像', bmp: 'BMP 图像', svg: 'SVG 图像', avif: 'AVIF 图像', mp4: 'MPEG-4 影片', mov: 'QuickTime 影片', m4v: 'MPEG-4 影片', webm: 'WebM 影片', mkv: 'Matroska 影片', avi: 'AVI 影片', mp3: 'MP3 音频', flac: 'FLAC 音频', wav: 'WAV 音频', m4a: 'MPEG-4 音频', aac: 'AAC 音频', ogg: 'Ogg 音频', opus: 'Opus 音频', pdf: 'PDF 文稿', txt: '纯文本文稿', md: 'Markdown 文稿', log: '日志文件', json: 'JSON 文件', csv: 'CSV 文稿', xml: 'XML 文稿', zip: 'ZIP 归档', rar: 'RAR 归档', '7z': '7-Zip 归档', gz: 'Gzip 归档', tar: 'TAR 归档', apk: 'Android 安装包' };
  const kindLabel = entry => entry.dir ? '文件夹' : kindLabels[extOf(entry.name)] || (extOf(entry.name) ? extOf(entry.name).toUpperCase() + ' 文件' : '文稿');
  // Quick Look: what the browser can show directly.
  // HEIC and Matroska are attempted: Safari shows HEIC, Chrome often plays MKV; anything else falls back to download.
  const previewKind = entry => entry.dir ? null : ({ image: 'image', photo: 'image', video: 'video', movie: extOf(entry.name) === 'mkv' ? 'video' : null, audio: 'audio', pdf: 'pdf', text: 'text' })[kindOf(entry.name)] || null;
  const glyphs = {
    folder: 'M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z',
    file: 'M7 3.5h6.5L18 8v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-14A1.5 1.5 0 0 1 7.5 3.5ZM13 3.5V8h4.5',
    image: 'M4.5 5.5h15v13h-15ZM4.5 15.5l4-4 3.5 3.5 2.5-2.5 5 4M15 9.5h.01',
    photo: 'M4.5 5.5h15v13h-15ZM4.5 15.5l4-4 3.5 3.5 2.5-2.5 5 4M15 9.5h.01',
    movie: 'M4 6.5h11v11H4ZM15 10.5l5-3v9l-5-3',
    pdf: 'M7 3.5h6.5L18 8v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-14A1.5 1.5 0 0 1 7.5 3.5ZM9 13h6M9 16h4',
    text: 'M7 3.5h6.5L18 8v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-14A1.5 1.5 0 0 1 7.5 3.5ZM9 11h6M9 14h6M9 17h4',
    chevronLeft: 'M14.5 6 8.5 12l6 6',
    chevronRight: 'M9.5 6l6 6-6 6',
    download: 'M12 5v11m0 0-4-4m4 4 4-4M5 18.5h14',
    video: 'M4 6.5h11v11H4ZM15 10.5l5-3v9l-5-3',
    audio: 'M9 17.5V6l10-2v11.5M9 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
    archive: 'M5 4.5h14v15H5ZM12 4.5v2m0 2v2m0 2v2m-1.5 0h3v3h-3Z',
    upload: 'M12 16V5m0 0-4 4m4-4 4 4M5 15.5v3h14v-3',
    newFolder: 'M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2ZM12 11v5m-2.5-2.5h5',
    more: 'M6 12h.01M12 12h.01M18 12h.01',
    close: 'M6 6l12 12M18 6 6 18'
  };
  const glyph = key => `<svg class="f50-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${glyphs[key]}"/></svg>`;

  // File names are data: the console's text cleanup must never rewrite them.
  const root = document.createElement('div'); root.className = 'f50-files'; root.dataset.f50Preserve = 'true';
  root.innerHTML = `<div class="f50-files-toolbar"><nav class="f50-files-crumbs" aria-label="当前位置"></nav><div class="f50-files-actions"><label class="f50-files-sort"><span>排序</span><select aria-label="排序方式"><option value="name">名称</option><option value="time">修改日期</option><option value="size">大小</option><option value="kind">种类</option></select></label><button type="button" class="f50-files-newdir">${glyph('newFolder')}<span>新建文件夹</span></button><button type="button" class="f50-files-upload f50-primary" data-f50-primary="true">${glyph('upload')}<span>上传</span></button><input type="file" multiple hidden></div></div>
<p class="f50-files-alert" role="alert" hidden></p>
<section class="f50-files-queue" aria-label="上传任务" hidden></section>
<section class="f50-files-panel"><div class="f50-files-head" role="presentation"><button type="button" data-sort="name">名称</button><button type="button" data-sort="time">修改日期</button><button type="button" data-sort="size">大小</button><button type="button" data-sort="kind">种类</button><span></span></div><div class="f50-files-list" role="list" aria-label="文件列表"></div><p class="f50-files-state" role="status"></p><p class="f50-files-status" role="status"></p></section>
<div class="f50-files-drop" hidden><div>${glyph('upload')}<strong></strong><span>松开即可上传</span></div></div>
<dialog class="f50-files-dialog"><form method="dialog"><h2></h2><div class="f50-files-dialog-body"></div><div class="f50-files-dialog-actions"></div></form></dialog>
<dialog id="f50-files-preview" class="f50-files-preview" aria-label="预览"><header><div class="f50-files-preview-title"><strong></strong><small></small></div><div class="f50-files-preview-tools"><button type="button" data-preview="prev" aria-label="上一项">${glyph('chevronLeft')}</button><button type="button" data-preview="next" aria-label="下一项">${glyph('chevronRight')}</button><button type="button" data-preview="download" aria-label="下载">${glyph('download')}</button><button type="button" data-preview="close" aria-label="关闭">${glyph('close')}</button></div></header><div class="f50-files-preview-stage"></div></dialog>`;
  page.append(root);
  const sortSelect = root.querySelector('.f50-files-sort select'); sortSelect.value = sortKey;
  // Finder sorting: click a column to sort, click again to reverse. Names ascend; dates and sizes start newest / largest.
  const setSort = (key, toggle) => {
    sortDir = toggle && key === sortKey ? -sortDir : key === 'name' || key === 'kind' ? 1 : -1; sortKey = key; sortSelect.value = key;
    try { localStorage.setItem('f50-files-sort-v2', JSON.stringify([sortKey, sortDir])); } catch {}
    renderList();
  };
  sortSelect.onchange = () => setSort(sortSelect.value, false);
  root.querySelectorAll('.f50-files-head [data-sort]').forEach(button => { button.onclick = () => setSort(button.dataset.sort, true); });
  const $q = selector => root.querySelector(selector);
  const crumbs = $q('.f50-files-crumbs'), list = $q('.f50-files-list'), state = $q('.f50-files-state'), alertBox = $q('.f50-files-alert');
  const queue = $q('.f50-files-queue'), picker = $q('input[type=file]'), drop = $q('.f50-files-drop'), dialog = $q('.f50-files-dialog');
  const showAlert = message => { alertBox.textContent = message || ''; alertBox.hidden = !message; };
  const setState = text => { state.textContent = text || ''; state.hidden = !text; };

  const renderCrumbs = () => {
    crumbs.replaceChildren();
    ['机内存储', ...segments].forEach((name, index) => {
      if (index) { const sep = document.createElement('span'); sep.className = 'f50-files-sep'; sep.textContent = '/'; sep.setAttribute('aria-hidden', 'true'); crumbs.append(sep); }
      const last = index === segments.length;
      const item = document.createElement(last ? 'span' : 'button');
      item.textContent = name;
      if (last) item.setAttribute('aria-current', 'location');
      else { item.type = 'button'; item.onclick = () => open(segments.slice(0, index)); }
      crumbs.append(item);
    });
  };
  const byName = (a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN', { numeric: true });
  const sorters = { name: (a, b) => byName(a, b), time: (a, b) => (a.mtime - b.mtime) || byName(a, b), size: (a, b) => (a.size - b.size) || byName(a, b), kind: (a, b) => kindLabel(a).localeCompare(kindLabel(b), 'zh-Hans-CN') || byName(a, b) };
  // Thumbnail copies are swept after 10 minutes on the device; reuse them for 8.
  const thumbs = new Map(), freshThumb = path => { const item = thumbs.get(path); return item && Date.now() - item.at < 8 * 60000 ? item.url : null; };
  const renderList = () => {
    list.replaceChildren();
    // Folders stay on top when sorting by name, as Finder does by default.
    entries.sort((a, b) => (sortKey === 'name' ? b.dir - a.dir : 0) || sortDir * (sorters[sortKey] || sorters.name)(a, b));
    root.querySelectorAll('.f50-files-head [data-sort]').forEach(button => { const active = button.dataset.sort === sortKey; button.dataset.active = String(active); button.dataset.dir = active ? (sortDir > 0 ? 'asc' : 'desc') : ''; button.setAttribute('aria-sort', active ? (sortDir > 0 ? 'ascending' : 'descending') : 'none'); });
    for (const entry of entries) {
      const row = document.createElement('div'); row.className = 'f50-file-row'; row.setAttribute('role', 'listitem');
      const main = document.createElement('button'); main.type = 'button'; main.className = 'f50-file-main';
      const kind = entry.dir ? 'folder' : kindOf(entry.name);
      const size = entry.dir ? (entry.count ? formatSize(entry.size) : '--') : formatSize(entry.size), time = formatTime(entry.mtime);
      main.innerHTML = `<span class="f50-file-icon" data-kind="${kind}">${glyph(kind)}</span><span class="f50-file-copy"><strong></strong><small></small></span><span class="f50-file-col" data-col="time"></span><span class="f50-file-col" data-col="size"></span><span class="f50-file-col" data-col="kind"></span>`;
      main.querySelector('strong').textContent = entry.name;
      main.querySelector('small').textContent = entry.dir ? `${entry.count ? entry.count + ' 项' : '空文件夹'} · ${time}` : `${size} · ${time}`;
      main.querySelector('[data-col=time]').textContent = time;
      main.querySelector('[data-col=size]').textContent = size;
      main.querySelector('[data-col=kind]').textContent = entry.dir ? (entry.count ? `文件夹 · ${entry.count} 项` : '文件夹 · 空') : kindLabel(entry);
      if (entry.dir && !entry.count) row.dataset.empty = 'true';
      const preview = previewKind(entry);
      main.setAttribute('aria-label', (entry.dir ? '打开文件夹 ' : preview ? '预览 ' : '文件操作 ') + entry.name);
      main.onclick = () => entry.dir ? open([...segments, entry.name]) : preview ? quickLook(entry) : actions(entry);
      const thumb = freshThumb(pathOf(entry.name));
      if (thumb) { const img = document.createElement('img'); img.alt = ''; img.loading = 'lazy'; img.src = thumb; main.querySelector('.f50-file-icon').replaceChildren(img); main.querySelector('.f50-file-icon').dataset.thumb = 'true'; }
      const more = document.createElement('button'); more.type = 'button'; more.className = 'f50-file-more';
      more.innerHTML = glyph('more'); more.setAttribute('aria-label', '更多操作：' + entry.name); more.onclick = () => actions(entry);
      row.append(main, more); list.append(row);
    }
    if (!entries.length) setState('这个文件夹是空的，可以点「上传」或把文件拖到这里。');
    $q('.f50-files-head').hidden = !entries.length;
    renderStatus();
  };
  // Finder's status bar: item count, size of what is shown, and free space on the device.
  const renderStatus = () => {
    const status = $q('.f50-files-status');
    status.textContent = `${entries.length} 个项目 · ${segments.length ? '此文件夹' : '你的文件'}共 ${formatSize(folderTotal)}${freeBytes ? ` · 可用 ${formatSize(freeBytes)}` : ''}`;
  };
  const refreshSpace = async () => {
    try {
      const out = await shell(`df -k ${ROOT} | tail -n 1; echo ${OK}`);
      const [, total, used, free] = out.trim().split(/\s+/).map(Number);
      if (!total) return;
      freeBytes = free * 1024; root.dataset.free = String(freeBytes);
      // The partition also holds the system and apps; that total stays in the tooltip.
      $q('.f50-files-status').title = `设备已用 ${formatSize(used * 1024)}（含系统与应用），共 ${formatSize(total * 1024)}`;
      renderStatus();
    } catch {}
  };
  const open = async (next = segments) => {
    segments = next; renderCrumbs(); showAlert('');
    if (!signedIn()) { entries = []; list.replaceChildren(); setState('登录后可以管理设备上的文件。'); root.dataset.ready = 'false'; return; }
    root.dataset.ready = 'true'; setState('正在读取…');
    try {
      // Temporary download links and abandoned upload parts expire after 10 minutes.
      const out = await shell(`find ${UPLOADS} -maxdepth 1 \\( -name 'f50dl-*' -o -name '*.f50part' \\) -mmin +10 -exec rm -f {} + 2>/dev/null; D=${arg(pathOf())}; [ -d "$D" ] || { echo '${FAIL}文件夹不存在'; exit 0; }; for f in "$D"/*; do [ -e "$f" ] || continue; if [ -d "$f" ]; then N=$(ls "$f" 2>/dev/null | wc -l); K=$(du -sk "$f" 2>/dev/null | cut -f1); else N=0; K=0; fi; printf '%s\t%s\t' $((N)) $((K)); stat -c '%F\t%s\t%Y\t%n' "$f"; done; echo ${OK}`, 90000);
      const listed = out.split('\n').filter(Boolean).map(line => {
        const [count, kb, type, size, mtime, ...name] = line.split('\t'), dir = type === 'directory';
        // Folders report their recursive size, so sorting by size shows where space actually goes.
        return { dir, count: Number(count) || 0, size: dir ? (Number(kb) || 0) * 1024 : Number(size) || 0, mtime: Number(mtime) || 0, name: name.join('\t').split('/').pop() };
      }).filter(entry => entry.name);
      allNames = new Set(listed.map(entry => entry.name));
      entries = listed.filter(entry => !entry.name.endsWith('.f50upload') && !(segments.length === 0 && (hiddenAtRoot(entry.name) || (entry.dir && !entry.count && standardFolders.test(entry.name)))));
      folderTotal = entries.reduce((sum, entry) => sum + entry.size, 0);
      setState(''); renderList(); loadThumbs();
    } catch (error) { entries = []; list.replaceChildren(); setState(''); showAlert('无法读取文件夹：' + error.message); }
    refreshSpace();
  };

  // One dialog serves menus, prompts and confirmations; it resolves with the chosen value.
  const ask = ({ title, body, input, buttons }) => new Promise(resolve => {
    dialog.querySelector('h2').textContent = title;
    const holder = dialog.querySelector('.f50-files-dialog-body'); holder.replaceChildren();
    if (body) { const p = document.createElement('p'); p.textContent = body; holder.append(p); }
    let field = null;
    if (input) { field = document.createElement('input'); field.type = 'text'; field.value = input.value || ''; field.setAttribute('aria-label', input.label); field.autocomplete = 'off'; field.spellcheck = false; holder.append(field); }
    const footer = dialog.querySelector('.f50-files-dialog-actions'); footer.replaceChildren();
    // Resolve on the close event itself, so a follow-up dialog never receives this dialog's late close.
    let chosen = null;
    for (const spec of buttons) {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = spec.label;
      if (spec.primary) { button.classList.add('f50-primary'); button.dataset.f50Primary = 'true'; }
      if (spec.danger) { button.classList.add('f50-files-danger', 'f50-danger'); button.dataset.f50Danger = 'true'; }
      if (spec.list) button.classList.add('f50-files-menu-item');
      button.onclick = () => { chosen = spec.value === 'input' ? field.value.trim() : spec.value; dialog.close(); };
      footer.append(button);
    }
    dialog.dataset.menu = String(buttons.some(spec => spec.list));
    dialog.onclose = () => resolve(chosen);
    field?.addEventListener('keydown', event => { if (event.key === 'Enter' && !event.isComposing) { event.preventDefault(); footer.querySelector('.f50-primary')?.click(); } });
    dialog.showModal();
    if (field) { field.focus(); const dot = field.value.lastIndexOf('.'); field.setSelectionRange(0, dot > 0 && !input.whole ? dot : field.value.length); }
  });
  const guard = async (work, failure) => {
    if (busy) return; busy = true; showAlert('');
    try { await work(); } catch (error) { showAlert(failure + error.message); } finally { busy = false; }
  };
  // Name checks use every real item, including hidden ones, so nothing hidden can be overwritten.
  const exists = name => allNames.has(name);
  const actions = async entry => {
    const choice = await ask({ title: entry.name, buttons: [
      ...(entry.dir ? [{ label: '打开', value: 'open', list: true }] : [...(previewKind(entry) ? [{ label: '预览', value: 'preview', list: true }] : []), { label: '下载', value: 'download', list: true }]),
      { label: '重命名', value: 'rename', list: true },
      { label: '删除', value: 'delete', list: true, danger: true },
      { label: '取消', value: null }
    ] });
    if (choice === 'open') open([...segments, entry.name]);
    if (choice === 'preview') quickLook(entry);
    if (choice === 'download') guard(() => download(entry), '下载失败：');
    if (choice === 'rename') rename(entry);
    if (choice === 'delete') remove(entry);
  };
  const newToken = name => 'f50dl-' + Array.from(crypto.getRandomValues(new Uint8Array(12)), n => n.toString(16).padStart(2, '0')).join('') + (extOf(name) ? '.' + extOf(name).replace(/[^\w]/g, '').slice(0, 10) : '');
  // The web service runs as its own app user, so it serves a private copy owned by that user; the copy runs in the background.
  const prepared = new Map();
  const prepare = async (path, onWait) => {
    const cached = prepared.get(path);
    if (cached && Date.now() - cached.at < 8 * 60000) return cached.url;
    const token = newToken(path);
    await shell(`S=${arg(path)}; T=${UPLOADS}/${token}; [ -f "$S" ] || { echo '${FAIL}文件不存在'; exit 0; }; mkdir -p ${UPLOADS}; O=$(stat -c %u:%g ${UPLOADS}); ( cp "$S" "$T.tmp" && chown "$O" "$T.tmp" && chmod 600 "$T.tmp" && mv "$T.tmp" "$T" || { rm -f "$T.tmp"; : > "$T.failed"; } ) >/dev/null 2>&1 & echo ${OK}`);
    for (let waited = 0; ; waited += 800) {
      const out = await shell(`T=${UPLOADS}/${token}; [ -f "$T.failed" ] && { rm -f "$T.failed"; echo '${FAIL}无法读取文件'; exit 0; }; [ -f "$T" ] && echo ready; echo ${OK}`);
      if (out.includes('ready')) break;
      if (waited > 600000) throw Error('准备时间过长');
      onWait?.(waited);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    const url = '/api/uploads/' + token; prepared.set(path, { url, at: Date.now() }); return url;
  };
  const download = async entry => {
    const status = $q('.f50-files-status'), previous = status.textContent;
    status.textContent = `正在准备下载「${entry.name}」…`;
    let url; try { url = await prepare(pathOf(entry.name)); } finally { status.textContent = previous; }
    const link = document.createElement('a'); link.href = url; link.download = entry.name; document.body.append(link); link.click(); link.remove();
  };
  // Thumbnails: small images in the open folder are copied in one batch, newest folder visit only.
  let thumbRun = 0;
  const loadThumbs = async () => {
    const run = ++thumbRun, folder = pathOf();
    const wanted = entries.filter(entry => kindOf(entry.name) === 'image' && entry.size <= 8000000 && !freshThumb(pathOf(entry.name))).slice(0, 48);
    if (!wanted.length) return;
    const jobs = wanted.map(entry => ({ path: pathOf(entry.name), token: newToken(entry.name) }));
    try {
      await shell(`mkdir -p ${UPLOADS}; O=$(stat -c %u:%g ${UPLOADS}); ${jobs.map(job => `S=${arg(job.path)}; T=${UPLOADS}/${job.token}; cp "$S" "$T" 2>/dev/null && chown "$O" "$T" && chmod 600 "$T";`).join(' ')} echo ${OK}`, 90000);
    } catch { return; }
    for (const job of jobs) { thumbs.set(job.path, { url: '/api/uploads/' + job.token, at: Date.now() }); prepared.set(job.path, { url: '/api/uploads/' + job.token, at: Date.now() }); }
    if (run === thumbRun && folder === pathOf()) renderList();
  };

  // Quick Look: a large centered viewer; arrow keys move between previewable items, Escape closes.
  const viewer = $q('.f50-files-preview'), stage = viewer.querySelector('.f50-files-preview-stage');
  let viewing = null, viewRun = 0, objectUrl = null;
  const dropObjectUrl = () => { if (objectUrl) { URL.revokeObjectURL(objectUrl); objectUrl = null; } };
  // The device serves whole files only (no byte ranges). Safari needs ranges to play media, so audio and video are read
  // into memory first and played from a local object URL, which also makes seeking work everywhere.
  const MEDIA_LIMIT = 500 * 1000 * 1000;
  const readToBlob = async (url, onProgress, run) => {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok || !response.body) throw Error('读取失败');
    const total = Number(response.headers.get('content-length')) || 0, reader = response.body.getReader(), parts = [];
    for (let loaded = 0; ;) {
      const { done, value } = await reader.read(); if (done) break;
      if (run !== viewRun) { reader.cancel(); throw Error('cancelled'); }
      parts.push(value); loaded += value.byteLength; onProgress(loaded, total);
    }
    return new Blob(parts, { type: response.headers.get('content-type') || '' });
  };
  const viewable = () => entries.filter(previewKind);
  const quickLook = async entry => {
    viewing = entry; const run = ++viewRun, kind = previewKind(entry);
    viewer.querySelector('strong').textContent = entry.name;
    viewer.querySelector('small').textContent = `${kindLabel(entry)} · ${formatSize(entry.size)} · ${formatTime(entry.mtime)}`;
    const items = viewable(), index = items.indexOf(entry);
    viewer.querySelector('[data-preview=prev]').disabled = index <= 0; viewer.querySelector('[data-preview=next]').disabled = index < 0 || index >= items.length - 1;
    stage.replaceChildren(); dropObjectUrl(); stage.dataset.kind = kind; stage.dataset.state = 'loading';
    const note = document.createElement('p'); note.className = 'f50-files-preview-note'; note.textContent = '正在准备预览…'; stage.append(note);
    if (!viewer.open) viewer.showModal();
    try {
      const big = entry.size > 300 * 1000 * 1000;
      const url = await prepare(pathOf(entry.name), waited => { if (run === viewRun && big) note.textContent = `正在准备预览… 大文件需要稍等（${Math.round(waited / 1000)} 秒）`; });
      if (run !== viewRun) return;
      let media, source = url;
      if ((kind === 'video' || kind === 'audio') && entry.size <= MEDIA_LIMIT) {
        const blob = await readToBlob(url, (loaded, total) => { note.textContent = `正在载入… ${total ? Math.floor(loaded / total * 100) + '%' : formatSize(loaded)}`; }, run);
        if (run !== viewRun) return;
        dropObjectUrl(); objectUrl = source = URL.createObjectURL(blob);
      } else if (kind === 'video' || kind === 'audio') {
        throw Error(`文件超过 ${formatSize(MEDIA_LIMIT)}，请下载后观看`);
      }
      if (kind === 'image') { media = document.createElement('img'); media.alt = entry.name; }
      else if (kind === 'video') { media = document.createElement('video'); media.controls = true; media.playsInline = true; media.preload = 'metadata'; }
      else if (kind === 'audio') { media = document.createElement('audio'); media.controls = true; }
      else if (kind === 'pdf') {
        media = document.createElement('iframe'); media.title = entry.name;
        // Some mobile browsers cannot render PDFs inline; a plain link opens the browser's own viewer.
        const open = document.createElement('a'); open.className = 'f50-files-preview-open'; open.href = url; open.target = '_blank'; open.rel = 'noopener'; open.textContent = '在新标签页打开';
        stage.append(open);
      }
      else {
        media = document.createElement('pre');
        const text = await (await fetch(url, { cache: 'no-store' })).text();
        if (run !== viewRun) return;
        media.textContent = text.length > 200000 ? text.slice(0, 200000) + '\n…（仅显示前 200 KB）' : text;
      }
      if (kind !== 'text') media.src = source;
      const unsupported = () => { if (run === viewRun) { note.textContent = '这个浏览器无法预览此格式，可以点右上角下载后查看。'; stage.dataset.state = 'error'; media.remove(); if (!note.isConnected) stage.append(note); } };
      media.addEventListener('error', unsupported);
      if (kind === 'video' || kind === 'audio') media.addEventListener('loadedmetadata', () => { if (kind === 'video' && !media.videoWidth) unsupported(); });
      stage.dataset.state = 'ready'; note.remove(); stage.append(media);
    } catch (error) { if (run === viewRun && error.message !== 'cancelled') { note.textContent = '无法预览：' + error.message; stage.dataset.state = 'error'; if (!note.isConnected) stage.append(note); } }
  };
  const step2 = delta => { const items = viewable(), index = items.indexOf(viewing); if (index >= 0 && items[index + delta]) quickLook(items[index + delta]); };
  viewer.addEventListener('click', event => {
    const action = event.target.closest('[data-preview]')?.dataset.preview;
    if (action === 'close' || event.target === viewer) viewer.close();
    if (action === 'prev') step2(-1);
    if (action === 'next') step2(1);
    if (action === 'download' && viewing) guard(() => download(viewing), '下载失败：');
  });
  viewer.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); step2(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); step2(1); } });
  viewer.addEventListener('close', () => { viewRun++; stage.replaceChildren(); viewing = null; dropObjectUrl(); });
  const rename = async entry => {
    const name = await ask({ title: '重命名', input: { label: '新名称', value: entry.name, whole: entry.dir }, buttons: [{ label: '取消', value: null }, { label: '保存', value: 'input', primary: true }] });
    if (name === null || name === entry.name) return;
    if (!validName(name)) return showAlert('名称不能为空，也不能包含「/」。');
    if (exists(name)) return showAlert(`当前文件夹已有「${name}」。`);
    guard(async () => { await shell(`S=${arg(pathOf(entry.name))}; T=${arg(pathOf(name))}; [ -e "$T" ] && { echo '${FAIL}已存在同名项目'; exit 0; }; ${step('mv -- "$S" "$T"', '重命名失败')}; echo ${OK}`); await open(); }, '重命名失败：');
  };
  const remove = async entry => {
    const confirmed = await ask({ title: entry.dir ? '删除文件夹' : '删除文件', body: entry.dir ? `删除「${entry.name}」及其中的全部内容？此操作无法撤销。` : `删除「${entry.name}」？此操作无法撤销。`, buttons: [{ label: '取消', value: null }, { label: '删除', value: 'yes', primary: true, danger: true }] });
    if (confirmed !== 'yes') return;
    guard(async () => { await shell(`P=${arg(pathOf(entry.name))}; ${step('rm -rf -- "$P"', '删除失败')}; echo ${OK}`, 90000); await open(); }, '删除失败：');
  };
  $q('.f50-files-newdir').onclick = async () => {
    if (!signedIn()) return showModal?.('#tokenModal');
    const name = await ask({ title: '新建文件夹', input: { label: '文件夹名称', value: '新建文件夹', whole: true }, buttons: [{ label: '取消', value: null }, { label: '创建', value: 'input', primary: true }] });
    if (name === null) return;
    if (!validName(name)) return showAlert('名称不能为空，也不能包含「/」。');
    if (exists(name)) return showAlert(`当前文件夹已有「${name}」。`);
    guard(async () => { await shell(`P=${arg(pathOf(name))}; ${step('mkdir -- "$P"', '创建失败')}; echo ${OK}`); await open(); }, '新建文件夹失败：');
  };

  // Uploads stream in 16 MiB parts through the native upload endpoint; each part is appended to a hidden temporary file.
  const tasks = [];
  const renderQueue = () => {
    queue.hidden = !tasks.length; queue.replaceChildren();
    if (!tasks.length) return;
    const heading = document.createElement('div'); heading.className = 'f50-files-queue-heading';
    const active = tasks.filter(task => task.state === 'uploading' || task.state === 'waiting').length;
    heading.innerHTML = '<strong></strong>'; heading.firstChild.textContent = active ? `正在上传 ${active} 个文件` : '上传已完成';
    if (!active) { const clear = document.createElement('button'); clear.type = 'button'; clear.className = 'f50-text-button'; clear.textContent = '清除'; clear.onclick = () => { tasks.length = 0; renderQueue(); }; heading.append(clear); }
    queue.append(heading);
    for (const task of tasks) {
      const row = document.createElement('div'); row.className = 'f50-files-task'; row.dataset.state = task.state;
      const percent = task.size ? Math.floor(task.sent / task.size * 100) : 100;
      const status = { waiting: '等待中', uploading: `${percent}% · ${formatSize(task.sent)} / ${formatSize(task.size)}`, done: '已完成', failed: task.error || '上传失败', cancelled: '已取消' }[task.state];
      row.innerHTML = '<div class="f50-files-task-copy"><strong></strong><small></small></div><div class="f50-files-task-track"><span></span></div>';
      row.querySelector('strong').textContent = task.name; row.querySelector('small').textContent = status;
      row.querySelector('.f50-files-task-track span').style.width = (task.state === 'done' ? 100 : percent) + '%';
      if (task.state === 'uploading' || task.state === 'waiting') {
        const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'f50-files-task-cancel'; cancel.innerHTML = glyph('close'); cancel.setAttribute('aria-label', '取消上传 ' + task.name);
        cancel.onclick = () => { task.cancelled = true; task.controller?.abort(); if (task.state === 'waiting') task.state = 'cancelled'; renderQueue(); };
        row.append(cancel);
      }
      queue.append(row);
    }
  };
  const uniqueName = (name, taken) => {
    const used = candidate => taken.has(candidate);
    if (!used(name)) return name;
    const dot = name.lastIndexOf('.'), stem = dot > 0 ? name.slice(0, dot) : name, ext = dot > 0 ? name.slice(dot) : '';
    for (let i = 1; ; i++) { const next = `${stem} (${i})${ext}`; if (!used(next)) return next; }
  };
  let pumping = false;
  const pump = async () => {
    if (pumping) return; pumping = true;
    try {
      for (let task; (task = tasks.find(item => item.state === 'waiting'));) {
        task.state = 'uploading'; renderQueue();
        const dir = task.dir, temp = [...dir, '.' + task.target + '.f50upload'].join('/'), target = [...dir, task.target].join('/');
        let appending = Promise.resolve();
        try {
          await shell(`T=${arg(temp)}; ${step(': > "$T"', '无法写入目标文件夹')}; echo ${OK}`);
          // Upload the next part while the previous one is appended; appends stay in order.
          for (let offset = 0; offset < task.file.size || offset === 0; offset += CHUNK) {
            if (task.cancelled) throw Error('cancelled');
            const form = new FormData(); form.append('file', task.file.slice(offset, offset + CHUNK), 'part.f50part');
            task.controller = new AbortController();
            const response = await fetch(`${KANO_baseURL}/upload_img`, { method: 'POST', headers: { ...(typeof common_headers === 'object' ? common_headers : {}) }, body: form, signal: task.controller.signal });
            const data = await response.json().catch(() => ({}));
            if (!response.ok || !/^\/uploads\/[a-f0-9-]+\.f50part$/.test(data.url || '')) throw Error(data.error || '设备未接收上传数据');
            const part = UPLOADS + '/' + data.url.split('/').pop(), end = Math.min(task.file.size, offset + CHUNK);
            task.sent = Math.max(task.sent, Math.min(end, task.file.size - 1)); renderQueue();
            await appending;
            appending = shell(`T=${arg(temp)}; ${step(`cat '${part}' >> "$T"`, '写入失败，可能空间不足')}; rm -f '${part}'; echo ${OK}`, 90000).then(() => { task.sent = end; renderQueue(); });
            appending.catch(() => {});
            if (!task.file.size) break;
          }
          await appending;
          await shell(`S=${arg(temp)}; T=${arg(target)}; [ -e "$T" ] && { rm -f "$S"; echo '${FAIL}目标位置已有同名文件，未覆盖'; exit 0; }; ${step('mv -- "$S" "$T"', '无法完成保存')}; echo ${OK}`);
          task.state = 'done';
        } catch (error) {
          task.state = task.cancelled ? 'cancelled' : 'failed'; task.error = error.name === 'AbortError' ? '已取消' : error.message;
          await appending.catch(() => {});
          await shell(`rm -f ${arg(temp)}; echo ${OK}`).catch(() => {});
        }
        renderQueue();
        if (task.dir.join('/') === pathOf()) open();
      }
    } finally { pumping = false; }
  };
  const enqueue = files => {
    if (!signedIn()) return showModal?.('#tokenModal');
    const list = Array.from(files).filter(file => file.size || file.type || file.name);
    if (!list.length) return;
    const free = Number(root.dataset.free || 0), total = list.reduce((sum, file) => sum + file.size, 0);
    if (free && total > free - 64 * 1024 * 1024) return showAlert(`空间不足：需要 ${formatSize(total)}，可用 ${formatSize(Math.max(0, free - 64 * 1024 * 1024))}。`);
    const taken = new Set([...allNames, ...tasks.filter(task => task.dir.join('/') === pathOf()).map(task => task.target)]);
    for (const file of list) {
      const target = uniqueName(validName(file.name) ? file.name : 'upload', taken); taken.add(target);
      tasks.push({ file, name: file.name, target, dir: [ROOT, ...segments], size: file.size, sent: 0, state: 'waiting' });
    }
    showAlert(''); renderQueue(); pump();
  };
  $q('.f50-files-upload').onclick = () => signedIn() ? picker.click() : showModal?.('#tokenModal');
  picker.onchange = () => { enqueue(picker.files); picker.value = ''; };

  // Dropping files anywhere on this page uploads them into the open folder.
  let depth = 0;
  const hasFiles = event => Array.from(event.dataTransfer?.types || []).includes('Files');
  page.addEventListener('dragenter', event => { if (!hasFiles(event)) return; event.preventDefault(); depth++; drop.querySelector('strong').textContent = '上传到「' + (segments.at(-1) || '机内存储') + '」'; drop.hidden = false; });
  page.addEventListener('dragover', event => { if (hasFiles(event)) event.preventDefault(); });
  page.addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; drop.hidden = true; } });
  page.addEventListener('drop', event => { if (!hasFiles(event)) return; event.preventDefault(); depth = 0; drop.hidden = true; enqueue(event.dataTransfer.files); });
  window.addEventListener('beforeunload', event => { if (tasks.some(task => task.state === 'uploading' || task.state === 'waiting')) { event.preventDefault(); event.returnValue = ''; } });

  renderCrumbs();
  return { refresh: () => open() };
};

    filesView=installFilesPage($('#f50-page-files'),icon);
    const speedObservers=[];
    const speedLock={owner:null};
    // Transfer acknowledged bytes in each direction; never use LAN upload progress as WAN speed.
const installDuplexSpeed = (modal, cellular, lock) => {
  const content=modal.querySelector(':scope>.content'),footer=modal.querySelector(':scope>.btn');
  const start=footer.querySelector('[data-i18n=speedtest_start_btn]'),loop=footer.querySelector('[data-i18n=speedtest_loop_btn]');
  const result=modal.querySelector('.speedtest');
  modal.classList.add('f50-speed-test','f50-duplex-speed');
  const heading=modal.querySelector(':scope>.title');heading.removeAttribute('data-i18n');heading.textContent=cellular?'蜂窝测速':'内网测速';
  modal.querySelector('[data-i18n=cellular_speed_test_notice]')?.parentElement.classList.add('f50-redundant-hint');
  const controls=document.createElement('div');controls.className='f50-speed-controls';
  controls.innerHTML='<label>测试方向<select aria-label="测试方向"><option value="both">下载 + 上传</option><option value="down">仅下载</option><option value="up">仅上传</option></select></label>';
  const direction=controls.querySelector('select');
  const panel=document.createElement('section');panel.className='f50-speed-display';panel.dataset.state='idle';
  panel.innerHTML=`<div class="f50-duplex-heading"><span>双向测速</span><span class="f50-duplex-state" role="status">准备就绪</span></div><div class="f50-duplex-readings">${['down','up'].map(key=>`<div data-direction="${key}"><span class="f50-duplex-label">${icon(key)}${key==='down'?'下载':'上传'}</span><div class="f50-duplex-value"><strong>—</strong><span>Mbps</span></div><small>等待测试</small></div>`).join('')}</div><svg viewBox="0 0 560 140" preserveAspectRatio="none" role="img" aria-label="下载与上传测速趋势"><path class="f50-speed-grid" d="M0 30H560 M0 80H560 M0 130H560"/><path data-line="down" class="f50-speed-line"/><path data-line="up" class="f50-speed-line f50-speed-upload-line"/></svg><p>${cellular?'经 F50 转发到测速服务器，会消耗移动流量；代理线路会影响结果。':'测量当前浏览器与 F50 之间的连接速度，不消耗移动流量。'}</p>`;
  const details=document.createElement('details');details.className='f50-speed-details';
  details.innerHTML='<summary>测量详情</summary><pre class="f50-speed-details-values"></pre>';
  const values=details.querySelector('pre');
  const options=document.createElement('details');options.className='f50-speed-options';options.innerHTML='<summary>测试选项</summary>';
  const originalItems=Array.from(content.querySelectorAll(':scope>.item'));
  result.hidden=true;content.replaceChildren(controls,panel,details,options,result);originalItems.forEach(item=>options.append(item));
  let downloadURL,uploadURL,threadRange;
  if(cellular){
    downloadURL=modal.querySelector('#CellularTestUrl');downloadURL.type='url';downloadURL.setAttribute('aria-label','下载地址');downloadURL.removeAttribute('data-i18n-placeholder');downloadURL.placeholder='HTTP(S) 下载文件地址';
    const addressLabel=downloadURL.closest('label');addressLabel.querySelector('span').removeAttribute('data-i18n');addressLabel.querySelector('span').textContent='下载地址';
    let saved='';try{saved=localStorage.getItem('cellularTestUrl')||'';}catch{}
    downloadURL.value=downloadURL.value.trim()||saved||'https://speed.cloudflare.com/__down?bytes=20000000';
    const address=document.createElement('div');address.className='f50-speed-address';address.append(addressLabel);controls.after(address);
    const uploadLabel=document.createElement('label');uploadLabel.innerHTML='<span>上传地址</span><input type="url" aria-label="上传地址" value="https://speed.cloudflare.com/__up" placeholder="接收 POST 数据的测速地址">';uploadURL=uploadLabel.querySelector('input');try{uploadURL.value=localStorage.getItem('f50UploadTestUrl')||uploadURL.value;}catch{}address.append(uploadLabel);
    const hint=document.createElement('p');hint.textContent='默认使用 Cloudflare；自定义上传地址需支持 POST 二进制数据。';address.append(hint);
    threadRange=options.querySelector('input[type=range]');threadRange.setAttribute('aria-label','并发连接数');
    const count=options.querySelector('#thread_num'),row=threadRange.parentElement;row.classList.add('f50-speed-option-row');row.firstElementChild.removeAttribute('data-i18n');row.firstElementChild.textContent='并发连接';count.classList.add('f50-speed-option-value');row.append(count);
  }else{
    const chunks=modal.querySelector('#ckSize');chunks.min='1';chunks.max='32';chunks.value='4';chunks.setAttribute('aria-label','下载块数');
    const label=chunks.closest('label').querySelector('span');label.removeAttribute('data-i18n');label.textContent='下载块数';
    const hint=document.createElement('p');hint.className='f50-speed-option-hint';hint.textContent='每块 8 MiB。内网上传包含设备接收与临时文件写入时间，测试后自动清理。';options.append(hint);
  }
  const uploadSizeLabel=document.createElement('label');uploadSizeLabel.className='f50-speed-upload-size';uploadSizeLabel.innerHTML='<span>上传数据量</span><select aria-label="上传数据量"><option value="2000000">2 MB</option><option value="8000000">8 MB</option><option value="20000000" selected>20 MB</option><option value="50000000">50 MB</option></select>';options.append(uploadSizeLabel);
  const uploadSize=uploadSizeLabel.querySelector('select');
  footer.classList.add('f50-settings-actions');footer.insertBefore(loop,start);
  for(const button of [start,loop]){button.removeAttribute('onclick');button.removeAttribute('data-i18n');button.type='button';}
  start.classList.add('f50-speed-start','f50-primary');start.textContent='开始测速';loop.textContent='循环测速';
  const stateLabel=panel.querySelector('.f50-duplex-state');
  let busy=false,stopped=false,looping=false,controller=null,pauseTimer=null,stopPause=null,phase='',stats={},extension='',notice='',errorText='';
  const pendingUploads=new Set();
  const names={down:'下载',up:'上传'};
  const rate=(bytes,seconds)=>bytes*8/Math.max(seconds,.001)/1000000;
  const fresh=()=>({bytes:0,seconds:0,rate:null,done:false,error:'',samples:[]});
  const state=(text,tone)=>{stateLabel.textContent=text;panel.dataset.state=tone;};
  const draw=()=>{
    const max=Math.max(1,...Object.values(stats).flatMap(s=>s.samples));
    for(const key of ['down','up']){
      const s=stats[key],field=panel.querySelector(`[data-direction="${key}"]`);
      field.querySelector('strong').textContent=s?.rate==null?'—':s.rate.toFixed(2);
      field.querySelector('small').textContent=s?.error?'测试失败':s?.done?'平均速度':phase===key?'测试中':s?.bytes?'未完成':direction.value!=='both'&&direction.value!==key?'未测试':'等待测试';
      const samples=s?.samples||[],points=samples.map((n,i)=>`${(i/Math.max(1,samples.length-1)*560).toFixed(1)},${(130-n/max*115).toFixed(1)}`);
      panel.querySelector(`[data-line="${key}"]`).setAttribute('d',points.length>1?'M'+points.join(' L'):'');
    }
    values.textContent=['按下载、上传顺序分别测量；Mbps = 实际字节数 × 8 ÷ 耗时 ÷ 1,000,000。',...['down','up'].filter(key=>stats[key]).map(key=>{const s=stats[key];return `${names[key]}：${(s.bytes/1000000).toFixed(2)} MB · ${s.seconds.toFixed(2)} 秒${s.done?' · 平均 '+s.rate.toFixed(2)+' Mbps':''}${s.error?' · '+s.error:''}`;}),cellular?'上传按服务器返回成功后的完整分块计算，包含转发和请求等待时间。':'内网上传包含接收及写入时间。',notice,errorText].filter(Boolean).join('\n');
  };
  const request=async(url,init={},signal=controller?.signal)=>{
    const timeout=new AbortController();let timedOut=false;
    const abort=()=>timeout.abort();signal?.addEventListener('abort',abort,{once:true});if(signal?.aborted)abort();
    // Idle timeout: a slow but flowing transfer keeps running; 30 s without data aborts it.
    let timer=0;const touch=()=>{clearTimeout(timer);timer=setTimeout(()=>{timedOut=true;timeout.abort();},30000);};touch();
    try{
      const headers={...(typeof common_headers==='object'?common_headers:{}),...init.headers};
      const response=await fetch(url,{...init,headers,cache:'no-store',signal:timeout.signal});
      if(!response.ok){const code=response.status;await response.body?.cancel();throw Error(code===401?'请先登录 UFI-TOOLS 后台':`服务器返回 HTTP ${code}`);}
      return {response,touch,finish:()=>{clearTimeout(timer);signal?.removeEventListener('abort',abort);},timedOut:()=>timedOut};
    }catch(error){clearTimeout(timer);signal?.removeEventListener('abort',abort);if(timedOut)throw Error('请求超时（30 秒无响应）');throw error;}
  };
  const cleanUpload=async()=>{
    if(cellular||!pendingUploads.size)return;
    for(const suffix of pendingUploads){
      try{
        // This random extension belongs only to synthetic files from this run, including aborted uploads.
        const command='rm -f /data/data/com.minikano.f50_sms/files/uploads/*.'+suffix;
        const {response,finish}=await request('/api/user_shell',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({command})},null);
        try{const result=await response.json();if(result.error||result.result?.done!==true)throw Error('清理未完成');}finally{finish();}
        pendingUploads.delete(suffix);
      }catch{notice='临时测速数据未能清理，请恢复后台连接后重试测速。';draw();}
    }
    if(!pendingUploads.size)notice='';
  };
  const download=async()=>{
    const s=stats.down,started=performance.now();let sampledAt=started,sampledBytes=0;
    const tick=()=>{const now=performance.now(),dt=(now-sampledAt)/1000;if(dt>=.2){s.rate=rate(s.bytes-sampledBytes,dt);s.samples.push(s.rate);if(s.samples.length>60)s.samples.shift();sampledBytes=s.bytes;sampledAt=now;s.seconds=(now-started)/1000;draw();}};
    const timer=setInterval(tick,250);
    try{
      const concurrency=cellular?Number(threadRange.value):1;
      const target=cellular?downloadURL.value.trim():null;
      await batch(Array.from({length:concurrency},async()=>{
        const url=cellular?'/api/proxy/--'+target+(target.includes('?')?'&':'?')+'f50t='+Date.now():'/api/speedtest?ckSize='+modal.querySelector('#ckSize').value+'&f50t='+Date.now();
        const {response,touch,finish,timedOut}=await request(url);
        try{
          if(/text\/html|application\/json/.test(response.headers.get('Content-Type')||''))throw Error('下载地址返回了页面或错误信息，请使用下载文件地址');
          const reader=response.body?.getReader();if(!reader)throw Error('浏览器不支持流式测速');
          while(true){const part=await reader.read();if(part.done)break;touch();s.bytes+=part.value.byteLength;tick();}
        }catch(error){if(timedOut())throw Error('下载中断（30 秒未收到数据）');throw error;}finally{finish();}
      }));
      if(!s.bytes)throw Error('服务器没有返回下载数据');
      s.seconds=(performance.now()-started)/1000;s.rate=rate(s.bytes,s.seconds);s.samples.push(s.rate);s.done=true;
    }finally{clearInterval(timer);s.seconds=(performance.now()-started)/1000;draw();}
  };
  const upload=async()=>{
    const s=stats.up,total=Number(uploadSize.value),concurrency=cellular?Number(threadRange.value):1;
    const random=new Uint8Array(Math.min(total,2000000));for(let i=0;i<random.length;i+=65536)crypto.getRandomValues(random.subarray(i,Math.min(i+65536,random.length)));
    const blob=new Blob([random],{type:'application/octet-stream'});extension='f50speed'+Array.from(crypto.getRandomValues(new Uint8Array(12)),n=>n.toString(16).padStart(2,'0')).join('');
    if(!cellular)pendingUploads.add(extension);
    let reserved=0;const started=performance.now();
    const timer=setInterval(()=>{s.seconds=(performance.now()-started)/1000;draw();},250);
    try{
      await batch(Array.from({length:concurrency},async()=>{
        while(reserved<total){
          if(controller.signal.aborted)throw new DOMException('Stopped','AbortError');
          const size=Math.min(blob.size,total-reserved);reserved+=size;
          let body=blob.slice(0,size),url='/api/proxy/--'+uploadURL?.value.trim();
          const headers=cellular?{'Content-Type':'application/octet-stream'}:{};
          if(!cellular){url='/api/upload_img';const form=new FormData();form.append('file',body,'test.'+extension);body=form;}
          const {response,finish,timedOut}=await request(url,{method:'POST',headers,body},cellular?controller.signal:null); // Finish the small LAN chunk before cleanup; aborting can leave a late server write.
          try{
            if(cellular){await response.arrayBuffer();}else{const data=await response.json();if(!new RegExp('^/uploads/[a-f0-9-]+\\.'+extension+'$').test(data.url||''))throw Error('设备未确认接收上传数据');}
          }catch(error){if(timedOut())throw Error('上传超时（30 秒无响应）');throw error;}finally{finish();}
          s.bytes+=size;s.seconds=(performance.now()-started)/1000;s.rate=rate(s.bytes,s.seconds);s.samples.push(s.rate);if(s.samples.length>60)s.samples.shift();draw();
        }
      }));
      s.seconds=(performance.now()-started)/1000;s.rate=rate(s.bytes,s.seconds);s.done=true;
    }finally{clearInterval(timer);s.seconds=(performance.now()-started)/1000;draw();}
  };
  const batch=async(tasks)=>{
    let firstError;
    const settled=await Promise.allSettled(tasks.map(task=>task.catch(error=>{if(!firstError)firstError=error;controller.abort();throw error;})));
    if(firstError)throw firstError;
    return settled;
  };
  const stop=()=>{if(!busy)return;stopped=true;looping=false;controller?.abort();clearTimeout(pauseTimer);stopPause?.();state('正在停止…','stopped');};
  const run=async(repeat=false)=>{
    if(busy){stop();return;}
    if(lock.owner){state('另一个测速正在运行，请先停止','error');return;}
    const checkURL=input=>{let valid=false;try{valid=/^https?:$/.test(new URL(input.value.trim()).protocol);}catch{}input.setCustomValidity(valid?'':'请输入有效的 HTTP(S) 测速地址');if(!valid){input.reportValidity();input.focus();}return valid;};
    if(cellular&&((direction.value!=='up'&&!checkURL(downloadURL))||(direction.value!=='down'&&!checkURL(uploadURL))))return;
    if(!cellular&&direction.value!=='up'&&!modal.querySelector('#ckSize').reportValidity())return;
    if(cellular)try{if(direction.value!=='up')localStorage.setItem('cellularTestUrl',downloadURL.value.trim());if(direction.value!=='down')localStorage.setItem('f50UploadTestUrl',uploadURL.value.trim());}catch{}
    busy=true;stopped=false;looping=repeat;lock.owner=modal;start.textContent='停止测速';loop.textContent=repeat?'停止循环':'循环测速';loop.disabled=!repeat;
    const inputs=Array.from(modal.querySelectorAll('input,select'));inputs.forEach(input=>input.disabled=true);
    notice='';errorText='';let failed=false;
    try{
      do{
        controller=new AbortController();stats={down:fresh(),up:fresh()};draw();
        for(const key of (direction.value==='both'?['down','up']:[direction.value])){
          if(stopped)break;phase=key;state(names[key]+'测速中'+(looping?' · 循环':''),'running');draw();
          try{await (key==='down'?download():upload());}
          catch(error){controller.abort();if(!stopped){stats[key].error=error.name==='AbortError'?'传输中断':String(error.message||error);failed=true;errorText=names[key]+'失败：'+stats[key].error;details.open=true;}break;}
          finally{phase='';await cleanUpload();draw();}
        }
        if(failed||stopped)break;
        if(looping){state('本轮完成 · 等待下一轮','complete');await new Promise(resolve=>{stopPause=resolve;pauseTimer=setTimeout(resolve,1500);});stopPause=null;}
      }while(looping&&!stopped);
    }finally{
      await cleanUpload();busy=false;lock.owner=null;phase='';inputs.forEach(input=>input.disabled=false);start.textContent='开始测速';loop.textContent='循环测速';loop.disabled=false;
      state(stopped?'已停止':failed?'测速失败':'测速完成',stopped?'stopped':failed?'error':'complete');draw();
    }
  };
  start.addEventListener('click',()=>run());loop.addEventListener('click',()=>run(true));
  for(const input of [downloadURL,uploadURL])input?.addEventListener('input',()=>input.setCustomValidity(''));
  direction.addEventListener('change',()=>{if(downloadURL)downloadURL.closest('label').hidden=direction.value==='up';if(uploadURL)uploadURL.closest('label').hidden=direction.value==='down';draw();});
  footer.querySelector('[data-i18n=close_btn]')?.addEventListener('click',stop,{capture:true});modal.closest('.f50-inline-host')?.querySelector('.f50-back')?.addEventListener('click',stop,{capture:true});
  const page=modal.closest('.f50-page');const observer=new MutationObserver(()=>{if(modal.style.display==='none'||page?.hidden)stop();});observer.observe(modal,{attributes:true,attributeFilter:['style']});if(page)observer.observe(page,{attributes:true,attributeFilter:['hidden']});
  window.addEventListener('pagehide',stop,{once:true});stats={down:fresh(),up:fresh()};draw();
  return {disconnect(){stop();observer.disconnect();}};
};

    for(const [id,cellular] of [['speedTestModal',false],['CellularTestModal',true]]){
      const modal=$('#'+id);if(modal)speedObservers.push(installDuplexSpeed(modal,cellular,speedLock));
    }
    let chart=null;
    let theme='light';try{theme=localStorage.getItem('f50-console-theme')==='dark'?'dark':'light';}catch{}
    const setTheme=()=>{document.documentElement.dataset.f50Theme=theme;if(typeof Chart!=='undefined'){const historyChart=Chart.getChart('kanoDataHistoryChart');if(historyChart)historyChart.update('none');}$('#f50-theme-toggle').innerHTML=icon(theme==='light'?'moon':'sun');$('#f50-theme-toggle').setAttribute('aria-label',theme==='light'?'切换深色主题':'切换浅色主题');$('#f50-theme-toggle').title=theme==='light'?'切换深色主题':'切换浅色主题';if(chart){chart.options.scales.y.ticks.color=getComputedStyle(document.documentElement).getPropertyValue('--f-muted');chart.options.scales.y.grid.color=getComputedStyle(document.documentElement).getPropertyValue('--f-border');chart.data.datasets[0].borderColor=getComputedStyle(document.documentElement).getPropertyValue('--f-download');chart.data.datasets[1].borderColor=getComputedStyle(document.documentElement).getPropertyValue('--f-upload');chart.data.datasets.forEach(dataset=>dataset.backgroundColor=dataset.borderColor.trim()+'14');chart.update('none');}};
    $('#f50-theme-toggle').onclick=()=>{theme=theme==='light'?'dark':'light';try{localStorage.setItem('f50-console-theme',theme);}catch{}setTheme();};
    document.documentElement.classList.add('f50-console');setTheme();

    // Legacy charts use a white, bold canvas label. Supply the same label API with theme typography.
    if(typeof Chart!=='undefined'){
      const legacy=Chart.registry.plugins.get('centerText');if(legacy)Chart.unregister(legacy);
      Chart.register({id:'centerText',afterDatasetsDraw:instance=>{
        if(instance.canvas.closest('.devices-mon'))return;
        const lines=instance.config.options.plugins.centerText?.text||[];
        if(!lines.length||!instance.chartArea)return;
        const style=getComputedStyle(document.documentElement),ctx=instance.ctx,area=instance.chartArea;
        ctx.save();ctx.font='500 13px -apple-system, BlinkMacSystemFont, sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
        const center=(area.top+area.bottom)/2;
        lines.forEach((line,i)=>{ctx.fillStyle=style.getPropertyValue(i?'--f-muted':'--f-text').trim();ctx.fillText(cleanChrome(line.text).replace('↑','上传').replace('↓','下载'),(area.left+area.right)/2,center+(i-(lines.length-1)/2)*19);});
        ctx.restore();
      }});
      Chart.register({id:'f50-palette',beforeUpdate:instance=>{
        if(instance.canvas.id==='kanoDataHistoryChart'){
          const style=getComputedStyle(document.documentElement),blue=style.getPropertyValue('--f-blue').trim(),muted=style.getPropertyValue('--f-muted').trim(),border=style.getPropertyValue('--f-border').trim();
          const x=instance.options.scales.x,y=instance.options.scales.y;
          instance.options.animation=false;instance.options.layout.padding={top:8,right:8};
          x.ticks.color=muted;x.ticks.font={size:11,weight:'400'};x.ticks.maxTicksLimit=innerWidth<=600?5:10;x.ticks.padding=10;
          const peak=Math.max(0,...instance.data.datasets.flatMap(dataset=>dataset.data.map(value=>Number(value)||0)));
          const unit=peak>0?1024**Math.max(0,Math.min(4,Math.floor(Math.log(peak)/Math.log(1024)))):1024*1024;
          const scaled=peak>0?peak/unit:1,power=10**Math.floor(Math.log10(scaled/4)),step=([1,2,5,10].find(value=>value>=scaled/4/power)||10)*power;
          let ceiling=Math.ceil(scaled/step)*step;if(ceiling<=scaled*1.01)ceiling+=step;y.max=ceiling*unit;y.ticks.stepSize=step*unit;
          y.grid.display=true;y.grid.color=border;y.ticks.display=true;y.ticks.color=muted;y.ticks.font={size:11,weight:'400'};y.ticks.maxTicksLimit=6;y.ticks.padding=8;y.ticks.callback=value=>value===0?'0 B':typeof formatBytes==='function'?formatBytes(value):String(value);
          instance.data.datasets.forEach(dataset=>{dataset.label='每日用量';dataset.borderColor=blue;dataset.backgroundColor=blue+'12';dataset.borderWidth=2;dataset.tension=0;dataset.pointRadius=instance.data.labels.length<=15?3:0;dataset.pointBorderWidth=0;dataset.pointBackgroundColor=blue;dataset.pointHoverRadius=5;});
          return;
        }
        if(!instance.canvas.closest('.devices-mon'))return;
        const style=getComputedStyle(document.documentElement),blue=style.getPropertyValue(instance.canvas.id==='kanoNetChart'?'--f-download':'--f-blue').trim(),purple=style.getPropertyValue('--f-upload').trim();
        instance.options.animation=false;
        if(instance.canvas.id==='kanoNetChart'){instance.data.datasets.forEach(dataset=>dataset.yAxisID='y');instance.options.scales.y.suggestedMax=undefined;instance.options.scales.y1.display=false;}
        instance.data.datasets.forEach((dataset,index)=>{dataset.borderColor=index?purple:blue;dataset.backgroundColor=instance.config.type==='bar'?blue:(index?purple+'10':blue+'10');});
      }});
    }
    if(typeof Chart!=='undefined')document.querySelectorAll('.devices-mon canvas').forEach(canvas=>{const instance=Chart.getChart(canvas);if(instance){instance.resize();instance.update('none');}});
    if(typeof Chart!=='undefined')chart=new Chart($('#f50-traffic-chart'),{
      type:'line',
      data:{labels:[],datasets:[
        {label:'下载',data:[],borderColor:'#006fff',backgroundColor:'#006fff0a',borderWidth:2,pointRadius:0,tension:.25,fill:true},
        {label:'上传',data:[],borderColor:'#9463cf',backgroundColor:'#9463cf10',borderWidth:2,pointRadius:0,tension:.25,fill:true}
      ]},
      options:{responsive:true,maintainAspectRatio:false,animation:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:context=>`${context.dataset.label} ${context.parsed.y.toFixed(2)} Mbps`}}},
        scales:{x:{display:false},y:{min:0,
          grid:{color:getComputedStyle(document.documentElement).getPropertyValue('--f-border')},
          border:{display:false},
          ticks:{color:getComputedStyle(document.documentElement).getPropertyValue('--f-muted'),maxTicksLimit:4,font:{size:10},callback:v=>`${v} Mbps`}
        }}
      }
    });
    setTheme();showPage('overview');
    const txt=(id,value)=>{const node=document.getElementById('f50-'+id);if(node&&node.textContent!==String(value))node.textContent=value;};
    const num=value=>value!==null&&value!==undefined&&value!==''&&Number.isFinite(Number(value))?Number(value):null;
    // Reference bands: Teltonika Mobile Signal Strength Recommendations, 4G and 5G.
    // Grade reflects this sample's radio conditions, not measured throughput or stability.
    const signalLabels = ['较弱','正常','良好','极好'];
    const signalGrade = (key, value) => {
      if (value === null || value === undefined || typeof value === 'boolean' || String(value).trim() === '') return null;
      const n = Number(value);
      if (!Number.isFinite(n)) return null;
      if (key === 'rsrp') return n < -160 || n >= 0 ? null : n >= -80 ? 3 : n >= -90 ? 2 : n >= -100 ? 1 : 0;
      if (key === 'sinr') return n < -30 || n > 50 ? null : n >= 20 ? 3 : n >= 13 ? 2 : n > 0 ? 1 : 0;
      if (key === 'rsrq') return n < -50 || n >= 0 ? null : n >= -10 ? 3 : n >= -15 ? 2 : n > -20 ? 1 : 0;
      return null;
    };
    const renderSignalQuality = (signal, state = 'ready') => {
      const rows = new Map(signal.map(row => [row[0], row]));
      const grades = [];
      for (const key of ['rsrp','sinr','rsrq']) {
        const row = rows.get(key), grade = row ? signalGrade(key, row[1]) : null;
        const display = grade !== null && (state === 'ready' || state === 'stale');
        const n = display ? Number(row[1]) : null, tone = state === 'ready' && display ? String(grade) : 'unknown';
        txt(key, display ? `${n} ${row[4]}` : '—');
        txt(key+'-grade', tone === 'unknown' ? '—' : signalLabels[grade]);
        $('#f50-'+key+'-grade').dataset.grade = tone;
        const bar = $('#f50-'+key+'-bar');
        bar.dataset.grade = tone;
        bar.style.width = display ? `${Math.max(0,Math.min(100,(n-row[2])/(row[3]-row[2])*100))}%` : '0';
        if (grade !== null) grades.push({key, grade});
      }
      const empty = {
        waiting: ['等待数据','获取信号数据后自动评估'],
        stale: ['数据已暂停','恢复刷新后重新评估'],
        offline: ['未连接','连接蜂窝网络后显示信号评级'],
        unsupported: ['暂不评级','信号评级适用于 4G / 5G 网络']
      };
      let label, hint, tone = 'unknown';
      if (empty[state]) [label,hint] = empty[state];
      else if (grades.length < 3) [label,hint] = ['数据不足','等待完整的信号指标'];
      else {
        const lowest = grades.reduce((a,b) => a.grade <= b.grade ? a : b);
        tone = String(lowest.grade); label = signalLabels[lowest.grade];
        hint = lowest.grade >= 2 ? (lowest.grade === 3 ? '信号强、干扰少，当前接收条件极好' : '当前接收条件良好')
          : lowest.grade === 1 ? '信号可用，调整摆放位置可能改善接收'
          : lowest.key === 'rsrp' ? '接收信号偏弱，建议靠窗摆放'
          : lowest.key === 'sinr' ? '干扰较大，建议调整摆放位置'
          : '接收质量偏低，建议调整摆放位置';
      }
      txt('signal-rating',label); txt('signal-guidance',hint);
      $('#f50-signal-summary').dataset.grade = tone;
    };
    const healthNumber = (value, min = 0, max = Infinity) => {
      if (value === null || value === undefined || typeof value === 'boolean' || String(value).trim() === '') return null;
      const n = Number(value); return Number.isFinite(n) && n >= min && n <= max ? n : null;
    };
    const frequencyRows = d => Object.entries(d.cpuFreqInfo || {}).filter(([key]) => /^cpu\d+$/.test(key)).map(([key,row]) => ({
      key, current:healthNumber(row?.cur, 1, 10000), max:healthNumber(row?.max, 1, 10000),
      usage:healthNumber(d.cpuUsageInfo?.[key], 0, 100)
    })).filter(row => row.current !== null).sort((a,b) => Number(a.key.slice(3))-Number(b.key.slice(3)));
    const formatFrequency = value => value >= 1000 ? [(value/1000).toFixed(2),'GHz'] : [String(Math.round(value)),'MHz'];
    const healthReading = (key, d, connected = true) => {
      const unknown = {value:'—',unit:'',label:'等待数据',tone:'unknown',title:'尚未获取有效数据'};
      if (key === 'temperature') {
        const raw = healthNumber(d.cpu_temp, -20000, 150000); if (raw === null) return unknown;
        const n = raw/1000, level = n < 70 ? 0 : n < 85 ? 1 : 2;
        return {value:n.toFixed(1),unit:'°C',label:['正常','偏热','较热'][level],tone:['good','warning','danger'][level],title:'设备内部传感器温度；页面参考分档：低于 70°C 正常，70–85°C 偏热，85°C 及以上较热。高温时注意通风，避免覆盖；分档不是厂家保护阈值。'};
      }
      if (key === 'cpu' || key === 'memory') {
        const n = healthNumber(key === 'cpu' ? d.cpu_usage : (d.mem_usage ?? d.memInfo?.mem_usage_percent),0,100); if (n === null) return unknown;
        const level = key === 'cpu' ? n < 30 ? 0 : n < 70 ? 1 : n < 90 ? 2 : 3 : n < 75 ? 0 : n < 90 ? 2 : 3;
        return {value:n.toFixed(1),unit:'%',label:(key === 'cpu' ? ['轻载','正常','忙碌','高负载'] : ['余量充足','余量充足','占用偏高','余量紧张'])[level],tone:['good','info','warning','danger'][level],title:key === 'cpu' ? '当前 CPU 占用：低于 30% 轻载，30–70% 正常，70–90% 忙碌，90% 及以上高负载；短时升高通常由任务执行引起。' : '当前内存占用：低于 75% 余量充足，75–90% 偏高，90% 及以上余量紧张；这是用量提示，未直接测量内存压力。'};
      }
      if (key === 'frequency') {
        const rows = frequencyRows(d); if (!rows.length) return unknown;
        const busy = rows.filter(row => row.usage !== null && row.usage > 0);
        const highest = (busy.length ? busy : rows).reduce((a,b) => a.current >= b.current ? a : b);
        const [value,unit] = formatFrequency(highest.current), ratio = highest.max === null ? null : highest.current/highest.max;
        const idle = rows.every(row => row.usage === 0);
        return {value,unit,label:idle ? '空闲' : ratio === null ? '当前频率' : ratio < .45 ? '低频运行' : ratio < .85 ? '中频运行' : '高频运行',tone:idle || ratio === null || ratio < .85 ? 'neutral' : 'info',title:(busy.length ? '最高有负载核心的当前频率' : '返回数据中最高核心频率')+'；各核心见下方。低于该核心上限的 45% 为低频，45–85% 为中频，85% 及以上为高频；高频不代表异常，频率也不直接代表使用率。'};
      }
      if (key === 'cores') {
        const rows = Object.entries(d.cpuUsageInfo || {}).filter(([name,value]) => /^cpu\d+$/.test(name) && healthNumber(value,0,100) !== null);
        if (!rows.length) return unknown;
        const busy = rows.filter(([,value]) => Number(value) > 0).length;
        return {value:String(busy),unit:'核',label:busy ? '有负载' : '空闲',tone:'neutral',title:`本次采样有 ${busy} 个核心使用率大于 0，共收到 ${rows.length} 个核心的使用率数据；空闲不等于核心关闭。`};
      }
      if (key === 'uptime') {
        const seconds = healthNumber(d.realtime_time); if (!connected) return {...unknown,label:'未连接',title:'当前蜂窝网络未连接'};
        if (seconds === null) return unknown;
        return {value:seconds < 3600 ? String(Math.floor(seconds/60)) : `${Math.floor(seconds/3600)} 小时 ${Math.floor(seconds%3600/60)} 分`,unit:seconds < 3600 ? '分钟' : '',label:'连接中',tone:'good',title:'本次蜂窝网络连接时长；不代表长期连接稳定性。'};
      }
      return unknown;
    };
    const setHealthReading = (id, reading, state) => {
      const value = document.getElementById(id); if (!value) return;
      const number = value.querySelector('.f50-metric-number'), unit = value.querySelector('.f50-metric-unit');
      if (number.textContent !== reading.value) number.textContent = reading.value;
      if (unit.textContent !== reading.unit) unit.textContent = reading.unit;
      const label = state === 'stale' ? '数据已暂停' : reading.label, tone = state === 'stale' ? 'unknown' : reading.tone;
      const status = document.getElementById(id+'-status'); if (status.textContent !== label) status.textContent = label;
      status.dataset.tone = tone;
      if (value.title !== reading.title) value.title = reading.title;
      if (status.title !== reading.title) status.title = reading.title;
    };
    const renderHealth = (d, state = 'ready', connected = true) => {
      const data = state === 'waiting' ? {} : d;
      for (const [key,id] of healthSpecs) {
        const reading = healthReading(key,data,connected);
        setHealthReading('f50-'+id,reading,state);
        if (key !== 'uptime') setHealthReading('f50-monitor-'+key,reading,state);
      }
      setHealthReading('f50-monitor-cores',healthReading('cores',data),state);
      const list = $('#cpuFreqList');
      if (list) {
        const rows = frequencyRows(data), markup = rows.length ? rows.map(row => {
          const [value,unit] = formatFrequency(row.current), ratio = row.max === null ? 0 : Math.max(0,Math.min(100,row.current/row.max*100));
          const label = `核 ${Number(row.key.slice(3))+1}`;
          return `<div class="f50-core-frequency" title="${label}：${value} ${unit}${row.max === null ? '' : '；上限 '+row.max+' MHz'}"><span><span>${label}</span><b>${value}<small>${unit}</small></b></span><span class="f50-core-meter" aria-hidden="true"><i style="width:${ratio}%" data-paused="${state === 'stale'}"></i></span></div>`;
        }).join('') : '<span class="f50-core-empty">等待核心频率数据</span>';
        if (list.innerHTML !== markup) list.innerHTML = markup;
      }
    };
    const bytes=value=>{const n=num(value);if(n===null)return '—';if(n<1048576)return `${(n/1024).toFixed(1)} KB`;if(n<1073741824)return `${(n/1048576).toFixed(2)} MB`;return `${(n/1073741824).toFixed(2)} GB`;};
    const speed=(id,value)=>{const n=num(value);txt(id,n===null?'—':(n*8/1000000).toFixed(2));txt(id+'-unit','Mbps');};
    let lastStatusHTML='',lastSample=0;let latest=0;
    const statusObserver=new MutationObserver(records=>{if(!records.some(r=>r.target===$('#STATUS')&&r.addedNodes.length))return;const html=$('#STATUS')?.innerHTML;if(html&&html!==lastStatusHTML){polishChrome($('#STATUS'));polishStatusSections();lastStatusHTML=$('#STATUS').innerHTML;if(window.UFI_DATA&&Object.keys(window.UFI_DATA).length&&$('#STATUS li p')){latest=Date.now();render(true);}}});
    statusObserver.observe($('#STATUS'),{childList:true,subtree:true});
    // The native status poll omits WAN IPv4; reuse its authenticated reader at most every 30 seconds.
    let topologyWanIP='',topologyIPUpdated=0,topologyIPPending=false;
    const refreshTopologyIP=async()=>{
      if(topologyIPPending||Date.now()-topologyIPUpdated<30000||$('#f50-page-overview').hidden||typeof getData!=='function')return;
      topologyIPPending=true;
      try {const data=await getData(new URLSearchParams({cmd:'wan_ipaddr'}));topologyWanIP=String(data?.wan_ipaddr||'').trim();}
      catch {topologyWanIP='';}
      finally {topologyIPUpdated=Date.now();topologyIPPending=false;}
    };
    const connectionIP=(id,value,label)=>{
      const ip=String(value||'').trim(),valid=ip&&ip!=='0.0.0.0'&&ip!=='::'&&ip!=='null'&&ip!=='undefined';
      txt(id,valid?ip:'—');const el=$('#f50-'+id),title=valid?`${label}：${ip}`:`${label}：暂未获取`;
      if(el.title!==title)el.title=title;
    };
    const render=sample=>{
      updateSmsForwarding();
      const d=window.UFI_DATA||{};const has=Object.keys(d).length>0;const now=Date.now();
      updateSmsUnread(d);
      for(const [id,row] of actionRows){
        const original=document.getElementById(id);row.hidden=!original||original.style.display==='none';
        if(original){
          const proxy=row.querySelector('button');
          const originalLabel=cleanChrome(original.textContent).trim(),label=actionLabel(id,originalLabel);
          if(!['CECULLAR','ROAM','LIGHT','SMB'].includes(id)&&proxy.textContent!==label)proxy.textContent=label;
          if(!['CECULLAR','ROAM','LIGHT','SMB'].includes(id)){const named=label+' '+row.querySelector('strong').textContent;if(proxy.getAttribute('aria-label')!==named)proxy.setAttribute('aria-label',named);}
          proxy.disabled=original.disabled;
          // Preserve the original active indicator and multi-click confirmation text.
          if(['CECULLAR','ROAM','LIGHT','SMB'].includes(id)){
            const active=original.style.backgroundColor.includes('active');
            if(proxy.getAttribute('aria-pressed')!==String(active))proxy.setAttribute('aria-pressed',String(active));
            const name=row.querySelector('strong').textContent;if(proxy.getAttribute('aria-label')!==name)proxy.setAttribute('aria-label',name);
            const state=active?'关闭':'开启';if(proxy.textContent!==state)proxy.textContent=state;
          }
        }
      }
      document.querySelectorAll('.f50-select-row label').forEach(label=>{const select=label.querySelector('select');label.hidden=select.style.display==='none'||['SIM_CARD_TYPE','SIM_CARD_TYPE_V50'].includes(select.id);});
      if(!has){renderHealth({},'waiting');renderSignalQuality([], 'waiting');txt('signal-type','—');txt('band','—');txt('pci','—');updateCarrierLogo(null);txt('provider','蜂窝网络');txt('online','等待数据');$('#f50-online').dataset.state='waiting';$('.f50-connection').dataset.state='waiting';connectionIP('wan-ip',null,'蜂窝 IP');connectionIP('gateway-ip',null,'F50 网关 IP');connectionIP('local-ip',null,'当前访问设备 IP');txt('data-note','尚未获取设备状态。请在「系统」中登录，并检查设备连接。');return;}
      const stale=!latest||now-latest>Math.max(15000,Number($('#refreshRateSelect')?.value||1000)*3);
      $('#f50-data-note').hidden=!stale;
      const connected=Boolean(d.network_type&&String(d.network_type)!=='0'&&String(d.network_type)!=='No Service'&&d.ppp_status!=='ppp_disconnected');
      renderHealth(d,stale?'stale':'ready',connected);
      const type=String(d.network_type)==='20'?'5G':String(d.network_type)==='13'?'4G':d.network_type||'未连接';
      txt('online',stale?'数据已暂停':connected?`${type} 已连接`:'未连接');$('#f50-online').dataset.state=stale?'stale':connected?'online':'offline';$('.f50-connection').dataset.state=$('#f50-online').dataset.state;$('.f50-connection').dataset.localState=!stale&&Number(d.wifi_access_sta_num)>0?'online':'idle';if(connected&&!stale)refreshTopologyIP();else if(!connected){topologyWanIP='';topologyIPUpdated=0;}connectionIP('wan-ip',connected?(d.wan_ipaddr||topologyWanIP||d.ipv6_wan_ipaddr):null,'蜂窝 IP');connectionIP('gateway-ip',d.lan_ipaddr,'F50 网关 IP');connectionIP('local-ip',d.client_ip,'当前访问设备 IP');
      updateCarrierLogo(d.network_provider);txt('provider',d.network_provider||'蜂窝网络');txt('updated',latest?'更新于 '+new Date(latest).toLocaleTimeString('zh-CN',{hour12:false}):'等待更新');
      txt('data-note',stale?'当前显示上次采样数据。可在「系统」页面恢复刷新，或检查设备连接。':'实时数据来自设备后台；图表在本次访问期间采样。');
      speed('dl',d.realtime_rx_thrpt);speed('ul',d.realtime_tx_thrpt);
      txt('monthly',bytes(d.monthly_data??(num(d.monthly_tx_bytes)!==null&&num(d.monthly_rx_bytes)!==null?Number(d.monthly_tx_bytes)+Number(d.monthly_rx_bytes):null)));
      txt('today','今日 '+bytes(d.daily_data));txt('clients',num(d.wifi_access_sta_num)??'—');txt('client-link',`${num(d.wifi_access_sta_num)??'—'} 台 Wi-Fi 设备`);
      const traffic=$('#f50-monitor-traffic');if(traffic&&!traffic.children.length)traffic.innerHTML='<span class=\"f50-monitor-download\"></span><span class=\"f50-monitor-upload\"></span>';
      const rate=value=>num(value)===null?'—':(Number(value)*8/1000000).toFixed(2);
      if(traffic){const down=`↓ ${rate(d.realtime_rx_thrpt)} Mbps`,up=`↑ ${rate(d.realtime_tx_thrpt)} Mbps`;if(traffic.children[0].textContent!==down)traffic.children[0].textContent=down;if(traffic.children[1].textContent!==up)traffic.children[1].textContent=up;}

      for(const key of ['internal','external']){
        const total=num(d[key+'_total_storage']),used=num(d[key+'_used_storage']),available=num(d[key+'_available_storage']);
        const absent=key==='external'&&total===0;
        txt(key+'-storage',absent?'未检测到 SD 卡':total===null?'等待数据':bytes(total));
        txt(key+'-storage-detail',absent?'插入后显示容量':total===null?'':`已用 ${bytes(used)} · 可用 ${bytes(available??(used===null?null:Math.max(0,total-used)))}`);
        $('#f50-'+key+'-storage-bar').style.width=total>0&&used!==null?`${Math.min(100,Math.max(0,used/total*100))}%`:'0';
      }
      const nr=num(d.Z5g_rsrp)!==null&&/^(20|5g|nr|endc)/i.test(String(d.network_type));const supported=/^(13|4g|lte|20|5g|nr|endc)/i.test(String(d.network_type));txt('signal-type',!connected?'未连接':supported?(nr?'5G NR':'4G LTE'):type);
      const signal=[['rsrp',nr?d.Z5g_rsrp:d.lte_rsrp,-120,-65,'dBm'],['sinr',nr?d.Nr_snr:d.Lte_snr,-10,30,'dB'],['rsrq',nr?d.nr_rsrq:d.lte_rsrq,-20,-3,'dB']];
      renderSignalQuality(signal,stale?'stale':!connected?'offline':!supported?'unsupported':'ready');
      txt('band',(nr?d.Nr_bands:d.Lte_bands)?`${nr?'N':'B'}${nr?d.Nr_bands:d.Lte_bands}`:'—');txt('pci',(nr?d.Nr_pci:d.Lte_pci)??'—');
      if(sample&&chart&&now-lastSample>=750&&!stale&&num(d.realtime_rx_thrpt)!==null&&num(d.realtime_tx_thrpt)!==null){lastSample=now;chart.data.labels.push(new Date(now).toLocaleTimeString('zh-CN',{hour12:false}));chart.data.datasets[0].data.push(Number(d.realtime_rx_thrpt)*8/1000000);chart.data.datasets[1].data.push(Number(d.realtime_tx_thrpt)*8/1000000);if(chart.data.labels.length>60){chart.data.labels.shift();chart.data.datasets.forEach(s=>s.data.shift());}chart.update('none');}
    };
    $('#refreshRateSelect')?.setAttribute('aria-label','状态刷新间隔');
    $('#WIFI_SWITCH')?.setAttribute('aria-label','Wi-Fi 频段');
    const compactIds=new Set(['tokenModal','cpuTempInfoModal','memInfoModal','payModal','APNViewModal','APNEditModal']);
    const wideIds=new Set(['DataUsageHistoryModal','plugin_store','ATModal','advanceModal','smsList','smsForwardModal']);
    let modalSerial=0;
    // Device artwork is embedded locally so the console also works without Internet access.
    const clientTypes=[['auto','自动识别'],['iphone','iPhone'],['android','安卓手机'],['ipad','iPad / 平板'],['macbook','MacBook'],['laptop','笔记本电脑'],['desktop','台式电脑'],['tv','电视'],['console','游戏主机'],['router','网络设备'],['generic','通用设备']];
    const identifyClient=model=>{
      const text=String(model||'');
      if(/iphone|苹果手机/i.test(text))return 'iphone';
      if(/ipad|tablet|平板/i.test(text))return 'ipad';
      if(/macbook/i.test(text))return 'macbook';
      if(/android|pixel|galaxy|samsung|vivo|oppo|oneplus|xiaomi|redmi|huawei|honor|realme|手机|小米|华为|荣耀/i.test(text))return 'android';
      if(/playstation|xbox|nintendo|游戏主机/i.test(text))return 'console';
      if(/(?:^|[\s_-])tv(?:$|[\s_-])|television|电视|appletv/i.test(text))return 'tv';
      if(/imac|desktop|mac[ -]?mini|mac[ -]?studio|台式/i.test(text))return 'desktop';
      if(/laptop|notebook|thinkpad|surface|笔记本/i.test(text))return 'laptop';
      if(/router|gateway|access[ -]?point|路由|网关/i.test(text))return 'router';
      return 'generic';
    };
    const clientModelFromName=name=>name.match(/MacBook(?:[ -](?:Pro|Air))?|iPhone(?:[ -]\d{1,2}(?:[ -](?:Pro(?: Max)?|Plus|mini))?)?|iPad(?:[ -](?:Pro|Air|mini))?|(?:vivo|OPPO|Pixel|Galaxy|Xiaomi|Redmi|HUAWEI|HONOR|OnePlus|realme)[ -][\w+-]+(?:[ -](?:Pro|Ultra|Plus))?/i)?.[0]||'';
    const screenArt=(x,y,w,h,blue=false)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="url(#screen)"/><path d="M${x} ${y+h*.7} Q${x+w*.3} ${y+h*.1} ${x+w} ${y+h*.3} V${y+h} H${x}Z" fill="${blue?'#7ad8ee':'#c9bcff'}" opacity=".8"/><path d="M${x} ${y+h*.85} Q${x+w*.55} ${y+h*.35} ${x+w} ${y+h*.7} V${y+h} H${x}Z" fill="${blue?'#226cde':'#7655c8'}"/><path d="M${x} ${y+h*.94} Q${x+w*.6} ${y+h*.65} ${x+w} ${y+h*.82} V${y+h} H${x}Z" fill="#f7faff" opacity=".22"/>`;
    const deviceArtwork=type=>{
      const art={
        iphone:`<rect x="41" y="7" width="47" height="98" rx="11" fill="url(#metal)" stroke="#a8afb9"/><rect x="44" y="9" width="41" height="94" rx="9" fill="#161b24"/>${screenArt(46,12,37,88)}<rect x="56" y="16" width="17" height="5" rx="2.5" fill="#131823"/><rect x="58" y="94" width="13" height="2" rx="1" fill="#fff"/><path d="M40 29v10m0 5v9m49-17v14" stroke="#848d99" stroke-width="1.5"/>`,
        android:`<rect x="40" y="7" width="49" height="98" rx="8" fill="url(#metal)" stroke="#8e99a7"/><rect x="43" y="9" width="43" height="94" rx="6" fill="#14212c"/>${screenArt(45,12,39,88,true)}<circle cx="64.5" cy="17" r="2" fill="#14212c"/><rect x="59" y="95" width="12" height="1.5" rx=".75" fill="#fff"/><path d="M90 28v17" stroke="#8e99a7" stroke-width="1.5"/>`,
        ipad:`<rect x="27" y="10" width="75" height="94" rx="8" fill="url(#metal)" stroke="#9ea7b4"/><rect x="30" y="13" width="69" height="88" rx="5" fill="#161b24"/>${screenArt(33,17,63,80)}<circle cx="64" cy="14.5" r="1" fill="#667085"/><rect x="57" y="92" width="15" height="1.5" rx=".75" fill="#fff"/>`,
        macbook:`<rect x="15" y="23" width="98" height="64" rx="5" fill="url(#metal)" stroke="#9ba5b2"/><rect x="18" y="26" width="92" height="57" rx="3" fill="#171b24"/>${screenArt(21,29,86,51)}<path d="M58 29h12v3H58z" fill="#171b24"/><path d="M15 86h98l11 11q0 4-7 4H11q-7 0-7-4Z" fill="url(#metal)" stroke="#9ba5b2"/><path d="M47 87h34l-3 4H50Z" fill="#8e98a6"/><path d="M5 97h118" stroke="#a6afba"/>`,
        laptop:`<rect x="14" y="22" width="100" height="65" rx="4" fill="#344254" stroke="#8290a1"/>${screenArt(19,27,90,54,true)}<circle cx="64" cy="25" r="1" fill="#8997a9"/><path d="M14 87h100l11 12H3Z" fill="url(#metal)" stroke="#8794a4"/><path d="M48 88h32l3 7H45Z" fill="#a2adbc"/><path d="M3 99q0 4 6 4h110q6 0 6-4" fill="#7e8b9b"/>`,
        desktop:`<rect x="9" y="19" width="91" height="61" rx="4" fill="url(#metal)" stroke="#92a0ae"/><rect x="12" y="22" width="85" height="51" rx="2" fill="#172132"/>${screenArt(15,25,79,45,true)}<path d="M49 81h12l3 14H46Z" fill="#afbac6"/><rect x="38" y="94" width="35" height="4" rx="2" fill="url(#metal)"/><rect x="103" y="44" width="19" height="54" rx="3" fill="#3c4858" stroke="#929fad"/><path d="M107 52h11m-11 5h11" stroke="#8290a1"/><circle cx="112.5" cy="87" r="2" fill="#6de4b7"/>`,
        tv:`<rect x="6" y="21" width="116" height="71" rx="4" fill="#303c4e" stroke="#8e9daf"/>${screenArt(10,25,108,62,true)}<path d="M28 93l-7 9m79-9 7 9" stroke="#8794a4" stroke-width="4" stroke-linecap="round"/><circle cx="64" cy="89.5" r="1" fill="#aab8c9"/>`,
        console:`<path d="M41 14q-12 38-4 83l14 4V14Z" fill="url(#metal)" stroke="#9daaba"/><path d="M51 16h20v82H51Z" fill="#243147"/><path d="M71 14q12 38 4 83l-4 4Z" fill="url(#metal)" stroke="#9daaba"/><path d="M52 24v57" stroke="#63a9ff" stroke-width="2"/><path d="M77 71q-8 0-12 12l-4 14q0 7 6 5l9-7h16l9 7q6 2 6-5l-4-14q-4-12-12-12Z" fill="#c4ccd6" stroke="#8793a3"/><path d="M71 82h10m-5-5v10" stroke="#384458" stroke-width="2"/><circle cx="96" cy="81" r="2" fill="#4e76ad"/><circle cx="89" cy="87" r="2" fill="#4e76ad"/>`,
        router:`<path d="M24 61V22m80 39V22" stroke="#758397" stroke-width="5" stroke-linecap="round"/><rect x="16" y="57" width="96" height="32" rx="7" fill="url(#metal)" stroke="#94a1b2"/><path d="M25 65h78" stroke="#c6cdd6"/><circle cx="31" cy="79" r="2" fill="#1aac78"/><circle cx="40" cy="79" r="2" fill="#4598ee"/><path d="M72 76h8m6 0h8m6 0h5" stroke="#697b91" stroke-width="2"/>`,
        generic:`<rect x="35" y="24" width="58" height="68" rx="12" fill="url(#metal)" stroke="#94a1b2"/><rect x="40" y="29" width="48" height="48" rx="8" fill="#e8edf4"/><path d="M50 50q14-13 28 0m-23 6q9-8 18 0m-13 6q4-3 8 0" fill="none" stroke="#7689a3" stroke-width="3" stroke-linecap="round"/><circle cx="64" cy="68" r="2" fill="#7689a3"/><circle cx="64" cy="84" r="2" fill="#7689a3"/>`
      };
      const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 116"><defs><linearGradient id="metal" x2=".8" y2="1"><stop stop-color="#f7f9fc"/><stop offset=".45" stop-color="#d5dce5"/><stop offset="1" stop-color="#a8b3c1"/></linearGradient><linearGradient id="screen" x2=".4" y2="1"><stop stop-color="${['android','laptop','desktop','tv'].includes(type)?'#132e76':'#302c78'}"/><stop offset=".5" stop-color="${type==='iphone'?'#936bf0':'#4888d8'}"/><stop offset="1" stop-color="#92daed"/></linearGradient></defs>${art[type]||art.generic}</svg>`;
      return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
    };
    const readClientPreferences=key=>{try{const data=JSON.parse(localStorage.getItem(key)||'{}');return data&&!Array.isArray(data)&&typeof data==='object'?data:{};}catch{return {};}};
    const deviceModels=readClientPreferences('f50-device-models');
    const deviceIcons=readClientPreferences('f50-device-icons');
    const decorateClient=card=>{
      if(card.dataset.f50Client)return;
      const details=card.firstElementChild;
      const fields=Array.from(details?.querySelectorAll(':scope>p')||[]);
      const mac=fields.map(p=>p.querySelector('span:nth-child(2)')?.textContent.trim()).find(value=>/^(?:[\da-f]{2}:){5}[\da-f]{2}$/i.test(value));
      if(!mac)return;card.dataset.f50Client='true';details.classList.add('f50-client-details');
      const name=fields[0]?.querySelector('span:nth-child(2)')?.textContent.trim()||'未命名设备';
      fields[0]?.classList.add('f50-client-name');
      const identified=clientModelFromName(name);
      const visual=document.createElement('div');visual.className='f50-client-visual';
      const picture=document.createElement('img');picture.width=128;picture.height=116;picture.className='f50-client-picture';
      const typeLabel=document.createElement('span');typeLabel.className='f50-client-type';visual.append(picture,typeLabel);details.before(visual);
      const ipField=fields.find(p=>/^IP/.test(p.firstElementChild?.textContent.trim()||''));
      if(ipField){ipField.classList.add('f50-client-ip');fields[0].after(ipField);}
      const row=document.createElement('div');row.className='f50-client-model';
      const caption=document.createElement('span');caption.textContent='设备型号';
      const value=document.createElement('strong');
      const edit=document.createElement('button');edit.type='button';edit.textContent='编辑设备';edit.setAttribute('aria-label','编辑 '+name+' 的型号与图标');
      const editor=document.createElement('form');editor.className='f50-client-editor';editor.hidden=true;
      const modelLabel=document.createElement('label');modelLabel.textContent='型号名称';
      const input=document.createElement('input');input.type='text';input.maxLength=80;input.placeholder='例如 iPhone 16 Pro、vivo X200s';input.setAttribute('aria-label',name+' 的设备型号');modelLabel.append(input);
      const iconLabel=document.createElement('label');iconLabel.textContent='设备图标';
      const select=document.createElement('select');select.setAttribute('aria-label',name+' 的设备图标');
      for(const [key,label] of clientTypes){const option=document.createElement('option');option.value=key;option.textContent=label;select.append(option);}iconLabel.append(select);
      const hint=document.createElement('small');hint.textContent='保存于当前浏览器，可随时修改。';
      const error=document.createElement('span');error.setAttribute('role','status');error.className='f50-client-save-error';error.hidden=true;
      const save=document.createElement('button');save.type='submit';save.textContent='保存';
      const cancel=document.createElement('button');cancel.type='button';cancel.textContent='取消';cancel.onclick=()=>{editor.hidden=true;edit.hidden=false;edit.focus();};
      editor.append(modelLabel,iconLabel,hint,error,save,cancel);
      const update=()=>{
        const model=typeof deviceModels[mac]==='string'?deviceModels[mac]:'';
        const manualIcon=deviceIcons[mac];
        const type=clientTypes.some(([key])=>key===manualIcon&&key!=='auto')?manualIcon:identifyClient(model||name);
        const label=clientTypes.find(([key])=>key===type)[1];
        value.textContent=model||identified||'未标注';value.title=!model&&identified?'根据设备名称识别，具体型号可手动标注':'型号标注保存在当前浏览器';
        picture.src=deviceArtwork(type);picture.alt=label+' 设备外形';typeLabel.textContent=label;
        visual.title=manualIcon&&manualIcon!=='auto'?'手动选择的设备图标':type==='generic'?'设备类型未识别，可编辑图标':'根据型号或设备名称匹配的设备图标';
        card.dataset.f50DeviceType=type;
      };update();
      edit.onclick=()=>{input.value=typeof deviceModels[mac]==='string'?deviceModels[mac]:identified;select.value=clientTypes.some(([key])=>key===deviceIcons[mac])?deviceIcons[mac]:'auto';error.hidden=true;editor.hidden=false;edit.hidden=true;input.focus();};
      editor.onsubmit=event=>{
        event.preventDefault();
        const nextModels={...deviceModels},nextIcons={...deviceIcons},text=input.value.trim();
        if(text)nextModels[mac]=text;else delete nextModels[mac];
        if(select.value==='auto')delete nextIcons[mac];else nextIcons[mac]=select.value;
        let previousModels;
        try{previousModels=localStorage.getItem('f50-device-models');localStorage.setItem('f50-device-models',JSON.stringify(nextModels));localStorage.setItem('f50-device-icons',JSON.stringify(nextIcons));}
        catch{try{if(previousModels===undefined)throw new Error('Storage unavailable');if(previousModels===null)localStorage.removeItem('f50-device-models');else localStorage.setItem('f50-device-models',previousModels);}catch{}error.textContent='浏览器无法保存，请检查存储权限后重试。';error.hidden=false;return;}
        Object.assign(deviceModels,nextModels);if(!text)delete deviceModels[mac];Object.assign(deviceIcons,nextIcons);if(select.value==='auto')delete deviceIcons[mac];
        update();editor.hidden=true;edit.hidden=false;edit.focus();
      };
      row.append(caption,value,edit,editor);(ipField||fields[0])?.after(row);
      const rename=fields[0]?.querySelector('svg[onclick]');if(rename){rename.setAttribute('role','button');rename.setAttribute('aria-label','修改 '+name+' 的设备名称');rename.tabIndex=0;rename.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();rename.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});}
    };
    let revealLoginMethod=()=>{},setLoginBusy=()=>{},showLoginError=()=>{};
    // Reuse the native login controls and handlers; split guidance by credential.
    const loginRoot=$('#tokenModal'),loginModal=loginRoot?.querySelector('.modal');
    if(loginModal){
      loginModal.classList.add('f50-login-dialog');
      const header=loginModal.querySelector(':scope>.title'),form=loginModal.querySelector('form');
      const notes=loginModal.querySelector(':scope>.title:nth-child(2)');
      const help=header.querySelector('button');
      help.classList.add('f50-login-help');help.type='button';help.title='登录帮助';help.setAttribute('aria-label','登录帮助');
      help.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 2-2.5 3.5M12 16.5v.5" stroke-linecap="round"/></svg>';
      const subtitle=document.createElement('p');subtitle.className='f50-login-subtitle';subtitle.textContent='输入两项凭据，连接设备管理后台';header.after(subtitle);
      const method=$('#login_method'),methodRow=method.parentElement;
      const methodGroup=document.createElement('div');methodGroup.className='f50-login-method';
      const methodLabel=document.createElement('label');methodLabel.htmlFor=method.id;methodLabel.textContent='登录方式';
      methodRow.before(methodGroup);methodGroup.append(methodLabel,methodRow);methodRow.classList.add('f50-login-method-row');
      const methodHint=notes.querySelector('[data-i18n=token_note_4]');methodHint.className='f50-login-hint';methodHint.id='f50-login-method-hint';methodGroup.append(methodHint);method.setAttribute('aria-describedby',methodHint.id);
      // The saved method is reused silently; the switch only returns after a password rejection.
      methodGroup.hidden=true;methodHint.textContent='密码验证失败，可切换登录方式后重试。';
      revealLoginMethod=()=>{if(loginRoot.style.display!=='none'&&methodGroup.hidden){methodGroup.hidden=false;}};
      for(const [inputId,labelId,noteKey] of [['TOKEN','TOKEN_LABEL','token_note_2'],['PWDINPUT','token_div_label2','token_note_3']]){
        const input=$('#'+inputId),label=$('#'+labelId),row=input.parentElement;
        const group=document.createElement('div');group.className='f50-login-field';label.before(group);group.append(label,row);row.classList.add('f50-login-input');
        const hint=notes.querySelector('[data-i18n='+noteKey+']');hint.className='f50-login-hint';hint.id='f50-login-hint-'+inputId;group.append(hint);
        input.setAttribute('aria-labelledby',label.id);input.setAttribute('aria-describedby',hint.id);
        input.setAttribute('autocapitalize','none');input.setAttribute('spellcheck','false');
        input.removeAttribute('data-i18n-placeholder');input.placeholder=inputId==='TOKEN'?'请输入后台口令':'请输入原厂后台密码';
        label.addEventListener('click',()=>input.focus());
        const reveal=row.querySelector('button');
        const syncReveal=()=>{const visible=input.type==='text';reveal.setAttribute('aria-label',(visible?'隐藏':'显示')+(inputId==='TOKEN'?' 后台口令':'原厂后台密码'));reveal.setAttribute('aria-pressed',String(visible));};
        syncReveal();reveal.addEventListener('click',syncReveal);
      }
      notes.classList.add('f50-login-legacy-notes');
      const remember=$('#loginRememberMe'),rememberLabel=remember.closest('label');rememberLabel.classList.add('f50-login-remember');rememberLabel.prepend(remember);
      const footer=loginModal.querySelector(':scope>.btn'),cancel=footer.querySelector('[data-i18n=cancel_btn]');footer.classList.add('f50-login-footer');footer.prepend(cancel);
      form.setAttribute('aria-label','设备后台登录');
      // Sign-in page: brand, two fields and one primary action; guidance lives behind the help button.
      const brand=document.createElement('div');brand.className='f50-login-brand';brand.innerHTML=`<span class="f50-login-brand-art" aria-hidden="true">${f50DeviceArt}</span><span>F50 Console</span>`;header.before(brand);
      // UFI-TOOLS hides the token input when its login token is disabled; the page then asks for one credential.
      const tokenInput=$('#TOKEN'),tokenGroup=tokenInput?.closest('.f50-login-field');
      const syncTokenMode=()=>{const needed=tokenInput?.style.display!=='none';if(tokenGroup)tokenGroup.hidden=!needed;const text=needed?'使用后台口令和原厂后台密码登录':'使用原厂后台密码登录';if(subtitle.textContent!==text)subtitle.textContent=text;};
      if(tokenInput)new MutationObserver(syncTokenMode).observe(tokenInput,{attributes:true,attributeFilter:['style']});syncTokenMode();
      loginModal.querySelectorAll('.f50-login-field>.f50-login-hint').forEach(hint=>{hint.hidden=true;});
      const rememberText=Array.from(rememberLabel.childNodes).find(node=>node!==remember&&node.textContent.trim());
      if(rememberText){if(rememberText.nodeType===1){rememberText.removeAttribute('data-i18n');}rememberText.textContent='在此浏览器记住登录';}
      const submit=footer.querySelector('button:not([data-i18n=cancel_btn])');submit?.classList.add('f50-login-submit');cancel?.classList.add('f50-login-cancel');
      // Sign-in errors stay inside the card, next to the action that produced them.
      const loginError=document.createElement('p');loginError.className='f50-login-error';loginError.setAttribute('role','alert');loginError.hidden=true;footer.before(loginError);
      const errorCopy=[[/^登录失败[,，]?请检查网络/,'无法连接设备，请检查网络后重试。'],[/^口令错误/,'后台口令不正确。'],[/^密码错误/,'原厂后台密码不正确。'],[/^登录失败，请检查密码/,'原厂后台密码不正确。']];
      showLoginError=text=>{const rule=errorCopy.find(([pattern])=>pattern.test(text));let message=rule?rule[1]:text.replace(/,/g,'，');const rest=text.match(/(剩余|次数).*$/)?.[0];if(rule&&rest)message+=rest.replace(/[:：]\s*/,' ')+'。';loginError.innerHTML=icon('alert')+'<span></span>';loginError.lastChild.textContent=message;loginError.hidden=false;};
      form.addEventListener('input',()=>{loginError.hidden=true;});
      new MutationObserver(()=>{if(loginRoot.style.display==='none')loginError.hidden=true;}).observe(loginRoot,{attributes:true,attributeFilter:['style']});
      let busyTimer=0;
      setLoginBusy=busy=>{if(!submit)return;clearTimeout(busyTimer);submit.dataset.busy=String(busy);submit.setAttribute('aria-busy',String(busy));if(busy)busyTimer=setTimeout(()=>setLoginBusy(false),20000);};
      new MutationObserver(()=>{if(loginRoot.style.display==='none')setLoginBusy(false);}).observe(loginRoot,{attributes:true,attributeFilter:['style']});
    }
    const loginCopy={token_title:'登录',token_div_1:'后台口令',token_div_2:'原厂后台密码',token_note_2:'忘记口令时，可在设备端后台服务中重置。',token_note_3:'使用机身背面标注的管理密码。',token_note_4:'密码错误时，可切换登录方式再试。',login_method_1:'登录方式 1',login_method_2:'登录方式 2',confirm_btn:'登录'};
    const settingsCopy={at_warning_1:'自定义 AT 指令会直接操作设备，请核对指令后执行。',at_warning_2:'支持固件：F50 B09 / B24、U30 B17 / B19、M3 B07。其他版本请先确认兼容性。',usb_status_notice:'显示通过 Type-C 接口连接的设备与当前 USB 模式。',plugin_modal_title:'插件管理',plugin_modal_num:'数量',plugin_modal_add_plugin_btn:'添加插件',plugin_store:'插件商店',plugin_modal_export_btn:'导出插件',plugin_modal_clear_btn:'清空列表',plugin_modal_submit_btn:'保存插件',plugin_modal_close_btn:'关闭',wifi_hint_no_submit:'切换频段立即生效，无需保存。',wifi_broadcast_label:'广播网络名称',wifi_show_pwd_label:'显示密码',wifi_option_off:'关闭 Wi-Fi',wifi_option_24g:'2.4 GHz',wifi_option_5g:'5 GHz',current_apn:'当前 APN',auto_apn:'配置方式',auto:'自动',manual:'手动',profile:'配置文件',view:'查看',add:'添加',edit:'编辑',del:'删除',scheduled_tasks_title:'定时任务',task_list_title:'任务列表',refresh_btn:'刷新',add_task_btn:'添加任务',add_task_title:'任务设置',task_name_label:'任务名称',trigger_time_label:'触发时间',repeat_daily_label:'每天重复',action_param_label:'动作参数（JSON）',cancel_btn:'取消',close_btn:'关闭',schedule_reboot_title:'每日定时重启',schedule_reboot_enable:'启用每日定时重启',schedule_reboot_time:'重启时间',at_custom_title:'自定义指令',at_slot_label:'执行槽位',at_exec_btn:'执行',at_result_title:'执行结果',at_qos:'签约速率',at_imei:'IMEI',at_force_imei:'强力查串',at_modem:'基带信息',at_imsi:'IMSI',at_fill_imei:'填入改串指令',at_modem_reboot:'重启基带',at_high_rail_mode:'高铁模式',client_mgmt_connected:'已连接设备',client_mgmt_blacklist:'黑名单',common_refresh_btn:'刷新'};
    // Native success toasts that only confirm the click; requirements such as "reboot to apply" still show.
    // Toasts that only confirm a click or report internals never pop up; a short status appears beside the control when one is visible.
    // Toasts that ask for follow-up (reboot, reconnect Wi-Fi, check a test mail, submit to apply), progress and errors still show.
    const noiseToasts=/^(登录成功|您已退出登录|已开始刷新|已停止刷新|刷新成功|测速已取消|测速已终止|同意|验证中.*|网络较慢.*|获得成就.*|检测到高级功能.*|未开启高级功能.*|检测到您已开启高级功能.*|当前刷新频率.*|.{0,24}(已启用|已禁用)|Login successful)$/i;
    const confirmations=/^(操作成功|复制成功|保存成功|删除成功|设置成功|执行成功|执行完成|修改成功|上传成功|已开始下载|短信发送成功|钉钉测试消息发送成功|设置频段成功|设置基站成功|解锁基站成功|保存成功，已同步至机器|已保存至本地|已从云端同步至本地|重置成功，已同步至机器|系统更新已禁用|Operation successful|Copied|Saved)$/i;
    const feedbackHosts='.f50-action-row,.f50-settings-actions,.f50-advanced-actions,.f50-at-shortcuts,.f50-plugin-toolbar,.f50-history-actions,.f50-forward-actions';
    let lastAction=null;
    const rememberAction=event=>{const target=event.type==='submit'?event.target.querySelector('[type=submit]'):event.target.closest?.('button,[role=button],[role=switch],input[type=checkbox]');if(target)lastAction={target,at:Date.now()};};
    document.addEventListener('click',rememberAction,true);document.addEventListener('submit',rememberAction,true);
    const showActionFeedback=text=>{
      const action=lastAction;if(!action||Date.now()-action.at>15000)return false;
      let {target}=action;if(target.closest('.f50-action-row'))target=target.closest('.f50-action-row').querySelector('button');
      const host=target.isConnected&&target.getClientRects().length?target.closest(feedbackHosts):null;if(!host||target.closest(protectedContent))return false;
      const label=/删除/.test(text)?'已删除':/发送/.test(text)?'已发送':/上传/.test(text)?'已上传':/复制|Copied/i.test(text)?'已复制':/执行/.test(text)?'已执行':/保存|同步|Saved/i.test(text)?'已保存':/设置|修改|锁|频段|基站|更新/.test(text)?'已应用':'已完成';
      let note=host.querySelector(':scope>.f50-action-feedback');
      if(!note){note=document.createElement('span');note.className='f50-action-feedback';note.setAttribute('role','status');note.dataset.f50Preserve='true';}
      note.innerHTML=icon('check')+'<span></span>';note.lastChild.textContent=label;
      const anchor=target.parentElement===host?target:Array.from(host.children).find(child=>child.contains(target));if(anchor)host.insertBefore(note,anchor);else host.prepend(note);
      clearTimeout(note._f50Timer);note._f50Timer=setTimeout(()=>note.remove(),3000);
      return true;
    };
    const acceptTerms=root=>{
      if(root.dataset.f50Accepted||root.style.display==='none')return;
      const input=root.querySelector('#kano_term_confirm_text'),confirm=Array.from(root.querySelectorAll('button')).find(button=>/^(同意|Accept)$/i.test(button.textContent.trim()));
      if(!input||!confirm||typeof t!=='function')return;
      root.dataset.f50Accepted='true';input.value=t('term_confirm_text');confirm.click();
    };
    const decorateElement=element=>{
      const loginText=element.closest('#tokenModal')&&loginCopy[element.dataset.i18n];
      if(loginText&&element.textContent!==loginText)element.textContent=loginText;
      if(element.matches('#TOKEN,#PWDINPUT')){
        const placeholder=element.id==='TOKEN'?'请输入后台口令':'请输入原厂后台密码';
        if(element.placeholder!==placeholder)element.placeholder=placeholder;
      }
      const dataCopy={advance_warning:'高级操作可能导致设备异常、数据丢失或无法恢复，请确认了解操作影响后再执行。',official_data_management:'设备后台',ufi_data_management:'UFI 后台',data_manage_enable:'启用流量管理',data_manage_clear_enable:'每月重置用量',data_manage_plan_type:'套餐类型',data_manage_reset_day:'每月重置日',data_manage_alert_threshold:'用量提醒',data_manage_plan_total:'套餐流量',data_manage_plan_used:'已用流量',enable_ufi_data_management:'启用流量管理',count_method:'统计周期',data_ref:'数据来源',disconnect_network_data_value:'断网阈值',data_limit_status_forward_notify:'断网通知（需开启短信转发）',cell_tip:'锁定基站可能影响信号稳定性，请确认 PCI 与频率。'};
      const copy=dataCopy[element.dataset.i18n]||settingsCopy[element.dataset.i18n];if(copy&&element.textContent!==copy)element.textContent=copy;
      for(const attr of ['title','placeholder','aria-label']){
        if(element.hasAttribute(attr)){const before=element.getAttribute(attr),after=cleanChrome(before);if(before!==after)element.setAttribute(attr,after);}
      }
      if(element.matches('#CONN_CLIENT_LIST .card-item'))decorateClient(element);
      if(element.matches('.band-lock-container input[type=checkbox]')&&!element.closest('.Switch')){const row=element.closest('tr'),band=row?.querySelector('td:nth-child(2)')?.textContent.trim();element.setAttribute('aria-label',band?`选择 ${band} 频段`:'全选频段');if(!element.closest('label')){const label=document.createElement('label');label.className='f50-band-check';element.before(label);label.append(element);}}
      if(element.closest(protectedContent))return;
      if(element.matches('.Switch')){
        const input=element.querySelector('input[type=checkbox]');
        const switchNames={collapseBtn_menu:'展开功能菜单',collapse_dhcp_switch:'DHCP 服务',collapse_lkband_btn:'显示频段设置',collapse_lkcell_btn:'显示基站设置',collapse_smsforward_btn:'自动转发',collapse_smsforward_power_status_btn:'电源状态通知',collapse_device_mon_btn:'显示设备监控',collapse_status_btn:'显示状态详情',collapse_ttyd_btn:'显示终端'};
        const name=switchNames[element.parentElement.id]||element.querySelector('.text')?.textContent.trim();
        if(input){input.setAttribute('role','switch');if(name&&input.getAttribute('aria-label')!==name)input.setAttribute('aria-label',name);}
      }
      if(element.matches('.toastkano')&&element.querySelector('button,input,textarea,select')){
        element.classList.add('f50-action-dialog');element.dataset.f50Layer='dialog';
        if(!element.dataset.f50DialogLayout){
          element.dataset.f50DialogLayout='true';
          for(const footer of element.querySelectorAll('div,.btn')){
            const buttons=Array.from(footer.children).filter(child=>child.matches('button'));
            if(buttons.length>=2&&buttons.length===footer.children.length){
              footer.classList.add('f50-dialog-actions');
              const cancel=buttons.find(button=>button.dataset.i18n==='cancel_btn'||/^(取消|Cancel)$/.test(button.textContent.trim()));
              if(cancel)footer.prepend(cancel);
            }
          }
          const heading=element.querySelector('.title');
          const smsRule=element.id==='kano_sms_forward_rules_toast',smsAlias=element.id==='kano_nickname_set_toast',smsCompose=element.id==='kano_sms_body';
          if(smsRule||smsAlias||smsCompose){
            heading?.removeAttribute('data-i18n');if(heading)heading.textContent=smsRule?'转发过滤':smsAlias?'设备别名':'短信内容';
            const note=document.createElement('p');note.className='f50-dialog-description';note.textContent=smsRule?'每行填写一个号码或关键词，匹配的短信不会转发。':smsAlias?'为转发消息中的设备设置一个易辨认的名称。':'填写此任务要发送的号码与短信内容。';heading?.after(note);
            for(const [id,label,placeholder] of smsRule?[['kano_sms_forward_rules_phone_list','排除号码','例如：10086'],['kano_sms_forward_rules_keywords_list','排除关键词','例如：推广']]:smsAlias?[['kano_nickname_set_phone_list','别名',null]]:[['KANO_SMS_PHONE_NUMBER_FORWARD','收件人号码','请输入号码'],['KANO_SMS_TEXT_FORWARD','短信内容','请输入短信内容']]){
              const input=element.querySelector('#'+id);if(!input)continue;
              const previous=input.previousElementSibling;
              if(previous?.matches('.title')){previous.removeAttribute('data-i18n');previous.textContent=label;previous.classList.add('f50-dialog-field-label');}
              else{const fieldLabel=document.createElement('label');fieldLabel.className='f50-dialog-field-label';fieldLabel.htmlFor=id;fieldLabel.textContent=label;input.before(fieldLabel);}
              input.setAttribute('aria-label',label);input.removeAttribute('data-i18n-placeholder');if(placeholder)input.placeholder=placeholder;
              if(input.tagName==='TEXTAREA')input.rows=smsRule?3:4;
              if(id==='KANO_SMS_PHONE_NUMBER_FORWARD'){input.type='tel';input.inputMode='tel';}
            }
            const confirm=element.querySelector('.f50-dialog-actions button:not([data-i18n=cancel_btn])');if(confirm){confirm.removeAttribute('data-i18n');confirm.textContent=smsCompose?'确定':'保存';confirm.classList.add('f50-primary');}
          }
        }
      }
      if(element.matches('.modal,dialog,.f50-action-dialog')){
        const id=element.classList.contains('modal')&&element.parentElement.classList.contains('mask')?element.parentElement.id:element.id;
        if(!element.classList.contains('f50-action-dialog'))element.classList.add(compactIds.has(id)?'f50-compact-dialog':'f50-detail');
        if(wideIds.has(id))element.classList.add('f50-wide-detail');
        element.setAttribute('role','dialog');element.setAttribute('aria-modal','true');
        element.tabIndex=-1;
        const heading=(element.classList.contains('f50-login-dialog')?element.querySelector('[data-i18n=token_title]'):null)||element.querySelector(':scope>.title,:scope>h3,:scope>div>.title');
        if(heading){if(!heading.id)heading.id='f50-dialog-title-'+(++modalSerial);element.setAttribute('aria-labelledby',heading.id);}
        if(element.dataset.f50Inline){element.setAttribute('role','region');element.removeAttribute('aria-modal');}
      }
      if(element.matches('[data-i18n]')&&['scheduled_tasks_info','plugin_modal_tip','plugin_store_tip','plugin_store_tip1','plugin_store_tip2','cell_tip1','data_manage_tips','data_manage_tips1','status_modal_tip','apn_title_info'].includes(element.dataset.i18n))element.classList.add('f50-redundant-hint');
      if(element.matches('button')&&element.closest('[data-f50-inline]')&&/^(关闭|Close)$/.test(element.textContent.trim()))element.classList.add('f50-inline-close');
      if(element.matches('.toastkano')){
        const text=cleanChrome(element.textContent).trim();
        // Plain confirmations become a short status beside the control that triggered them.
        const success=text.replace(/[~～。.，,\s]+$/,'');
        if(/^(密码错误|登录失败，请检查密码)/.test(text))revealLoginMethod();
        // Sign-in progress belongs on the button; any other reply ends the busy state.
        const signingIn=$('#tokenModal')?.style.display!=='none';
        if(signingIn&&/^(验证中|网络较慢，请稍等)/.test(text)){element.classList.add('f50-quiet-toast');setLoginBusy(true);}
        else if(signingIn&&/失败|错误|请输入|锁定|超时|请先登录|请登录/.test(text)){element.classList.add('f50-quiet-toast');showLoginError(text);setLoginBusy(false);}
        // Native copy loses its "!" during cleanup; restate follow-up notices as complete sentences.
        const followUp={'操作成功重启生效':'已保存，重启设备后生效','设置成功 设备正在重启':'已保存，设备正在重启','操作成功，请重新连接Wi-Fi':'已保存，请重新连接 Wi-Fi'}[success];
        if(followUp&&element.textContent.trim()!==followUp)element.textContent=followUp;
        if(noiseToasts.test(success))element.classList.add('f50-quiet-toast');
        else if(confirmations.test(success)){showActionFeedback(success);element.classList.add('f50-quiet-toast');}
      }
      if(element.matches('.toastkano:not(.f50-action-dialog)')){
        if(!element.dataset.f50Tone){const color=element.style.color,text=element.textContent;
          element.dataset.f50Tone=/red/.test(color)||/失败|错误|无效|无法|error|failed/i.test(text)?'error':/green/.test(color)||/成功|已保存|success/i.test(text)?'success':/orange|yellow/.test(color)||/请输入|不能为空|请先|invalid/i.test(text)?'warning':'info';}
        element.dataset.f50Layer='notice';element.setAttribute('role',['warning','error'].includes(element.dataset.f50Tone)?'alert':'status');element.setAttribute('aria-atomic','true');
      }
      if(element.matches('button')&&(!element.closest('#f50-shell')||element.closest('[data-f50-inline]'))){
        const key=element.getAttribute('data-i18n')||'';
        element.classList.toggle('f50-primary',element.getAttribute('type')==='submit'||element.dataset.f50Primary==='true'||!!key&&/(submit|confirm|save|send|exec)_?(btn)?$/.test(key));
        element.classList.toggle('f50-danger',element.dataset.f50Danger==='true'||/(delete|remove|clear_all)/.test(key));
      }
      if(element.matches('#STATUS strong')&&!element.classList.contains('f50-field')){
        const first=element.firstChild;
        if(first?.nodeType===Node.TEXT_NODE){
          const pos=first.textContent.search(/[:：]/);
          if(pos>=0){
            const label=document.createElement('span');label.className='f50-field-label';label.textContent=cleanChrome(first.textContent.slice(0,pos));
            const value=document.createElement('span');value.className='f50-field-value';
            first.textContent=first.textContent.slice(pos+1);while(element.firstChild)value.appendChild(element.firstChild);
            const name=label.textContent.trim();
            const unit=/^[45]G\s*接收功率$|^[45]G\s*RSSI$/i.test(name)?'dBm':/^[45]G\s*(SINR|RSRQ)$/i.test(name)?'dB':'';
            if(unit){const suffix=document.createElement('small');suffix.className='f50-field-unit';suffix.textContent=unit;value.append(suffix);}
            element.append(label,value);element.classList.add('f50-field');value.title=value.textContent.trim();if(['QCI','连接时长','当日流量','当前网速','开机时长','IPv6地址','版本号','内部存储','SD卡'].includes(name))element.dataset.f50Wide='true';
            if(name==='IPv6地址')element.dataset.f50Long='true';
          }
        }
      }
      if(element.matches('button[data-action="REBOOT"],button[data-action="SHUTDOWN"]'))element.classList.add('f50-danger');
      if(element.matches('#sortable-list>li>span,.plugin-list .delete-btn')&&!element.dataset.f50Keyboard){
        element.dataset.f50Keyboard='true';element.tabIndex=0;element.setAttribute('role','button');
        if(element.classList.contains('delete-btn'))element.setAttribute('aria-label','删除插件');
        else element.title='编辑插件';
        element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();element.click();}});
      }
      for(const attr of ['title','placeholder','aria-label']){
        if(element.hasAttribute(attr)){const before=element.getAttribute(attr),after=cleanChrome(before);if(before!==after)element.setAttribute(attr,after);}
      }
    };
    const polishChrome=root=>{
      if(root.nodeType===Node.TEXT_NODE){if(!root.parentElement?.closest(protectedContent)){if(root.parentElement?.hasAttribute('data-i18n'))decorateElement(root.parentElement);if(root.isConnected){const before=root.data,after=cleanChrome(before);if(before!==after)root.data=after;}}return;}
      if(root.nodeType!==Node.ELEMENT_NODE||root.closest(protectedContent))return;
      decorateElement(root);
      // Snapshot the nodes before decoration, since field formatting reparents children.
      const elements=Array.from(root.querySelectorAll('*'));elements.forEach(decorateElement);
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:node=>node.parentElement?.closest(protectedContent)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
      let node;while((node=walker.nextNode())){const before=node.data,after=cleanChrome(before);if(before!==after)node.data=after;}
    };
    polishChrome(document.body);
    polishStatusSections();
    let activeDialog=null,returnFocus=null;
    const syncDialog=()=>{
      syncInlineViews();
      const visible=Array.from(document.querySelectorAll('.modal,dialog[open],.f50-action-dialog')).filter(m=>!m.dataset.f50Inline&&m.getClientRects().length&&getComputedStyle(m).visibility!=='hidden');
      const top=visible[visible.length-1]||null;
      if(top===activeDialog)return;
      if(top){if(!activeDialog)returnFocus=document.activeElement;activeDialog=top;shell.inert=true;top.focus({preventScroll:true});}
      else{activeDialog=null;shell.inert=false;if(returnFocus?.isConnected&&returnFocus.getClientRects().length)returnFocus.focus({preventScroll:true});returnFocus=null;}
    };
    const dialogKeys=event=>{
      if(!activeDialog)return;
      if(event.key==='Escape'){
        const close=Array.from(activeDialog.querySelectorAll('button')).find(b=>/^(关闭|取消|Close|Cancel)$/.test(b.textContent.trim())&&b.getClientRects().length);
        if(close){event.preventDefault();close.click();}return;
      }
      if(event.key!=='Tab')return;
      const controls=Array.from(activeDialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')).filter(n=>!n.disabled&&n.getClientRects().length);
      if(!controls.length){event.preventDefault();return;}
      const first=controls[0],last=controls[controls.length-1];
      if(event.shiftKey&&(document.activeElement===first||document.activeElement===activeDialog)){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&(document.activeElement===last||document.activeElement===activeDialog)){event.preventDefault();first.focus();}
    };
    document.addEventListener('keydown',dialogKeys);syncDialog();
    const pending=new Set();let polishFrame=0,dialogDirty=false;
    const chromeObserver=new MutationObserver(records=>{
      for(const record of records){
        // Status has already been formatted synchronously by its dedicated observer.
        if((record.target.nodeType===1?record.target:record.target.parentElement)?.closest('#STATUS'))continue;
        if(record.type==='childList'){
          record.addedNodes.forEach(node=>pending.add(node));
          if([...record.addedNodes,...record.removedNodes].some(node=>node.nodeType===1&&(node.matches('.modal,dialog,.toastkano')||node.querySelector('.modal,dialog,.toastkano'))))dialogDirty=true;
        }
        else if(record.type==='attributes'&&['style','open'].includes(record.attributeName)){if(record.target.matches('.modal,.mask,dialog,.f50-action-dialog'))dialogDirty=true;}
        else pending.add(record.target);
      }
      
      if(!polishFrame)polishFrame=requestAnimationFrame(()=>{polishFrame=0;const roots=Array.from(pending);pending.clear();roots.filter(root=>root.isConnected).forEach(polishChrome);if(dialogDirty){dialogDirty=false;syncDialog();}});
    });
    chromeObserver.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','placeholder','aria-label','style','open']});
    if($('#STATUS li p'))latest=Date.now();render(true);
    requestAnimationFrame(revealPage);
    const timer=setInterval(()=>render(false),2000);
    window.addEventListener('pagehide',()=>{clearInterval(timer);statusObserver.disconnect();chromeObserver.disconnect();dictionary?._f50FieldObserver?.disconnect();[...speedObservers,...settingsObservers].forEach(observer=>observer.disconnect());cancelAnimationFrame(polishFrame);window.removeEventListener('resize',updateSidebar);document.removeEventListener('keydown',dialogKeys);chart?.destroy();},{once:true});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();

</script>
