---
tags:
  - LLM
  - AI
  - huggingface
  - toolchain
---
# huggingface
## What is huggingface
huggingface is a place to store models, datasets and other things. More like a github for machine learning peoples. 
## Compatible APIs
For example for a transformers model, anyone can load it with:
```python3
tokenizer = AutoTokenizer.from_pretrained("username/repo_name")
model = AutoModel.from_pretrained("username/repo_name")
```
