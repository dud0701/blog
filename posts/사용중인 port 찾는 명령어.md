---
title: CLI/사용중인 port찾는 명령어
date: 2019-11-12 10:16:48
path: cli-port
tag: cli
---

# 사용중인 port 찾는 명령어

개발 하다 보면 react는 기본 3000포트인데 react에서는 포트가 겹치면 다른 포트로 열어서 띄울지 물어보고 다른 포트로 띄어준다. 근데 spring은 기본 8080이고 이미 8080에 뭔가가 띄워져 있으면 에러가 난다😥

## 전체 포트 보기

`netstat -a -o`

## 8080 포트 보기

`netstat -a -o | find "8080"`

## 포트 죽이기

`taskkill /f /pid [PID번호]`
