##Personal Server k3s practice

# 2025-10-15
[hello-app](https://hello.hyunbindev.site)
## 작업 내용
- React Build 파일을 Kubernetes를 통해 배포
  - **Deployment**: `hello-app-front` 컨테이너 생성, 이미지 `hello-app-front:latest` 사용
  - **Service**: ClusterIP로 Deployment 노출, 포트 80
  - **Ingress**: Nginx Ingress Controller를 통해 도메인 `hello.hyunbindev.site`에 매핑
- **TLS 적용**
  - `cert-manager` + `letsencrypt` ClusterIssuer 사용
  - Ingress에 TLS 설정 (`secretName: ddm-ingress-tls`)
  - HTTPS 자동 갱신 적용
## 주요 명령어
# Docker 이미지 빌드
docker build -t hello-app-front:latest .

# k3s에 이미지 가져오기 (단일 노드)
sudo k3s ctr images import hello-app-front.tar

# Deployment, Service, Ingress 적용
kubectl apply -f deployment.yml -n hello-app
kubectl apply -f service.yml -n hello-app
kubectl apply -f ingress.yml -n hello-app

# Deployment 강제 재시작 (이미지 업데이트 시)
kubectl rollout restart deployment hello-app-front -n hello-app
