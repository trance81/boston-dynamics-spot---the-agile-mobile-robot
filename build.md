## 프로덕션 빌드 & Rocky 서버 배포 방법

이 문서는 현재 프로젝트를 **로컬에서 빌드한 후**, **서버(Nginx)** 에 배포하는 표준 절차를 정리한 것입니다.


- 로컬 OS: Windows (Git Bash 또는 PowerShell 사용)
- 서버: Rocky Linux 9.x
- 서버 계정: `lp-web`
- 서버 IP: `10.92.32.46`
- Nginx 웹 루트: `/var/www/spot`

---

## 1. 로컬에서 빌드 실행

프로젝트 루트에서:

```bash
cd c:/Workspace/mkp_dev/boston-dynamics-spot---the-agile-mobile-robot
npm run build
```

성공하면 `dist/` 폴더가 생성되고, 그 안에 `index.html`, `assets/*`, 동영상 파일 등이 들어 있습니다.

---

## 2. 빌드 결과를 서버 홈 디렉터리로 복사 (scp)

로컬 터미널에서(비밀번호는 `lp-web` 계정 비밀번호 입력):

```bash
scp -r dist/* lp-web@10.92.32.46:~/spot-dist
```

설명:
- `/var/www/spot` 는 일반 사용자 권한으로 바로 쓸 수 없으므로,
- 먼저 **홈 디렉터리(`~/spot-dist`)** 로만 복사합니다.

---

## 3. 서버에 접속하여 Nginx 루트로 반영 (ssh + sudo)

### 3-1. 서버 접속

```bash
ssh lp-web@10.92.32.46
```

접속 후 프롬프트가 `lp-web@lp-web ~]$` 형태로 보이면 정상입니다.

### 3-2. 웹 루트 디렉터리 정리 및 복사

```bash
# 기존 배포본 삭제
sudo rm -rf /var/www/spot/*

# 새 빌드 결과를 웹 루트로 복사
sudo cp -r ~/spot-dist/* /var/www/spot/

# (선택) Nginx 계정이 파일에 접근할 수 있도록 소유자 조정
sudo chown -R nginx:nginx /var/www/spot
```

> 참고: `sudo cp` 명령 중에 너무 오래 입력이 없으면 SSH 세션이 타임아웃으로 끊길 수 있습니다.  
> 이 경우 다시 `ssh` 로 접속하여 위 명령을 재실행하면 됩니다.

---

## 4. Nginx 상태 확인

일반적으로 Nginx 설정은 한 번만 맞춰두면, 이후에는 파일만 교체하면 됩니다.
그래도 문제가 있으면 다음 명령으로 상태를 확인합니다.

```bash
sudo nginx -t          # 설정 문법 검사
sudo systemctl status nginx
sudo systemctl reload nginx   # 설정만 다시 읽기 (필요할 때)
```

---

## 5. 전체 배포 절차 요약

1. **로컬**
   - `npm run build`
   - `scp -r dist/* lp-web@10.92.32.46:~/spot-dist`

2. **서버**
   - `ssh lp-web@10.92.32.46`
   - `sudo rm -rf /var/www/spot/*`
   - `sudo cp -r ~/spot-dist/* /var/www/spot/`
   - `sudo chown -R nginx:nginx /var/www/spot` (필요 시)

3. **브라우저**
   - `http://서버IP` 또는 `https://도메인` 으로 접속해서 페이지가 정상 동작하는지 확인

