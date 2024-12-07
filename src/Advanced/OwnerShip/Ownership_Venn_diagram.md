# OwnerShip밴다이어그램으로 소유권 이해

# link

<hr />

# 벤다이어그램 이해
- [https://namu.wiki/w/%EB%B2%A4%20%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8](https://namu.wiki/w/%EB%B2%A4%20%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8)

# 오너쉽 관계를 잘이해하자(구현할 때 중요하다impl)

- `T`는 오너쉽을 가지고 있다. `T`는 하위(`&`, `&mut`) 모두 커버되는 SuperSet
  - `T` is a superset of (`&` , `&mut`), denoted by

- `&` 와 `&mut` 은 disjoint set 관계
  - &(reference) and (&mut) are disjoint set

\\[T \supseteq Reference, ref mut \\]

\\[Reference \cup ref mut \\]

<img src="https://github.com/user-attachments/assets/87fa951a-0d2e-4238-a136-98229dd146a1" />

  - [https://en.wikipedia.org/wiki/Subset](https://en.wikipedia.org/wiki/Subset)
  - [https://en.wikipedia.org/wiki/Disjoint_sets](https://en.wikipedia.org/wiki/Disjoint_sets)


# Reference and Mutable Reference 관련 글
- [Reference and Mutable Reference of methods on disjoint fields](https://users.rust-lang.org/t/reference-and-mutable-reference-of-methods-on-disjoint-fields/83823)
