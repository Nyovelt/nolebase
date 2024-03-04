import{_ as s,c as l,J as e,m as a,a as o,V as _,o as c,E as t}from"./chunks/framework.WH0rnJL5.js";const T=JSON.parse('{"title":"🌐 齐次坐标","description":"","frontmatter":{"tags":["数学","数学/高等数学","知识领域/数学","计算机/计算机图形学","知识领域/计算机图形学","数学/向量","数学/矩阵"]},"headers":[],"relativePath":"笔记/📐 图形学/🌐 齐次坐标.md","filePath":"笔记/📐 图形学/🌐 齐次坐标.md"}'),h={name:"笔记/📐 图形学/🌐 齐次坐标.md"},d=a("h1",{id:"🌐-齐次坐标",tabindex:"-1"},[o("🌐 齐次坐标 "),a("a",{class:"header-anchor",href:"#🌐-齐次坐标","aria-label":'Permalink to "🌐 齐次坐标"'},"​")],-1),p=_('<h2 id="齐次坐标系的性质" tabindex="-1">齐次坐标系的性质 <a class="header-anchor" href="#齐次坐标系的性质" aria-label="Permalink to &quot;齐次坐标系的性质&quot;">​</a></h2><ul><li><p>投影平面上的任何点都可以表示成一三元组(X,Y,Z)，称之为该点的’齐次坐标或投影坐标，其中 X、Y 及 Z 不全为 0。</p></li><li><p>以齐次坐标表表示的点，若该坐标内的数值全乘上一相同非零实数，仍会表示该点。</p></li><li><p>相反地，两个齐次坐标表示同一点，当且仅当其中一个齐次坐标可由另一个齐次坐标乘上一相同非零常数得取得。</p></li><li><p>当 Z 不为 0，则该点表示欧氏平面上的该(X/Z,Y/Z)。</p></li><li><p>当 Z 为 0，则该点表示一无穷远点。 注意，三元组(0,0, 0)不表示任何点。原点表示为(0, 0, 1)。为与以与笛卡儿坐标相区别，如以冒号代替逗号，以 (x:y:z) 代替(x,y,z)，以强调该坐标有着比例的性质。亦有以方括号代替括弧，以[x,y,z]来强调有多个坐标表示同一个点。有些作者则会同时使用冒号与方括号，如 [x:y:z]。</p></li></ul><h2 id="齐次坐标系的重要性" tabindex="-1">齐次坐标系的重要性 <a class="header-anchor" href="#齐次坐标系的重要性" aria-label="Permalink to &quot;齐次坐标系的重要性&quot;">​</a></h2><h4 id="_1-区分向量和点" tabindex="-1">1. 区分向量和点 <a class="header-anchor" href="#_1-区分向量和点" aria-label="Permalink to &quot;1. 区分向量和点&quot;">​</a></h4><p>​ 一个三维坐标的三个分量x，y，z用齐次坐标表示为变为x，y，z，w的四维空间，变换成三维坐标是方式是x/w,y/w,z/w，当w为0时，在数学上代表无穷远点，即并非一个具体的坐标位置，而是一个具有大小和方向的向量。从而，通过w我们就可以用同一系统表示两种不同的量。   在OPENGL中，作为坐标点时，w参数为1，否则为0，如此一来，所有的几何变换和向量运算都可以用相同的矩阵乘积进行运算和变换，当一个向量和一个矩阵相乘时所得的结果也是向量。</p><h4 id="_2-易于进行仿射变化-affine-transformation" tabindex="-1">2. 易于进行仿射变化(Affine Transformation) <a class="header-anchor" href="#_2-易于进行仿射变化-affine-transformation" aria-label="Permalink to &quot;2. 易于进行仿射变化(Affine Transformation)&quot;">​</a></h4><p>​ 仿射变换，又称仿射映射，是指在几何中，一个向量空间进行一次线性变换并接上一个平移，变换为另一个向量空间。引入齐次坐标系，可以将一个仿射变换对应于一个矩阵和一个向量的乘法。</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',8),f=a("h2",{id:"文件历史",tabindex:"-1"},[o("文件历史 "),a("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function m(b,u,x,P,N,q){const r=t("NolebasePageProperties"),i=t("NolebaseGitContributors"),n=t("NolebaseGitChangelog");return c(),l("div",null,[d,e(r),p,e(i),f,e(n)])}const g=s(h,[["render",m]]);export{T as __pageData,g as default};
