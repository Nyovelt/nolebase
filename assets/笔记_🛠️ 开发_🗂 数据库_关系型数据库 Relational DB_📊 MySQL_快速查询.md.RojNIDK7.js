import{_ as h,c as p,J as a,m as s,a as e,V as o,o as r,E as i}from"./chunks/framework.WH0rnJL5.js";const u=JSON.parse('{"title":"快速查询","description":"","frontmatter":{"tags":["开发/数据/数据库","计算机/数据库/mysql","开发/语言/SQL","开发/代码/代码片段"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/📊 MySQL/快速查询.md","filePath":"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/📊 MySQL/快速查询.md"}'),k={name:"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/📊 MySQL/快速查询.md"},d=s("h1",{id:"快速查询",tabindex:"-1"},[e("快速查询 "),s("a",{class:"header-anchor",href:"#快速查询","aria-label":'Permalink to "快速查询"'},"​")],-1),c=o(`<h4 id="查找某个字段的重复项" tabindex="-1">查找某个字段的重复项 <a class="header-anchor" href="#查找某个字段的重复项" aria-label="Permalink to &quot;查找某个字段的重复项&quot;">​</a></h4><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    重复字段,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> count</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">GROUP BY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    重复字段</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">HAVING</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,3),_=s("h2",{id:"文件历史",tabindex:"-1"},[e("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function B(g,C,y,D,A,m){const n=i("NolebasePageProperties"),t=i("NolebaseGitContributors"),l=i("NolebaseGitChangelog");return r(),p("div",null,[d,a(n),c,a(t),_,a(l)])}const N=h(k,[["render",B]]);export{u as __pageData,N as default};
