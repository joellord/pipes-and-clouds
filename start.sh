echo "🛫 Starting Minikube"
minikube start

echo "🚽 Clean up old crap"
kubectl delete all --all
kubectl delete task,pipeline,pr,tr --all

echo "🚀 Start local server and presentation"
cd presentation
concurrently "node ." "npm start"