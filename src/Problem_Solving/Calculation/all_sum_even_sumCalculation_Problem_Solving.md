# 짝수만 계산&받은 데이터롤 모두 더하기(+)

# Q0001: 고객이  (1부터 10) 숫자를 다 더해 달라고 한다 .구현.

- [A0001로 이동](#a0001_q0001로-이동)


# Q0002: 고객이  (1부터 10) 짝수숫자를 다 더해 달라고 한다 (1개의 기능에 2가지가 바로 되게).구현.

- [A0002로 이동](#a0002_q0002로-이동)


# Q0003: 고객이 맘에 변해서 더 하는 기능 1개 짝수만 더하는 기능을 따로 구해해 달라고 한다. (1 ~ 10) 짝수숫자를 다 더해 달라고 한다 (1개의 기능에 2가지가 바로 되게).구현.


- [A0003로 이동](#a0003_q0003로-이동)



# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래

# 공백 답은 맨 아래


# A0001_[Q0001로 이동](#q0001-고객이--1부터-10-숫자를-다-더해-달라고-한다-구현)
- Q0001: 고객이  (1부터 10) 숫자를 다 더해 달라고 한다 .구현.

```rust
use std::iter::Sum;

fn intsum<T>(x: Vec<T>) -> T
where
    T: Sum + Copy,
{
    x.into_iter().sum()
}

fn main() {
    let my_vec: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    println!("Sum: {}", intsum(my_vec));
}


```

```bash
Sum: 55
```

# A0002_[Q0002로 이동](#q0002-고객이--1부터-10-짝수숫자를-다-더해-달라고-한다-1개의-기능에-2가지가-바로-되게구현)
 
- Q0002: 고객이  (1부터 10) 짝수숫자를 다 더해 달라고 한다 (1개의 기능에 2가지가 바로 되게).구현.

```rust

use std::iter::Sum;
use std::ops::Rem;

fn intsum_evensum<T>(x: Vec<T>) -> (T, T)
where
    T: Sum + Copy + From<u8> + Rem<Output = T> + PartialEq,
{
    // Compute the sum of all elements
    let all_sum = x.iter().cloned().sum();

    // Compute the sum of even elements
    let even_sum = x
        .iter()
        .cloned()
        .filter(|&n| n % T::from(2) == T::from(0))
        .sum();

    (all_sum, even_sum)
}

fn main() {
    let my_vec: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let (all_sum, even_sum) = intsum_evensum(my_vec);
    println!("Total Sum: {}", all_sum);
    println!("Even Numbers Sum: {}", even_sum);
}
```

- Result
```bash
Total Sum: 55
Even Numbers Sum: 30
```

# A0003_[Q0003로 이동](#q0003-고객이-맘에-변해서-더-하는-기능-1개-짝수만-더하는-기능을-따로-구해해-달라고-한다-1--10-짝수숫자를-다-더해-달라고-한다-1개의-기능에-2가지가-바로-되게구현)
 
- Q0003: 고객이 맘에 변해서 더 하는 기능 1개 짝수만 더하는 기능을 따로 구해해 달라고 한다. (1 ~ 10) 짝수숫자를 다 더해 달라고 한다 (1개의 기능에 2가지가 바로 되게).구현.
  - 소유권 문제를 피하기 위해 `&`로 구현

```rust
use std::iter::Sum;
use std::ops::Rem;

fn all_sum<T>(x: &Vec<T>) -> T
where
    T: Sum + Copy,
{
    x.iter().cloned().sum()
}

fn even_sum<T>(x: &Vec<T>) -> T
where
    T: Sum + Copy + From<u8> + Rem<Output = T> + PartialEq,
{
    x.iter()
        .cloned()
        .filter(|n| *n % T::from(2) == T::from(0))
        .sum()
}

fn main() {
    let my_vec: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let vec_all_sum = all_sum(&my_vec);
    let vec_even_sum = even_sum(&my_vec);
    println!("Total Sum: {:?}", vec_all_sum);
    println!("Even Numbers Sum: {:?}", vec_even_sum);
}
```

- Result
```bash
Total Sum: 55
Even Numbers Sum: 30
```

