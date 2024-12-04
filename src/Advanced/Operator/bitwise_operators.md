# Bitwise_Operators


# link

<hr />

# Rust Code

```rs
fn main() {
    let x = 0x55; // 0011 0111
    let y = 0x66; // 0100 0010
    let x_01 = 0x1;
    let y_02 = 0x2;

    println!("~x : {}", !x);
    println!("x & y : {}", x & y);
    println!("x | y : {}", x | y);
    println!("x ^ y : {}", x ^ y);
    println!("x01 << y02 : {}  // left shift", x_01 << y_02);
    println!("x01 >> y02 : {}   // right shift", x_01 & y_02);
}
```

- Result

```bash
# rust 에서는 C언어에서 ~x 이걸 !x 이렇게 표현한다. not gate
~x : -86
x & y : 68
x | y : 119
x ^ y : 51
x01 << y02 : 4  // left shift
x01 >> y02 : 0   // right shift
```
