import{_ as k,c as r,J as a,m as s,a as i,w as t,V as n,E as l,o as c}from"./chunks/framework.WH0rnJL5.js";const O=JSON.parse('{"title":"通过 AWS CLI 验证并推送镜像到 AWS ECR","description":"","frontmatter":{"tags":["基础设施/云服务商/亚马逊云/AWS","基础设施/云服务商/亚马逊云","基础设施/存储/镜像仓库/亚马逊云/AWS/ECR","命令行/aws","命令行/docker","运维/云原生/Docker"]},"headers":[],"relativePath":"笔记/🧱 基础设施/通过 AWS CLI 验证并推送镜像到 AWS ECR Public Repository（公开仓库）.md","filePath":"笔记/🧱 基础设施/通过 AWS CLI 验证并推送镜像到 AWS ECR Public Repository（公开仓库）.md"}'),d={name:"笔记/🧱 基础设施/通过 AWS CLI 验证并推送镜像到 AWS ECR Public Repository（公开仓库）.md"},g=s("h1",{id:"通过-aws-cli-验证并推送镜像到-aws-ecr",tabindex:"-1"},[i("通过 AWS CLI 验证并推送镜像到 AWS ECR "),s("a",{class:"header-anchor",href:"#通过-aws-cli-验证并推送镜像到-aws-ecr","aria-label":'Permalink to "通过 AWS CLI 验证并推送镜像到 AWS ECR"'},"​")],-1),u={class:"warning custom-block"},y=n(`<p class="custom-block-title">请先确保你已经正确配置了 AWS 的 SSO Profile</p><p>想要找到是否配置了 Profile，可以通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> configure list-profiles</span></span></code></pre></div><p>命令来了解，会输出这样的结果：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> aws configure list-profiles</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">example.org-dev</span></span></code></pre></div><p>也可以根据 <code>$HOME/.aws/config</code> 文件查阅配置信息：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat ~/.aws/config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[default]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">region</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">地</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">区</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[profile example.org-dev]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_session</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = example.org-dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_account_id</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">账户 I</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">D</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_role_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = AdministratorAccess</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">region</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">地</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">区</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[sso-session example.org-dev]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_start_url</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = https://</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">IAM Identity Center SSO 登录 ID 前</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">缀</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.awsapps.com/start#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_region</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">地</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">区</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sso_registration_scopes</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> = sso:account:access</span></span></code></pre></div>`,7),C=n('<div class="warning custom-block"><p class="custom-block-title">请先确保你已经登录到了期望使用的 Profile 的 SSO</p><p>想要确认是否已经登录，可以通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sts get-caller-identity</span></span></code></pre></div><p>命令来了解，会输出这样的结果：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> aws sts get-caller-identity</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;UserId&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;ID&gt;&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;Account&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;Account ID&gt;&quot;,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;Arn&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;arn:aws:iam::&lt;Account ID&gt;:user/&lt;Username&gt;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>也可以通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sts get-caller-identity --query &quot;Account&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --profile</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Profile 配置信息，比如 example.org-de</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">v</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&quot;&lt;账户 ID&gt;&quot;</span></span></code></pre></div><p>来检查<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>。</p></div><div class="tip custom-block"><p class="custom-block-title">出现了 <code>The security token included in the request is expired</code> 错误？</p><p>如果出现了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>An error occurred (ExpiredToken) when calling the GetCallerIdentity operation: The security token included in the request is expired</span></span></code></pre></div><p>这样的错误，可以通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> AWS_SESSION_TOKEN AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY</span></span></code></pre></div><p>清空可能存在的任何环境变量，然后重新载入一个命令行窗口，然后再次使用</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sso login --profile </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Profile 名</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>登录后再次检查</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sts get-caller-identity</span></span></code></pre></div><p>来了解是否登录成功</p></div><h2 id="推送到-public-repository-公开仓库" tabindex="-1">推送到 Public Repository（公开仓库） <a class="header-anchor" href="#推送到-public-repository-公开仓库" aria-label="Permalink to &quot;推送到 Public Repository（公开仓库）&quot;">​</a></h2><p>首先，在 ECR 中建立 Repository，可以通过 AWS Console，Terraform，或者 AWS CLI 建立。</p><div class="tip custom-block"><p class="custom-block-title">通过 AWS CLI 建立 Repository</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ecr-public create-repository --repository-name `</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">仓库名称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> --region</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">地区</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`</span></span></code></pre></div></div><p>推送前，登录 <code>docker</code> CLI：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ecr-public get-login-password --region us-east-1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> login --username AWS --password-stdin public.ecr.aws</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意上面的命令中的：</p><ol><li>命令是 <code>aws ecr-public</code> 而不是平时操作 ECR 的 <code>aws ecr</code><sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>；</li><li><code>--region us-east-1</code> 不要修改为自己 AWS 账户的区域，所有的 Public Repository（公开仓库）都是 AWS 托管在 <code>us-east-1</code> 区域中的。<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2:1]</a></sup></li></ol></div><p>然后用 <code>docker</code> CLI 直接重新给镜像打一下标签就好了：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag grafana:latest public.ecr.aws/</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">账户分配给的前缀 ID，需要到 AWS Console 上获取一</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">下</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/grafana:latest</span></span></code></pre></div><p>然后</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push public.ecr.aws/</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">账户分配给的前缀 ID，需要到 AWS Console 上获取一</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">下</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/grafana:latest</span></span></code></pre></div><p>就完成了。</p><h2 id="推送到-private-repository-私有仓库" tabindex="-1">推送到 Private Repository（私有仓库） <a class="header-anchor" href="#推送到-private-repository-私有仓库" aria-label="Permalink to &quot;推送到 Private Repository（私有仓库）&quot;">​</a></h2><p>首先，在 ECR 中建立 Repository，可以通过 AWS Console，Terraform，或者 AWS CLI 建立。</p><div class="tip custom-block"><p class="custom-block-title">通过 AWS CLI 建立 Repository</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ecr create-repository --repository-name `</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">仓库名称</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> --region</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">地区</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`</span></span></code></pre></div></div><p>推送前，登录 <code>docker</code> CLI：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>aws ecr get-login-password --region &lt;区域&gt; | docker login --username AWS --password-stdin &lt;Account ID&gt;.dkr.ecr.&lt;区域&gt;.amazonaws.com</span></span></code></pre></div><p>然后用 <code>docker</code> CLI 直接重新给镜像打一下标签就好了：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag grafana:latest </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Account I</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">D</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.dkr.ecr.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">区</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">域</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.amazonaws.com/grafana:latest</span></span></code></pre></div><p>然后</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Account I</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">D</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.dkr.ecr.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">区</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">域</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.amazonaws.com/grafana:latest</span></span></code></pre></div><p>就完成了。</p><h2 id="延伸阅读" tabindex="-1">延伸阅读 <a class="header-anchor" href="#延伸阅读" aria-label="Permalink to &quot;延伸阅读&quot;">​</a></h2>',24),F=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),A=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1),B=s("hr",{class:"footnotes-sep"},null,-1),_={class:"footnotes"},m={class:"footnotes-list"},b={id:"fn1",class:"footnote-item"},v=s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1),f={id:"fn2",class:"footnote-item"},E=s("code",null,"docker login",-1),S=s("code",null,"aws ecr-public",-1),w=s("code",null,"aws ecr",-1),D=s("code",null,"us-east-1",-1),I=s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎",-1),W=s("a",{href:"#fnref2:1",class:"footnote-backref"},"↩︎",-1);function x(P,R,q,L,T,N){const p=l("NolebasePageProperties"),e=l("VPNolebaseInlineLinkPreview"),h=l("NolebaseGitContributors"),o=l("NolebaseGitChangelog");return c(),r("div",null,[g,a(p),s("div",u,[y,s("p",null,[i("如果还没有配置，可以通过参考 "),a(e,{href:"https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("Configure the AWS CLI to use IAM Identity Center token provider credentials with automatic authentication refresh - AWS Command Line Interface")]),_:1}),i(" 文档进行配置。")]),s("p",null,[i("想要了解更多有关 AWS CLI 和 SSO 的信息，可以阅读这份文档："),a(e,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("Configure the AWS CLI to use AWS IAM Identity Center - AWS Command Line Interface")]),_:1})])]),C,s("ul",null,[s("li",null,[a(e,{href:"https://towardsthecloud.com/aws-cli-switch-profiles",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("How to switch profiles using AWS CLI | Towards the Cloud")]),_:1})]),s("li",null,[a(e,{href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ecr-public/index.html?highlight=ecr%20public",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("ecr-public — AWS CLI 2.15.25 Command Reference")]),_:1})]),s("li",null,[a(e,{href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ecr/index.html?highlight=ecr",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("ecr — AWS CLI 2.15.25 Command Reference")]),_:1})])]),F,a(h),A,a(o),B,s("section",_,[s("ol",m,[s("li",b,[s("p",null,[i("是 "),a(e,{href:"https://stackoverflow.com/questions/73029532/how-to-check-if-aws-cli-sso-is-logged-in",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("amazon web services - How to check if AWS CLI SSO is logged in - Stack Overflow")]),_:1}),i(" 介绍到的方法。 "),v])]),s("li",f,[s("p",null,[i("我原本自作聪明，以为是 AWS 的文档 "),a(e,{href:"https://docs.aws.amazon.com/AmazonECR/latest/public/public-registries.html#public-registry-auth",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("Amazon ECR public registries - Amazon ECR Public")]),_:1}),i("写错了，后来一直都无法找到能够验证和获取 "),E,i(" 使用的密码，直到我在 "),a(e,{href:"https://stackoverflow.com/questions/69274998/could-not-connect-to-the-endpoint-url-https-api-ecr-public-xxxxxxxxx-amazona",target:"_blank",rel:"noreferrer"},{default:t(()=>[i('amazon web services - Could not connect to the endpoint URL: "https://api.ecr-public.xxxxxxxxx.amazonaws.com/" - Stack Overflow')]),_:1}),i(" 看到有大佬分享说是因为 Public Repository（公开仓库）是使用的 "),S,i(" 命令而不是 "),w,i(" 命令，区域也只有 "),D,i(" 才恍然大悟。 "),I,i(),W])])])])])}const V=k(d,[["render",x]]);export{O as __pageData,V as default};
