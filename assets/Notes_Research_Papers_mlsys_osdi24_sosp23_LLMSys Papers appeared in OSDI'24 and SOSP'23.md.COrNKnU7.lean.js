import{_ as h,c as u,J as a,m as e,a as n,w as i,V as o,E as t,o as d}from"./chunks/framework.afRX3mrX.js";const H=JSON.parse(`{"title":"LLMSys Papers appeared in OSDI'24 and SOSP'23","description":"","frontmatter":{"tags":["Research","LLM","mlsys","osdi","sosp"]},"headers":[],"relativePath":"Notes/Research/Papers/mlsys_osdi24_sosp23/LLMSys Papers appeared in OSDI'24 and SOSP'23.md","filePath":"Notes/Research/Papers/mlsys_osdi24_sosp23/LLMSys Papers appeared in OSDI'24 and SOSP'23.md"}`),p={name:"Notes/Research/Papers/mlsys_osdi24_sosp23/LLMSys Papers appeared in OSDI'24 and SOSP'23.md"},g=e("h1",{id:"llmsys-papers-appeared-in-osdi-24-and-sosp-23",tabindex:"-1"},[n("LLMSys Papers appeared in OSDI'24 and SOSP'23 "),e("a",{class:"header-anchor",href:"#llmsys-papers-appeared-in-osdi-24-and-sosp-23","aria-label":`Permalink to "LLMSys Papers appeared in OSDI'24 and SOSP'23"`},"​")],-1),f=o("",5),_=e("strong",null,"Paella: Low-latency Model Serving with Software-defined GPU Scheduling",-1),m=o("",11),S=e("li",null,[e("p",null,[e("strong",null,"Llumnix: Dynamic Scheduling for Large Language Model Serving")]),e("ul",null,[e("li",null,"From Alibaba")])],-1),b=e("p",null,[e("strong",null,"dLoRA: Dynamically Orchestrating Requests and Adapters for LoRA LLM Serving")],-1),L=e("li",null,"From PKU",-1),P=e("p",null,[e("strong",null,"DistLLM: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving")],-1),w=e("li",null,"From PKU",-1),y=e("li",null,[e("p",null,[e("strong",null,"Fairness in Serving Large Language Models")]),e("ul",null,[e("li",null,"From UC Berkeley")])],-1),v=e("p",null,[e("strong",null,"ServerlessLLM: Locality-Enhanced Serverless Inference for Large Language Models")],-1),M=e("li",null,"From UoE",-1),k=e("p",null,[e("strong",null,"Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve")],-1),A=e("li",null,"From GaTech",-1),T=e("li",null,[e("p",null,[e("strong",null,"Parrot: Efficient Serving of LLM-based Applications with Semantic Variable")]),e("ul",null,[e("li",null,"From SJTU & MSRA")])],-1),I=e("h3",{id:"deep-learning-training-and-inference-optimization",tabindex:"-1"},[n("Deep Learning Training and Inference Optimization "),e("a",{class:"header-anchor",href:"#deep-learning-training-and-inference-optimization","aria-label":'Permalink to "Deep Learning Training and Inference Optimization"'},"​")],-1),D=e("li",null,[e("p",null,[e("strong",null,"Bitter: Enabling Efficient Low-Precision Deep Learning Computing through Hardware-aware Tensor Transformation")]),e("ul",null,[e("li",null,"From MSRA")])],-1),C=e("p",null,[e("strong",null,"Cuber: Constraint-Guided Parallelization Plan Generation for Deep Learning Training")],-1),O=e("li",null,"From USTC & MSRA",-1),x=o("",4),z=o("",3),U=e("h2",{id:"contributor",tabindex:"-1"},[n("Contributor "),e("a",{class:"header-anchor",href:"#contributor","aria-label":'Permalink to "Contributor"'},"​")],-1),N=e("h2",{id:"changelog",tabindex:"-1"},[n("Changelog "),e("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1);function R(q,E,F,V,G,B){const l=t("NolebasePageProperties"),r=t("VPNolebaseInlineLinkPreview"),s=t("NolebaseGitContributors"),c=t("NolebaseGitChangelog");return d(),u("div",null,[g,a(l),f,e("p",null,[_,n(" by Kelvin K.W. Ng (University of Pennsylvania), Henri Maxime Demoulin ("),a(r,{href:"https://www.zhihu.com/search?q=DBOS&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3284535941%7D",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("DBOS")]),_:1}),n(", Inc.) and Vincent Liu (University of Pennsylvania)")]),m,e("ol",null,[S,e("li",null,[b,e("ul",null,[L,e("li",null,[n("Related work:  "),a(r,{href:"https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2311.03285.pdf",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("S-LoRA [MLSys'24]")]),_:1}),n(", "),a(r,{href:"https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2310.18547.pdf",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Punica [MLSys'24]")]),_:1}),n(", "),a(r,{href:"./arxiv.org/abs/2306.07629.html"},{default:i(()=>[n("SqueezeLLM [ICML 2024]")]),_:1}),n(", "),a(r,{href:"https://arxiv.org/abs/2210.17323",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("GPTQ")]),_:1})])])]),e("li",null,[P,e("ul",null,[w,e("li",null,[n("Related work: "),a(r,{href:"https://www.microsoft.com/en-us/research/publication/splitwise-efficient-generative-llm-inference-using-phase-splitting/",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Splitwise [ISCA'24]")]),_:1})])])]),y,e("li",null,[v,e("ul",null,[M,e("li",null,[a(r,{href:"https://arxiv.org/pdf/2311.15566",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("SpotServe [ASPLOS'24]")]),_:1}),n(", "),a(r,{href:"https://www.usenix.org/system/files/nsdi24-duan.pdf",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Parcae [NSDI'24]")]),_:1})])])]),e("li",null,[k,e("ul",null,[A,e("li",null,[n("Related work:  "),a(r,{href:"https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2401.08671.pdf",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("DeepSpeed SplitFuse [Microsoft]")]),_:1})])])]),T]),I,e("ol",null,[D,e("li",null,[C,e("ul",null,[O,e("li",null,[n("Related work:  "),a(r,{href:"https://link.zhihu.com/?target=https%3A//www.usenix.org/conference/osdi22/presentation/zheng-lianmin",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Alpa [OSDI'22]")]),_:1}),a(r,{href:"https://link.zhihu.com/?target=https%3A//www.usenix.org/conference/osdi22/presentation/unger",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Unity [OSDI'22]")]),_:1}),n(","),a(r,{href:"https://link.zhihu.com/?target=https%3A//www.vldb.org/pvldb/vol16/p470-miao.pdf",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("Galvatron[VLDB'23]")]),_:1})])])]),x]),z,e("ul",null,[e("li",null,[a(r,{href:"https://www.zhihu.com/question/623328589/answer/3284535941",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("https://www.zhihu.com/question/623328589/answer/3284535941")]),_:1}),n(" (孙挺Sunt)")]),e("li",null,[a(r,{href:"https://www.zhihu.com/question/649626302/answer/3440577248",target:"_blank",rel:"noreferrer"},{default:i(()=>[n("https://www.zhihu.com/question/649626302/answer/3440577248")]),_:1}),n(" (Hsword)")])]),U,a(s),N,a(c)])}const W=h(p,[["render",R]]);export{H as __pageData,W as default};