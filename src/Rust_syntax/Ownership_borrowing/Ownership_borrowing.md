# OwnerShip오너쉽_borrowing

# link

- [러스트 변수value의 3가지 상태](#러스트-변수value의-3가지-상태)
- [Ownership Rules](#ownership-rules)
- [Borrowing rules](#borrowing-rules)

<hr />

# 러스트 변수value의 3가지 상태[|🔝|](#link)

- ① . consume상태(오너쉽을 가지고 있다.)
  - 읽기,  쓰기 ,  오너쉽을 넘겨주는 상태(사장님이다.  다 가능)

- ② . borrowing(`&` Reference)(빌린 상태라 빚쟁이 같은거다.  사장님이 죽으면 그때 라이프 타임이 끝나다.)
  - 읽기 전용이라 생각하면 된다.

- ③ . 변수를 바꿀수 있다.(&mut) 변수를 빌려서 코인 1개의 바꿀수 있는 권리가 있다.
  - 바꿀수 있는 기회는 딱 1번뿐..
    - 변수가 바뀐 다음부터는 읽기 전용상태(&)만 가능하다.


- 예시를 보면 이해해 보자.

```rs
// consume상태-> 오너쉽을 이동했다.
fn owner_consume(x: String) -> String {
    x
}

// borrowing & 읽기 전용
fn owner_reference_pattern(x: &str) -> &str {
    x
}

// &mut 바꾼 다음 읽기전용만 가능
fn mut_str(x: &mut String) -> &mut String {
    x.push_str(" + mutant String");
    x
}

fn main() {
    let x_consume = "consume string".to_string();
    dbg!(owner_consume(x_consume));
    // owner_consume(x_consume.clone()));

    // use of value error
    // dbg!(x_consume);
    // println!("{}", x_consume);

    let x_ref_str = "Reference String";
    dbg!(owner_reference_pattern(x_ref_str));
    dbg!(x_ref_str);

    let mut x_mut_str = "Add String".to_string();
    dbg!(mut_str(&mut x_mut_str));

    let int_x = 40;
    let y = int_x;
    // int는 copy type이라 오너쉽 생각안해도 됨. stack copy됨
    dbg!(int_x);
}
```

- Result

```bash
[src/main.rs:16:5] owner_consume(x_consume) = "consume string"
[src/main.rs:24:5] owner01(x_ref_str) = "Reference String"
[src/main.rs:25:5] x_ref_str = "Reference String"
[src/main.rs:28:5] mut_str(&mut x_mut_str) = "Add String + mutant String"
[src/main.rs:32:5] int_x = 40
```

# Ownership Rules[|🔝|](#link)

- First, let's take a look at the ownership rules. Keep these rules in mind as we work through the examples that illustrate them"
  - Each value in Rust has a variable that's called its owner.
  - There can only be one owner at a time.
  - When the owner goes out of scope, the value will be dropped.

- 소유권 규칙
  - 먼저, 소유권에 적용되는 규칙부터 살펴보자. 앞으로 살펴볼 예제들은 이 규칙들을 설명하기 위한 것이므로 잘 기억하도록 하자.
    - 러스트가 다루는 각각의 값은 소유자(owner)라고 부르는 변수를 가지고 있다.
    - 특정 시점에 값의 소유자는 단 하나뿐이다.
    - 소유자가 범위를 벗어나면 그 값은 제거된다.


<hr />

# Borrowing rules[|🔝|](#link)

- At any given time, you can have either one mutable reference or any number of immutable references.

- References must always be valid.
