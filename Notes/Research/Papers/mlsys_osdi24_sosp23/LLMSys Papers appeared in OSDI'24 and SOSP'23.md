---
tags:
  - Research
  - LLM
  - mlsys
  - osdi
  - sosp
---
# LLMSys Papers appeared in OSDI'24 and SOSP'23
## SOSP'23
At SOSP'23, there were 9 papers on machine learning systems. Among them, three focused on traditional machine learning system optimization, one on schedulers. For LLM applications, there was one paper on compiler optimization for matrix computation, two on inference, and two on fault tolerance. Due to the continuous expansion and innovation of computing scale and methods, fault tolerance has become a new hotspot in the second half of 2023.
## compilation
**PIT: Optimization of Dynamic Sparse Deep Learning Models via Permutation Invariant Transformation**

## inference
**Paella: Low-latency Model Serving with Software-defined GPU Scheduling** by Kelvin K.W. Ng (University of Pennsylvania), Henri Maxime Demoulin ([DBOS](https://www.zhihu.com/search?q=DBOS&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3284535941%7D), Inc.) and Vincent Liu (University of Pennsylvania)

Implement an AI compiler integrated with a scheduler client to optimize the execution efficiency of CUDA kernels. Compared to the existing SOTA, it increases the GPU throughput by 11 times and reduces the latency by 58 times.

**vLLM: Efficient Memory Management for Large Language Model Serving with PagedAttention** by Woosuk Kwon (UC Berkeley), Zhuohan Li (UC Berkeley), Siyuan Zhuang (UC Berkeley), Ying Sheng (Stanford University), Lianmin Zheng (UC Berkeley), Cody Hao Yu (Independent Researcher), Joseph Gonzalez (UC Berkeley), Hao Zhang (UC San Diego) and Ion Stoica (UC Berkeley)

By optimize the KV Cache in matrix calculations, vLLM framework can accelerate the inference speed of large language models.

## fault tolerance
**GEMINI: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints** by Zhuang Wang (Rice University), Zhen Jia (Amazon Web Services, Inc.), Shuai Zheng (Amazon Web Services), Zhen Zhang (Amazon Web Services), Xinwei Fu (Amazon Web Services), T. S. Eugene Ng (Rice University) and Yida Wang (Amazon)

By designing a hierarchical memory system for checkpoints (in-memory and persistent storage), GEMINI accelerated failure recovery by a factor of 13 compared to SOTA.
  
**Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates** by Insu Jang (University of Michigan), Zhenning Yang (University of Michigan), Zhen Zhang (Amazon Web Services), Xin Jin (Peking University) and Mosharaf Chowdhury (University of Michigan)

In pipeline parallelism, reconfiguring the pipeline parallelism can accelerate failure recovery, which is faster than retraining from a checkpoint.

## OSDI'24

Over half are LLM Serving. 

### Large Language Model (LLM) Serving
1. **Llumnix: Dynamic Scheduling for Large Language Model Serving**
   - From Alibaba

2. **dLoRA: Dynamically Orchestrating Requests and Adapters for LoRA LLM Serving**
   - From PKU
   - Related work:  [S-LoRA [MLSys'24]](https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2311.03285.pdf), [Punica [MLSys'24]](https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2310.18547.pdf), [SqueezeLLM [ICML 2024]](arxiv.org/abs/2306.07629), [GPTQ](https://arxiv.org/abs/2210.17323)

3. **DistLLM: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving**
   - From PKU
   - Related work: [Splitwise [ISCA'24]](https://www.microsoft.com/en-us/research/publication/splitwise-efficient-generative-llm-inference-using-phase-splitting/)

4. **Fairness in Serving Large Language Models**
   - From UC Berkeley

5. **ServerlessLLM: Locality-Enhanced Serverless Inference for Large Language Models**
   - From UoE
   - [SpotServe [ASPLOS'24]](https://arxiv.org/pdf/2311.15566), [Parcae [NSDI'24]](https://www.usenix.org/system/files/nsdi24-duan.pdf)

6. **Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve**
   - From GaTech
   - Related work:  [DeepSpeed SplitFuse [Microsoft]](https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2401.08671.pdf)

7. **Parrot: Efficient Serving of LLM-based Applications with Semantic Variable**
   - From SJTU & MSRA

### Deep Learning Training and Inference Optimization
1. **Bitter: Enabling Efficient Low-Precision Deep Learning Computing through Hardware-aware Tensor Transformation**
   - From MSRA

2. **Cuber: Constraint-Guided Parallelization Plan Generation for Deep Learning Training**
   - From USTC & MSRA
   - Related work:  [Alpa [OSDI'22]](https://link.zhihu.com/?target=https%3A//www.usenix.org/conference/osdi22/presentation/zheng-lianmin)[Unity [OSDI'22]](https://link.zhihu.com/?target=https%3A//www.usenix.org/conference/osdi22/presentation/unger),[Galvatron[VLDB'23]](https://link.zhihu.com/?target=https%3A//www.vldb.org/pvldb/vol16/p470-miao.pdf)

3. **Automatic and Efficient Customization of Neural Networks for ML Applications**
   - From UChicago

4. **MonoInfer: Enabling a New Monolithic Optimization Space for Neural Network Inference Tasks on Modern GPU-Centric Architectures**
   - From USYD

5. **Enabling Tensor Language Model to Assist in Generating High-Performance Tensor Programs for Deep Learning**
   - From HNU & Huawei

6. **USHER: Holistic Interference Avoidance for Resource Optimized ML Inference**
   - From MSR

### Distributed and Online Learning
1. **Caravan: Practical Online Learning of In-Network ML Models with Labeling Agents**
   - From Stanford

2. **Dynamic Scheduling of ML Training across Geo-Distributed Datacenters: Principles and Experiences**
   - From OSU
## Main reference 
- https://www.zhihu.com/question/623328589/answer/3284535941  (孙挺Sunt)
- https://www.zhihu.com/question/649626302/answer/3440577248 (Hsword)
