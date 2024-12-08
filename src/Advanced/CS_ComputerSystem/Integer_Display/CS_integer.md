# IntegerDisplay정수표시(CS)

# link
- [마이너스 구현을 위해 필요two's complement encoding(2의 보수)](#twos-complement-encoding2의-보수)

<hr />

# two's complement encoding(2의 보수)[|🔝|](#link)

- [code 예시](https://github.com/YoungHaKim7/rust_book_src_examples/tree/main/005_Rust_advanced_course/CS_Computer_System/Integer_Display/b01_two_complement)

```rust
fn main() {
    let raw_two_complement = 0xB; // 1011
    let two_val = !raw_two_complement + 1; // 0100 + 0001
    println!("컴퓨터는 0과 1뿐이라서..");
    println!("마이너스로 빼기를 구현하기 위해 2의 보수 개념이 필요하다.");
    println!("0xB(10진수=11)의 2의 보수 : {}", two_val); // 0101    11(10진법) -> -11 로 변함
}
```

- Result


```bash

컴퓨터는 0과 1뿐이라서..
마이너스로 빼기를 구현하기 위해 2의 보수 개념이 필요하다.
0xB(10진수=11)의 2의 보수 : -11
```

<hr />
