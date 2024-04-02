---
tags:
  - UCB
  - ShanghaiTech
  - Education
  - Courses
---
# Notes for UCB CS 188
## 1. Intro to AI
### AI History
- 1940-1950: Early days: neural and computer science meet
- 1950—70: Excitement! Logic-driven
	- 1965: Robinson's complete algorithm for **logical reasoning**
- 1970—90: Knowledge-based approaches
- 1990—: Statistical approaches
	-  Agents and learning systems
	- Resurgence of probability, focus on uncertainty
- 2000—: Where are we now?
	- Big data, big compute, neural networks
### Agent
An agent is an entity that perceives and acts
![](https://webresources.aaaab3n.moe/uPic/TsvOqF.png)
### Course Topics
- Search & Planning
	- How can I find a sequence of best decisions for a particular situation?
- Reinforcement Learning
	- How can I find rules (policy) to make best decisions for any situation?
- Probability & Inference
	- How can I make sense of uncertainty in the world?
- Supervised Learning
	- How can I learn a model of the world from data?

## 2. Uninformed Search
### Search Problems
A search problem consists of:
- A state space
- A successor function (with actions, costs)
- A start state and a goal test
A solution is a sequence of actions (a plan) which transforms the start state to a goal state

