# Swift언어


# link

- [array(swift vs Rust)](#arrayswift--rust)


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
