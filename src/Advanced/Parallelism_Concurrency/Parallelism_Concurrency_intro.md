# Rust Parallelism&Concurrency

- [아마존영어원서Rust Atomics and Locks: Low-Level Concurrency in Practice](https://www.amazon.com/Rust-Atomics-Locks-Low-Level-Concurrency/dp/1098119444)
  - [Rust Atomics and Locks 러스트 동시성 프로그래밍 : Atomic과 Lock으로 안전하고 효율적인 동시성 코드 작성하기(PDF)  마라 보스 저 / 윤인도 역 | 한빛미디어 | 2024년 02월 05일](https://m.yes24.com/Goods/Detail/124894563)


# link

- [green-thread그린쓰레드-이해하기](#green-thread그린쓰레드-이해하기)

<hr />

- 기초 상식
  - [concurrency와-parallelism이해하기](#concurrency와-parallelism이해하기)
    - [1분20초_그림으로 concurrency와 parallelism차이점 이해하기 Node.js is a serious thing now… (2023) |Code With Ryan](https://youtu.be/_Im4_3Z1NxQ?si=vL0dtHzr8BOPMV0s) 
    - [multithreading-for-beginners--freecodecamporg](#multithreading-for-beginners--freecodecamporg)
  - [1-hour-dive-into-asynchronous-rust--ardan-labs](#1-hour-dive-into-asynchronous-rust--ardan-labs)
  - [what-is-pinning](#what-is-pinning)

- 러스트에 바로 쓸 기초 개념
  - [send--mutex--özgün-özerk](#send--mutex--özgün-özerk)
  - [rust--memory-container](#rust--memory-container)
  - [ownership-concept-diagram](#ownership-concept-diagram)
  - [Async-Rust여기에-정리중](#async-rust여기에-정리중)

<hr />

- [rc-arc-그림-표로-잘-정리됨](#rc-arc-그림-표로-잘-정리됨)

- [tokio-console--its-like-htop-for-async](#tokio-console--its-like-htop-for-async)

<hr />

- std보다 빠른거
  - [compact-and-efficient-synchronization-primitives-for-rust-also-provides-an-api-for-creating-custom-synchronization-primitives](#compact-and-efficient-synchronization-primitives-for-rust-also-provides-an-api-for-creating-custom-synchronization-primitives)

<hr />

- test
  - [opentelemetry](#opentelemetry)
  - [opentelemetryrust](#opentelemetryrust)

<hr />

- C언어로 러스트 이해하기
  - [Async Engine in C | Tsoding Daily](#async-engine-in-c--tsoding-daily)

<hr />

# 외부 자료

- Concurrency & Parallelism
  - [https://github.com/LukeMathWalker/zero-to-production](https://github.com/LukeMathWalker/zero-to-production)
  - Concurrency
    - [https://rust-lang.github.io/async-book/](https://rust-lang.github.io/async-book/)
    - [https://github.com/tokio-rs/tokio](https://github.com/tokio-rs/tokio)
      - Channels(MPSC)
        - MPSC(multi-producer, single-consumer channel.)
          - [https://tokio.rs/tokio/tutorial/channels](https://tokio.rs/tokio/tutorial/channels)
    - [https://github.com/hyperium/hyper](https://github.com/hyperium/hyper)
  - Parallelism
    - [https://github.com/rayon-rs/rayon](https://github.com/rayon-rs/rayon)
    - Channels(MPMC)
      - MPMC(A blazingly fast multi-producer, multi-consumer channel.)
        - [https://github.com/zesterer/flume](https://github.com/zesterer/flume)
      - MPMC초장기 모델
        - [https://github.com/crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam)

- Async Book(Rust)
  - [https://rust-lang.github.io/async-book/](https://rust-lang.github.io/async-book/)
  - tokio-async
    - [https://docs.rs/tokio-async-std/latest/async_std/](https://docs.rs/tokio-async-std/latest/async_std/)
    - [https://book.async.rs/](https://book.async.rs/)

  - Async Rust한국분이 설명 잘 해 놨음.
    - [https://blog.cro.sh/slides/async-rust-programming-20220801-redistributable.pdf](https://blog.cro.sh/slides/async-rust-programming-20220801-redistributable.pdf)

<hr>

<hr>

# Async Rust여기에 정리중[|🔝|](#link)

- [https://github.com/YoungHaKim7/Async_Rust_Training](https://github.com/YoungHaKim7/Async_Rust_Training)

# Green Thread그린쓰레드 이해하기[|🔝|](#link)
- [https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html)

<hr>

# Rc, Arc 그림, 표로 잘 정리됨.[|🔝|](#link)

- [https://github.com/usagi/rust-memory-container-cs](https://github.com/usagi/rust-memory-container-cs)

<hr>

# 1 Hour Dive into Asynchronous Rust | Ardan Labs[|🔝|](#link)
- [https://www.youtube.com/live/0HwrZp9CBD4?si=FLcUShZwx5pjOfmC](https://www.youtube.com/live/0HwrZp9CBD4?si=FLcUShZwx5pjOfmC)

<hr>

# OpenTeleMetry(Rust)[|🔝|](#link)

[https://opentelemetry.io/docs/languages/rust/getting-started/](https://opentelemetry.io/docs/languages/rust/getting-started/)

- [OpenTelemetry for Rust Developers | Dynatrace](https://youtu.be/JNZoo_8XeaE?si=hV2TZK2Ec9-Y8K39)

<hr>

# Tokio-Console : It's like "htop" for async[|🔝|](#link)


```bash
cargo install tokio-console

```

- [https://github.com/tokio-rs/console](https://github.com/tokio-rs/console)

- Tokio-console 데모 영상
  - [tokio-console demo 2021 07 22 | Felix K](https://youtu.be/JGCewPUvF70?si=rJKmAlxwPNDgkEeD)


<hr>

# What is Pinning?[|🔝|](#link)

- Rust's memory model strictly ensures that references must still exist, won't move, and won't be bropped while still in use.
  - 러스트의 메모리 모델은 참조가 여전히 존재해야 하고, 움직이지 않아야 하며, 사용 중에도 끊어지지 않도록 엄격하게 보장합니다.
- That's great for avoiding common memory bugs.
  - 일반적인 메모리 버그를 방지하는 데 좋습니다.
- It's tricky in a highly asynchronous environment, tasks may depend upon other tasks - which typically move around quite a bit.
  - 매우 비동기적인 환경에서는 작업이 까다롭기 때문에 작업은 다른 작업에 따라 달라질 수 있습니다. 이 작업은 일반적으로 상당히 많이 움직입니다.
- Pinning lets you tell Rust that a variable needs to stick around - in the same place - untile you unpin it.
  - Pinning피닝을 사용하면 Rust에게 변수를 풀 때까지 같은 위치에 있어야 한다는 것을 알 수 있습니다.
    - A stream that relies upon another stream will typically pin its access to the previous stream.
      - 다른 스트림에 의존하는 스트림은 일반적으로 이전 스트림에 대한 액세스를 고정합니다.
    - A select operation may need to pin entries for the same reason.
      - 선택 작업에서 동일한 이유로 항목을 고정해야 할 수도 있습니다.
    - Asynchronously calling yourself-recursion - requires pinning the iterations.
      - 비동기적으로 자신을 호출하려면 반복을 고정해야 합니다.

출처 : [59min30sec__1 Hour Dive into Asynchronous Rust](https://www.youtube.com/live/0HwrZp9CBD4?si=ayajRAELEgDOl9FY)

<hr>

# OpenTelemetry[|🔝|](#link)

  - [https://crates.io/crates/opentelemetry](https://crates.io/crates/opentelemetry)
    - [https://github.com/open-telemetry/opentelemetry-rust](https://github.com/open-telemetry/opentelemetry-rust)

```toml
# Cargo.toml
[dependencies]
opentelemetry = "0.22"
opentelemetry_sdk = "0.22"
opentelemetry-stdout = { version = "0.3", features = ["trace"] }
```

```rs
use opentelemetry::{
    global,
    sdk::trace::TracerProvider,
    trace::{Tracer, TracerProvider as _},
};

fn main() {
    // Create a new trace pipeline that prints to stdout
    let provider = TracerProvider::builder()
        .with_simple_exporter(opentelemetry_stdout::SpanExporter::default())
        .build();
    let tracer = provider.tracer("readme_example");

    tracer.in_span("doing_work", |cx| {
        // Traced app logic here...
    });

    // Shutdown trace pipeline
    global::shutdown_tracer_provider();
}
```


- [https://opentelemetry.io/](https://opentelemetry.io/)

<hr>

```rs
use std::{thread, time::Duration};

use opentelemetry::{
    global,
    trace::{TraceContextExt, Tracer},
    Key, KeyValue,
};
use uptrace::UptraceBuilder;

#[tokio::main]
async fn main() {
    UptraceBuilder::new()
        //.with_dsn("")
        .with_service_name("myservice")
        .with_service_version("1.0.0")
        .with_deployment_environment("testing")
        .configure_opentelemetry()
        .unwrap();

    let tracer = global::tracer("app_or_crate_name");

    tracer.in_span("root-span", |cx| {
        thread::sleep(Duration::from_millis(5));

        tracer.in_span("GET /posts/:id", |cx| {
            thread::sleep(Duration::from_millis(10));

            let span = cx.span();
            span.set_attribute(Key::new("http.method").string("GET"));
            span.set_attribute(Key::new("http.route").string("/posts/:id"));
            span.set_attribute(Key::new("http.url").string("http://localhost:8080/posts/123"));
            span.set_attribute(Key::new("http.status_code").i64(200));
        });

        tracer.in_span("SELECT", |cx| {
            thread::sleep(Duration::from_millis(20));

            let span = cx.span();
            span.set_attribute(KeyValue::new("db.system", "mysql"));
            span.set_attribute(KeyValue::new(
                "db.statement",
                "SELECT * FROM table LIMIT 100",
            ));
        });

        let span = cx.span();
        println!(
            "https://app.uptrace.dev/traces/{}",
            span.span_context().trace_id().to_string()
        );
    });

    global::shutdown_tracer_provider();
}
```
- [https://crates.io/crates/uptrace](https://crates.io/crates/uptrace)


<hr>

# Concurrency와 Parallelism이해하기[|🔝|](#link)

[https://spacebike.tistory.com/22](https://spacebike.tistory.com/22)

# Multithreading for Beginners | freeCodeCamp.org[|🔝|](#link)
- [https://youtu.be/gvQGKRlgop4?si=xCu3nVYXD8geHu4_](https://youtu.be/gvQGKRlgop4?si=xCu3nVYXD8geHu4_)

# rust -memory-container[|🔝|](#link)

[https://github.com/usagi/rust-memory-container-cs](https://github.com/usagi/rust-memory-container-cs)


<br>

- small size ver.

![rust-memory-container-cs-small-dark-back-high-contrast](https://user-images.githubusercontent.com/67513038/220503296-bbc31e6b-93d1-4e25-ac93-052aa2e89ab5.png)

<br>

# Ownership Concept Diagram[|🔝|](#link)

![rust-ownvership](https://i.redd.it/nhhxzcwqd6q61.png)

## 출처:

[https://www.reddit.com/r/rust/comments/mgh9n9/ownership_concept_diagram/?utm_source=share&utm_medium=ios_app&utm_name=iossmf](https://www.reddit.com/r/rust/comments/mgh9n9/ownership_concept_diagram/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)

<br>

![Screenshot 2023-01-21 at 10 56 20 AM](https://user-images.githubusercontent.com/67513038/213838895-8194e55a-abe4-472e-8ed4-f34e7770425a.png)
<br><a href="https://youtu.be/__7cMs4gqSU">220607자바(Java)*vs*러스트*비교하면서 러스트오너쉽개념이해*기본syntax연습하기part3\_#java #rust #ownership</a><br>

<br>

출처

[Rust for Java Developers 3/3 - Understanding Ownership](https://youtu.be/Vg1LGHuAPP8)

[Rust소유권 규칙Ownership Rules & Borrowing rules](https://economiceco.tistory.com/12591)

[Rust) shared reference ❤️ unique reference](https://youtu.be/Bfqx_V2gp1Y)

<br>

<hr>

# Send & Mutex | Özgün Özerk[|🔝|](#link)
- 27 May 2024
  - [https://cryptical.xyz/rust/send-mutex](https://cryptical.xyz/rust/send-mutex)

<hr>

# Compact and efficient synchronization primitives for Rust. Also provides an API for creating custom synchronization primitives.[|🔝|](#link)
- [https://github.com/Amanieu/parking_lot](https://github.com/Amanieu/parking_lot)

<hr>

# C언어 러스트 이해하기

# Async Engine in C | Tsoding Daily[|🔝|](#link)
- [https://youtu.be/Q65zhKkynDk?si=PwBb8vxXZwZDIQEl](https://youtu.be/Q65zhKkynDk?si=PwBb8vxXZwZDIQEl)

