# Kotlin언어


# link

- [sdkman으로 kotlin& java version관리하기](https://sdkman.io/)

- [array(Kotlin vs Rust)](#arrayc--rust)

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)


<hr />


# array(Kotlin & Rust)[|🔝|](#link)


```kt
fun main() {
    // Declare a 2D array of integers
    val matrix = arrayOf(
        intArrayOf(1, 2, 3),
        intArrayOf(4, 5, 6),
        intArrayOf(7, 8, 9)
    )

    // Print the matrix elements
    for (row in matrix) {
        println(row.joinToString(" "))
    }
}
```

- Result

```bash

kotlinc ./src/Main.kt -include-runtime -d ./out/Main.jar
java -jar ./out/Main.jar

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
