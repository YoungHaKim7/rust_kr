# (rust)const fn/(C++)constexpr
- [https://www.reddit.com/r/rust/comments/omefkk/will_const_ever_be_close_to_cs_constexpr/?rdt=34372](https://www.reddit.com/r/rust/comments/omefkk/will_const_ever_be_close_to_cs_constexpr/?rdt=34372)

# link

- [C++에서 C++11에서 constexpr도입된 스토리](#c에서-c11에서-constexpr도입된-스토리)
- [Rust에 도입된 `const fn` Version별로 정리. 발전 역사](#rust-verion-const-fn-발전-역사)


<hr />

# C++에서 C++11에서 constexpr도입된 스토리[|🔝|](#link)

- (2021년도 댓글)In case you didn’t know, constexpr in C++11, when it was introduced, was extremely limited (basically the function body had to be a single return statement, with recursion and the conditional operator the only ways of flow control available). Now, ten years and three Standard revisions later, it’s much more capable, but Rust hasn’t even existed in stable form that long. Give it time.
  - 몰랐을 경우를 대비해 C++11의 컨스펙스프는 도입 당시 매우 제한적이었습니다(기본적으로 함수 바디는 단일 반환문이어야 했고, 재귀와 조건부 연산자만이 흐름 제어의 유일한 방법이었습니다). 10년이 지난 지금, 훨씬 더 성능이 뛰어나지만 러스트는 그렇게 오랫동안 안정적인 형태로 존재하지도 않았습니다. 시간을 주세요.

# `const fn` 활용법(Rust에 처음 도입된게 )[|🔝|](#link)

- [잘 정리된 러스트 공식글https://rust-lang.github.io/const-eval/](https://rust-lang.github.io/const-eval/)



<hr />

# Rust Verion `const fn` 발전 역사[|🔝|](#link)

- [Rust 1.82(241017)](#version-1820-2024-10-17)
- [Rust 1.79(240613)](#version-1790-2024-06-13)
- [Rust 1.61(220519)](#version-1610-2022-05-19)
- [Rust 1.56(211021)](#version-1560-2021-10-21)
- [Rust 1.51(210325)](#version-1510-2021-03-25)
- [Rust 1.48(201119)](#version-1480-2020-11-19)
- [Rust 1.36(190704)](#version-1360-2019-07-04)
- [Rust 1.33(190228)](#version-1330-2019-02-28)
- [Rust 1.31(181206)](#version-1310-2018-12-06)

<hr />

## Version 1.82.0 (2024-10-17)[|🔝|](#link)
==========================

<a id="1.82.0-Language"></a>

Language
--------
- [Don't make statement nonterminals match pattern nonterminals](https://github.com/rust-lang/rust/pull/120221/)
- [Patterns matching empty types can now be omitted in common cases](https://github.com/rust-lang/rust/pull/122792)
- [Enforce supertrait outlives obligations when using trait impls](https://github.com/rust-lang/rust/pull/124336)
- [`addr_of(_mut)!` macros and the newly stabilized `&raw (const|mut)` are now safe to use with all static items](https://github.com/rust-lang/rust/pull/125834)
- [size_of_val_raw: for length 0 this is safe to call](https://github.com/rust-lang/rust/pull/126152/)
- [Reorder trait bound modifiers *after* `for<...>` binder in trait bounds](https://github.com/rust-lang/rust/pull/127054/)
- [Stabilize opaque type precise capturing (RFC 3617)](https://github.com/rust-lang/rust/pull/127672)
- [Stabilize `&raw const` and `&raw mut` operators (RFC 2582)](https://github.com/rust-lang/rust/pull/127679)
- [Stabilize unsafe extern blocks (RFC 3484)](https://github.com/rust-lang/rust/pull/127921)
- [Stabilize nested field access in `offset_of!`](https://github.com/rust-lang/rust/pull/128284)
- [Do not require `T` to be live when dropping `[T; 0]`](https://github.com/rust-lang/rust/pull/128438)
- [Stabilize `const` operands in inline assembly](https://github.com/rust-lang/rust/pull/128570)
- **[Stabilize floating-point arithmetic in `const fn`](https://github.com/rust-lang/rust/pull/128596)**

<hr />


## Version 1.79.0 (2024-06-13)
==========================

<a id="1.79.0-Language"></a>

Language
--------
- **[Stabilize inline `const {}` expressions.](https://github.com/rust-lang/rust/pull/104087/)**
- [Prevent opaque types being instantiated twice with different regions within the same function.](https://github.com/rust-lang/rust/pull/116935/)
- [Stabilize WebAssembly target features that are in phase 4 and 5.](https://github.com/rust-lang/rust/pull/117457/)
- [Add the `redundant_lifetimes` lint to detect lifetimes which are semantically redundant.](https://github.com/rust-lang/rust/pull/118391/)
- [Stabilize the `unnameable_types` lint for public types that can't be named.](https://github.com/rust-lang/rust/pull/120144/)
- [Enable debuginfo in macros, and stabilize `-C collapse-macro-debuginfo` and `#[collapse_debuginfo]`.](https://github.com/rust-lang/rust/pull/120845/)
- [Propagate temporary lifetime extension into `if` and `match` expressions.](https://github.com/rust-lang/rust/pull/121346/)
- **[Restrict promotion of `const fn` calls.](https://github.com/rust-lang/rust/pull/121557/)**

<hr />

Version 1.61.0 (2022-05-19)[|🔝|](#link)
==========================

Language
--------

- **[`const fn` signatures can now include generic trait bounds][93827]**
- **[`const fn` signatures can now use `impl Trait` in argument and return position][93827]**
- **[Function pointers can now be created, cast, and passed around in a `const fn`][93827]**
- [Recursive calls can now set the value of a function's opaque `impl Trait` return type][94081]


<hr />

Version 1.56.0 (2021-10-21)[|🔝|](#link)
========================

Language
--------

- [The 2021 Edition is now stable.][rust#88100]
  See [the edition guide][rust-2021-edition-guide] for more details.
- [The pattern in `binding @ pattern` can now also introduce new bindings.][rust#85305]
- [Union field access is permitted in `const fn`.][rust#85769]

[rust-2021-edition-guide]: https://doc.rust-lang.org/nightly/edition-guide/rust-2021/index.html

<hr />

## Version 1.54.0 (2021-07-29)[|🔝|](#link)
============================

Language
-----------------------

- [You can now use macros for values in some built-in attributes.][83366]
  This primarily allows you to call macros within the `#[doc]` attribute. For
  example, to include external documentation in your crate, you can now write
  the following:
  ```rust
  #![doc = include_str!("README.md")]
  ```

- [You can now cast between unsized slice types (and types which contain
  unsized slices) in `const fn`.][85078]
- [You can now use multiple generic lifetimes with `impl Trait` where the
   lifetimes don't explicitly outlive another.][84701] In code this means
   that you can now have `impl Trait<'a, 'b>` where as before you could
   only have `impl Trait<'a, 'b> where 'b: 'a`.



<hr />

## Version 1.51.0 (2021-03-25)[|🔝|](#link)
============================

Language
--------
- [You can now parameterize items such as functions, traits, and `struct`s by constant
  values in addition to by types and lifetimes.][79135] Also known as "const generics"
  E.g. you can now write the following. Note: Only values of primitive integers,
  `bool`, or `char` types are currently permitted.
  - [이제 유형별, 수명별 외에도 일정한 값으로 함수, 특성, 구조와 같은 항목을 매개 변수화할 수 있습니다.][79135] "const generics"라고도 하는 이제 다음을 작성할 수 있습니다. 참고: 현재 원시 정수, 불 또는 차 유형의 값만 허용됩니다.

  ```rust
  struct GenericArray<T, const LENGTH: usize> {
      inner: [T; LENGTH]
  }

  impl<T, const LENGTH: usize> GenericArray<T, LENGTH> {
      const fn last(&self) -> Option<&T> {
          if LENGTH == 0 {
              None
          } else {
              Some(&self.inner[LENGTH - 1])
          }
      }
  }
  ```

<hr />




## Version 1.48.0 (2020-11-19)[|🔝|](#link)
==========================

The following previously stable methods are now `const fn`'s:

- [`Option::is_some`]
- [`Option::is_none`]
- [`Option::as_ref`]
- [`Result::is_ok`]
- [`Result::is_err`]
- [`Result::as_ref`]
- [`Ordering::reverse`]
- [`Ordering::then`]

Compatibility Notes
-------------------
- [Promotion of references to `'static` lifetime inside `const fn` now follows the
  same rules as inside a `fn` body.][75502] In particular, `&foo()` will not be
  promoted to `'static` lifetime any more inside `const fn`s.

Libraries
---------
- [`mem::forget` is now a `const fn`.][73887]


<hr />



## Version 1.36.0 (2019-07-04)[|🔝|](#link)
==========================

Language
--------
- [Non-Lexical Lifetimes are now enabled on the 2015 edition.][59114]
- [The order of traits in trait objects no longer affects the semantics of that
  object.][59445] e.g. `dyn Send + fmt::Debug` is now equivalent to
  `dyn fmt::Debug + Send`, where this was previously not the case.

Libraries
---------
- [`HashMap`'s implementation has been replaced with `hashbrown::HashMap` implementation.][58623]
- [`TryFromSliceError` now implements `From<Infallible>`.][60318]
- [`mem::needs_drop` is now available as a const fn.][60364]
- [`alloc::Layout::from_size_align_unchecked` is now available as a const fn.][60370]
- [Both `NonNull::{dangling, cast}` are now const fns.][60244]


<hr />

## Version 1.33.0 (2019-02-28)[|🔝|](#link)
==========================

Language
--------
- [You can now use the `cfg(target_vendor)` attribute.][57465] E.g.
  `#[cfg(target_vendor="apple")] fn main() { println!("Hello Apple!"); }`
- [Integer patterns such as in a match expression can now be exhaustive.][56362]
  E.g. You can have match statement on a `u8` that covers `0..=255` and
  you would no longer be required to have a `_ => unreachable!()` case.
- [You can now have multiple patterns in `if let` and `while let`
  expressions.][57532] You can do this with the same syntax as a `match`
  expression. E.g.
  ```rust
  enum Creature {
      Crab(String),
      Lobster(String),
      Person(String),
  }

  fn main() {
      let state = Creature::Crab("Ferris");

      if let Creature::Crab(name) | Creature::Person(name) = state {
          println!("This creature's name is: {}", name);
      }
  }
  ```
- [You can now have irrefutable `if let` and `while let` patterns.][57535] Using
  this feature will by default produce a warning as this behaviour can be
  unintuitive. E.g. `if let _ = 5 {}`
- [You can now use `let` bindings, assignments, expression statements,
  and irrefutable pattern destructuring in const functions.][57175]
- [You can now call unsafe const functions.][57067] E.g.
  ```rust
  const unsafe fn foo() -> i32 { 5 }
  const fn bar() -> i32 {
      unsafe { foo() }
  }
  ```
- [You can now specify multiple attributes in a `cfg_attr` attribute.][57332]
  E.g. `#[cfg_attr(all(), must_use, optimize)]`
- [You can now specify a specific alignment with the `#[repr(packed)]`
  attribute.][57049] E.g. `#[repr(packed(2))] struct Foo(i16, i32);` is a struct
  with an alignment of 2 bytes and a size of 6 bytes.
- [You can now import an item from a module as an `_`.][56303] This allows you to
  import a trait's impls, and not have the name in the namespace. E.g.
  ```rust
  use std::io::Read as _;

  // Allowed as there is only one `Read` in the module.
  pub trait Read {}
  ```
- [You may now use `Rc`, `Arc`, and `Pin` as method receivers][56805].



## Version 1.31.0 (2018-12-06)[|🔝|](#link)
==========================

Language
--------
- 🎉 [This version marks the release of the 2018 edition of Rust.][54057] 🎉
- [New lifetime elision rules now allow for eliding lifetimes in functions and
  impl headers.][54778] E.g. `impl<'a> Reader for BufReader<'a> {}` can now be
  `impl Reader for BufReader<'_> {}`. Lifetimes are still required to be defined
  in structs.
- [You can now define and use `const` functions.][54835] These are currently
  a strict minimal subset of the [const fn RFC][RFC-911]. Refer to the
  [language reference][const-reference] for what exactly is available.
