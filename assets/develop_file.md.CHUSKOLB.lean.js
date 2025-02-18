import{_ as o,c as n,j as e,a as r,G as i,ax as d,B as l,o as p}from"./chunks/framework.BdeBNCXE.js";const _=JSON.parse('{"title":"NapCat对于文件的处理和上游限制","description":"","frontmatter":{},"headers":[],"relativePath":"develop/file.md","filePath":"develop/file.md","lastUpdated":1739871653000}'),h={name:"develop/file.md"};function c(g,a,u,f,k,b){const s=l("NolebasePageProperties"),t=l("NolebaseGitChangelog");return p(),n("div",null,[a[0]||(a[0]=e("h1",{id:"napcat对于文件的处理和上游限制",tabindex:"-1"},[r("NapCat对于文件的处理和上游限制 "),e("a",{class:"header-anchor",href:"#napcat对于文件的处理和上游限制","aria-label":'Permalink to "NapCat对于文件的处理和上游限制"'},"​")],-1)),i(s),a[1]||(a[1]=d(`<h2 id="docker与框架分离部署方案注意事项" tabindex="-1">Docker与框架分离部署方案注意事项 <a class="header-anchor" href="#docker与框架分离部署方案注意事项" aria-label="Permalink to &quot;Docker与框架分离部署方案注意事项&quot;">​</a></h2><p>文件系统存在隔离，需要对部分需要读取本地文件系统的方式进行支持性优化。</p><h2 id="通常方法获取直链和文件下载" tabindex="-1">通常方法获取直链和文件下载 <a class="header-anchor" href="#通常方法获取直链和文件下载" aria-label="Permalink to &quot;通常方法获取直链和文件下载&quot;">​</a></h2><h3 id="获取文件直链-raw" tabindex="-1">获取文件直链 (Raw) <a class="header-anchor" href="#获取文件直链-raw" aria-label="Permalink to &quot;获取文件直链 (Raw)&quot;">​</a></h3><p>通过以下端点获取文件直链：</p><ul><li><p><strong>群聊文件</strong>：<code>/get_group_file_url</code></p><ul><li>参数：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>file_id     字符串   必须</span></span>
<span class="line"><span>group       字符串   必须</span></span></code></pre></div></li></ul></li><li><p><strong>私聊文件</strong>：<code>/get_private_file_url</code></p><ul><li>参数：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>file_id     字符串   必须</span></span></code></pre></div></li></ul></li></ul><h3 id="下载到本地或者输出base64-raw" tabindex="-1">下载到本地或者输出base64 (Raw) <a class="header-anchor" href="#下载到本地或者输出base64-raw" aria-label="Permalink to &quot;下载到本地或者输出base64 (Raw)&quot;">​</a></h3><p>通过以下端点获取文件：</p><ul><li><strong>文件下载</strong>：<code>/get_file</code><ul><li>参数：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>file_id     字符串   可选 file_id 或 file 任意一个用于标记文件获取</span></span>
<span class="line"><span>file        字符串   可选 file_id 或 file 任意一个用于标记唯一文件获取</span></span></code></pre></div></li></ul></li></ul><h2 id="file-音频文件的处理" tabindex="-1">File: 音频文件的处理 <a class="header-anchor" href="#file-音频文件的处理" aria-label="Permalink to &quot;File: 音频文件的处理&quot;">​</a></h2><h3 id="重点问题" tabindex="-1">重点问题 <a class="header-anchor" href="#重点问题" aria-label="Permalink to &quot;重点问题&quot;">​</a></h3><p>在接收音频时，NapCat 通常需要将音视频文件以本地文件的形式传递，无法直接提供 URL。这是因为：</p><ul><li>NTQQ 内部只能调用下载接口到本地，不能获取 URL（NapCat 虽然有能力获取，但存在新问题）。</li><li>腾讯的音频文件为 silk 格式，必须使用 silk 和本地 ffmpeg 转码才能通用。</li><li>在发送时也需要 silk 进行编码。</li></ul><h3 id="napcat设计" tabindex="-1">NapCat设计 <a class="header-anchor" href="#napcat设计" aria-label="Permalink to &quot;NapCat设计&quot;">​</a></h3><ul><li><strong>接收时</strong>：接口请求后，NapCat 下载到本地，可选内置 silk/ffmpeg 进行转码，提供给外部 mp3 等通用格式。</li><li><strong>发送时</strong>：接口请求后，NapCat 下载到本地，内置 silk/ffmpeg 进行转码 silk 后并进行发送。</li></ul><h3 id="如何获取音频文件" tabindex="-1">如何获取音频文件 <a class="header-anchor" href="#如何获取音频文件" aria-label="Permalink to &quot;如何获取音频文件&quot;">​</a></h3><p>通过以下端点获取音频文件：</p><ul><li><strong>音频文件获取</strong>：<code>/get_record</code><ul><li>参数：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>file_id     字符串   可选 file_id 或 file 任意一个用于标记文件获取</span></span>
<span class="line"><span>file        字符串   可选 file_id 或 file 任意一个用于标记唯一文件获取</span></span>
<span class="line"><span>out_format  字符串   可选 mp3, amr, wma, m4a, spx, ogg, wav, flac</span></span></code></pre></div></li></ul></li></ul><h3 id="如何发送音频文件" tabindex="-1">如何发送音频文件 <a class="header-anchor" href="#如何发送音频文件" aria-label="Permalink to &quot;如何发送音频文件&quot;">​</a></h3><p>通过通常的方法发送音频文件，无需特别注意。</p><h2 id="file-视频文件的处理" tabindex="-1">File: 视频文件的处理 <a class="header-anchor" href="#file-视频文件的处理" aria-label="Permalink to &quot;File: 视频文件的处理&quot;">​</a></h2><h3 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h3><p>视频文件最大 100MB，超过此大小请通过群文件方式发送。</p><h2 id="file-图片文件的处理" tabindex="-1">File: 图片文件的处理 <a class="header-anchor" href="#file-图片文件的处理" aria-label="Permalink to &quot;File: 图片文件的处理&quot;">​</a></h2><h3 id="提示-1" tabindex="-1">提示 <a class="header-anchor" href="#提示-1" aria-label="Permalink to &quot;提示&quot;">​</a></h3><p>图片的链接具有约 2 小时的过期时间，当过期后会提示 <code>url expired</code>。</p><p>此时可以调用 <code>nc_get_rkey</code> 获取新 rkey 替换 rkey 使用，或者通过 <code>get_image</code>、<code>get_file</code>、<code>get_msg</code> 刷新获取新的 URL。</p>`,27)),i(t)])}const v=o(h,[["render",c]]);export{_ as __pageData,v as default};
