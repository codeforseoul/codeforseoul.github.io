# 코드포서울 slack 자동 초대 구현하기

처음 코드포서울 핵나잇에 온 참여자가 slack을 사용하고 싶을 경우 코드포서울 슬랙 관리 권한이 있는 사람에게 메일 주소를 알려주면 그 관리자가 이 사람을 초대합니다. 그러면 해당 메일로 슬랙 회원가입 링크가 날라가고 참여자는 거기서 가입을 하고 사용할 수 있습니다. 이게 좀 폐쇄적이거나 번거로울 수 있어서 열린 커뮤니티답게 누구나 코드포서울 슬랙에 참여할 수 있으면 어떨까 고민하다가 트위터에서 이리저리 날라다니던 트윗을 보고 눈이 번쩍했습니다.

0. 발견!
```
https://github.com/rauchg/slackin
```
깃헙에 공개된 슬랙 자동 초대를 구현해주는 npm 모듈입니다. 이게 사실 자동 초대 api가 열려있다가 닫혔다가 다시 열려서 이렇게 시도하게됐습니다. 자세한 내막은 영어의 압박과 난독증으로 파악할 수 없지만 어쨌든 다시 열렸다니 이제 바로 사용해보자구요!

1. 설치
```
npm -g install slackin
```

2. API 토큰 얻기
그런데 슬랙 API를 사용해야 하기 때문에 API 토큰이 필요합니다. 아래 링크에서 생성합니다.
```
https://api.slack.com/web
```
API 토큰은 커밋하거나 하지말고 조용히 나만 알고 있습니다.

3. 실행
```
// 일단 실행
slackin codeforseoul {{API_TOKEN}} -p 4000

// 백그라운드 실행
nohup slackin codeforseoul {{API_TOKEN}} -p 4000 & 
```
실행할 때 나만 알고있는 토큰을 넣습니다. 노드나 기타 다른 인스턴스가 포트 충돌되면 저렇게 포트 지정해서 안 겹치게 올리시면 됩니다.

4. nginx 설정 및 도메인 레코드 설정
```
slack.codeforseoul.org => A record xxx.xxx.xxx.xxx

server {
  listen 80;
  server_name {{slack.domain.org}};
  location / {
    proxy_pass http://127.0.0.1:4000;
  }
}

service nginx reload!
```
도메인 A 레코드 설정하시고, 80 포트로 사용할 도메인을 듣고 프록시로 4000포트 연결해주면  끝!
