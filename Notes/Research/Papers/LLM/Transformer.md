---
tags:
  - Papers
  - PhD
  - Transformer
  - LLM
---
# Transformer
## **What are the _motivations_ for this work?**
Recurrent Neural Network is the State-Of-the-Art approaches in NLP. And people want to improve its model quality and training efficiency (use more GPU for example).

The fundamental constraint of sequential computation **limit its upper bound of performance**. 
## **What is the proposed _solution_?**
Transformer eschewed recurrence (the part of sequential computation) and relied on **attention mechanism**, which allowed for significantly more parallelization.

### Multi-head Attention
each of the layers in our encoder and decoder contains a fully connected feed-forward network
![](https://webresources.aaaab3n.moe/share/SCR-20240322-ndvv.png)
Lora is applies to $a_{aj}$
### Position-wise Feed-Forward Networks
each of the layers in our encoder and decoder contains a fully connected feed-forward network

## Related Knowledge
- [RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network)
	- [Long short-term memory (LSTM)](https://en.wikipedia.org/wiki/Long_short-term_memory)
	- Hidden State 
- Encoder-Decoder architecture
	- ![](https://webresources.aaaab3n.moe/share/SCR-20240322-chfl.png)
- Self-attention
	- Attention, broadly construed, is a method for taking a query, and softly looking up information in a key-value store by picking the value(s) of the key(s) most like the query.


## Useful Links
https://youtu.be/P127jhj-8-Y?si=ORJMt5Mam7pNxCQN
https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf
https://zhuanlan.zhihu.com/p/604739354