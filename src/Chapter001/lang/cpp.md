# C++언어

# link

- [array(C++ vs Rust)](#arrayc--rust)


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
