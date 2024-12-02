# Chapter 1(코딩의 기본 원리)

- 코드는 바이트 덩어리 이다.  요즘 컴퓨터는 64bits로 처리하기 때문에 64bits를 한덩어리로 봐야한다

- 모든언어는 비슷한 패턴이 있다.
  - Reserved Word(예약어)
    - 어떤 언어를 시작하든 처음에 할일은 예약을 우선 찾는다.  aka. 예약어로 변수 선언을 할 수 없다.

- 러스트는 statement와 expression차이를 잘 알아야 한다.

  - expression 마지막에 세미콜론(;)이 없다.
```rs
// Rust

fn bis(x: i32, y: i32) {
  // expression
  x | m
}

```

- C언어 스타일
  - 마지막에 (;) 로 끝이 났다면 문장이 끝나서 statement라고 부른다.
  - 한글로 잘 몰라서 영어로 썼다.  구글로 검색할때도 영어로 쳐야 더 풍부한 정보가 나오니 이해 바란다.

```c
// C

int bis(int x, int m) {
    // statement
    return x | m;
}
```
