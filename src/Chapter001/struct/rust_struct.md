# struct

```rs
#[derive(Debug)]
struct StoreData {
    name: String,
    age: u8,
    address: String,
}

fn main() {
    let my_student01 = StoreData {
        name: "Gyoung".to_string(),
        age: 40,
        address: "서울".to_string(),
    };

    println!("저장된 데이터 출력 :  {my_student01:?}");
}
```
