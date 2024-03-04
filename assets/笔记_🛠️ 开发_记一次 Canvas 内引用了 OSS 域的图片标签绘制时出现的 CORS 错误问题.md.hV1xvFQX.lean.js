import{_ as c,c as d,J as t,m as e,a as s,w as o,V as n,E as l,o as p}from"./chunks/framework.WH0rnJL5.js";const _="/assets/canvas-referenced-oss-cross-origin-image-as-source-img-element-caused-cors-error-record-screenshot-01.V1nakEIe.png",se=JSON.parse('{"title":"记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题","description":"","frontmatter":{"tags":["开发/前端","计算机/网络/跨域","计算机/网络/跨域/CORS","开发/标记语言/HTML","开发/标记语言/HTML/Canvas","基础设施/存储/对象存储/阿里云/OSS","基础设施/云服务商/阿里云/Aliyun"]},"headers":[],"relativePath":"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md","filePath":"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md"}'),u={name:"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md"},g=e("h1",{id:"记一次-canvas-内引用了-oss-域的图片标签绘制时出现的-cors-错误问题",tabindex:"-1"},[s("记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题 "),e("a",{class:"header-anchor",href:"#记一次-canvas-内引用了-oss-域的图片标签绘制时出现的-cors-错误问题","aria-label":'Permalink to "记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题"'},"​")],-1),k=n("",6),S=e("code",null,"Access-Control-Allow-Origin: *",-1),C=e("code",null,"useCORS: true",-1),m=n("",11),A=e("code",null,"<img>",-1),O=e("code",null,"crossorigin",-1),f=n("",4),b=n("",9),v=e("strong",null,[e("code",null,"<img>"),s(" 标签能够加 crossorigin 属性来强制 CORS，那 CSS 里面的图片怎么办？")],-1),B=e("p",null,"意思是说：",-1),y=e("blockquote",null,[e("p",null,[s("在做了一些研究之后，我确定真正的问题是即使将 Amazon S3 配置为支持 CORS 的情况下，Amazon S3 依然没有"),e("strong",null,'自动设置 "Vary:Origin "头'),s("。如果有人知道如何让S3做到这一点，那也将是一个很好的答案。")])],-1),w=e("p",null,[s("咦，这个 "),e("code",null,"Vary: Origin"),s(" 看起来非常眼熟，之前在 OSS 的跨域配置中看到过，但是从未仔细了解过具体的含义。但是我们能在另一个回答中能找到些许线索：")],-1),T=e("code",null,"Access-Control-Allow-Origin",-1),q=e("code",null,"Vary: Origin",-1),R=e("code",null,"Access-Control-Allow-Origin",-1),P=e("p",null,"其含义是：",-1),D=e("blockquote",null,[e("p",null,[s("是的，如果一个请求可能包含有不同值的 "),e("code",null,"Access-Control-Allow-Origin"),s("，即使请求没有包含 "),e("code",null,"Access-Control-Allow-Origin"),s(" 头的响应，那么 CDN 应该总是包含返回 "),e("code",null,"Vary:Origin"),s(" 头部，你的分析是正确的：如果头信息不总是存在，就有可能用不正确的值填充缓存。")])],-1),E=e("code",null,"Vary",-1),N=e("blockquote",null,[e("p",null,[e("strong",null,[e("code",null,"Vary")]),s(" 是一个 HTTP 响应头部信息，它决定了对于未来的一个请求头，应该用一个缓存的回复 (response) 还是向源服务器请求一个新的回复。")])],-1),V=e("p",null,"这句话可能不太能说明问题，我们继续看 MDN 提供的下面的例子：",-1),F=e("code",null,"Vary",-1),I=e("code",null,"User-Agent",-1),x=e("p",null,[s("即此时需要设置为 "),e("code",null,"Vary: User-Agent")],-1),H=e("p",null,[s("也就是说如果我们需要根据 User-Agent 的不同指挥浏览器去读写缓存，那么我们就使用 "),e("code",null,"Vary: User-Agent"),s(" 头来实现。")],-1),M=e("p",null,[s("此刻我们再去看看阿里云 OSS 的跨域设置选项当中的最后一项下面的注释："),e("strong",null,"返回 Vary: Origin")],-1),L=e("p",null,[e("img",{src:_,alt:""})],-1),U=e("p",null,[s("关键的信息是："),e("strong",null,"如果浏览器同时存在 CORS 和非 CORS 请求，请启用该选项否则会出现跨域问题。")],-1),z=e("code",null,"Origin: <请求来源域名>",-1),G=e("code",null,"Vary: Origin",-1),W=n("",7),$=e("h2",{id:"文件历史",tabindex:"-1"},[s("文件历史 "),e("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function j(J,X,Y,K,Q,Z){const i=l("NolebasePageProperties"),a=l("VPNolebaseInlineLinkPreview"),r=l("NolebaseGitContributors"),h=l("NolebaseGitChangelog");return p(),d("div",null,[g,t(i),k,e("p",null,[s("调查浏览器的开发者工具的控制台的时候发现是图片相关的响应未正确按照 CORS 期望的设定返回 "),S,s(" 头部，触发了 CORS 策略错误导致。 而如果不使用 CORS 策略（即打开 html2canvas 配置选项中的 "),C,s(" 选项）请求图片的话，会导致 canvas 变成不安全的 canvas，或者说是被污染的 canvas（参见："),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("启用了 CORS 的图片 - HTML（超文本标记语言） | MDN")]),_:1}),s("），在这样的情况下，将不可使用 canvas 上下文 context 调用下列函数：")]),m,e("p",null,[s("在网络上搜索相关资料的时候发现大多数人都提到了一个之前我们开发时忽略的 "),A,s(" 属性 "),O,s("（参考资料："),t(a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin#value",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("HTMLImageElement.crossOrigin - Web APIs | MDN")]),_:1}),s("）。")]),f,e("ul",null,[e("li",null,[e("p",null,[t(a,{href:"https://stackoverflow.com/questions/29105249/html2canvas-with-cors-in-s3-and-cloudfront",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("javascript - HTML2Canvas with CORS in S3 and CloudFront - Stack Overflow")]),_:1})])]),e("li",null,[e("p",null,[t(a,{href:"https://stackoverflow.com/questions/46257444/how-to-avoid-cors-error-when-drawing-image-onto-canvas",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("javascript - How to avoid CORS error when drawing image onto canvas? - Stack Overflow")]),_:1})])])]),b,e("p",null,[s("先前的问题还是没有解决，于是我去继续寻找其他问题的答案。有另一个问题是小音询问我的："),v,s("。说实话我也不知道这个问题的答案，于是在网络上搜索。也就是在这个时候，我在 "),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("cross domain - Using CORS headers with CSS background-image - Stack Overflow")]),_:1}),s(" StackOverflow 问答上见到了一句评论：")]),e("blockquote",null,[e("p",null,[s(`After doing some research I have determined that the real problem is that Amazon S3 doesn't set the "Vary: Origin" header even if it is configured to support CORS. If anyone knows how to get S3 to do that, that would also be a good answer. – `),t(a,{href:"https://stackoverflow.com/users/2543666/thayne",title:"6,381 reputation",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Thayne")]),_:1}),s(),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image#comment32821554_21638606",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Feb 11, 2014 at 16:17")]),_:1})])]),B,y,w,e("blockquote",null,[e("p",null,[s("Yes. If a request may contain a "),T,s(" with different values, then the CDN should always respond with "),q,s(", even for responses without an "),R,s(" header. Your analysis is correct: if the header isn't always present, it would be possible to fill the cache with incorrect values. – "),t(a,{href:"https://stackoverflow.com/users/107250/monsur",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("monsur")]),_:1}),t(a,{href:"https://stackoverflow.com/a/25329887",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("answered Aug 15, 2014 at 16:02")]),_:1})])]),P,D,e("p",null,[s("此时此刻我们去寻找 MDN 关于 "),E,s(" 头部的文档 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Vary - HTTP | MDN")]),_:1}),s("，就能看到：")]),N,V,e("blockquote",null,[e("p",null,[s("哪种情况下使用 "),F,s("？对于 "),I,s(" 头部信息，例如你提供给移动端的内容是不同的，可用防止你客户端误使用了用于桌面端的缓存。 并可帮助 Google 和其他搜索引擎来发现你的移动端版本的页面，同时告知他们不需要 "),t(a,{href:"https://en.wikipedia.org/wiki/Cloaking",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Cloaking")]),_:1}),s("。")]),x,e("p",null,[s("—— 来源 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary#%E5%8A%A8%E6%80%81%E6%9C%8D%E5%8A%A1",title:"Permalink to 动态服务",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("动态服务")]),_:1})])]),H,M,L,U,e("p",null,[s("综上所述，对于在跨域场景下的 GET 请求而言，我们能知道由于 CORS 策略所产生的的 OPTIONS 预检请求相比非 CORS 策略限制的的 GET 请求多了 "),z,s(" 头部，那么先前在 "),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("cross domain - Using CORS headers with CSS background-image - Stack Overflow")]),_:1}),s(" StackOverflow 问答中看到的评论所提到的 "),G,s(" 头部的作用就可以理解为：")]),W,t(r),$,t(h)])}const te=c(u,[["render",j]]);export{se as __pageData,te as default};
