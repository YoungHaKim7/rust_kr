# zig언어
- zig는 C언어와 거의 비슷하다.  단순하고 쉽다.

# link

- [array(zig vs Rust)](#arrayzig--rust)


<hr />

# array(Zig & Rust)[|🔝|](#link)


```zig
const std = @import("std");
const print = std.debug.print;

pub fn main() !void {
    // Declare a 2D array of integers
    const matrix: [3][3]i32 = [_][3]i32{
        [_]i32{ 1, 2, 3 },
        [_]i32{ 4, 5, 6 },
        [_]i32{ 7, 8, 9 },
    };

    // Print the matrix elements
    for (matrix) |row| {
        for (row) |element| {
            print("{} ", .{element});
        }
        print("\n", .{});
    }
}
```

- Result

```bash
$ zig build run

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
