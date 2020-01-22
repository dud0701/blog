---
title: Raspberrypi에 docker 올리기(작성중)
date: 2020-01-22 18:21:32
path: dockerWRaspberrypi
tag: Docker
---

# Raspberrypi에 docker 올리기

(정리중)

업무 중에 raspberrypi에 docker와 docker compose를 올려서 spring boot 서버를 띄워야 할 업무가 주어졌다.<br>
docker가 무엇인지 어렴풋이만 알고 있는 상태였다. 이론만 조금 알고 실제로 어떤 설정파일들을 어떻게 변경 해야하는지 하나도 몰랐다.<br>
지금도 여전히 어렵고 잘 모르겠지만 이번 프로젝트를 하면서 진짜 조오오금 더 알게 되었다. 아예 아무것도 몰랐을 때는 너무 큰 벽이었는데
알고나서 보니 너무 편리한 것 같다. 특히 docker compose!!!!<br>
이 글은 까먹지 않도록 메모의 용도다.<br>

## 첫째날

라즈비안 (OS) 설치 후

    1. docker 설치 script 다운
    2. get-docker.sh sciprt 실행 해서 docker 설치
    3. 일반계정으로 docker 사용가능하게 하기.
    4. docker run hello-world 테스트'

docker-compose 설치하기 .
[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
여기 따라서
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose
이렇게 해 봣는데 docker-compose 파일이 만들어지긴 했는데 열어보니 Notfound란다.
/usr/local/bin/docker-compose: line 1: Not: command not found 이란 에러가 뜬다.
구글링 해 보니
[https://github.com/docker/compose/issues/6268](https://github.com/docker/compose/issues/6268)
raspbian은 32bit OS 랏 ㅓ안되다`~ ~

다시 찾아서
[https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl](https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl)

[https://withblue.ink/2019/07/13/yes-you-can-run-docker-on-raspbian.html](https://withblue.ink/2019/07/13/yes-you-can-run-docker-on-raspbian.html)
curl로 설치가 아닌 설치 pip로 설치

---

## 둘째날

docker registry도 뭔지 잘 몰랐다.. 도대체 어디에 있는건지??? 어떻게 pull 받는건지 ??? 어떤 원리인건지 ??

1. 이미지 만들고
2. docker tag로 tag 만들고
3. docker login으로 registry에 로그인 한 다음에
4. docker push 하면 그 registry로 올리는것
   그 다음 다른 도커에서 로그인하고 pull 받아서 쓰면 된다.
   Dockerfile - build, run 할 때 docker가 참고하는 파일????<br>
   docker-compose.yml - docker-compose 설정파일 (편리하다!!)<br>

참고 사이트<br>
[https://medium.com/withj-kr/d-3eba3de2894e](https://medium.com/withj-kr/d-3eba3de2894e) - docker-compose도 정말 잘 설명 해 놓으셨다!!<br>
[https://sarc.io/index.php/cloud/1552-docker-1-docker](https://sarc.io/index.php/cloud/1552-docker-1-docker)<br>
[https://novemberde.github.io/2017/04/09/Docker_Registry_0.html](https://novemberde.github.io/2017/04/09/Docker_Registry_0.html)<br>
[https://spring.io/guides/gs/spring-boot-docker/](https://spring.io/guides/gs/spring-boot-docker/)<br>
[https://docs.docker.com/compose/install/#install-compose](https://docs.docker.com/compose/install/#install-compose)<br>
[https://community.influxdata.com/t/newbie-installing-influx2-0-on-raspberry-pi-3-model-b-exec-format-error/12046](https://community.influxdata.com/t/newbie-installing-influx2-0-on-raspberry-pi-3-model-b-exec-format-error/12046)<br>
[http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter04/03](http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter04/03)<br>
[http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter07/09](http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter07/09)<br>
[http://pyrasis.com/docker.html](http://pyrasis.com/docker.html)<br>
[https://www.docker.com/blog/happy-pi-day-docker-raspberry-pi/](https://www.docker.com/blog/happy-pi-day-docker-raspberry-pi/)<br>
