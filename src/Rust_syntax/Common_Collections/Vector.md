# Vectors데이터 저장

# link


<hr />


# 벡터 만들기

```rust
let my_vector : Vec<i32> = Vec::new();

// or

let my_vector_macro = vec![];

```

# 벡터에 데이터 추가하기

```rust
let mut my_vector = Vec::new();

my_vector.push(10);
my_vector.push(11);
my_vector.push(12);
my_vector.push(13);
my_vector.push(14);
```

# 벡터 데이터 읽기

```rust
let my_vector = vec![1, 2, 3, 4, 5];

let read_my_vector02 = my_vector[1];

assert_eq![2, read_my_vector02];
```


