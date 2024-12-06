# zig언어
- zig는 C언어와 거의 비슷하다.  단순하고 쉽다.

# link

- [array(Zig vs Rust)](#arrayzig--rust)

- [for(Zig & Rust)](#forzig--rust)


<hr />

# array(Zig & Rust)[|🔝|](#link)


```zig
// zig
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


# for(Zig & Rust)[|🔝|](#link)


- Rust

```rs
// Rust
fn main() {
    for i in 0..10 {
        println!("{}", i);
    }
}
```


- zig
  - https://zig-by-example.com/for

```zig
// zig
const std = @import("std");
const print = std.debug.print;

pub fn main() !void {
    var array = [_]u32{ 1, 2, 3 };

    for (array) |elem| {
        print("by val: {}\n", .{elem});
    }

    for (&array) |*elem| {
        elem.* += 100;
        print("by ref: {}\n", .{elem.*});
    }

    for (array, &array) |val, *ref| {
        _ = val;
        _ = ref;
    }

    for (0.., array) |i, elem| {
        print("{}: {}\n", .{ i, elem });
    }

    for (array) |_| {}
}
```

- Result

```bash

by val: 1
by val: 2
by val: 3
by ref: 101
by ref: 102
by ref: 103
0: 101
1: 102
2: 103
```

<hr />

