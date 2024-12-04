# Logical_Operators

# link

<hr />

# Rust Code

```rs
fn main() {
    println!("true && true = {}", true && true);
    println!("true || true = {}", true || true);
    println!("true || !true = {}", true || !true);
    println!("true && !true = {}", true && !true);
    println!("!true || true = {}", !true || true);
    println!("true || !true = {}", true || !true);
    println!(
        "!(true && true) == (!true || !true)) = {}",
        (!(true && true) == (!true || !true))
    );
    println!(
        "!(true || true) == (!true && !true) = {}",
        (!(true || true) == (!true && !true))
    );
}
```

- Result

```bash
true && true = true
true || true = true
true || !true = true
true && !true = false
!true || true = true
true || !true = true
!(true && true) == (!true || !true)) = true
!(true || true) == (!true && !true) = true
```
