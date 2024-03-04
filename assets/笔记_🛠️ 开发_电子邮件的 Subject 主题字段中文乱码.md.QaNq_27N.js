import{_ as p,c as r,J as i,m as s,w as e,a,V as o,E as n,o as d}from"./chunks/framework.WH0rnJL5.js";const D=JSON.parse('{"title":"电子邮件的 Subject 主题字段中文乱码","description":"","frontmatter":{"tags":["开发/后端/SMTP","开发/语言/Golang","开发/后端/邮件","开发/后端/Email","编码/UTF-8","规范/RFC","计算机/网络/协议/邮件/Email"]},"headers":[],"relativePath":"笔记/🛠️ 开发/电子邮件的 Subject 主题字段中文乱码.md","filePath":"笔记/🛠️ 开发/电子邮件的 Subject 主题字段中文乱码.md"}'),g={name:"笔记/🛠️ 开发/电子邮件的 Subject 主题字段中文乱码.md"},c=s("h1",{id:"电子邮件的-subject-主题字段中文乱码",tabindex:"-1"},[a("电子邮件的 Subject 主题字段中文乱码 "),s("a",{class:"header-anchor",href:"#电子邮件的-subject-主题字段中文乱码","aria-label":'Permalink to "电子邮件的 Subject 主题字段中文乱码"'},"​")],-1),B=o(`<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2022-04-02</td><td>创建</td></tr></tbody></table><p>在 Golang 中我们可以使用下面的代码直接修复该问题：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 组合拼接邮件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Subject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;=?UTF-8?B?&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> base64</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">StdEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">EncodeToString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">subject</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;?=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span></code></pre></div><p>如果你更喜欢 <code>fmt.Sprint</code> 的使用方法，也可以用下面的这个：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 组合拼接邮件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Subject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;=?UTF-8?B?</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">?=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">base64</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">StdEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">EncodeToString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">subject</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)))</span></span></code></pre></div><h2 id="延伸阅读" tabindex="-1">延伸阅读 <a class="header-anchor" href="#延伸阅读" aria-label="Permalink to &quot;延伸阅读&quot;">​</a></h2>`,7),y=s("h2",{id:"贡献者",tabindex:"-1"},[a("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),u=s("h2",{id:"文件历史",tabindex:"-1"},[a("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function E(C,_,F,b,A,f){const h=n("NolebasePageProperties"),t=n("VPNolebaseInlineLinkPreview"),l=n("NolebaseGitContributors"),k=n("NolebaseGitChangelog");return d(),r("div",null,[c,i(h),B,s("p",null,[i(t,{href:"https://stackoverflow.com/questions/28932140/converting-utf-8-rfc-2047-to-a-regular-string-in-golang",target:"_blank",rel:"noreferrer"},{default:e(()=>[a('encoding - Converting "=?UTF 8?.." (RFC 2047) to a regular string in golang - Stack Overflow')]),_:1})]),s("p",null,[i(t,{href:"https://github.com/mattupstate/flask-mail/issues/126",target:"_blank",rel:"noreferrer"},{default:e(()=>[a('Non-ascii SUBJECT and FROM turns into " =?utf-8?b?" even when charset is set to iso-8859-2 · Issue #126 · mattupstate/flask-mail')]),_:1})]),s("p",null,[i(t,{href:"https://stackoverflow.com/questions/65500376/mime-email-subject-etc-headers-vs-utf8-first-split-then-encode",target:"_blank",rel:"noreferrer"},{default:e(()=>[a("encoding - MIME email Subject etc. headers vs. utf8: first split, then encode? - Stack Overflow")]),_:1})]),s("p",null,[i(t,{href:"https://dmorgan.info/posts/encoded-word-syntax/",target:"_blank",rel:"noreferrer"},{default:e(()=>[a("What the =?UTF-8?B?ZnVjayDwn5CO?=! – dmorgan.info")]),_:1})]),s("p",null,[i(t,{href:"https://www.cnblogs.com/s42-/p/13053885.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[a("golang--解决邮件发送标题乱码问题 - 黑曼巴后仰 - 博客园")]),_:1})]),y,i(l),u,i(k)])}const v=p(g,[["render",E]]);export{D as __pageData,v as default};
