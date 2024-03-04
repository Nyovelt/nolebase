import{_ as o,c as h,J as s,m as a,a as t,V as p,o as c,E as e}from"./chunks/framework.WH0rnJL5.js";const f=JSON.parse('{"title":"查看已经占用的端口","description":"","frontmatter":{"tags":["命令行","计算机/网络"]},"headers":[],"relativePath":"笔记/📟 终端/查看已经占用的端口.md","filePath":"笔记/📟 终端/查看已经占用的端口.md"}'),r={name:"笔记/📟 终端/查看已经占用的端口.md"},d=a("h1",{id:"查看已经占用的端口",tabindex:"-1"},[t("查看已经占用的端口 "),a("a",{class:"header-anchor",href:"#查看已经占用的端口","aria-label":'Permalink to "查看已经占用的端口"'},"​")],-1),k=p('<h2 id="debian-ubuntu" tabindex="-1">Debian / Ubuntu <a class="header-anchor" href="#debian-ubuntu" aria-label="Permalink to &quot;Debian / Ubuntu&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -tnlp</span></span></code></pre></div><p>如果要看是哪些 PID 的话</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> netstat -tnlp</span></span></code></pre></div><p>如果没有安装的话</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt install net-tools</span></span></code></pre></div><h2 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h2><h3 id="查看-macos-上的-tcp-端口" tabindex="-1">查看 macOS 上的 TCP 端口 <a class="header-anchor" href="#查看-macos-上的-tcp-端口" aria-label="Permalink to &quot;查看 macOS 上的 TCP 端口&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">lsof</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -nP</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TCP -s TCP:LISTEN</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',10),_=a("h2",{id:"文件历史",tabindex:"-1"},[t("文件历史 "),a("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function u(b,g,m,C,v,P){const i=e("NolebasePageProperties"),n=e("NolebaseGitContributors"),l=e("NolebaseGitChangelog");return c(),h("div",null,[d,s(i),k,s(n),_,s(l)])}const F=o(r,[["render",u]]);export{f as __pageData,F as default};
