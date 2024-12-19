# rust_1_85_Rust Edition 2024

# Rust 2024

| Info | |
| --- | --- |
| RFC | [#3501](https://rust-lang.github.io/rfcs/3501-edition-2024.html) |
| Release version | 1.85.0 |

<hr />

# link

- [Asynchrony & Iteration & Fallibility(async(await) & gen(for) & try(match))](#asynchrony--iteration--fallibilityasyncawait--genfor--trymatch)
- [Rust 2024 주요 3가지 목표(중요한 3가지) & Rust 2024 목표(그외에 23가지 목표)](#rust-2024-주요-3가지-목표중요한-3가지)
- [Async Rust roadmap](#async-rust-roadmap)

<hr />

# (241130기준)현재는 nightly로 사용가능한듯 찾아보자
- [https://doc.rust-lang.org/nightly/edition-guide/rust-2024/index.html](https://doc.rust-lang.org/nightly/edition-guide/rust-2024/index.html)

- [https://blog.rust-lang.org/2024/11/27/Rust-2024-public-testing.html](https://blog.rust-lang.org/2024/11/27/Rust-2024-public-testing.html)

- [https://github.com/rust-lang/rust/pull/133349](https://github.com/rust-lang/rust/pull/133349)
  - [https://github.com/ehuss/rust/commit/31c922263922cc3e74f9c732677946521299ea99](https://github.com/ehuss/rust/commit/31c922263922cc3e74f9c732677946521299ea99)

- [https://releases.rs/docs/1.85.0/](https://releases.rs/docs/1.85.0/)

<hr />

# Rust2024 Edition (2025년 beta버젼에 출시 예정250109 beta version에서 사용가능)
- [241127뉴스_rust2024 beta version에 250109 적용예정.](https://blog.rust-lang.org/2024/11/27/Rust-2024-public-testing.html)
  - Stable버젼은  Rust 1.85 on 2025-02-20
    - Rust 2024 will enter the beta channel on 2025-01-09, and will be released to stable Rust with Rust 1.85 on 2025-02-20.
- (231215) [https://blog.rust-lang.org/2023/12/15/2024-Edition-CFP.html](https://blog.rust-lang.org/2023/12/15/2024-Edition-CFP.html)
- (240812) [(러스트 Blog)Rust Project goals for 2024](https://blog.rust-lang.org/2024/08/12/Project-goals.html)
  - Rust 2024 Edition 
    - [https://rust-lang.github.io/rust-project-goals/2024h2/Rust-2024-Edition.html](https://rust-lang.github.io/rust-project-goals/2024h2/Rust-2024-Edition.html)
  - Async
    - [https://rust-lang.github.io/rust-project-goals/2024h2/async.html](https://rust-lang.github.io/rust-project-goals/2024h2/async.html)
  - Rust for Linux
    - [https://rust-lang.github.io/rust-project-goals/2024h2/rfl_stable.html](https://rust-lang.github.io/rust-project-goals/2024h2/rfl_stable.html)
      - Rust(2024) 23가지 목표
        - [https://rust-lang.github.io/rust-project-goals/2024h2/index.html#project-goals](https://rust-lang.github.io/rust-project-goals/2024h2/index.html#project-goals)
        - github
          - [https://github.com/rust-lang/rust-project-goals](https://github.com/rust-lang/rust-project-goals)

<hr />

# Rust 2024 주요 3가지 목표(중요한 3가지)

|||
|-|-|
|1 | Bring the Async Rust experience closer to parity with sync Rust|
|2 | Resolve the biggest blockers to Linux building on stable Rust|
|3 | Rust 2024 Edition|

- [https://rust-lang.github.io/rust-project-goals/2024h2/goals.html](https://rust-lang.github.io/rust-project-goals/2024h2/goals.html)

# Rust 2024 목표(그외에 23가지 목표)
- Goal 러스트 에디션 2024 핵심 목표외 23가지 목표

|||
|-|-|
|1| "Stabilizable" prototype for expanded const generics|
|2| Administrator-provided reasons for yanked crates|
|3| Assemble project goal slate|
|4| Associated type position impl trait|
|5| Begin resolving cargo-semver-checks blockers for merging into cargo|
|6| Const traits|
|7| Ergonomic ref-counting|
|8| Explore sandboxed build scripts|
|9| Expose experimental LLVM features for automatic differentiation and GPU offloading|
|10| Extend pubgrub to match cargo's dependency resolution|
|11| Implement "merged doctests" to save doctest time|
|12| Make Rustdoc Search easier to learn|
|13| Next-generation trait solver|
|14| Optimizing Clippy & linting|
|15| Patterns of empty types|
|16| Scalable Polonius support on nightly|
|17| Stabilize cargo-script|
|18| Stabilize doc_cfg|
|19| Stabilize parallel front end|
|20| Survey tools suitability for Std safety verification|
|21| Testing infra + contributors for a-mir-formality|
|22| Use annotate-snippets for rustc diagnostic output|
|23| User-wide build cache|

# Asynchrony & Iteration & Fallibility(async(await) & gen(for) & try(match))[|🔝|](#link)
- Patterns & Abstractions( March 14, 2023
  - [https://without.boats/blog/patterns-and-abstractions/](https://without.boats/blog/patterns-and-abstractions/)

|-|ASYNCHRONY|  ITERATION | FALLIBILITY|
|-|-|-|-|
|CONTEXT| async { }  |gen { } |try { }|
|EFFECT ||yield  | throw|
|FORWARD|.await  |yield from|?|
|COMPLETE|spawn/block_on |for  | match|

# Async Rust roadmap[|🔝|](#link)

|Year|Language|
|-|-|
|2019| Async fns|
|2019-2022| Ecosystem development|
|2023| Async fn in traits|
|2024| Async closures, generators....|


- Standard way to write async Rust that...비동기 Rust를 작성하는 표준 방법은...
  - lets you gracefully handle cancellation and streams
    - 취소 및 스트림을 우아하게 처리할 수 있습니다
  - supports a rich, interopable ecosystem of middleware, logging,etc
    - 미들웨어, 로깅 등의 풍부하고 상호 운용 가능한 에코시스템을 지원합니다
  - works everywhere, from embedded to servers
    - 내장된 서버에서 서버까지 모든 곳에서 작동합니다
  - is easy to learn, well documented, and free of footguns
    - 배우기 쉽고, 잘 문서화되어 있으며, 발총이 없습니다 
      - C++은 코드를 잘못 만들면 내 발에 총을 쏜다는걸 이야기하는듯 그래서 코드가 터져버리는 ㅋㅋㅋ

- Stabilizing async fn in traits in 2023(async fn 안정화했다는 러스트 블로그 글)
  - May 3, 2023 · Niko Matsakis and Tyler Mandry on behalf of The Rust Async Working Group
  - [https://blog.rust-lang.org/inside-rust/2023/05/03/stabilizing-async-fn-in-trait.html](https://blog.rust-lang.org/inside-rust/2023/05/03/stabilizing-async-fn-in-trait.html)
  - 관련 Reddit글
    - [https://www.reddit.com/r/rust/comments/136o73k/stabilizing_async_fn_in_traits_in_2023_inside/](https://www.reddit.com/r/rust/comments/136o73k/stabilizing_async_fn_in_traits_in_2023_inside/)

- Rust Async GAT관련
  - https://rust-lang.github.io/rfcs/3185-static-async-fn-in-trait.html
    - Try using GAT to improve Future's failed: How to declare the life cycle?
      -  [https://stackoverflow.com/questions/74441311/try-using-gat-to-improve-futures-failed-how-to-declare-the-life-cycle](https://stackoverflow.com/questions/74441311/try-using-gat-to-improve-futures-failed-how-to-declare-the-life-cycle)

<hr />
