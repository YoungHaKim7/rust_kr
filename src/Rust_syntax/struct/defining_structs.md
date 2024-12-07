# Struct 정의 및 인스턴스화(Instantiating)

# link

<hr />

# tuple struct

```rust
struct TupleStructColor(u8,u8,u8)

struct Datau8(u8)

struct Stringdata(String)
```

# unit struct

```rust
struct UnitStruct;
```

# User Data

```rust
// {} 괄호 안쪽을 field 필드라고 부른다.
// UserData라는 struct 안에 username, age, email, address, active가 존재한다.
//  추후에 데이터를 부를때 UserData를 통해 접근한다.
struct UserData {
  username: String,
  age: u8,
  email : String,
  address: String,
  active : bool,
}
```


# example

```rust
#[derive(Debug)]
struct Color(u8,u8,u8);

fn main() {
  let black = Color(0, 0 ,0);
  println!("Black Color : {:?}", black);
}

```
