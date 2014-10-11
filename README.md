# 개발 환경
* [Jekyll](http://jekyllrb.com)

# 설치하기
1. 다음 가이드에 따라 'Jekyll'을 설치합니다.
: [http://jekyllrb.com/docs/installation/](http://jekyllrb.com/docs/installation/)

2. 해당 폴더로 이동하여 로컬 환경에서 Jekyll을 실행합니다.
참고: **-w 혹은 --watch** 옵션은 jekyll 서버를 동작하는 중에 파일이 변경될 경우 자동으로 변경된 사항을 적용하여 빌드합니다.

	```
	cd  /path/to/your-project/codeforseoul.github.io
	
	jekyll serve -w
	```
	
3. 개발 도중 ```_config.yml```을 변경한 경우 **-w 혹은 --watch** 옵션이 적용되지 않습니다. 따라서 서버를 중단한 뒤 새로 빌드하여야 합니다.

	```
	ctrl+c 로 로컬 서버 중단
	
	jekyll serve -w
	```

# 개발 시작!

# 라이선스
[라이선스 보기](https://github.com/codeforseoul/codeforseoul.github.io/blob/master/LICENSE)
