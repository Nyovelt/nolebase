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

## Can we serve more?
Although Ollama has accomplished [scheduling policies](https://github.com/ollama/ollama/blob/95ead8ffba312524c233063f89635953c44f2a73/server/sched.go), however it cannot reach multi-model serving and efficient multi-request serving. According its serving policy, although Ollama can reuse the model in the memory, it may unload the least recently used model (or based on another policy) to free up resources when a new request coming for another models. Additionally, 
