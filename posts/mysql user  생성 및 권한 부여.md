---
title: [DB]Mysql User 생성 및 권한 부여
date: 2019-12-03 10:16:48
path: mysqlUser
tag: DB
---

# Mysql User 생성 및 권한 부여

## 계정 로그인

`mysql -u root -p`
<br>

## 로컬에서 접속 가능한 사용자 추가

`create user '사용자'@'localhost' identified by '비밀번호';`
<br>

## 모든 DB에 접근 가능하도록

`grant all privileges on _._ to '사용자'@'localhost';`
<br>

## 특정 DB에만 접근 가능하도록

`grant all privileges on DB이름.\* to '사용자'@'localhost';`
<br>

## 특정 DB에 대하여 사용자가 103.xxx.200.으로 시작하는 IP에서만 접근 가능하도록

`grant all privileges on DB이름.\* to '사용자'@'103.xxx.200.%'`
<br>

## 비밀번호를 넣어 접근 가능 하도록

<br>위의 모든것 뒤에 `identified by '비밀번호'`

<br>

## 사용자 계정 삭제

`drop user '사용자'@'localhost';`
