# Rust Compiler이해LLVM_컴파일과정

- [Rust와 LLVM의 관계(241206)2024 LLVM Developers' Meeting - Rust ❤️ LLVM](https://youtu.be/Kqz-umsAnk8?si=y92zruNzeSrhq8CN)
  - [2024 LLVM Developers' Meeting](https://llvm.org/devmtg/2024-10/)

# link

- [Rust컴파일 되는 과정]()
- [LLVM이 느려서 그 한계를 극복하기 위해 연구 중인 방안들 ]
  - [Rust코드로 만든 러스트 컴파일러Cranelift based backend for rustc ](https://github.com/rust-lang/rustc_codegen_cranelift)
  - [gccrs는 GCC 프로젝트의 일환으로 개발 중인 대체 Rust 컴파일러입니다](https://news.hada.io/topic?id=17681&utm_source=discord&utm_medium=bot&utm_campaign=1480)
    - [github  https://github.com/rust-gcc/gccrs](https://github.com/rust-gcc/gccrs)
      - [241107Rust Blog에 소개](https://blog.rust-lang.org/2024/11/07/gccrs-an-alternative-compiler-for-rust.html)


<hr />

# Rust컴파일 되는 과정[|🔝|](#link)


<p align="center">
  <img src="https://github.com/YoungHaKim7/Cpp_Training/assets/67513038/e5308776-06b2-4687-99f2-0e5d6c3af8b2" />
</p>

- 출처 : [https://blog.rust-lang.org/2016/04/19/MIR.html](https://blog.rust-lang.org/2016/04/19/MIR.html)

<hr />

![Screenshot 2023-12-30 at 1 41 01 AM](https://github.com/YoungHaKim7/Cpp_Training/assets/67513038/871b7ae5-106f-49cf-9c98-ea9e41da32c7)
![Screenshot 2023-12-30 at 1 40 22 AM](https://github.com/YoungHaKim7/Cpp_Training/assets/67513038/1c352795-bd1c-41b6-ab4e-aeb69973da7d)

- [Rust 1.74.0: All 45 changes in 19 minutes! | Nathan Stocks(6min 36sec)](https://youtu.be/MOzuShpnUm8?si=GArUM-7CqH6TVbeD)

<br />

# LLVM이 느려서 그 한계를 극복하기 위해 연구 중인 방안들[|🔝|](#link)

- [Rust코드로 만든 러스트 컴파일러Cranelift based backend for rustc ](https://github.com/rust-lang/rustc_codegen_cranelift)

- **[gccrs: Rust를 위한 대체 컴파일러](<https://news.hada.io/topic?id=17681&utm_source=discord&utm_medium=bot&utm_campaign=1480>)**
  - `gccrs`는 GCC 프로젝트의 일환으로 개발 중인 대체 Rust 컴파일러입니다.  
  - 이 프로젝트는 GNU 컴파일러 컬렉션 내에서 Rust를 지원하는 것을 목표로 하며, `rustc`와 동일한 동작을 목표로 합니다.  
  - 주요 목표는 특히 LLVM이 지원하지 않는 플랫폼에서 Rust를 컴파일할 수 있는 대안을 제공하는 것입니다.  
  ...

<img src="https://github.com/user-attachments/assets/0776adbd-bbc2-455e-bd9e-18ff09be78f0" />

- [7분50초에 나옴(241206)2024 LLVM Developers' Meeting - Rust ❤️ LLVM](https://youtu.be/Kqz-umsAnk8?si=y92zruNzeSrhq8CN)
