---
tags:
  - Papers
  - LLM
  - Serverless
---
# ServerlessLLM: Locality-Enhanced Serverless Inference for Large Language Models [paper](https://arxiv.org/abs/2401.14351) [repo](https://github.com/ServerlessLLM/ServerlessLLM)
##  What are the _motivations_ for this work?
Large Language Models (LLMs) have recently been incorporated into various online applications, and Serving LLM inference at scale is a challenging problem. LLM requires huge GPU resources, which is expensive today.

The technical challenge of serving LLM includes:
1. LLM is a memory intensive application
2. highly dynamic, bursty traffic for LLM application

The technical challenge of serving LLM as Microservices includes:
1. Transport from model repositories
2. Costly checkpoint loading from storage devices

The current solution for Machine Learning Serverless Application include checkpointing, which has significant overheads and latencies. And there are other solutions (and drawbacks) for Regular Serverless Application:
1. Keep instances warm: waste GPU resources
2. Memory Caching: not efficient for Large Models
3. Additional  Storage Server: Large communication overhead

## **What is the proposed _solution_?**
Leveraging the multi-tier storage architecture for local checkpoint storage and utilizing their significant storage bandwidth for efficient checkpoint loading, which includes:
1. Fast LLM checkpoint loading: Increase memory addressing efficiency
2. Locality-driven LLM inference with **live migration**
3. Locality-aware server allocation
### Fast LLM checkpoint loading

![x9zbVr](https://webresources.aaaab3n.moe/uPic/x9zbVr.png)

- Preloading on GPU
- Utilize parallelized PCIE, direct r/w and throughput optimization.
- **Question Mark**: Preloading may introduce new overheads, and description here is not clear enough.
### Locality-Driven LLM Inference with Live Migration
![IBRwpi](https://webresources.aaaab3n.moe/uPic/IBRwpi.png)
![uyNbYu](https://webresources.aaaab3n.moe/uPic/uyNbYu.png)
- token-based migration
- And fault tolerance

 1. The model loading scheduler sends a model loading request to dest server to load model A into GPUs. If there is an idle instance of model A on dest server, the scheduler skips this step. 
 2. After loading, the scheduler sends a migration request carrying the address of dest server to src server. 
 3. Upon receiving a migrate request, src server sets itself as “migrating”, sends a resume request with intermediate tokens (i.e., input tokens and the output tokens produced before step 3) to dest server if the inference is not completed. Otherwise, it immediately returns to the scheduler. 
 4. dest server recomputes KV cache given the tokens in the resume request. 
 5. Once resume request is done, src server stops inference,returns to the scheduler, and replies to the request router with all tokens (i.e., the intermediate tokens together with the remaining tokens produced between step 3 and step 5) and a flag “migrated”. If long-context, the collection of all tokens can be very large thus resuming takes a long time, during which many new tokens are predicted. In such a case, we can repeat the above two steps to further reduce the tokens to send between src and dest. 
 6. The scheduler finishes the migration, unloads model A at src server and starts loading model B. 
 7. The request router checks the flag in the inference response. If it is “migrated”, the request router replaces src server with dest server in its route table and sends all tokens to dest server to continue inference.
### Locality-Aware Server Allocation
![Rl6i2d](https://webresources.aaaab3n.moe/uPic/Rl6i2d.png)

## **What is the work's _evaluation_ of the proposed solution?**
ServerlessLLM demonstrated a 10-200X improvement in latency for running OPT model inferences across datasets, which shows ServerlessLLM’s effectiveness.