# Bitwise_Operators


# link

- [~a가 -86으로 평가 되는 이유](#a가--86으로-평가-되는-이유)

<hr />

# Rust Code

```rs
// Rust
fn main() {
    let x = 0x55; // 0101 0101
    let y = 0x66; // 0110 0110
    let x_01 = 0x1;
    let y_02 = 0x2;

    println!("~x : {}", !x);
    println!("x & y : {}", x & y);
    println!("x | y : {}", x | y);
    println!("x ^ y : {}", x ^ y);
    println!("x01 << y02 : {}  // left shift", x_01 << y_02);
    println!("x01 >> y02 : {}   // right shift", x_01 >> y_02);
}
```

- Result

```bash
# rust 에서는 C언어에서 ~x 이걸 !x 이렇게 표현한다. not gate
~x : -86
x & y : 68
x | y : 119
x ^ y : 51
x01 << y02 : 4  // left shift
x01 >> y02 : 0   // right shift
```


# C언어

```c
#include <stdio.h>

int main(void) {
    int a = 0x55; // 0101 0101
    int b = 0x66; // 0110 0110
    int x = 0x1; // 0001
    int y = 0x2; // 0010
    int x02 = 0x4; // 0100
    int y02 = 0x1; // 0001
    printf("~a = %d\n", ~a); // 강제형변환 10101010 (unsigned) = 11111111111111111111111110101010 (signed)
    printf("a & b = %d\n", a & b); // 0100 0100
    printf("a | b = %d\n", a | b); // 0111 0111
    printf("a ^ b = %d\n", a ^ b); // 0011 0011
    printf("\nx << y =  %d  // left shift\n", x << y); //  0100
    printf("x >> y = %d  // right shift\n", x >> y); //  0000
    printf("\nx02 << y02 = %d  // left shift\n", x02 << y02); //  1000
    printf("x02 >> y02 = %d  // right shift\n", x02 >> y02); //  0010

    return 0;
}
```

- Result

```bash
clang -pedantic -pthread -pedantic-errors -lm -Wall -Wextra -ggdb -o ./target/main ./src/main.c
./target/main

~a = -86
a & b = 68
a | b = 119
a ^ b = 51

x << y =  4  // left shift
x >> y = 0   // right shift

x02 << y02 = 8  // left shift
x02 >> y02 = 2  // right shift

```

# ~a가 -86으로 평가 되는 이유[|🔝|](#link)

- 주어진 C 코드에서 ~a가 -86으로 평가되는 이유를 분해해 보겠습니다.
- ~ 연산자란 무엇인가요?
- C에서 ~ 연산자는 비트 단위 NOT 연산자입니다. 연산자는 피연산자의 모든 비트를 뒤집습니다. 즉, 피연산자의 이진 표현에서 각 비트에 대해 ~ 연산자는 이를 반전시킵니다.
- 변수 a의 이진 표현 변수는 16진수 값 0x55로 초기화됩니다. 이를 이진법으로 변환합니다:

- Let's break down the process of why ~a evaluates to -86 in the given C code.
  - What is the ~ operator?
  - In C, the ~ operator is the bitwise NOT operator. It flips all the bits of its operand. This means that for each bit in the binary representation of the operand, the ~ operator will invert it.
  - Binary representation of a The variable a is initialized with the hexadecimal value 0x55. Let's convert this to binary:

```
0x55 in binary is 01010101
```

- Applying the bitwise NOT operator

- Now, let's apply the ~ operator to the binary representation of a:

- 비트 단위 NOT 연산자 적용

- 이제 ~ 연산자를 a의 이진 표현에 적용해 보겠습니다:

```
~01010101 = 10101010
```

- Converting the result back to decimal

- The binary result 10101010 can be converted back to decimal:

- 10101010 in decimal is 170

- However, in the given code, the output is -86. This is because the ~ operator is applied to an unsigned integer (0x55), but the result is then implicitly converted to a signed integer.

- - 결과를 십진수로 다시 변환하기

- 이진 결과 10101010은 다시 10진수로 변환할 수 있습니다:

- 10101010 소수점 이하는 170입니다

- 그러나 주어진 코드에서 출력은 -86입니다. 이는 ~ 연산자가 부호 없는 정수(0x55)에 적용되지만 결과는 암시적으로 부호 있는 정수로 변환되기 때문입니다.

<hr />

- Implicit conversion to signed integer

- When the ~ operator is applied to an unsigned integer, the result is still an unsigned integer. However, when this result is assigned to a signed integer variable (in this case, the printf format string %d expects a signed integer), the compiler performs an implicit conversion.

- The implicit conversion from unsigned to signed integer is done by sign-extending the bits. In this case, the binary result 10101010 is sign-extended to a 32-bit signed integer:

```
10101010 (unsigned) = 11111111111111111111111110101010 (signed)
```

- 부호 있는 정수로의 암묵적 변환

- ~ 연산자를 부호화되지 않은 정수에 적용하면 결과는 여전히 부호화되지 않은 정수입니다. 그러나 이 결과가 부호화된 정수 변수에 할당되면(이 경우 printf 형식 문자열 %d은 부호화된 정수를 기대합니다) 컴파일러는 암묵적 변환을 수행합니다.

- 암시적인 부호 없는 정수에서 부호 있는 정수로의 변환은 비트를 부호 확장하여 수행됩니다. 이 경우 이진 결과 10101010은 32비트 부호 있는 정수로 부호 확장됩니다:

```
10101010 (unsigned) = 11111111111111111111111110101010 (signed)
```
