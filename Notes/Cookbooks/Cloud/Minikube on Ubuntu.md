---
tags:
  - DevOps
  - Ubuntu
  - Kubenetes
---
# Install minikube on Ubuntu
1. Read [minikube start](https://minikube.sigs.k8s.io/docs/start/)
```shell
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```
2. Install Kubectl (If it said `error: no server found for cluster "minikube"`)
```shell
alias kubectl='minikube kubectl -p seattle -- '
echo "alias kubectl='minikube kubectl -p seattle -- '" > ~/.bashrc
```
## Useful Commands
```shell
kubectl get po -A
minikube start -p <cluster_name>
sudo usermod -aG docker $USER && newgrp docker
```