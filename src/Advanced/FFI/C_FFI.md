# Rust_FFI_C언어

# link

<hr />

# hello world(C_FFI)_printf(C)

[code ex코드예시](https://github.com/YoungHaKim7/rust_book_src_examples/tree/main/005_Rust_advanced_course/Rust_FFI/C_lang_Rust_FFI/c_ffi_printf)

```rust
use libc::printf;

fn main() {
    unsafe {
        let print_x = (r#"hello c__FFI(Rust Lang)"#.as_ptr()) as *const i8;
        printf(print_x);
    }
}
```

- Result

```bash
hello c__FFI(Rust Lang)⏎   
```

