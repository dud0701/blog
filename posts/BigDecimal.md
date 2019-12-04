---
title: JAVA/BigDecimal
date: 2019-12-04 10:16:48
path: java/bigdecimal
tag: JAVA
---

# BigDecimal

java BigDeciaml : 이번 프로젝트 하면서 처음 써봤다.<br>

performance는 double, float보다 떨어진다고 한다. 그러나 실수의 정확한 연산이 필요할 경우 사용한다. <br>

연산하는 방법이 달라서 정리 해 본다. <br>

```JAVA
        BigDecimal a = new BigDecimal("23");
        BigDecimal b = new BigDecimal("21.22");

        System.out.println("더하기 : " + a.add(b));
        System.out.println("빼기 : " + a.subtract(b));
        System.out.println("곱하기 : " + a.multiply(b));
        System.out.println("나누기 : " + a.divide(b));//error
        System.out.println("나누기 : " + a.divide(b, BigDecimal.ROUND_CEILING));
        System.out.println("나누기 : " + a.divide(b, 4, BigDecimal.ROUND_DOWN));
        System.out.println("비교 : " + a.compareTo(b)); // -1, 0, 1 b가 크면 -1
        System.out.println("소수점 처리 : " + a.setScale(1, BigDecimal.ROUND_DOWN)); // -1, 0, 1 b가 크면 -1

```

## 사칙연산

1. 더하기 : add <br>
2. 빼기 : subtract<br>
3. 곱하기 : multiply<br>
4. 나누기 : divide - 다른 사칙연산과 똑같이 적용할 경우 에러 날 수 있다. 수수점 자리를 지정 해 주어야한다.<br>

## 비교

숫자를 return 한다.<br>
-1 이면 b가 더 큰수<br>
0 이면 같다<br>
1 이면 a가 더 큰수 <br>

## 소수점 처리

소수점 길이를 원하는 만큼 처리 할 때 setScale
