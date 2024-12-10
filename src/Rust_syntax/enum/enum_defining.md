# Defining an Enum 정의

- Where structs give you a way of grouping together related fields and data, like a Rectangle with its width and height, enums give you a way of saying a value is one of a possible set of values. For example, we may want to say that Rectangle is one of a set of possible shapes that also includes Circle and Triangle. To do this, Rust allows us to encode these possibilities as an enum.
  - 구조가 너비와 높이를 가진 직사각형과 같이 관련 필드와 데이터를 그룹화하는 방법을 제공하는 경우, 열거형은 값이 가능한 값 집합 중 하나라고 말할 수 있는 방법을 제공합니다. 예를 들어 직사각형은 원과 삼각형을 포함하는 가능한 도형 집합 중 하나라고 말할 수 있습니다. 이를 위해 Rust를 사용하면 이러한 가능성을 열거형으로 인코딩할 수 있습니다.

- Let’s look at a situation we might want to express in code and see why enums are useful and more appropriate than structs in this case. Say we need to work with IP addresses. Currently, two major standards are used for IP addresses: version four and version six. Because these are the only possibilities for an IP address that our program will come across, we can enumerate all possible variants, which is where enumeration gets its name.
  - 코드로 표현할 수 있는 상황을 살펴보고 이 경우 에넘이 구조보다 유용하고 더 적절한 이유를 알아보겠습니다. IP 주소로 작업해야 한다고 가정해 보겠습니다. 현재 IP 주소에는 버전 4와 버전 6이라는 두 가지 주요 표준이 사용되고 있습니다. 이는 우리 프로그램이 접할 수 있는 IP 주소의 유일한 가능성이기 때문에 가능한 모든 변형을 열거할 수 있으며, 여기서 열거라는 이름이 붙습니다.

- Any IP address can be either a version four or a version six address, but not both at the same time. That property of IP addresses makes the enum data structure appropriate because an enum value can only be one of its variants. Both version four and version six addresses are still fundamentally IP addresses, so they should be treated as the same type when the code is handling situations that apply to any kind of IP address.
  - 모든 IP 주소는 버전 4 또는 버전 6 주소가 될 수 있지만 동시에 둘 다 될 수는 없습니다. 이러한 IP 주소의 속성은 열거형 값이 변형 중 하나만 될 수 있기 때문에 열거형 데이터 구조를 적절하게 만듭니다. 버전 4 및 버전 6 주소는 모두 여전히 기본적으로 IP 주소이므로 코드가 모든 종류의 IP 주소에 적용되는 상황을 처리할 때 동일한 유형으로 취급되어야 합니다.

- We can express this concept in code by defining an IpAddrKind enumeration and listing the possible kinds an IP address can be, V4 and V6. These are the variants of the enum:
  - IpAddrKind 열거형을 정의하고 IP 주소가 될 수 있는 가능한 종류를 나열하여 이 개념을 코드로 표현할 수 있습니다(V4 및 V6). 다음은 열거형의 변형입니다:

<hr />

# 위 문장은 러스트 공식 사이트에 있는 내용입니다.
- 제가 이해한 enum을 설명 드리겠습니다.

```rust
enum KeyboardArrowKey {
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
}

fn input_arrow(x: KeyboardArrowKey) -> String {
    match x {
        KeyboardArrowKey::ArrowUp => "Up".to_string(),
        KeyboardArrowKey::ArrowDown => "Down".to_string(),
        KeyboardArrowKey::ArrowLeft => "Left".to_string(),
        KeyboardArrowKey::ArrowRight => "Right".to_string(),
    }
}

fn main() {
    let rightkey = KeyboardArrowKey::ArrowRight;
    dbg!(input_arrow(rightkey));
}
```

- 보통 enum은 match와 쓰는 경우가 많습니다.
