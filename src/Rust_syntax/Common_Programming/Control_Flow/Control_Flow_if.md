# Control Flow(if, else if, loop, while등등)

# link

- [if](#if)
- [if & else](#if--else)
- [while](#while)

<hr />

# if[|🔝|](#link)


```rust
fn main() {
    // default i32
    let int_a = 10;
    // true or false /   bool
    if int_a > 20 {
        println!("20보다 같거나 작다.")
    } else if int_a > 10 {
    } else {
        println!("10보다 같거나 작다.")
    }
}
```

- Result

```bash
10보다 같거나 작다.
```

<hr />

# if & else[|🔝|](#link)

```rust
fn main() {
    let n = 5;
    let check_even_odd = if n % 2 == 0 {
        "짝수even"
    } else {
        "홀수odd"
    };

    println!("홀수인지 짝수인지 확인해 봅시다. : {}", check_even_odd);
}

```

- Result

```bash
홀수인지 짝수인지 확인해 봅시다. : 홀수odd
```

<hr />

# while[|🔝|](#link)

```rust
use std::{thread, time::Duration};

fn main() {
    println!("로켓트 카운드 타운 시작: ");

    let mut while_x = 10;
    while while_x != 1 {
        // You can add your logic here
        while_x -= 1; // Decrement the variable to exit the loop
                      // let mut while_x = 10; // Initialize a variable to control the while loop
                      // println!("Inside the while loop");
        thread::sleep(Duration::from_secs(1));
        println!("{} 초", while_x);
    }
    thread::sleep(Duration::from_secs(1));
    println!("0 초 ~~~ 발사 ~~~~")
}
```

- Result


```bash
로켓트 카운드 타운 시작:
9 초
8 초
7 초
6 초
5 초
4 초
3 초
2 초
1 초
0 초 ~~~ 발사 ~~~~
```

<hr />


