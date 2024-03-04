import{_ as r,c as d,J as a,m as s,w as n,a as i,V as l,E as e,o}from"./chunks/framework.WH0rnJL5.js";const P=JSON.parse('{"title":"SwiftUI 生命周期控制","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/🛠️ 开发/語 编程语言/🐦 Swift/SwiftUI 生命周期控制.md","filePath":"笔记/🛠️ 开发/語 编程语言/🐦 Swift/SwiftUI 生命周期控制.md"}'),B={name:"笔记/🛠️ 开发/語 编程语言/🐦 Swift/SwiftUI 生命周期控制.md"},c=s("h1",{id:"swiftui-生命周期控制",tabindex:"-1"},[i("SwiftUI 生命周期控制 "),s("a",{class:"header-anchor",href:"#swiftui-生命周期控制","aria-label":'Permalink to "SwiftUI 生命周期控制"'},"​")],-1),g=l('<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v0.0.1</td><td>2021-12-03</td><td>补充未完成的文档</td></tr><tr><td>Neko</td><td>v0.0.1</td><td>2021-12-01</td><td>创建</td></tr></tbody></table><h3 id="文档兼容性" tabindex="-1">文档兼容性 <a class="header-anchor" href="#文档兼容性" aria-label="Permalink to &quot;文档兼容性&quot;">​</a></h3>',3),y=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),A=s("td",null,"Swift",-1),_=s("td",null,"5",-1),F=l(`<h2 id="窗口" tabindex="-1">窗口 <a class="header-anchor" href="#窗口" aria-label="Permalink to &quot;窗口&quot;">​</a></h2><p><code>&lt;项目根目录&gt;/App.swift</code></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">@main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">App </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> body: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Scene {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">        WindowGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">            ContentView</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">onAppear</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">                    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;appeared&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">onDisappear</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">                    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,3),C=l(`<h2 id="应用程序" tabindex="-1">应用程序 <a class="header-anchor" href="#应用程序" aria-label="Permalink to &quot;应用程序&quot;">​</a></h2><p><code>&lt;项目根目录&gt;/AppDelegate.swift</code></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> AppDelegate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">NSObject</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">NSApplicationDelegate </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> applicationWillTerminate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> aNotification</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: Notification) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // App 结束前需要执行的代码，比如清理内存占用等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p><code>&lt;项目根目录&gt;/App.swift</code></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">@main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">App </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    @NSApplicationDelegateAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(AppDelegate.</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> appDelegate </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 添加此行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> body: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Scene {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">        WindowGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">            ContentView</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">onAppear</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">                    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;appeared&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">onDisappear</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">                    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,5),f=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),E=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function u(D,w,b,m,S,v){const h=e("NolebasePageProperties"),t=e("VPNolebaseInlineLinkPreview"),p=e("NolebaseGitContributors"),k=e("NolebaseGitChangelog");return o(),d("div",null,[c,a(h),g,s("table",null,[y,s("tbody",null,[s("tr",null,[A,_,s("td",null,[a(t,{href:"https://swiftgg.gitbook.io/swift/swift-jiao-cheng",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("https://swiftgg.gitbook.io/swift/swift-jiao-cheng")]),_:1}),i(),a(t,{href:"https://www.swift.org/documentation/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("https://www.swift.org/documentation/")]),_:1})])])])]),F,s("p",null,[a(t,{href:"https://learnappmaking.com/swiftui-app-lifecycle-how-to/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("SwiftUI App Lifecycle Explained – LearnAppMaking")]),_:1})]),C,s("p",null,[a(t,{href:"https://stackoverflow.com/questions/64940411/swiftui-respond-to-app-termination-on-macos",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("SwiftUI: respond to app termination on macOS - Stack Overflow")]),_:1})]),f,a(p),E,a(k)])}const T=r(B,[["render",u]]);export{P as __pageData,T as default};
