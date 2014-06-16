# Code for Seoul 웹사이트

[Code for Chicago]("http://opengovhacknight.org/")의 [프로젝트]("https://github.com/open-city/open-gov-hack-night")를 Code for Seoul에 맞게 수정한 홈페이지입니다.

## 로컬에서 실행하기

```console
git clone https://github.com/codeforseoul/codeforseoul.git
cd codeforseoul
gem install jekyll
jekyll serve -w
```console


## 의존성

* [Jekyll](http://jekyllrb.com/) - Static site generator built in Ruby
* [Bootstrap 3](http://getbootstrap.com) - HTML and CSS layouts
* [DataTables](http://datatables.net) - for searching and sorting talbes
* [Mustache](http://github.com/janl/mustache.js) - templating library for javascript (used on projects page)
* [jQuery Address](http://github.com/asual/jquery-address) - for deep linking URLs on the projects page

## Projects와 People

[Projects](http://codeforseoul.codenamu.org/projects.html)와 [People](http://codeforseoulcodenamu.org/people.html) 페이지는  [Github](https://github.com/) API [civic-json-worker](https://github.com/codeforseoul/civic-json-worker) 데이터를 가져오고 있습니다.
