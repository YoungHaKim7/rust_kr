# Vectors데이터 저장

# link
- [벡터 만들기](#벡터-만들기)
- [벡터에 데이터 추가하기](#벡터에-데이터-추가하기)
- [벡터 데이터 읽기](#벡터-데이터-읽기)

- matrix구현
  - [2차원 매트릭스(2d matrix)](#2차원-매트릭스2d-matrix)
  - [3차원 매트릭스(3d matrix)](#3차원-매트릭스3d-matrix)


<hr />


# 벡터 만들기[|🔝|](#link)

```rust
let my_vector : Vec<i32> = Vec::new();

// or

let my_vector_macro = vec![];

```

# 벡터에 데이터 추가하기[|🔝|](#link)

```rust
let mut my_vector = Vec::new();

my_vector.push(10);
my_vector.push(11);
my_vector.push(12);
my_vector.push(13);
my_vector.push(14);
```

# 벡터 데이터 읽기[|🔝|](#link)

```rust
let my_vector = vec![1, 2, 3, 4, 5];

let read_my_vector02 = my_vector[1];

assert_eq![2, read_my_vector02];
```

<hr />

# Matrix로 다차원 구조 만들기[|🔝|](#link)

# 2차원 매트릭스(2d matrix)[|🔝|](#link)

```rust
fn main() {
    // 딱딱한 array버젼 변형하기 쉽지 않다.
    let mut state = [[0u8; 4]; 6];
    state[0][1] = 42;
    println!("two dimention : ");
    for matrix_2d in state {
        println!("{matrix_2d:?}");
    }

    // Vector를 활용해서 다양한 데이터를 유연하게 받기 위해 만듬
    println!("\nvector style (two dimention) : ");    
    let mut vector_state = vec![vec![0;4];4];
    vector_state[1][0] = 99;
    for matrix_2d in vector_state {
        println!("{matrix_2d:?}");
    }
} 
```

- Result

```bash

two dimention : 
[0, 42, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]

vector style (two dimention) : 
[0, 0, 0, 0]
[99, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
```

# 3차원 매트릭스(3d matrix)[|🔝|](#link)


```rust
fn main() {
    let mut state = [[[0u8; 4]; 6];3];
    state[0][1][1] = 42;
    println!("3d dimention : ");
    for matrix_3d in state {
        for matrix_2d in matrix_3d {
        println!("{matrix_2d:?}");    
        }
        println!("~~~dimention line~~~");    
    }

    println!("\n\n~~~\nvector style (3d dimention) : ");    
    let mut vector_state = vec![vec![vec![0;4];6];3];
    vector_state[1][0][0] = 99;
    for matrix_3d in vector_state {
        for matrix_2d in matrix_3d {
        println!("{matrix_2d:?}");    
        }
        println!("~~~dimention line~~~");    
    }
}
```

- result

```bash
3d dimention : 
[0, 0, 0, 0]
[0, 42, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~


~~~
vector style (3d dimention) : 
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~
[99, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]
~~~dimention line~~~

```
