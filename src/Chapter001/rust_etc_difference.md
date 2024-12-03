# link

- [러스트는 statement와 expression차이를 잘 알아야 한다.](#러스트는-statement와-expression차이를-잘-알아야-한다)

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)

<hr />

# Rust 러스트 언어와 다른 언어의 차이점

# 러스트는 statement와 expression차이를 잘 알아야 한다.[|🔝|](#link)

- expression 마지막에 세미콜론(;)이 없다.

```rs
// Rust

fn bis(x: i32, y: i32) {
  // expression
  x | y
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

<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>
