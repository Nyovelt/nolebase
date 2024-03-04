import{_ as r,c as o,J as i,m as s,w as n,a,V as t,E as l,o as c}from"./chunks/framework.WH0rnJL5.js";const G=JSON.parse('{"title":"使用 Docker 安装和部署 ELK","description":"","frontmatter":{"tags":["命令行/docker","开发/容器化/Docker","开发/云原生/Docker","软件/云原生/docker","开发/云原生/可观测","软件/Elastic","软件/Elastic/ELK","软件/Elastic/ElasticStack","软件/Elastic/ElasticSearch","软件/Elastic/Kibana","软件/Elastic/Logstash","开发/云原生/可观测/日志","开发/云原生/可观测/指标","开发/云原生/可观测/监控","基础设施","命令行/apt","操作系统/Debian","操作系统/Debian/Debian-11","开发/标记语言/YAML","开发/容器化/Docker/Docker-Compose","命令行/sysctl","命令行/curl"]},"headers":[],"relativePath":"笔记/🧱 基础设施/🔍 Elastic Stack (ELK)/安装 ELK.md","filePath":"笔记/🧱 基础设施/🔍 Elastic Stack (ELK)/安装 ELK.md"}'),d={name:"笔记/🧱 基础设施/🔍 Elastic Stack (ELK)/安装 ELK.md"},g=s("h1",{id:"使用-docker-安装和部署-elk",tabindex:"-1"},[a("使用 Docker 安装和部署 ELK "),s("a",{class:"header-anchor",href:"#使用-docker-安装和部署-elk","aria-label":'Permalink to "使用 Docker 安装和部署 ELK"'},"​")],-1),y=s("p",null,[s("strong",null,"ELK 即 ElasticSearch、Logstash、Kibana 栈，用于日志分析、日志搜索。")],-1),u=s("h3",{id:"文档兼容性",tabindex:"-1"},[a("文档兼容性 "),s("a",{class:"header-anchor",href:"#文档兼容性","aria-label":'Permalink to "文档兼容性"'},"​")],-1),C=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),B=s("td",null,"ElasticSearch Docker 镜像",-1),m=s("td",null,"7.16.3",-1),F=s("td",null,"Kibana",-1),b=s("td",null,"7.16.3",-1),E=s("td",null,"Docker",-1),A=s("td",null,"20.10.5+dfsg1",-1),_=s("td",null,"docker-compose",-1),v=s("td",null,"1.25.0",-1),f=t("",4),D=t("",10),q=s("code",null,"docker.elastic.co/elasticsearch/elasticsearch:7.16.3",-1),S=t("",37),P=s("h2",{id:"文件历史",tabindex:"-1"},[a("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function x(w,T,K,L,N,V){const h=l("NolebasePageProperties"),e=l("VPNolebaseInlineLinkPreview"),p=l("NolebaseGitContributors"),k=l("NolebaseGitChangelog");return c(),o("div",null,[g,i(h),y,u,s("table",null,[C,s("tbody",null,[s("tr",null,[B,m,s("td",null,[i(e,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html")]),_:1})])]),s("tr",null,[F,b,s("td",null,[i(e,{href:"https://www.elastic.co/guide/en/kibana/current/docker.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("https://www.elastic.co/guide/en/kibana/current/docker.html")]),_:1})])]),s("tr",null,[E,A,s("td",null,[i(e,{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("https://docs.docker.com/")]),_:1})])]),s("tr",null,[_,v,s("td",null,[i(e,{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("https://docs.docker.com/compose/")]),_:1})])])])]),f,s("p",null,[a("可以参考官方指南在 Debian 11 上安装 Docker："),i(e,{href:"https://docs.docker.com/engine/install/debian/",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Install Docker Engine on Debian | Docker Documentation")]),_:1})]),D,s("p",null,[a("此处引用了 "),q,a(" 镜像，大家可以前往 "),i(e,{href:"https://www.docker.elastic.co/r/elasticsearch",target:"_blank",rel:"noreferrer"},{default:n(()=>[a("Elastic Docker 注册中心")]),_:1}),a(" 查看当前可用的 ElasticSearch 镜像标签。")]),S,i(p),P,i(k)])}const H=r(d,[["render",x]]);export{G as __pageData,H as default};
