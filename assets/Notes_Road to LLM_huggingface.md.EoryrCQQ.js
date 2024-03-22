import{_ as r,c,J as a,m as e,a as t,V as g,o as h,E as o}from"./chunks/framework.afRX3mrX.js";const q=JSON.parse('{"title":"huggingface","description":"","frontmatter":{"tags":["LLM","AI","huggingface","toolchain"]},"headers":[],"relativePath":"Notes/Road to LLM/huggingface.md","filePath":"Notes/Road to LLM/huggingface.md"}'),l={name:"Notes/Road to LLM/huggingface.md"},p=e("h1",{id:"huggingface",tabindex:"-1"},[t("huggingface "),e("a",{class:"header-anchor",href:"#huggingface","aria-label":'Permalink to "huggingface"'},"​")],-1),d=g(`<h2 id="what-is-huggingface" tabindex="-1">What is huggingface <a class="header-anchor" href="#what-is-huggingface" aria-label="Permalink to &quot;What is huggingface&quot;">​</a></h2><p>huggingface is a place to store models, datasets and other things. More like a github for machine learning peoples.</p><h2 id="compatible-apis" tabindex="-1">Compatible APIs <a class="header-anchor" href="#compatible-apis" aria-label="Permalink to &quot;Compatible APIs&quot;">​</a></h2><p>For example for a transformers model, anyone can load it with:</p><div class="language-python3 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python3</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>tokenizer = AutoTokenizer.from_pretrained(&quot;username/repo_name&quot;)</span></span>
<span class="line"><span>model = AutoModel.from_pretrained(&quot;username/repo_name&quot;)</span></span></code></pre></div><h2 id="contributor" tabindex="-1">Contributor <a class="header-anchor" href="#contributor" aria-label="Permalink to &quot;Contributor&quot;">​</a></h2>`,6),u=e("h2",{id:"changelog",tabindex:"-1"},[t("Changelog "),e("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1);function _(m,f,b,C,N,P){const n=o("NolebasePageProperties"),s=o("NolebaseGitContributors"),i=o("NolebaseGitChangelog");return h(),c("div",null,[p,a(n),d,a(s),u,a(i)])}const x=r(l,[["render",_]]);export{q as __pageData,x as default};