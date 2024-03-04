import{_ as p,c as h,J as a,m as s,a as n,V as k,o as d,E as i}from"./chunks/framework.WH0rnJL5.js";const b=JSON.parse('{"title":"find 查找","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/文件管理/find 查找.md","filePath":"笔记/📟 终端/Linux 命令/文件管理/find 查找.md"}'),o={name:"笔记/📟 终端/Linux 命令/文件管理/find 查找.md"},r=s("h1",{id:"find-查找",tabindex:"-1"},[s("code",null,"find"),n(" 查找 "),s("a",{class:"header-anchor",href:"#find-查找","aria-label":'Permalink to "`find` 查找"'},"​")],-1),c=k(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>find，查找的含义，这个命令用于查找文件和目录，使用方法很简单</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">搜索目</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">录</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">搜索对</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">象</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>我们要寻找一个叫做 <code>meow</code> 的文件，藏在 <code>tests</code> 文件夹下面</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -name meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./tests/meow</span></span></code></pre></div><p>这样就能找到了，会返回相对位置</p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="最大层级-参数-maxdepth" tabindex="-1">最大层级 - 参数 maxdepth <a class="header-anchor" href="#最大层级-参数-maxdepth" aria-label="Permalink to &quot;最大层级 - 参数 maxdepth&quot;">​</a></h3><p>有时候目录的层级会很复杂，我们不希望递归搜索太久，可以限制搜索的层级数，需要添加<strong>参数 <code>maxdepth</code></strong>，max depth（最大深度）的含义。<code>maxdepth</code> 接受数字类型的值。</p><p>示例：</p><p>我们要寻找一个叫做 <code>meow2</code> 的文件，藏在 <code>test1</code> 文件夹下面</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree # 当前目录下的文件结构</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -name meow2 -maxdepth </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -maxdepth </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -name meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./tests/meow</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -maxdepth </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -name meow2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./tests/test1/meow2</span></span></code></pre></div><p>如果限制了只能最多两层的话，找不到 meow2，但是能找到 meow，限制了最多三层的话就能找到 meow2 了</p><p><strong>⚠️ 注意</strong>：这个地方 <code>maxdepth</code> 参数必须放在最前面，要不然会报错。原因是 <code>maxdepth</code> 会影响到后面参数的匹配结果</p><h3 id="搜索类型-参数-type" tabindex="-1">搜索类型 - 参数 type <a class="header-anchor" href="#搜索类型-参数-type" aria-label="Permalink to &quot;搜索类型 - 参数 type&quot;">​</a></h3><p>有时候不想搜索到目录，有时候不想搜索到文件，我们可以限制搜索的类型，需要添加<strong>参数 <code>type</code></strong>， type（类型）的含义。<code>type</code> 参数接受两种字符串类型的值，分别是 <strong>f</strong>（file 文件）和 <strong>d</strong>（directory 目录）。</p><ol><li>限制文件</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree # 当前目录下的文件结构</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -name meow -type f</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./tests/meow</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -name meow -type d</span></span></code></pre></div><p>限制为 <code>f</code> 的时候能搜索到 <code>meow</code> 文件，<code>d</code> 的时候就搜索不到了。</p><ol start="2"><li>限制目录</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree # 当前目录下的文件结构</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find ./ -name test1 -type d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./tests/test1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $find</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./ -name test1 -type f</span></span></code></pre></div><p>限制为 <code>d</code> 的时候能搜索到 <code>test1</code> 目录，<code>f</code> 的时候就搜索不到了。</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,25),F=s("h2",{id:"文件历史",tabindex:"-1"},[n("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function g(C,y,m,A,u,E){const e=i("NolebasePageProperties"),l=i("NolebaseGitContributors"),t=i("NolebaseGitChangelog");return d(),h("div",null,[r,a(e),c,a(l),F,a(t)])}const _=p(o,[["render",g]]);export{b as __pageData,_ as default};
