# zig언어
- zig는 C언어와 거의 비슷하다.  단순하고 쉽다.

# link

- [array(zig vs Rust)](#arrayzig--rust)


<hr />

# array(Zig & Rust)[|🔝|](#link)


```zig
const std = @import("std");

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
            std.debug.print("{} ", .{element});
        }
        std.debug.print("\n", .{});
    }
}
```
