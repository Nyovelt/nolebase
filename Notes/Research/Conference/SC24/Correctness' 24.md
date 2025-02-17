---
tags:
  - Research
  - SC24
  - PLSE
---
# Correctness Workshop
## Popular topics
- Correctness in MPI and OpenMP (Ray, NCCL?)
- Floating-point error detection (tf32? bf16?)
- ...
Formal Methods + HPC + Tools (debugging) + Bugs

## Session 1: Numerical Correctness

### Atmospheric Model (MPAS-A)
- Large, very large
- Challenges
	- compiler and hardware changes
- Ensemble Consistency Test
	- Test distributions
- fused-multiply add is not consistent on different machine
	-  A = A + (B x C) 
	- It has hardware optimization, and uniquely caused failures, sensitive to compilers, optimizations and hardware specifications.
- Compare FMA vs No-FMA Distributions
- What part of code is most impacted?
	- 36 different modules
	- Diff testing
		- Find `mp_wsm6`
		- `Highly branching`
		- Code coverage testing

- My question:
	- Introduce by users code or some lib like blas?
- Other questions?
	- what branch? loops.
	- Unit error?

### Precise in weather model
- UC Davis PLSE Group
- trade correctness (accuracy) with performance
- How to tune float numbers (`kind` in F)
- automated performance guided tunning on FPs in hotspot Vars in 3 weather models
	- **Precimonious search**
	- $O(nlogn)$
- keys
	- less FP data into hotspot
	- source code support auto vec
	- less FP into kernels
- key1: dynamic masking decrease the overall performance (Pareto efficient bad)
- key2: mem bound 
- key3: inprecise

- Questions:
	- energy?

### verify exact conditions for implementations of density function approx (DFT)
- Hohenberg-Kohn Theorem
- `libxc`
- grid search
- SMT solver
- XC Verifier - Encode DFT local condition to SMT Solver
- `SymPy`
- `dReal`

### [Impacts of floating-point non-associativity on reproducibility for HPC and deep learning applications](https://sc24.conference-program.com/?post_type=page&p=14&id=ws_corr108&sess=sess759)
- Non-determinism in pytoech
	- non-deterministic kernels, some of which do not have deterministic implementations
		- float
### Toward Automated Detection of Portability Bugs in Kokkos Parallel Program
- different  backend (cuda, HIP ...)
- static analysis with a mock object (gpu) 
- use klee

- Questions: 
	- borrow checking?

### Facilitating Bug Detection for OpenMP Offloading Applications
- heterogenous
- use llvm features
- model checking
- openmp / tools / archer
- `llvm15` : simd runtime analysis, SSE2

### omp test
### Compiler-Aided Correctness Checking of CUDA-Aware MPI Applications
- concurrency bugs
- model checking
- `threadsanitier` in llvm to detect data race.
- CuSan

### Dynamic analysis, data race
- binary instrumentation



