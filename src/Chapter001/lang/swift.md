# Swift언어


# link

- [array(swift vs Rust)](#arrayswift--rust)

<hr />

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)

<hr />


# array(Swift & Rust)[|🔝|](#link)

```swift
import Foundation

func main() {
    // Declare a 2D array of integers
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    // Print the matrix elements
    for row in matrix {
        for element in row {
            print(element, terminator: " ")
        }
        print()
    }
}

main()

```


```bash
# MyCliAdd 라는 프로젝트로 프로젝트 만들기
# main.swift 에서 코드 작업하면 된다.
$ swift package init --name MyCLIAdd --type executable
Creating executable package: MyCLIAdd
Creating Package.swift
Creating .gitignore
Creating Sources/
Creating Sources/main.swift


$ swift run
Building for debugging...
[8/8] Applying MyCLIAdd
Build of product 'MyCLIAdd' complete! (3.22s)
1 2 3
4 5 6
7 8 9

```

- Rust

```rust
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


