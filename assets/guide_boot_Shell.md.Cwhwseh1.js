import{_ as h,c as d,j as t,a,G as s,w as e,ax as r,B as p,o as g}from"./chunks/framework.BdeBNCXE.js";const Q=JSON.parse('{"title":"Shell","description":"","frontmatter":{},"headers":[],"relativePath":"guide/boot/Shell.md","filePath":"guide/boot/Shell.md","lastUpdated":1735375732000}'),u={name:"guide/boot/Shell.md"},C={id:"napcat-shell-win手动启动教程",tabindex:"-1"},F={id:"napcat-win-绿色版本",tabindex:"-1"},m={id:"napcat-installer-linux一键使用脚本-支持ubuntu-20-debian-10-centos9",tabindex:"-1"},y={id:"napcat-docker-linux容器化部署",tabindex:"-1"},b={id:"napcat-docker-installer-linux容器-第三方",tabindex:"-1"},x={id:"napcat-macos-macos安装工具",tabindex:"-1"},N={id:"napcat-termux-安卓termux部署",tabindex:"-1"},f={id:"napcat-1panel-1panel插件部署",tabindex:"-1"},B={id:"napcat-railway-railway部署",tabindex:"-1"},E={id:"napcat-nix-nix部署",tabindex:"-1"},w={id:"napcat-win-installer-win专用安装器",tabindex:"-1"};function v(P,i,I,S,W,q){const k=p("NolebasePageProperties"),l=p("Badge"),n=p("VPNolebaseInlineLinkPreview"),o=p("NolebaseGitChangelog");return g(),d("div",null,[i[56]||(i[56]=t("h1",{id:"shell",tabindex:"-1"},[a("Shell "),t("a",{class:"header-anchor",href:"#shell","aria-label":'Permalink to "Shell"'},"​")],-1)),s(k),t("h2",C,[i[0]||(i[0]=a("NapCat.Shell - Win手动启动教程 ")),s(l,{type:"tip",text:"recommend"}),i[1]||(i[1]=a()),i[2]||(i[2]=t("a",{class:"header-anchor",href:"#napcat-shell-win手动启动教程","aria-label":'Permalink to "NapCat.Shell - Win手动启动教程 <Badge type="tip" text="recommend" />"'},"​",-1))]),t("ol",null,[t("li",null,[i[4]||(i[4]=a("前往 ")),s(n,{href:"https://github.com/NapNeko/NapCatQQ/releases",target:"_blank",rel:"noreferrer"},{default:e(()=>i[3]||(i[3]=[a("NapCatQQ 的 release 页面")])),_:1})]),i[5]||(i[5]=t("li",null,"下载NapCat.Shell.zip解压",-1)),i[6]||(i[6]=t("li",null,"安装完成 双击目录下launcher.bat即可启动 如果是win10 则使用launcher-win10.bat",-1))]),i[57]||(i[57]=t("p",null,[a("注意 如果需要快速登录 将 "),t("code",null,"QQ"),a(" 号传入第二个参数即可")],-1)),i[58]||(i[58]=t("p",null,[a("Win11: "),t("code",null,"launcher.bat 123456"),a(" Win10: "),t("code",null,"launcher-win10.bat 123456")],-1)),t("h2",F,[i[7]||(i[7]=a("NapCat.Win.绿色版本 ")),s(l,{type:"tip",text:"recommend"}),i[8]||(i[8]=a()),i[9]||(i[9]=t("a",{class:"header-anchor",href:"#napcat-win-绿色版本","aria-label":'Permalink to "NapCat.Win.绿色版本 <Badge type="tip" text="recommend" />"'},"​",-1))]),i[59]||(i[59]=t("p",null,[a("特殊说明: 绿色版仅适用 "),t("code",null,"Windows.AMD64"),a(" 无需安装QQ 已内置")],-1)),i[60]||(i[60]=t("p",null,"前往Release 下载无头绿色版本 然后启动Bat 即可",-1)),i[61]||(i[61]=t("p",null,[a("如果需要快速启动 编辑bat "),t("code",null,"NapCatWinBootMain.exe 10001")],-1)),t("h2",m,[i[10]||(i[10]=a("NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9) ")),s(l,{type:"tip",text:"recommend"}),i[11]||(i[11]=a()),i[12]||(i[12]=t("a",{class:"header-anchor",href:"#napcat-installer-linux一键使用脚本-支持ubuntu-20-debian-10-centos9","aria-label":'Permalink to "NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9) <Badge type="tip" text="recommend" />"'},"​",-1))]),i[62]||(i[62]=r('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span></span></code></pre></div><details><summary>命令选项(高级用法)</summary><ol start="0"><li><p>--tui: 使用tui可视化交互安装</p></li><li><p>--docker [y/n]: --docker y 为使用docker安装反之为shell安装</p></li><li><p>--qq &quot;123456789&quot;: 传入docker安装时的QQ号</p></li><li><p>--mode [ws|reverse_ws|reverse_http]: 传入docker安装时的运行模式</p></li><li><p>--confirm: 传入docker安装时的是否确认执行安装</p></li><li><p>--proxy [0|1|2|3|4|5|6]: 传入代理, 0为不使用代理, 1为使用内置的第一个,不支持自定义, docker安装可选0-7, shell安装可选0-5</p></li><li><p>--cli [y/n]: shell安装时是否安装cli</p></li><li><p>--force: 传入则执行shell强制重装</p></li></ol><p><strong>使用示例:</strong></p><ol><li><p>使用tui可视化交互安装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tui</span></span></code></pre></div></li><li><p>运行docker安装并传入 qq&quot;123456789&quot; 模式ws 使用第一个代理 直接安装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --qq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123456789</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ws</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span></code></pre></div></li><li><p>运行shell安装并传入 不安装cli 不使用代理 强制重装:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div></li></ol></details>',2)),t("p",null,[i[14]||(i[14]=a("仓库地址: ")),s(n,{href:"https://github.com/NapNeko/NapCat-Installer",target:"_blank",rel:"noreferrer"},{default:e(()=>i[13]||(i[13]=[a("NapCat.installer")])),_:1})]),t("h2",y,[i[15]||(i[15]=a("NapCat.Docker - Linux容器化部署 ")),s(l,{type:"tip",text:"recommend"}),i[16]||(i[16]=a()),i[17]||(i[17]=t("a",{class:"header-anchor",href:"#napcat-docker-linux容器化部署","aria-label":'Permalink to "NapCat.Docker - Linux容器化部署 <Badge type="tip" text="recommend" />"'},"​",-1))]),t("p",null,[i[19]||(i[19]=a("仓库地址: ")),s(n,{href:"https://github.com/NapNeko/NapCat-Docker",target:"_blank",rel:"noreferrer"},{default:e(()=>i[18]||(i[18]=[a("NapCat.Docker")])),_:1})]),t("h2",b,[i[20]||(i[20]=a("NapCat.Docker.Installer - Linux容器 第三方 ")),s(l,{type:"tip",text:"recommend"}),i[21]||(i[21]=a()),i[22]||(i[22]=t("a",{class:"header-anchor",href:"#napcat-docker-installer-linux容器-第三方","aria-label":'Permalink to "NapCat.Docker.Installer - Linux容器 第三方 <Badge type="tip" text="recommend" />"'},"​",-1))]),i[63]||(i[63]=t("p",null,[a("此为 "),t("strong",null,"社区作品"),a(" 可能会遇到一些问题，欢迎反馈。")],-1)),t("p",null,[i[24]||(i[24]=a("仓库地址: ")),s(n,{href:"https://github.com/Fahaxikiii/napcat-scripts",target:"_blank",rel:"noreferrer"},{default:e(()=>i[23]||(i[23]=[a("NapCat.Docker.Installer")])),_:1})]),t("h2",x,[i[25]||(i[25]=a("NapCat.MacOs - MacOs安装工具 ")),s(l,{type:"tip",text:"recommend"}),i[26]||(i[26]=a()),i[27]||(i[27]=t("a",{class:"header-anchor",href:"#napcat-macos-macos安装工具","aria-label":'Permalink to "NapCat.MacOs - MacOs安装工具 <Badge type="tip" text="recommend" />"'},"​",-1))]),t("p",null,[s(n,{href:"https://github.com/NapNeko/NapCat-Mac-Installer/releases/",target:"_blank",rel:"noreferrer"},{default:e(()=>i[28]||(i[28]=[a("前往下载")])),_:1})]),i[64]||(i[64]=t("p",null,"需要 macOS 12.0 或以上系统，支持下载和更新 NapCatQQ",-1)),i[65]||(i[65]=t("p",null,"由于权限问题，补丁过程需要手动替换 package.json，请注意备份原文件～",-1)),t("h2",N,[i[29]||(i[29]=a("NapCat.Termux - 安卓Termux部署 ")),s(l,{type:"tip",text:"recommend"}),i[30]||(i[30]=a()),i[31]||(i[31]=t("a",{class:"header-anchor",href:"#napcat-termux-安卓termux部署","aria-label":'Permalink to "NapCat.Termux - 安卓Termux部署 <Badge type="tip" text="recommend" />"'},"​",-1))]),i[66]||(i[66]=r('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.termux.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.termux.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> napcat.termux.sh</span></span></code></pre></div>',1)),t("p",null,[i[33]||(i[33]=a("仓库地址: ")),s(n,{href:"https://github.com/NapNeko/NapCat-Installer",target:"_blank",rel:"noreferrer"},{default:e(()=>i[32]||(i[32]=[a("NapCat.installer")])),_:1})]),t("h2",f,[i[34]||(i[34]=a("NapCat.1Panel - 1Panel插件部署 ")),s(l,{type:"tip",text:"community"}),i[35]||(i[35]=a()),i[36]||(i[36]=t("a",{class:"header-anchor",href:"#napcat-1panel-1panel插件部署","aria-label":'Permalink to "NapCat.1Panel - 1Panel插件部署 <Badge type="tip" text="community" />"'},"​",-1))]),i[67]||(i[67]=t("p",null,[a("此为 "),t("strong",null,"社区作品"),a(" 可能会遇到一些问题，欢迎反馈。")],-1)),t("p",null,[i[38]||(i[38]=a("仓库地址: ")),s(n,{href:"https://github.com/Fahaxikiii/napcat-1panel",target:"_blank",rel:"noreferrer"},{default:e(()=>i[37]||(i[37]=[a("NapCat.1Panel")])),_:1})]),t("h2",B,[i[39]||(i[39]=a("NapCat.Railway - Railway部署 ")),s(l,{type:"tip",text:"community"}),i[40]||(i[40]=a()),i[41]||(i[41]=t("a",{class:"header-anchor",href:"#napcat-railway-railway部署","aria-label":'Permalink to "NapCat.Railway - Railway部署 <Badge type="tip" text="community" />"'},"​",-1))]),i[68]||(i[68]=t("p",null,[a("此为 "),t("strong",null,"社区作品"),a(" 可能会遇到一些问题，欢迎反馈。")],-1)),t("p",null,[s(n,{href:"https://railway.app/template/aRUNRZ?referralCode=Ns2Kracy",target:"_blank",rel:"noreferrer"},{default:e(()=>i[42]||(i[42]=[t("img",{src:"https://railway.app/button.svg",alt:"Deploy on Railway"},null,-1)])),_:1})]),t("h2",E,[i[43]||(i[43]=a("NapCat.Nix - Nix部署 ")),s(l,{type:"tip",text:"community"}),i[44]||(i[44]=a()),i[45]||(i[45]=t("a",{class:"header-anchor",href:"#napcat-nix-nix部署","aria-label":'Permalink to "NapCat.Nix - Nix部署 <Badge type="tip" text="community" />"'},"​",-1))]),i[69]||(i[69]=t("p",null,[a("此为 "),t("strong",null,"社区作品"),a(" 可能会遇到一些问题，欢迎反馈。")],-1)),t("p",null,[i[47]||(i[47]=a("仓库地址: ")),s(n,{href:"https://github.com/initialencounter/napcat.nix",target:"_blank",rel:"noreferrer"},{default:e(()=>i[46]||(i[46]=[a("NapCat.Nix")])),_:1})]),t("h2",w,[i[48]||(i[48]=a("NapCat.Win.Installer - Win专用安装器 ")),s(l,{type:"warning",text:"dont use"}),i[49]||(i[49]=a()),i[50]||(i[50]=t("a",{class:"header-anchor",href:"#napcat-win-installer-win专用安装器","aria-label":'Permalink to "NapCat.Win.Installer - Win专用安装器 <Badge type="warning" text="dont use" />"'},"​",-1))]),i[70]||(i[70]=t("p",null,[t("strong",null,"不要用某人懒了没更新")],-1)),t("p",null,[i[52]||(i[52]=a("仓库地址: ")),s(n,{href:"https://github.com/NapNeko/NapCat-Win-Installer",target:"_blank",rel:"noreferrer"},{default:e(()=>i[51]||(i[51]=[a("仓库地址")])),_:1})]),t("p",null,[i[54]||(i[54]=a("安装成功后需要快速登陆同 ")),s(n,{href:"#napcatshell---win手动启动教程"},{default:e(()=>i[53]||(i[53]=[a("NapCat.shell")])),_:1}),i[55]||(i[55]=a(" 方法一 一样"))]),s(o)])}const L=h(u,[["render",v]]);export{Q as __pageData,L as default};
