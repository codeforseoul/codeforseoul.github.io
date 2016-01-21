---
title: 데이터
---

# [정치](https://github.com/codeforseoul/data/tree/master/politics)

## [19대 국회의원 정보](https://github.com/codeforseoul/data/blob/master/politics/assembly_members/data/19th.csv)

* path: `assembly_members`
* source: [열려라 국회](http://watch.peoplepower21.org/)
* code
    * crawling: [Congress Report 프로젝트](http://github.com/codeforseoul/congress-report)

## [19대 본회의/상임위원회 출석 정보](https://github.com/codeforseoul/data/blob/master/politics/assembly_attendances/data/19th.csv)

* path: `assembly_attendances`
* source: [열려라 국회](http://watch.peoplepower21.org/)
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

## [19대 국회의원 표결 정보](https://github.com/codeforseoul/data/blob/master/politics/assembly_votes_results/data/19th.csv)
* path: `assembly_votes_results`
* source: [열려라 국회](http://watch.peoplepower21.org/)
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

# [경제](https://github.com/codeforseoul/data/tree/master/economy)

## [3년 만기 대한민국 정부채권 수익률](https://github.com/codeforseoul/data/blob/master/economy/kr-government-bond-yields/data/data.csv)

* path: `kr-government-bond-yields`
* source: [e-나라지표](http://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1073)
* columns
    * date: 해당년도
    * rate: 수익률
