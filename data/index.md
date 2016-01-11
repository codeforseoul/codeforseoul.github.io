---
title: 데이터
---

## [19대 국회의원 정보](https://github.com/codeforseoul/data/blob/master/politics/19th_assembly_members.csv)
* file: `19th_assembly_members.csv`
* data: [열려라 국회](http://watch.peoplepower21.org/)
* code
    * crawling: [Congress Report 프로젝트](http://github.com/codeforseoul/congress-report)

## [19대 본회의/상임위원회 출석 정보](https://github.com/codeforseoul/data/blob/master/politics/19th_member_attendances.csv)
* file: `19th_member_attendances.csv`
* data: [열려라 국회](http://watch.peoplepower21.org/)
* code:
    * crawling: [Congress Report 프로젝트](http://github.com/codeforseoul/congress-report)
    * cleaning: [Python Source Code](https://gist.github.com/hoony/6b9321fc280f9f716320)
* columns
    * `idx`: idx
    * `name_kr`: 이름
    * `party`: 정당
    * `when_elected`: 국회의원 당선 이력
    * `cat`: 출석 회의 종류(본회의 / 상임위원회)
    * `total`: 전체 회의 횟수
    * `attend`: 출석 횟수
    * `absence`: 결석 횟수
    * `leave`: 청가 횟수

## [19대 국회의원 표결 정보](https://github.com/codeforseoul/data/blob/master/politics/19th_votes_results.csv)
* file: `19th_votes_results.csv`
* data: [열려라 국회](http://watch.peoplepower21.org/)
* code:
    * crawling: [Congress Report 프로젝트](http://github.com/codeforseoul/congress-report)
    * cleaning: [Python Source Code](https://gist.github.com/hoony/23d09ed44bbf4c3e262a)
* columns
    * `idx`: idx
    * `name_kr`: 이름
    * `party`: 정당
    * `vote`: 표결 결과(찬성, 반대, 불참, 결석, 청가)
    * `bill_idx`: 의안 ID
    * `bill_name`: 의안명
    * `date`: 회의 날짜
    * `turn`: 회의 회차
    * `status`: 의안 가결 결과
