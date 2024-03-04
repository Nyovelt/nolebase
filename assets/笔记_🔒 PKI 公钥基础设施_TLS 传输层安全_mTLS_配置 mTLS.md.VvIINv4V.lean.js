import{_ as k,c as r,J as a,m as s,a as i,w as n,V as d,E as t,o}from"./chunks/framework.WH0rnJL5.js";const x=JSON.parse('{"title":"配置 mTLS","description":"","frontmatter":{"tags":["计算机/网络/网关/Nginx","数学/密码学/证书/TLS/SSL","数学/密码学/证书/TLS","数学/密码学/证书/证书机构","数学/密码学/证书/证书机构/CA","数学/密码学/证书/p12","计算机/信息技术/安全/网络安全/ZTNA","计算机/信息技术/安全/操作系统安全/KeyStore","数学/密码学/证书/PKI","命令行/openssl","数学/密码学/证书/TLS/mTLS"]},"headers":[],"relativePath":"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/mTLS/配置 mTLS.md","filePath":"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/mTLS/配置 mTLS.md"}'),c={name:"笔记/🔒 PKI 公钥基础设施/TLS 传输层安全/mTLS/配置 mTLS.md"},g=s("h1",{id:"配置-mtls",tabindex:"-1"},[i("配置 mTLS "),s("a",{class:"header-anchor",href:"#配置-mtls","aria-label":'Permalink to "配置 mTLS"'},"​")],-1),y=d("",57),F=s("h2",{id:"延伸阅读",tabindex:"-1"},[i("延伸阅读 "),s("a",{class:"header-anchor",href:"#延伸阅读","aria-label":'Permalink to "延伸阅读"'},"​")],-1),u=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),C=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function m(b,f,A,_,v,E){const l=t("NolebasePageProperties"),e=t("VPNolebaseInlineLinkPreview"),h=t("NolebaseGitContributors"),p=t("NolebaseGitChangelog");return o(),r("div",null,[g,a(l),s("p",null,[i("本文章着重参考了 "),a(e,{href:"https://jamielinux.com/docs/openssl-certificate-authority/introduction.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("OpenSSL Certificate Authority — Jamie Nguyen")]),_:1}),i(" 一站的文章说明和讲解。")]),y,s("p",null,[a(e,{href:"https://gist.github.com/yidas/af42d2952d85c0951c1722fcd68716c6",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Certificate(CSR) configuration file")]),_:1})]),s("p",null,[a(e,{href:"https://www.phildev.net/ssl/creating_ca.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Creating a CA")]),_:1})]),s("p",null,[a(e,{href:"https://unix.stackexchange.com/questions/398280/openssl-basic-configuration-new-certs-dir-certs",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("OpenSSL, basic configuration, new_certs_dir, certs - Unix & Linux Stack Exchange")]),_:1})]),s("p",null,[a(e,{href:"https://dadhacks.org/2017/12/27/building-a-root-ca-and-an-intermediate-ca-using-openssl-and-debian-stretch/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Building a Root CA and an Intermediate CA using OpenSSL and Debian Stretch | Dad Hacks")]),_:1})]),s("p",null,[a(e,{href:"https://www.jianshu.com/p/b92d4c8cbe05",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("openssl生成https自签名证书 - 简书")]),_:1})]),s("p",null,[a(e,{href:"https://jamielinux.com/docs/openssl-certificate-authority/create-the-intermediate-pair.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Create the intermediate pair — OpenSSL Certificate Authority — Jamie Nguyen")]),_:1})]),s("p",null,[a(e,{href:"https://www.golinuxcloud.com/create-certificate-authority-root-ca-linux/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Create Certificate Authority and sign a certificate with Root CA | GoLinuxCloud")]),_:1})]),s("p",null,[a(e,{href:"https://www.golinuxcloud.com/openssl-create-client-server-certificate/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("OpenSSL create client certificate & server certificate with example | GoLinuxCloud")]),_:1})]),s("p",null,[a(e,{href:"https://apfelboymchen.net/gnu/notes/openssl%20multidomain%20with%20config%20files.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("How to create multidomain certificates using config files")]),_:1})]),s("p",null,[a(e,{href:"https://smallstep.com/hello-mtls/doc/server/nginx",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Configuring Your Nginx Server for Mutual TLS — Smallstep")]),_:1})]),s("p",null,[a(e,{href:"https://tweenpath.net/convert-p12-bundle-to-server-certificate-and-key-files/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Convert .p12 bundle to server certificate and key files | Bots!")]),_:1})]),F,s("p",null,[a(e,{href:"https://smallstep.com/hello-mtls/doc/server/nginx",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Nginx 的简单 mTLS 配置 - smallstep")]),_:1})]),s("p",null,[a(e,{href:"https://www.nginx.com/blog/mtls-architecture-nginx-service-mesh/",target:"_blank",rel:"noreferrer"},{default:n(()=>[i("Nginx 服务网格中的 mTLS 架构 - Nginx")]),_:1})]),u,a(h),C,a(p)])}const q=k(c,[["render",m]]);export{x as __pageData,q as default};
