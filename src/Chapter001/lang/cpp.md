# C++언어

# link

- [array(C++ vs Rust)](#arrayc--rust)

- [for(C++ vs Rust)](#for문c--rust)

<hr />

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)


<hr />


# array(C++ & Rust)[|🔝|](#link)

```cpp
// C++
#include <iostream>

int main() {
    // Declare a 2D array of integers
    int matrix[3][3];

    // Initialize the matrix elements
    matrix[0][0] = 1;
    matrix[0][1] = 2;
    matrix[0][2] = 3;
    matrix[1][0] = 4;
    matrix[1][1] = 5;
    matrix[1][2] = 6;
    matrix[2][0] = 7;
    matrix[2][1] = 8;
    matrix[2][2] = 9;

    // Print the matrix elements
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```

- Result

```bash

$ g++ -std=c++2b -pedantic -pthread -pedantic-errors -lm -Wall -Wextra -ggdb -o ./target/main ./src/main.cpp
./target/main

1 2 3
4 5 6
7 8 9
```


- Rust

```rs
// Rust

fn main() {
    // Declare a 2D array of integers
    let matrix: [[i32; 3]; 3] = [
        //
        [1, 2, 3], //
        [4, 5, 6], //
        [7, 8, 9], //
    ];

    // Print the matrix elements
    for row in matrix {
        println!("{:?}", row)
    }
}
```

- Result

```bash
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```


<hr />

# for문(C++ & Rust)[|🔝|](#link)

- modern c++에서는 begin, end를 활용하겠지만 단순한 비교를 위해 옛날 스타일로 비교한다.

```cpp
// c++
#include <iostream>

int main() {
    for(int i =0; i< 10; ++i) {
        std::cout << i << std::endl;
    }
    return 0;
}
```


- Rust

```rs
// Rust
fn main() {
    for i in 0..10 {
        println!("{}", i);
    }
}
```

- Result

```bash
0
1
2
3
4
5
6
7
8
9
```


<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>

