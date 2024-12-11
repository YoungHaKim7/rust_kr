# Summary

- [Rust_kr_Welcome소개](./intro.md)
- [Appendix & Q&A & 기여하기](./qanda.md)
  - [Appendix](./Appendix.md)
  - [justfile 러스트로 만든 makefile비슷한거](./justfile.md)
  - [Rust OS 프로젝트](./rustos.md)
  - [Rust Linux 프로젝트](./rustlinux.md)
-----------
# 코딩의 기본 원리- Zig, C,C++, etc.
- [Chapter 1(코딩의 원리)](./Chapter001/chapter_1.md)
  - [러스트 언어와 다른언어의 차이점](./Chapter001/rust_etc_difference.md)
    - [대부분의 코딩의 공통적인것들](./Chapter001/common.md)
    - [zig언어](./Chapter001/lang/zig.md)
    - [C++언어](./Chapter001/lang/cpp.md)
    - [C언어](./Chapter001/lang/c.md)
    - [Kotlin언어](./Chapter001/lang/kotlin.md)
    - [Swift언어](./Chapter001/lang/swift.md)
    - [C#언어](./Chapter001/lang/c_sharp.md)
  - [Rust의 전체적인 그림 잡기](./Chapter001/rust_summary.md)
    - [struct](./Chapter001/struct/rust_struct.md)
-----------
# Rust Lang
- [Rust_Syntax러스트문법](./Rust_syntax/intro.md)
  - [Rust_Getting_Started설치및 시작](./Rust_syntax/getting_stared/hello_world.md)
  - [Programming_fake_install가짜인스톨프로그램 만들기](./Rust_syntax/programming/fake_install.md)
  - [Common Programming Concepts프로그래밍컨셉](./Rust_syntax/Common_Programming/concepts.md)
    - [Variables&Mutability변수불편](./Rust_syntax/Common_Programming/Val_Mut/val_mutable.md)
    - [Data_Types데이터 타입](./Rust_syntax/Common_Programming/Data_Types/data_types.md)
    - [Functions기능만들기fn](./Rust_syntax/Common_Programming/Functions/Functions_rust.md)
    - [Comments주석처리](./Rust_syntax/Common_Programming/Comments/Comments.md)
    - [Control Flow(if, else if, loop, while등등)](./Rust_syntax/Common_Programming/Control_Flow/Control_Flow_if.md)
  - [OwnerShip오너쉽_borrowing](./Rust_syntax/Ownership_borrowing/Ownership_borrowing.md)
  - [Struct를 이용한 구조화](./Rust_syntax/struct/structs.md)
    - [Struct 정의 및 인스턴스화(Instantiating)](./Rust_syntax/struct/defining_structs.md)
  - [Enums and Pattern Matching](./Rust_syntax/enum/enum_variant.md)
    - [Defining an Enum 정의](./Rust_syntax/enum/enum_defining.md)
  - [데이터 저장Common Collections](./Rust_syntax/Common_Collections/common_collections.md)
    - [Vectors데이터 저장](./Rust_syntax/Common_Collections/Vector.md)


-----------
# Rust 고급 기술
- [Rust 고급 기술](./Advanced/advanced.md)
  - [Traits](./Advanced/traits.md)
    - [D&D던전앤드래곤 만들어보기](./Advanced/dandd.md)
  - [Sizedness-in-rust](./Advanced/pretzelhammer_blog/Sizedness_in_rust.md)
  - [C++오너쉽개념 기초 C++11에서 가져옴(move_semantics)](./Advanced/cpp/move_semantics.md)
    - [OwnerShip벤다이어그램으로 소유권 이해](./Advanced/OwnerShip/Ownership_Venn_diagram.md)
  - [Closures클로져DeepDive](./Advanced/Closures/Closures_deepdive.md)
  - [다른언어에서 러스트로 온 좋은 기능들..](./Advanced/rust_release/Rfcs/intro.md)
    - [(rust)const fn/(C++)constexpr](./Advanced/rust_release/Rfcs/rust_const_fn.md)
  - [Operator](./Advanced/Operator/intro.md)
    - [C_Operator_Precedence](./Advanced/Operator/c_operator_precedence.md)
    - [Logical_Operators](./Advanced/Operator/logical_operators.md)
    - [Bitwise_Operators](./Advanced/Operator/bitwise_operators.md)
  - [Rust Lifetime개념 깊게deep dive](./Advanced/rust_deep_dive/rust_lifetime.md)
  - [Algorithm알고리즘](./Advanced/Algorithm/summary_algo.md)
  - [Rust_FFI](./Advanced/FFI/summary_FFI.md)
    - [C언어_Rust_FFI](./Advanced/FFI/C_FFI.md)
  - [Rust(ComputerSystem,CS)](./Advanced/CS_ComputerSystem/CS_index.md)
    - [IntegerDisplay정수표시(CS)](./Advanced/CS_ComputerSystem/Integer_Display/CS_integer.md)
  - [rust_release](./Advanced/rust_release/rust_release.md)
    - [rust_1_85_Rust Edition 2024](./Advanced/rust_release/rust_1_85.md)
      - [Language](./Advanced/rust_release/editions/rust-2024/language.md)
        - [RPIT lifetime capture rules](./Advanced/rust_release/editions/rust-2024/rpit-lifetime-capture.md)
        - [`if let` temporary scope](./Advanced/rust_release/editions/rust-2024/temporary-if-let-scope.md)
        - [Tail expression temporary scope](./Advanced/rust_release/editions/rust-2024/temporary-tail-expr-scope.md)
        - [Match ergonomics](./Advanced/rust_release/editions/rust-2024/match-ergonomics.md)
        - [Unsafe `extern` blocks](./Advanced/rust_release/editions/rust-2024/unsafe-extern.md)
        - [Unsafe attributes](./Advanced/rust_release/editions/rust-2024/unsafe-attributes.md)
        - [`unsafe_op_in_unsafe_fn` warning](./Advanced/rust_release/editions/rust-2024/unsafe-op-in-unsafe-fn.md)
        - [Disallow references to `static mut`](./Advanced/rust_release/editions/rust-2024/static-mut-references.md)
        - [Never type fallback change](./Advanced/rust_release/editions/rust-2024/never-type-fallback.md)
        - [Macro fragment specifiers](./Advanced/rust_release/editions/rust-2024/macro-fragment-specifiers.md)
        - [Missing macro fragment specifiers](./Advanced/rust_release/editions/rust-2024/missing-macro-fragment-specifiers.md)
        - [`gen` keyword](./Advanced/rust_release/editions/rust-2024/gen-keyword.md)
        - [Reserved syntax](./Advanced/rust_release/editions/rust-2024/reserved-syntax.md)
      - [Standard library](./Advanced/rust_release/editions/rust-2024/standard-library.md)
        - [Additions to the prelude](./Advanced/rust_release/editions/rust-2024/prelude.md)
        - [Add `IntoIterator` for `Box<[T]>`](./Advanced/rust_release/editions/rust-2024/intoiterator-box-slice.md)
        - [Newly unsafe functions](./Advanced/rust_release/editions/rust-2024/newly-unsafe-functions.md)
      - [Cargo](./Advanced/rust_release/editions/rust-2024/cargo.md)
        - [Cargo: Rust-version aware resolver](./Advanced/rust_release/editions/rust-2024/cargo-resolver.md)
        - [Cargo: Table and key name consistency](./Advanced/rust_release/editions/rust-2024/cargo-table-key-names.md)
        - [Cargo: Reject unused inherited default-features](./Advanced/rust_release/editions/rust-2024/cargo-inherited-default-features.md)
      - [Rustdoc](./Advanced/rust_release/editions/rust-2024/rustdoc.md)
        - [Rustdoc combined tests](./Advanced/rust_release/editions/rust-2024/rustdoc-doctests.md)
        - [Rustdoc nested `include!` change](./Advanced/rust_release/editions/rust-2024/rustdoc-nested-includes.md)
      - [Rustfmt](./Advanced/rust_release/editions/rust-2024/rustfmt.md)
        - [Rustfmt: Style edition](./Advanced/rust_release/editions/rust-2024/rustfmt-style-edition.md)
        - [Rustfmt: Assignment operator RHS indentation](./Advanced/rust_release/editions/rust-2024/rustfmt-assignment-operator-rhs-indentation.md)
        - [Rustfmt: Combine all delimited exprs as last argument](./Advanced/rust_release/editions/rust-2024/rustfmt-overflow-delimited-expr.md)
        - [Rustfmt: Single-line `where` clauses](./Advanced/rust_release/editions/rust-2024/rustfmt-single-line-where-clauses.md)
        - [Rustfmt: Raw identifier sorting](./Advanced/rust_release/editions/rust-2024/rustfmt-raw-identifier-sorting.md)
        - [Rustfmt: Version sorting](./Advanced/rust_release/editions/rust-2024/rustfmt-version-sorting.md)
    - [rust_1_83](./Advanced/rust_release/rust_1_83.md)
    - [rust_1_56_Rust Edition 2021](./Advanced/rust_release/rust_1_56.md)
      - [Additions to the prelude](./Advanced/rust_release/editions/rust-2021/prelude.md)
      - [Default Cargo feature resolver](./Advanced/rust_release/editions/rust-2021/default-cargo-resolver.md)
      - [IntoIterator for arrays](./Advanced/rust_release/editions/rust-2021/IntoIterator-for-arrays.md)
      - [Disjoint capture in closures](./Advanced/rust_release/editions/rust-2021/disjoint-capture-in-closures.md)
      - [Panic macro consistency](./Advanced/rust_release/editions/rust-2021/panic-macro-consistency.md)
      - [Reserved syntax](./Advanced/rust_release/editions/rust-2021/reserved-syntax.md)
      - [Raw lifetimes](./Advanced/rust_release/editions/rust-2021/raw-lifetimes.md)
      - [Warnings promoted to errors](./Advanced/rust_release/editions/rust-2021/warnings-promoted-to-error.md)
      - [Or patterns in macro-rules](./Advanced/rust_release/editions/rust-2021/or-patterns-macro-rules.md)
      - [C-string literals](./Advanced/rust_release/editions/rust-2021/c-string-literals.md)
    - [rust_1_31_Rust Edition 2018](./Advanced/rust_release/rust_1_31.md)
      - [Path and module system changes](./Advanced/rust_release/editions/rust-2018/path-changes.md)
      - [Anonymous trait function parameters deprecated](./Advanced/rust_release/editions/rust-2018/trait-fn-parameters.md)
      - [New keywords](./Advanced/rust_release/editions/rust-2018/new-keywords.md)
      - [Method dispatch for raw pointers to inference variables](./Advanced/rust_release/editions/rust-2018/tyvar-behind-raw-pointer.md)
      - [Cargo changes](./Advanced/rust_release/editions/rust-2018/cargo.md)
    - [rust_1_00_Rust Edition 2015](./Advanced/rust_release/editions/rust-2015/index.md)
  - [rust_rfcs_nightly](./Advanced/rust_release/rust_rfcs.md)

-----------
# Rust(Parallelism&Concurrency) 
- [Rust Parallelism&Concurrency](./Advanced/Parallelism_Concurrency/Parallelism_Concurrency_intro.md)

-----------
# Optimization최적화
- [Rust Optimization최적화](./Advanced/Optimization/optimization.md)
  - [모든 언어별 공통적인 최적화 개념](./Advanced/Optimization/common.md)
  - [Rust Optimization](./Advanced/Optimization/rust_optimization.md)
    - [Vector를 array로 변환](./Advanced/Optimization/vector_array_convert.md)


-----------
# 문제해결Rust코드로 해결하기
- [문제해결Rust코드로 해결](./Problem_Solving/Problem_index.md)
  - [정렬(Sort)](./Problem_Solving/Sort/Sort_Problem_Solving.md)
  - [검색(Search)](./Problem_Solving/Search/Search_Problem_Solving.md)
  - [문자열 패턴 매칭(SPM: String Pattern Matching)](./Problem_Solving/SPM/String_Pattern_Matching_Problem_Solving.md)
    - [csv문서에서 내가 원하는정보 뽑아내기](./Problem_Solving/SPM/csv_search_collect.md)
  - [계산(Calculation)](./Problem_Solving/Calculation/Calculation_Problem_Solving.md)
    - [x^3계산](./Problem_Solving/Calculation/x_x_xCalculation_Problem_Solving.md)
    - [짝수만 계산&받은 데이터롤 모두 더하기(+)](./Problem_Solving/Calculation/all_sum_even_sumCalculation_Problem_Solving.md)


-----------
# Rust 화이트 해커(Hacking)
- [BlackHatRust유료(영어원서)](./HackingRust/BlackHat_Rust.md)

-----------
# Rust OS(Operating System)
- [Rust OS](./RustOS/RustOS_intro.md)


-----------
# Rust Embedded 
- [Rust Embedded](./RustEmbedded/RustEmbedded_intro.md)


-----------
# Rust Assembly(x86_64)



-----------
# Rust Assembly(Arm)
