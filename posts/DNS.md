---
title: DNS?
date: 2020-01-20 17:10:48
path: dns
tag: Network
---

# DNS?

웹개발자라면 dns에 대해서(특히 어떻게 동작하는지!) 기본정도는 알아야 된다고 생각해서 정리 해 본다. <br>

## DNS 란?

`도메인 네임 시스템(Domain Name System, DNS)`은 호스트의 도메인 이름을 호스트의 네트워크 주소로 바꾸거나 그 반대의 변환을 수행할 수 있도록 하기 위해 개발되었다.<br>
특정 컴퓨터(또는 네트워크로 연결된 임의의 장치)의 주소를 찾기 위해, 사람이 이해하기 쉬운 도메인 이름을 숫자로 된 식별 번호(IP 주소)로 변환해 준다. 도메인 네임 시스템은 흔히 "전화번호부"에 비유된다. 인터넷 도메인 주소 체계로서 TCP/IP의 응용에서, www.example.com과 같은 주 컴퓨터의 도메인 이름을 192.168.1.0과 같은 IP 주소로 변환하고 라우팅 정보를 제공하는 분산형 데이터베이스 시스템이다.

## DNS 동작 원리

Local DNS 서버가 여러 DNS서버를 차례대로 (Root DNS 서버 -> com DNS 서버 -> naver.com DNS 서버)물어봐서 그 답을 찾는 과정을 **Recursive Query**라고 부른다고 한다.<br>
아래는 DNS 풀이(DNS resolution)의 과정? 이다.<br>
만약 1번에서 찾았다면 그 다음 서버에서 탐색하지 않고 바로 사이트를 찾아간다.<br>

1. Local Caches
2. Recursive DNS Servers
3. Root DNS Servers
4. Top Level DNS Servers
5. Authoritative DNS Servers

### 1. Local Caches

컴퓨터 내에서 찾아본다.

1. Browser Cache - 최근에 방문 했던 사이트라면 브라우져 캐시에 존재 할 수 있다.
2. DNS Cache - TTL 세팅에 기초하고, 이전에 방문 했었더라면 IP는 DNS 캐시에 존재 할 수 있다.
3. Hosts File - 사용자 컴퓨터에 있는 host 파일에 정의 했다면 host 파일에서 바로 찾을 수 있다. (hosts 파일 위치 : C:\Windows\System32\drivers\etc)

-   TTL ???<br>
    타임 투 리브(Time to live, TTL)는 컴퓨터나 네트워크에서 데이터의 유효 기간을 나타내기 위한 방법이다. TTL은 계수기나 타임스탬프의 형태로 데이터에 포함되며, 정해진 유효기간이 지나면 데이터는 폐기된다. 컴퓨터 네트워크에서 TTL은 패킷의 무한 순환을 방지하는 역할을 한다. 컴퓨터 애플리케이션에서 TTL은 캐시의 성능이나 프라이버시 수준을 향상시키는 데에 사용되기도 한다.

### 2. Recursive DNS Servers

-   PC는 미리 설정되어 있는 Local DNS에게 IP 주소를 물어봅니다.
-   이전에 방문 한적이 있는 페이지라면 캐싱 되어 있을 수도 있다.

### 3. Root DNS Servers

-   Root DNS 서버는 요청 된 도메인 이름에 대한 관련 TLD(Top Level DNS Servers) 서버를 찾아서 요청을 라우팅 해야 한다.
    ![](/rootDNS.png)

### 4. Top Level DNS Servers

참고 : <br>
[https://ko.wikipedia.org](https://ko.wikipedia.org)<br>
[https://roadmap.sh/guides/dns-in-one-picture](https://roadmap.sh/guides/dns-in-one-picture)<br>
