---
title: CORS
date: 2019-11-12 10:16:48
path: etc-cors
tag: ETC
---

# CORS

`CORS` 많이 들어봤지만 항상 회사에서는 세팅되어 있는 환경에서 개발을 하다 보니 마주친 적 없던 에러였다.
스터디 프로젝트를 하면서 처음 맞닥트렸고 이제서야 관심을 가지게 되었다. 😱
스터디 프로젝트에서 프론트는 로컬에서 개발하고 aws에 배포 해 놓은 백엔드로부터 API를 호출 하려는데 이런 에러가 발생했다.

![CORS_error](https://github.com/dud0701/blog/blob/master/posts/Image/cors_1.png)

## 🤔CORS???

Cross-Origgin Resoucre Sharing(CORS)은 추가 HTTP헤더를 사용하여 브라우저가 한 출처에서 실행중인 웹 애플리케이션에 선택된 액세스 권한을 부여하도록하는 매커니즘, 다른 출처의 자원. 웹 응용 프로그램은 자체와 다른 출처 (도메인, 프로토콜 또는 포트)를 가진 리소스를 요청할 때 cross-origin HTTP 요청을 실행합니다.

보통 보안 상의 이슈(DOM을 통한 취약한 데이터 접근 시도) 때문에 동일 출처(Single Origin Policy)를 기본적으로 웹에서는 준수하게 됩니다. 따라서 최초 자원을 요청한 출처 말고 다른 곳으로 스크립트를 통해 자원을 요청하는 것은 금지됩니다.

다른 API의 응답에 올바른 CORS 헤더가 포함되어 있지 않으면 해당 API를 사용하는 웹 응용 프로그램은 응용 프로그램이로드 된 동일한 출처의 리소스 만 요청할 수 있습니다.

## 그래서 어떻게 해결하는건데? 👩‍🔧

서버와 클라이언트가 분리되어 있는 앱에서는 cross-origin HTTP 요청을 서버에서 승인해주는 것이 좋다.

1. @CrossOrigin
   서버쪽 컨트롤러에 `@CrossOrigin` 어노테이션으로 처리한다.
   하지만 각 controller마다 다 지정을 해 줘야하는 번거로움이 있다.

```java
@CrossOrigin("*")
@GetMapping("/something)
public String getSomething(@PathVariable String something){
    return something;
}
```

2. Global 하게 지정

`WebMvcConfigurer`을 이용하여 `addCorsMappings`에 설정

```java
  @Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

## 참고

cors 스펙과 관련된 header의 규격

`Access-Contorl-Allow-Origin` : 요청을 허용하는 출처, "\*"는 어떤 origin이든 resource에 허용 한다는 뜻
ex) Access-Control-Allow-Origin : https://www.naver.com : www.naver.com만 허용
`Access-Control-Expose-Headers` : 브라우저가 access할 수 있도록 허용
`Access-Control-Max-Age` : 클라이언트에서 prefligh의 요청결과를 저장할 기간을 지정
`Access-Control-Allow-Credentials` : 클라이언트 요청이 쿠키를 통해서 자격 증명을 해야 하는 경우에 true, true를 응답받은 클라이언트는 실제 요청 시 서버에서 정의된 규격의 인증값이 담긴 쿠키를 같이 보내야한다.
`Access-Control-Allow-Methods` : 요청을 허용하는 메서드, 기본값은 GET,POST
`Access-Control-Allow-Headers` : 요청을 허용하는 헤더

[참고1](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
[참고2](https://brunch.co.kr/@adrenalinee31/1)
