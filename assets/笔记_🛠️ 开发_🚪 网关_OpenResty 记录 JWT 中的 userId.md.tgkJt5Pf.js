import{_ as r,c as d,J as a,m as s,w as t,a as i,V as h,E as l,o}from"./chunks/framework.WH0rnJL5.js";const I=JSON.parse('{"title":"OpenResty 记录 JWT 中的 userId","description":"","frontmatter":{"tags":["计算机/网络/网关/Nginx","计算机/网络/网关/OpenResty","开发/语言/Lua","开发/JWT","开发/语言/Lua/luajit"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🚪 网关/OpenResty 记录 JWT 中的 userId.md","filePath":"笔记/🛠️ 开发/🚪 网关/OpenResty 记录 JWT 中的 userId.md"}'),y={name:"笔记/🛠️ 开发/🚪 网关/OpenResty 记录 JWT 中的 userId.md"},g=s("h1",{id:"openresty-记录-jwt-中的-userid",tabindex:"-1"},[i("OpenResty 记录 JWT 中的 userId "),s("a",{class:"header-anchor",href:"#openresty-记录-jwt-中的-userid","aria-label":'Permalink to "OpenResty 记录 JWT 中的 userId"'},"​")],-1),c=h('<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2022-08-18</td><td>创建</td></tr></tbody></table><h3 id="文档兼容性" tabindex="-1">文档兼容性 <a class="header-anchor" href="#文档兼容性" aria-label="Permalink to &quot;文档兼容性&quot;">​</a></h3>',3),u=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),B=s("tr",null,[s("td",null,"Debian"),s("td",null,"11/5.10.127-1/amd64"),s("td")],-1),C=s("td",null,"OpenResty",-1),E=s("td",null,"openresty/1.21.4.1",-1),F=s("td",null,"SkyLothar/lua-resty-jwt",-1),A=s("td",null,"0.1.11",-1),D=s("td",null,"cloudflare/lua-resty-cookie",-1),_=s("td",null,"0.0.0",-1),q=h('<h2 id="安装-lua-resty-jwt" tabindex="-1">安装 lua-resty-jwt <a class="header-anchor" href="#安装-lua-resty-jwt" aria-label="Permalink to &quot;安装 lua-resty-jwt&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> opm get SkyLothar/lua-resty-jwt</span></span></code></pre></div><h2 id="安装-lua-resty-cookie" tabindex="-1">安装 lua-resty-cookie <a class="header-anchor" href="#安装-lua-resty-cookie" aria-label="Permalink to &quot;安装 lua-resty-cookie&quot;">​</a></h2>',3),b=h(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone https://github.com/cloudflare/lua-resty-cookie.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> lib/resty/cookie.lua </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">目标机器 Hos</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:~/</span></span></code></pre></div><p>访问远程服务器并放置到 <code>/usr/local/openresty/lualib/resty/</code> 目录下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cp ~/cookie.lua /usr/local/openresty/lualib/resty/</span></span></code></pre></div><h2 id="创建-lua-脚本目录" tabindex="-1">创建 lua 脚本目录 <a class="header-anchor" href="#创建-lua-脚本目录" aria-label="Permalink to &quot;创建 lua 脚本目录&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mkdir /etc/openresty/lua</span></span></code></pre></div><h2 id="创建记录-userid-的-lua-脚本" tabindex="-1">创建记录 UserID 的 lua 脚本 <a class="header-anchor" href="#创建记录-userid-的-lua-脚本" aria-label="Permalink to &quot;创建记录 UserID 的 lua 脚本&quot;">​</a></h2><p>编辑 <code>/etc/openresty/lua/log_uid.lua</code> 文件并写入下面的代码</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> cjson</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;cjson&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;resty.jwt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> cookie</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;resty.cookie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> secret</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;填写你的 JWT 加密密钥&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_cookie_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;JWT 在 Cookie 头中的 Cookie 名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_user_id_field_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;userId&quot; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 这里我的 userId 字段直接存放在 payload 下面，可以按需进行变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ck</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ck</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ck</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">get_all</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ngx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ngx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">ERR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">v</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> pairs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> ==</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_cookie_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        local</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> jwt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">verify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">secret</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;verified&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;valid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;payload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;payload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">jwt_user_id_field_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                ngx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> jwt_obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;payload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">jwt_user_id_field_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 将 userId 字段取出来放到 $uid 变量中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">end</span></span></code></pre></div><h2 id="openresty-日志字段中配置输出-uid-变量" tabindex="-1">OpenResty 日志字段中配置输出 uid 变量 <a class="header-anchor" href="#openresty-日志字段中配置输出-uid-变量" aria-label="Permalink to &quot;OpenResty 日志字段中配置输出 uid 变量&quot;">​</a></h2><p>编辑 <code>/etc/openresty/nginx.conf</code></p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">json </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;{&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;@timestamp&quot;:&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time_iso8601</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;client_ip&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request_uri&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uri</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;host&quot;:&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;method&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request_method</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;status&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;body_bytes_sent&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;referer&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;ua&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_connect_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_connect_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_header_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_header_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_response_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_response_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;uid&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uid</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 补充配置该行文本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &#39;}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /var/log/nginx/access.log json;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="openresty-服务配置中初始化-uid-变量并导入需要执行的-lua-脚本" tabindex="-1">OpenResty 服务配置中初始化 uid 变量并导入需要执行的 lua 脚本 <a class="header-anchor" href="#openresty-服务配置中初始化-uid-变量并导入需要执行的-lua-脚本" aria-label="Permalink to &quot;OpenResty 服务配置中初始化 uid 变量并导入需要执行的 lua 脚本&quot;">​</a></h2><p>编辑每一个需要记录 uid 的 vhost 配置文件</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        listen </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">80</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">_;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uid</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 此处初始化变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> https://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request_uri</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        listen </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">443 ssl http2</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">_;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uid</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 此处初始化变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            access_by_lua_file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /etc/openresty/lua/log_uid.lua; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 此处导入需要执行的脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">w</span></span></code></pre></div><h2 id="检查配置文件并重载" tabindex="-1">检查配置文件并重载 <a class="header-anchor" href="#检查配置文件并重载" aria-label="Permalink to &quot;检查配置文件并重载&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx -t</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx -s reload</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,17),m=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function f(v,j,T,w,x,P){const e=l("NolebasePageProperties"),n=l("VPNolebaseInlineLinkPreview"),k=l("NolebaseGitContributors"),p=l("NolebaseGitChangelog");return o(),d("div",null,[g,a(e),c,s("table",null,[u,s("tbody",null,[B,s("tr",null,[C,E,s("td",null,[a(n,{href:"https://openresty.org/en/",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("OpenResty® - Official Site")]),_:1})])]),s("tr",null,[F,A,s("td",null,[a(n,{href:"https://github.com/SkyLothar/lua-resty-jwt",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("SkyLothar/lua-resty-jwt: JWT For The Great Openresty")]),_:1})])]),s("tr",null,[D,_,s("td",null,[a(n,{href:"https://github.com/cloudflare/lua-resty-cookie",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("cloudflare/lua-resty-cookie: Lua library for HTTP cookie manipulations for OpenResty/ngx_lua")]),_:1})])])])]),q,s("p",null,[i("克隆 "),a(n,{href:"https://github.com/cloudflare/lua-resty-cookie",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("cloudflare/lua-resty-cookie")]),_:1}),i(" 到本地，使用 scp 或者 rsync 传输到远程服务器上")]),b,a(k),m,a(p)])}const R=r(y,[["render",f]]);export{I as __pageData,R as default};
