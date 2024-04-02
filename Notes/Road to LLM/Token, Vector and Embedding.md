---
tags:
  - LLM
  - tokenize
  - vectorize
  - embedding
---
# Token, Vector and Embedding
## What is token
![NvdeuG](https://webresources.aaaab3n.moe/uPic/NvdeuG.png)
Token is more like translate human language to llm readable language use "vocabulary". In compilers, "**Lexical tokenization** is conversion of a text into (semantically or syntactically) meaningful _lexical tokens_ belonging to categories defined by a "lexer" program", similar in LLM, LLM will *tokeninze* word into a "number" mostly depend on its "word class" or language properties. 

## How to generate token

1. Read [tokenizer.py](https://github.com/meta-llama/llama/blob/54c22c0d63a3f3c9e77f43a6a3041c00018f4964/llama/tokenizer.py#L14)
	1. Load model. (So the tokenizer is different from each model, in this case, `llama` use `SentencePiece` from Google (Not from llama itself))
2. Encode a string into a list of token IDs.

## Cost 
Try to run `tokenizer` for `meta-llama/llama`

My code is (modified from [here](https://gist.github.com/slaren/9f26fc4cb24685d42601b1d91d70a13a))
```python
from llama import Tokenizer

model_path = 'tokenizer.model'

tokenizer = Tokenizer(model_path=model_path)

text = "What is the answer to the life, the universe and everthing?"

tokens = tokenizer.encode(text, bos=True, eos=False)

print(tokens)

for tid in tokens:

tk = tokenizer.decode([tid])

print(f"{tid:>6} -> '{tk}'")

print(tokenizer.decode(tokens))
```

It runs on cpu, cost 200MB memory and 20% of 16 core CPU (paralleled).

## What is Vectorize
