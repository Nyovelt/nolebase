import{_ as n,c as h,J as s,V as p,m as i,a as o,o as d,E as a}from"./chunks/framework.WH0rnJL5.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{"tags":["计算机/操作系统/Linux","计算机/网络","开发/故障排查"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🕸 网络/一般情况下的 Linux 网络故障排查.md","filePath":"笔记/🛠️ 开发/🕸 网络/一般情况下的 Linux 网络故障排查.md"}'),k={name:"笔记/🛠️ 开发/🕸 网络/一般情况下的 Linux 网络故障排查.md"},r=p('<h2 id="icmp-包检查" tabindex="-1">ICMP 包检查 <a class="header-anchor" href="#icmp-包检查" aria-label="Permalink to &quot;ICMP 包检查&quot;">​</a></h2><h3 id="是否能连到主路由" tabindex="-1">是否能连到主路由？ <a class="header-anchor" href="#是否能连到主路由" aria-label="Permalink to &quot;是否能连到主路由？&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">主路</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">由</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.0.1</span></span></code></pre></div><h3 id="是否能解析域名并与互联网通信" tabindex="-1">是否能解析域名并与互联网通信？ <a class="header-anchor" href="#是否能解析域名并与互联网通信" aria-label="Permalink to &quot;是否能解析域名并与互联网通信？&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">互联网 域</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> baidu.com</span></span></code></pre></div><h3 id="是否能直连到某个互联网-ip" tabindex="-1">是否能直连到某个互联网 IP？ <a class="header-anchor" href="#是否能直连到某个互联网-ip" aria-label="Permalink to &quot;是否能直连到某个互联网 IP？&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">互联网 I</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8.8</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.8.8</span></span></code></pre></div><h3 id="如果在墙背后-是否能解析国际互联网上的域名并通信" tabindex="-1">如果在墙背后，是否能解析国际互联网上的域名并通信？ <a class="header-anchor" href="#如果在墙背后-是否能解析国际互联网上的域名并通信" aria-label="Permalink to &quot;如果在墙背后，是否能解析国际互联网上的域名并通信？&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">外网 互联网 域</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> google.com</span></span></code></pre></div><h3 id="如果在墙背后-是否能直接连接到某个国际互联网上的-ip" tabindex="-1">如果在墙背后，是否能直接连接到某个国际互联网上的 IP？ <a class="header-anchor" href="#如果在墙背后-是否能直接连接到某个国际互联网上的-ip" aria-label="Permalink to &quot;如果在墙背后，是否能直接连接到某个国际互联网上的 IP？&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">外网 互联网 I</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8.8</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.8.8</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',17),c=i("h2",{id:"文件历史",tabindex:"-1"},[o("文件历史 "),i("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function g(u,y,b,C,F,v){const e=a("NolebasePageProperties"),t=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return d(),h("div",null,[s(e),r,s(t),c,s(l)])}const m=n(k,[["render",g]]);export{_ as __pageData,m as default};
