import{_ as i,c as l,J as a,m as e,a as s,V as _,o as c,E as t}from"./chunks/framework.WH0rnJL5.js";const p="/assets/truenas-SMB-设置.EK56_8T2.png",x=JSON.parse('{"title":"设置 SMB 共享配额","description":"","frontmatter":{"tags":["软件/TrueNAS","基础设施/Homelab/NAS","基础设施/NAS","基础设施/Homelab","计算机/网络/协议/SMB","软件/TrueNAS-SCALE"]},"headers":[],"relativePath":"笔记/🧱 基础设施/💾 TrueNAS/设置 SMB 共享配额.md","filePath":"笔记/🧱 基础设施/💾 TrueNAS/设置 SMB 共享配额.md"}'),d={name:"笔记/🧱 基础设施/💾 TrueNAS/设置 SMB 共享配额.md"},h=e("h1",{id:"设置-smb-共享配额",tabindex:"-1"},[s("设置 SMB 共享配额 "),e("a",{class:"header-anchor",href:"#设置-smb-共享配额","aria-label":'Permalink to "设置 SMB 共享配额"'},"​")],-1),m=_(`<p><strong>适用版本:</strong> <code>TrueNAS-12.0-U6.1</code></p><p>共享 -&gt; Windows共享（SMB）</p><ol><li>找到你要设置配额的共享 Samba，点击右侧的三个点，点击编辑</li><li>在打开的设置中点选 <strong>高级选项</strong></li><li>在附加参数中添加如下配置</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ixnas:base_user_quota=&lt;容量，例如 100G｜100T｜100M &gt;</span></span>
<span class="line"><span>ixnas:zfs_quota_enabled=True</span></span></code></pre></div><ol start="4"><li>保存设置</li></ol><p><img src="`+p+'" alt=""></p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',7),S=e("h2",{id:"文件历史",tabindex:"-1"},[s("文件历史 "),e("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function b(u,g,N,T,B,f){const o=t("NolebasePageProperties"),n=t("NolebaseGitContributors"),r=t("NolebaseGitChangelog");return c(),l("div",null,[h,a(o),m,a(n),S,a(r)])}const M=i(d,[["render",b]]);export{x as __pageData,M as default};
