import{_ as k,c as r,J as i,m as s,w as l,a,V as o,E as e,o as d}from"./chunks/framework.WH0rnJL5.js";const E=JSON.parse(`{"title":"申请 Let's Encrypt 的 SSL 证书","description":"","frontmatter":{"tags":["数学/密码学/证书/TLS/SSL","数学/密码学/证书/TLS/HTTPS","数学/密码学/证书/TLS/域名证书","数学/密码学/证书/LetsEncrypt","命令行/openssl","操作系统/Debian","操作系统/CentOS","操作系统/Debian/Debian-11","操作系统/CentOS/CentOS-8","操作系统/CentOS/CentOS-7"]},"headers":[],"relativePath":"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/HTTPS/申请 Lets Encrypt 的 SSL 证书.md","filePath":"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/HTTPS/申请 Lets Encrypt 的 SSL 证书.md"}`),c={name:"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/HTTPS/申请 Lets Encrypt 的 SSL 证书.md"},g=s("h1",{id:"申请-let-s-encrypt-的-ssl-证书",tabindex:"-1"},[a("申请 Let's Encrypt 的 SSL 证书 "),s("a",{class:"header-anchor",href:"#申请-let-s-encrypt-的-ssl-证书","aria-label":`Permalink to "申请 Let's Encrypt 的 SSL 证书"`},"​")],-1),y=o(`<h2 id="centos-7-8" tabindex="-1">CentOS 7/8 <a class="header-anchor" href="#centos-7-8" aria-label="Permalink to &quot;CentOS 7/8&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dnf install certbot python3-certbot-dns-cloudflare</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;dns_cloudflare_email = &lt;Cloudflare 电子邮箱&gt;\\ndns_cloudflare_api_key = &lt;API Key&gt;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> certbot certonly --cert-name </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">证书文件名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare-credentials</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.secrets/certbot/cloudflare.ini --server https://acme-v02.api.letsencrypt.org/directory -d &quot;&lt;域名&gt;&quot;</span></span></code></pre></div><h2 id="debian-11" tabindex="-1">Debian 11 <a class="header-anchor" href="#debian-11" aria-label="Permalink to &quot;Debian 11&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt install certbot</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt -y install python3-certbot-dns-cloudflare</span></span></code></pre></div><h3 id="使用-global-key" tabindex="-1">使用 Global Key <a class="header-anchor" href="#使用-global-key" aria-label="Permalink to &quot;使用 Global Key&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;dns_cloudflare_email = \\ndns_cloudflare_api_key = &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dns_cloudflare_email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Cloudflare 电子邮</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">箱</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dns_cloudflare_api_key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">API Ke</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> certbot certonly --cert-name </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">证书文件名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare-credentials</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.secrets/certbot/cloudflare.ini --server https://acme-v02.api.letsencrypt.org/directory -d &quot;&lt;域名&gt;&quot;</span></span></code></pre></div><h3 id="使用限制的-api-令牌" tabindex="-1">使用限制的 API 令牌 <a class="header-anchor" href="#使用限制的-api-令牌" aria-label="Permalink to &quot;使用限制的 API 令牌&quot;">​</a></h3><p>API 令牌需要 DNS 编辑权限</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt install python3-pip</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pip3 install cloudflare</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;dns_cloudflare_api_token = &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dns_cloudflare_api_token</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">API Toke</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .secrets/certbot/cloudflare.ini</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> certbot certonly --cert-name </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">证书文件名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dns-cloudflare-credentials</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.secrets/certbot/cloudflare.ini --server https://acme-v02.api.letsencrypt.org/directory -d &quot;&lt;域名&gt;&quot;</span></span></code></pre></div><h2 id="延伸阅读" tabindex="-1">延伸阅读 <a class="header-anchor" href="#延伸阅读" aria-label="Permalink to &quot;延伸阅读&quot;">​</a></h2>`,22),C=s("h2",{id:"贡献者",tabindex:"-1"},[a("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),F=s("h2",{id:"文件历史",tabindex:"-1"},[a("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function u(b,A,v,m,B,_){const n=e("NolebasePageProperties"),t=e("VPNolebaseInlineLinkPreview"),h=e("NolebaseGitContributors"),p=e("NolebaseGitChangelog");return d(),r("div",null,[g,i(n),y,s("p",null,[i(t,{href:"https://certbot.eff.org/instructions?ws=nginx&os=centosrhel8",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("https://certbot.eff.org/instructions?ws=nginx&os=centosrhel8")]),_:1}),i(t,{href:"https://snapcraft.io/docs/installing-snap-on-centos",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("https://snapcraft.io/docs/installing-snap-on-centos")]),_:1})]),C,i(h),F,i(p)])}const D=k(c,[["render",u]]);export{E as __pageData,D as default};
