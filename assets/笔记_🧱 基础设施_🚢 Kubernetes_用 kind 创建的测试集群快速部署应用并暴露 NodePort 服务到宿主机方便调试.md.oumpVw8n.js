import{_ as p,c as k,J as i,m as s,a as n,V as e,o as r,E as a}from"./chunks/framework.WH0rnJL5.js";const _=JSON.parse('{"title":"用 kind 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试","description":"","frontmatter":{"tags":["开源/软件/kind","命令行/kubectl","命令行/kind","开发/云原生/Kubernetes"]},"headers":[],"relativePath":"笔记/🧱 基础设施/🚢 Kubernetes/用 kind 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试.md","filePath":"笔记/🧱 基础设施/🚢 Kubernetes/用 kind 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试.md"}'),d={name:"笔记/🧱 基础设施/🚢 Kubernetes/用 kind 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试.md"},o=s("h1",{id:"用-kind-创建的测试集群快速部署应用并暴露-nodeport-服务到宿主机方便调试",tabindex:"-1"},[n("用 "),s("code",null,"kind"),n(" 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试 "),s("a",{class:"header-anchor",href:"#用-kind-创建的测试集群快速部署应用并暴露-nodeport-服务到宿主机方便调试","aria-label":'Permalink to "用 `kind` 创建的测试集群快速部署应用并暴露 NodePort 服务到宿主机方便调试"'},"​")],-1),g=e(`<h2 id="编写和配置-kind-创建集群用的配置文件" tabindex="-1">编写和配置 <code>kind</code> 创建集群用的配置文件 <a class="header-anchor" href="#编写和配置-kind-创建集群用的配置文件" aria-label="Permalink to &quot;编写和配置 \`kind\` 创建集群用的配置文件&quot;">​</a></h2><p>我在编写和调试 Helm Chart，或者是在本地使用 <code>kind</code> 创建的集群中希望能够通过宿主机直接访问部署的 Pod 或者 Deploymen 的时候，不想再去单独编写和创建一个 Service 资源文件，或者说修改 Helm Chart 中有关 Service 资源的配置，而是直接通过手动创建服务和转发端口来快速调试应用和测试想法，这个时候怎么办呢？</p><p>这里会有一些常见的直接暴露端口的配置和命令，方便直接执行。</p><p>首先我们需要明确 <code>kind</code> 需要如何编写：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Cluster</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">kind.x-k8s.io/v1alpha4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">nodes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">control-plane</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">worker</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  extraPortMappings</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span></code></pre></div><p>通常而言我会通过上述的文件来为每个不同的业务需求构建一个独立的集群，然后在 <code>extraPortMappings</code> 字段中为我希望在之后应用部署完成之后暴露的端口添加一个端口映射：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Cluster</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">kind.x-k8s.io/v1alpha4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">nodes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">control-plane</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">worker</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  extraPortMappings</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line has-focus"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line has-focus"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span></code></pre></div><details class="details custom-block"><summary>想要映射更多的端口？</summary><p>最好像下面这样一次性映射一大堆端口，方便灵活修改和配置。因为如果 <code>kind</code> 创建的 Kubernetes 集群还需要进一步的拉取很多超大型镜像的话，来回创建和销毁 <code>kind</code> 的集群资源，会造成镜像都得重新从头拉取和解压缩，这样很花时间。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Cluster</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">test</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">kind.x-k8s.io/v1alpha4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">nodes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">control-plane</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">worker</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  extraPortMappings</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30002</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30002</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30003</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30003</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30004</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30004</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30005</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30005</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30006</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30006</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30007</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30007</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30008</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30008</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">containerPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30008</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hostPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30008</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TCP</span></span></code></pre></div></details><p>编写之后创建集群即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kind</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> create cluster --config ./kind.yaml --name some-cluster</span></span></code></pre></div><h2 id="给服务直接创建-nodeport-类型的服务" tabindex="-1">给服务直接创建 NodePort 类型的服务 <a class="header-anchor" href="#给服务直接创建-nodeport-类型的服务" aria-label="Permalink to &quot;给服务直接创建 NodePort 类型的服务&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> expose deployment </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Deployment 名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name=</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">Deployment</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">-nodeport --type=NodePort</span></span></code></pre></div><p>比如如果是有一个 Grafana 的服务希望暴露的话：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> expose deployment grafana --name=grafana-nodeport --type=NodePort</span></span></code></pre></div><h2 id="直接原地修改-nodeport-服务的暴露端口号为配置文件中定义的任何一个端口" tabindex="-1">直接原地修改 NodePort 服务的暴露端口号为配置文件中定义的任何一个端口 <a class="header-anchor" href="#直接原地修改-nodeport-服务的暴露端口号为配置文件中定义的任何一个端口" aria-label="Permalink to &quot;直接原地修改 NodePort 服务的暴露端口号为配置文件中定义的任何一个端口&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> patch service </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">服务名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --type=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --patch=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;[{&quot;op&quot;: &quot;replace&quot;, &quot;path&quot;: &quot;/spec/ports/0/nodePort&quot;, &quot;value&quot;:&lt;同步上面 kind 配置文件中的端口号&gt;}]&#39;</span></span></code></pre></div><p>以上面的 Deployment 为例子的话，我一般会给 Deployment 添加后缀 -nodeport 来区分暴露的 Service 类型，那这个时候其实是可以写成这样的：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> patch service </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Deployment 名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">-nodeport --type=&#39;json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --patch=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;[{&quot;op&quot;: &quot;replace&quot;, &quot;path&quot;: &quot;/spec/ports/0/nodePort&quot;, &quot;value&quot;:&lt;同步上面 kind 配置文件中的端口号&gt;}]&#39;</span></span></code></pre></div><p>比如如果是有一个 Grafana 的服务希望暴露并且映射为 <code>30001</code> 端口的话：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> patch service grafana-nodeport --type=&#39;json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --patch=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;[{&quot;op&quot;: &quot;replace&quot;, &quot;path&quot;: &quot;/spec/ports/0/nodePort&quot;, &quot;value&quot;:30001}]&#39;</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,21),y=s("h2",{id:"文件历史",tabindex:"-1"},[n("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function c(B,C,A,F,E,u){const t=a("NolebasePageProperties"),h=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return r(),k("div",null,[o,i(t),g,i(h),y,i(l)])}const m=p(d,[["render",c]]);export{_ as __pageData,m as default};
