import{_ as n,c as l,J as s,V as r,m as e,a as h,o as p,E as a}from"./chunks/framework.WH0rnJL5.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"tags":["计算机/操作系统/Linux/命令行","命令行","命令行/终端","操作系统/macOS","操作系统/Linux","开源/软件/Clash","计算机/网络/代理/Clash","计算机/网络/VPN/Clash","软件/ClashX"]},"headers":[],"relativePath":"笔记/📟 终端/设置代理.md","filePath":"笔记/📟 终端/设置代理.md"}'),c={name:"笔记/📟 终端/设置代理.md"},d=r('<h2 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h2><p>限于 Linux 与开启了代理的机器在同一个<strong>局域网</strong>或者 Linux 作为<strong>子系统</strong>的情况。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ALL_PROXY</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http://&lt;地址&gt;:&lt;端口&gt;&quot;</span></span></code></pre></div><p>例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ALL_PROXY</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http://127.0.0.1:7890&quot;</span></span></code></pre></div><blockquote><p>可以在 Clash 中使用复制对应的<strong>端口和地址</strong>，然后开启 <strong>Allow LAN</strong> 允许局域网链接</p></blockquote><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',7),_=e("h2",{id:"文件历史",tabindex:"-1"},[h("文件历史 "),e("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function k(g,u,C,b,m,N){const t=a("NolebasePageProperties"),o=a("NolebaseGitContributors"),i=a("NolebaseGitChangelog");return p(),l("div",null,[s(t),d,s(o),_,s(i)])}const x=n(c,[["render",k]]);export{v as __pageData,x as default};
