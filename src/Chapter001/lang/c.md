# C언어

# link

- [array(C vs Rust)](#arrayc--rust)

<hr />

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)

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


<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>

