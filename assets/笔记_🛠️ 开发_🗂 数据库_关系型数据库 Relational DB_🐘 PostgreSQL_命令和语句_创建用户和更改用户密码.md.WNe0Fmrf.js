import{_ as h,c as o,J as a,m as s,a as e,V as p,o as r,E as i}from"./chunks/framework.WH0rnJL5.js";const P=JSON.parse('{"title":"创建用户和更改用户密码","description":"","frontmatter":{"tags":["开发/数据/数据库","计算机/数据库/postgres","计算机/数据库/postgresql"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/🐘 PostgreSQL/命令和语句/创建用户和更改用户密码.md","filePath":"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/🐘 PostgreSQL/命令和语句/创建用户和更改用户密码.md"}'),k={name:"笔记/🛠️ 开发/🗂 数据库/关系型数据库 Relational DB/🐘 PostgreSQL/命令和语句/创建用户和更改用户密码.md"},d=s("h1",{id:"创建用户和更改用户密码",tabindex:"-1"},[e("创建用户和更改用户密码 "),s("a",{class:"header-anchor",href:"#创建用户和更改用户密码","aria-label":'Permalink to "创建用户和更改用户密码"'},"​")],-1),c=p('<p>创建用户</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> USER </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">用户</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> WITH</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ENCRYPTED</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> PASSWORD</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;&lt;密码&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>更改密码</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">用户</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> WITH</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ENCRYPTED</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> PASSWORD</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;&lt;密码&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',5),g=s("h2",{id:"文件历史",tabindex:"-1"},[e("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function _(D,C,A,B,y,m){const t=i("NolebasePageProperties"),n=i("NolebaseGitContributors"),l=i("NolebaseGitChangelog");return r(),o("div",null,[d,a(t),c,a(n),g,a(l)])}const u=h(k,[["render",_]]);export{P as __pageData,u as default};
