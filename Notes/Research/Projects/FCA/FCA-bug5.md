---
tags:
  - FCA
  - Papers
---
# FCA-bug5 Journals

## Requirements
- docker
- minikube
- kubectl
- python3, python3-pip
- tmux
- [helm](https://helm.sh/docs/intro/install/)
## Start Minikube
```shell
# Need a lot cpus for the experiment
minikube start -p seattle --cpus $(nproc)
```
## File locations
- `~/Downloads/DeathStarBench`
- `~/main`
## Run Experiment
### Create Prometheus
#### use [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus)
```shell

git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus

# Create the namespace and CRDs, and then wait for them to be available before creating the remaining resources
# Note that due to some CRD size we are using kubectl server-side apply feature which is generally available since kubernetes 1.22.
# If you are using previous kubernetes versions this feature may not be available and you would need to use kubectl create instead.
kubectl apply --server-side -f manifests/setup
kubectl wait \
	--for condition=Established \
	--all CustomResourceDefinition \
	--namespace=monitoring
kubectl apply -f manifests/
```
#### Forward Ports
```shell
# After pods Running
# Check by `kubectl get pods -A`
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
```