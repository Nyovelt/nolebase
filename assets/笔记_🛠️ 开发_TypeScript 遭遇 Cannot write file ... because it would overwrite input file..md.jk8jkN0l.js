import{_ as k,c as d,J as a,m as s,a as i,w as t,V as r,E as l,o}from"./chunks/framework.WH0rnJL5.js";const w=JSON.parse('{"title":"TypeScript 遭遇 Cannot write file ... because it would overwrite input file.","description":"","frontmatter":{"tags":["开发/语言/TypeScript","开发/前端/Vite","开发/前端/Vue","开发/前端/Vue/Vue3","开发/Monorepo","开发/Nodejs/TypeScript","开发/Nodejs/Vite"]},"headers":[],"relativePath":"笔记/🛠️ 开发/TypeScript 遭遇 Cannot write file ... because it would overwrite input file..md","filePath":"笔记/🛠️ 开发/TypeScript 遭遇 Cannot write file ... because it would overwrite input file..md"}'),c={name:"笔记/🛠️ 开发/TypeScript 遭遇 Cannot write file ... because it would overwrite input file..md"},g=s("h1",{id:"typescript-遭遇-cannot-write-file-because-it-would-overwrite-input-file",tabindex:"-1"},[i("TypeScript 遭遇 "),s("code",null,"Cannot write file ... because it would overwrite input file."),i(),s("a",{class:"header-anchor",href:"#typescript-遭遇-cannot-write-file-because-it-would-overwrite-input-file","aria-label":'Permalink to "TypeScript 遭遇 `Cannot write file ... because it would overwrite input file.`"'},"​")],-1),C=s("h2",{id:"背景",tabindex:"-1"},[i("背景 "),s("a",{class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},"​")],-1),F=s("code",null,"vue-tsc --declaration --emitDeclarationOnly",-1),u=r(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">❯</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> script to run › build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @nolebase/vitepress-plugin-highlight-targeted-heading@1.3.0 build </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/Git/nolebase/integrations/packages/vitepress-plugin-highlight-targeted-heading</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> vite build &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vue-tsc</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --declaration</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --emitDeclarationOnly</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vite</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v5.0.2 building for production...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">✓</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> modules transformed.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dist/style.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0.80</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB │ gzip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.28</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dist/index.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   2.34</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB │ gzip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1.04</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dist/style.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">      0.80</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB │ gzip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.28</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dist/index.umd.cjs</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2.08</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB │ gzip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1.04</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">✓</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> built in </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">216</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ms</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TS5055: Cannot write file &#39;~/Git/nolebase/integrations/packages/vitepress-plugin-highlight-targeted-heading/src/components/HighlightTargetedHeading.vue.d.ts&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> because it would overwrite input file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Found</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> error.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ELIFECYCLE </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Command failed with exit code </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span></span></code></pre></div><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><h3 id="tsconfig-json-中缺失了必要的-outdir-配置" tabindex="-1"><code>tsconfig.json</code> 中缺失了必要的 <code>outDir</code> 配置 <a class="header-anchor" href="#tsconfig-json-中缺失了必要的-outdir-配置" aria-label="Permalink to &quot;\`tsconfig.json\` 中缺失了必要的 \`outDir\` 配置&quot;">​</a></h3><p>在默认情况下，<code>outDir</code> 将会指向 <code>.</code>，从而导致第一次运行 <code>vue-tsc --declaration --emitDeclarationOnly</code> 的时候在每个我们的源代码文件的旁边都输出一个 <code>.d.ts</code>（类型声明文件），我们可以通过下面的命令来验证这样的问题：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">❯</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat tsconfig.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  &quot;extends&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;../../tsconfig.json&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  &quot;exclude&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;**/dist/**&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;./uno.config.ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;./vite.config.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  &quot;include&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;**/*.ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;**/*.d.ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;**/*.vue&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;**/*.tsx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;skipLibCheck&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;skipDefaultLibCheck&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;noImplicitAny&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;declaration&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;composite&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  &quot;references&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">      &quot;path&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;./tsconfig.node.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>可以发现我们的 <code>tsconfig.json</code> 中缺失了 <code>outDir</code> 相关字段的配置，接下来我们看看是不是当前目录下确实出现了一些其他的不该出现的 <code>.d.ts</code> 文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">❯</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ├── index.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ├── index.umd.cjs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> └── style.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ├── @vueuse</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> └── vue </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ../../../node_modules/.pnpm/vue@3.3.8_typescript@5.3.2/node_modules/vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> src</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ├── components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> │   ├── HighlightTargetedHeading.vue</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> │   └── HighlightTargetedHeading.vue.d.ts</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ├── index.d.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tsconfig.node.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> vite.config.ts</span></span></code></pre></div><p>第一次构建成功之后输出了 <code>index.d.ts</code>，是成功且不报错的，但是第二次执行构建和类型输出的时候就会报错，是因为 <code>tsc</code> 再次读取了 <code>.d.ts</code> 文件然后尝试再次递归输出新的 <code>.d.ts</code> 文件，于是就出现了上面说的</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TS5055: Cannot write file &#39;~/Git/nolebase/integrations/packages/vitepress-plugin-highlight-targeted-heading/src/components/HighlightTargetedHeading.vue.d.ts&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> because it would overwrite input file.</span></span></code></pre></div><p>的报错。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>我们根据自己的构建需求，在 <code>tsconfig.json</code> 中添加类型输出目录即可：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light one-dark-pro has-diff vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;../../tsconfig.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;**/dist/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;./uno.config.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;./vite.config.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;**/*.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;**/*.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;**/*.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;**/*.tsx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;skipLibCheck&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;skipDefaultLibCheck&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;noImplicitAny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;declaration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;composite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;outDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;references&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./tsconfig.node.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p><code>&quot;outDir&quot;: &quot;./dist&quot;</code> 的值需要根据 <code>package.json</code> 的 <code>types</code> 字段的注解和 <code>exports</code> 下属的各个导出的模块的 <code>types</code> 注解来确定，比如我的 <code>package.json</code> 是这样书写的：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light one-dark-pro has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 其他部分省略</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;sideEffects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;exports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">      &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">      &quot;import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">      &quot;require&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.umd.cjs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;./dist/style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/style.css&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.umd.cjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./dist/index.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;package.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;README.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 其他部分省略</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这个时候再次运行 <code>vue-tsc --declaration --emitDeclarationOnly</code> 就不会再报错了，再次观察 <code>dist</code> 目录的时候也能发现类型正确地输出了。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2>`,17),y=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),B=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function A(E,q,f,b,v,m){const e=l("NolebasePageProperties"),n=l("VPNolebaseInlineLinkPreview"),p=l("NolebaseGitContributors"),h=l("NolebaseGitChangelog");return o(),d("div",null,[g,a(e),C,s("p",null,[i("搭建 "),a(n,{href:"/笔记/🎬 项目/Nolebase.html"},{default:t(()=>[i("Nólëbase")]),_:1}),i(" 插件的 Monorepo 的过程中，在配置好 "),F,i(" 命令来输出类型定义的时候遇到了一个奇怪的问题：")]),u,s("ul",null,[s("li",null,[a(n,{href:"https://stackoverflow.com/questions/37013665/typescript-error-cannot-write-file-index-d-ts-because-it-would-overwrite-inpu",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("TypeScript error: Cannot write file 'index.d.ts' because it would overwrite input file - Stack Overflow")]),_:1})]),s("li",null,[a(n,{href:"https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file",target:"_blank",rel:"noreferrer"},{default:t(()=>[i('visual studio - Typescript error "Cannot write file ... because it would overwrite input file." - Stack Overflow')]),_:1})]),s("li",null,[a(n,{href:"https://github.com/jd-solanki/anu/blob/main/packages/anu-vue/tsconfig.json",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("anu/packages/anu-vue/tsconfig.json at main · jd-solanki/anu")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/element-plus/element-plus/blob/dev/internal/build/build.config.ts",target:"_blank",rel:"noreferrer"},{default:t(()=>[i("element-plus/internal/build/build.config.ts at dev · element-plus/element-plus")]),_:1})])]),y,a(p),B,a(h)])}const D=k(c,[["render",A]]);export{w as __pageData,D as default};
