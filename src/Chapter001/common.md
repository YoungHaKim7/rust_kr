# 대부분의 코딩의 공통적인것들

# link

- [예약어reserved-word](#reserved-word예약어)
- [array](#array인덱싱에-최고)
- [vector](#vector-이건-array인데-확장-가능한-array이다)
- [tuple](#tuple-빠르다)
- [Rust에서 function선언하기 ](#fn-rust에서는-function을-선언할때-이렇게-붙힌다)

<hr />

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)


<hr />

# 모든언어는 비슷한 패턴이 있다.

# Reserved Word(예약어)[|🔝|](#link)
- 어떤 언어를 시작하든 처음에 할일은 예약어를 우선 찾는다.  aka. 예약어로 변수를 선언을 할 수 없다.

# array(인덱싱에 최고)[|🔝|](#link)
- 2d, 3d matrix만들때 쓰는 아주 아주 재주가 많은 친구

```rs
let my_2d_array = [
    [1, 2]
    [3, 4]
];

my_2d_array[0][1] = 2;

let my_array [0,1,2,3,4];

my_array[1] = 1;
```


# vector 이건 array인데 확장 가능한 array이다.[|🔝|](#link)

- 모든 알고리즘에 99프로는 쓰는 vector 제일 많이 공부해야한다.

```rs
let my_array = [0; 3];

let my_vector = vec![0, 0, 0];
```


# tuple 빠르다.[|🔝|](#link)

- API 실행하거나 명령어 불러올때 쓰는 버튼 같은 기능`()` 이런거 많이 보셨죠?? 결국 튜블임.

```rs
let my_tuple = (1, "test");
```

# `fn` rust에서는 function을 선언할때 이렇게 붙힌다.[|🔝|](#link)

```rs
fn main () {}
```

<hr />

<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>

