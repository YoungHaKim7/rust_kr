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
    for i in 0..4 {
        println!("{}", i);
    }

    let mut array = [1, 2, 3];

    // Iterate over the array by value
    for elem in &array {
        println!("by val: {}", elem);
    }

    // Iterate over the array by mutable reference
    for elem in &mut array {
        *elem += 100;
        println!("by ref: {}", elem);
    }

    let array02 = [1, 2, 3];
    // Iterate over the array with both value and mutable reference
    for (val, ref elem) in array02.iter().zip(array.iter_mut()) {
        println!("ele {}, val = {}", val, elem)
    }

    // Iterate over the array with index and value
    for (i, elem) in array.iter().enumerate() {
        println!("{}: {}", i, elem);
    }

    // Iterate over the array (no-op)
    for i in &array {
        println!("{i}");
    }

    
}
```

- Result

```bash
0
1
2
3
by val: 1
by val: 2
by val: 3
by ref: 101
by ref: 102
by ref: 103
ele 1, val = 101
ele 2, val = 102
ele 3, val = 103
0: 101
1: 102
2: 103
101
102
103
```


- zig
  - [https://zig-by-example.com/for](https://zig-by-example.com/for)

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

