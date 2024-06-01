import{_ as h,c as k,J as i,m as s,a as e,w as r,V as p,E as a,o as d}from"./chunks/framework.afRX3mrX.js";const B=JSON.parse('{"title":"Install minikube on Ubuntu","description":"","frontmatter":{"tags":["DevOps","Ubuntu","Kubenetes"]},"headers":[],"relativePath":"Notes/Cookbooks/Cloud/Minikube on Ubuntu.md","filePath":"Notes/Cookbooks/Cloud/Minikube on Ubuntu.md"}'),u={name:"Notes/Cookbooks/Cloud/Minikube on Ubuntu.md"},c=s("h1",{id:"install-minikube-on-ubuntu",tabindex:"-1"},[e("Install minikube on Ubuntu "),s("a",{class:"header-anchor",href:"#install-minikube-on-ubuntu","aria-label":'Permalink to "Install minikube on Ubuntu"'},"​")],-1),b=p(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -LO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install minikube-linux-amd64 /usr/local/bin/minikube</span></span></code></pre></div><ol start="2"><li>Install Kubectl (If it said <code>error: no server found for cluster &quot;minikube&quot;</code>)</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> kubectl</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;minikube kubectl -p seattle -- &#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;alias kubectl=&#39;minikube kubectl -p seattle -- &#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.bashrc</span></span></code></pre></div><h2 id="useful-commands" tabindex="-1">Useful Commands <a class="header-anchor" href="#useful-commands" aria-label="Permalink to &quot;Useful Commands&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> get po -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">minikube</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start -p </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">cluster_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> usermod -aG docker </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$USER</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">newgrp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span></span></code></pre></div><h2 id="contributor" tabindex="-1">Contributor <a class="header-anchor" href="#contributor" aria-label="Permalink to &quot;Contributor&quot;">​</a></h2>`,6),g=s("h2",{id:"changelog",tabindex:"-1"},[e("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1);function m(C,_,y,F,f,v){const t=a("NolebasePageProperties"),n=a("VPNolebaseInlineLinkPreview"),l=a("NolebaseGitContributors"),o=a("NolebaseGitChangelog");return d(),k("div",null,[c,i(t),s("ol",null,[s("li",null,[e("Read "),i(n,{href:"https://minikube.sigs.k8s.io/docs/start/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("minikube start")]),_:1})])]),b,i(l),g,i(o)])}const N=h(u,[["render",m]]);export{B as __pageData,N as default};