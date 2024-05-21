---
tags:
  - AI
  - LLM
  - scale
---
# LLM: From 1 to 1000
## Introduction
In this article, we will discuss the Large Language Model (LLM) scaling from one request to multiple requests, a single model to multiple models, one GPU card to multiple cards, and a node to multiple nodes.

## Beginning: Self-Host
To run large language models easily, use Ollama. This Go-based program allows you to serve models locally while providing standard OpenAI API compatibility and abstraction similar to a Dockerfile  ([Modelfile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)).

Its backend  relies on [llama.cpp](https://github.com/ggerganov/llama.cpp), an open-source C++ framework that enables efficient inference of machine learning models. It is constantly being optimized to improve performance and support multiple architectures simultaneously, thanks to its custom CUDA kernels and quantization. 

 Additionally, further potential optimizations can be achieved by fine-tuning control over CUDA kernels, previously explored by [Rammer](https://www.usenix.org/system/files/osdi20-ma.pdf) and currently being developed by researchers at CMU.

However, Ollama has a concurrency limitation, which we'll discuss in the next section.

## Can we serve more?
Although Ollama has accomplished [scheduling policies](https://github.com/ollama/ollama/blob/95ead8ffba312524c233063f89635953c44f2a73/server/sched.go), however it cannot reach multi-model serving and efficient multi-request serving. According its serving policy, although Ollama can reuse the model in the memory, it may unload the least recently used model (or based on another policy) to free up resources when a new request coming for another models. 

Additionally, ~~its backend [llama.cpp](https://github.com/ggerganov/llama.cpp) lacks multi GPU support~~ although [llama.cpp](https://github.com/ggerganov/llama.cpp) added pipeline parallelism support [recently](https://github.com/ggerganov/llama.cpp/pull/6017), it may take some time for Ollama to sync this update.

To serve multiple users across GPUs and nodes, we need a better scheduler and a better parallelism policy. In the case of a smaller model, the former issue needs to be addressed more urgently and is easier to solve – we can achieve scalability by running multiple instances. What scheduler is more robust and mature than Kubernetes? We can leverage the reliability and scalability of Kubernetes to serve LLM instances in pods, scale replicas as different requests come in, and store data in persistent volumes. 

A simple implementation is [ollama-operator](https://github.com/nekomeowww/ollama-operator), 

