# C언어

# link

- [array(C vs Rust)](#arrayc--rust)

<hr />


# array(C & Rust)[|🔝|](#link)


```c
#include <stdio.h>

int main() {
    // Declare a 2D array of integers
    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    // Print the matrix elements
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}

```

```bash
clang -pedantic -pthread -pedantic-errors -lm -Wall -Wextra -ggdb -o ./target/main ./src/main.c
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

