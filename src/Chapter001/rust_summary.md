# Rust의 전체적인 그림 잡기

# link

- [Rust String VS 다른 언어의 String의 차이점](#rust-string-vs-다른-언어의-차이점)

- [오너쉽 이해하기 &  Borrowing]()
- [Stack & Heap 메모리 이해하기_ Stack과 Heap은 개발자가 옛날에 정한  약속 같은거라 왼쪽은 stack / 오른쪽은 heap하자 느낌으로 기억하자]()
  - [Stack vs Heap의 장점](#stack-vs-heap의-장점)

- struct & enum & trait를 쓰는 경우
  - [struct(보통 데이터 저장하는 개념으로 이해하자)]()
  - [enum(키보드의 화살표 같은거 저장할때 게임에서 방향키  웹에선 200같은 접속 성공같은거_딱딱한 러스트의 타입 시스템을 유연하게 만들어준다.)]()
  - [trait러스트의 딱딱한 타입시스템을 유연하게 만들 매직_Rust의 꽃Traits 젤 어렵지만 젤 재능이 많다.]()


- Memory 기초지식
    - [Memory Basic_assembly64.pdf](http://www.egr.unlv.edu/~ed/assembly64.pdf)

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)


<hr />

# 오너쉽 이해하기 &  Borrowing[|🔝|](#link)



# Stack & Heap 메모리 이해하기[|🔝|](#link)

- Stack과 Heap은 개발자가 옛날에 정한  약속 같은거라 왼쪽은 stack / 오른쪽은 heap하자 느낌으로 기억하자]()

- 그림으로 이해해보자 RAM모양을 내 맘대로 정했다. 이게 외우기 젤 좋다.

<img src="https://github.com/user-attachments/assets/8f35a1e5-db8c-4f77-8ad0-99cf01ebf434" />

<img src="https://github.com/user-attachments/assets/87213ad9-8b8b-43ef-8ab8-35c4eebe623a" />


<br />

- stack vs heap

<table border="1">
    <tr>
    <td colspan="6" align="center">Stack vs Heap</td>
    </tr>
    <tr align="center">
        <td>컴파일 시간 결정<br>Stack is allocated at runtime;<br>layout of each stack frame,<br>however, is decided at compile time,<br>except for variable-size<br>arrays.</td>
        <td>↓↓↓↓↓↓</td>
        <td>Stack</td>
        <td>High memory</td>
        <td>지역변수,  매개 변수</td>
        <td>Local Varialble, <br>Parameter</td>
    </tr>
    <tr align="center">
        <td colspan="6"> ↓↓↓↓↓↓  or  ↑↑↑↑↑↑↑  Free Memory</td>
    </tr>
    <tr align="center">
        <td rowspan="5">Runtime 결정<br> A heap is a general term used for any memory<br> that is allocated dynamically and randomly;<br> i.e. out of order.<br>The memory is typically allocated by the OS.<br>with the application calling API functions<br>to do this allocation. <br>There is a fair bit of<br> overhead required in managing<br>dynamically allocated memory, which is<br>usually handled by the runtime code of <br> the programming language or <br>environment used.</td>
        <td rowspan="5">↑↑↑↑↑↑↑</td>
        <td rowspan="5">Heap</td>
        <td rowspan="5">Low Memory</td>
        <td colspan="2">Heap</td>
    </tr>
    <tr align="center">
        <td>BSS<br>초기화 하지 않은<br>전역,  지역 변수(폐기된)</td>
        <td>Uninitialized<br>discharge and local<br>variables.</td>
    </tr>
    <tr align="center">
        <td>Data<br>전역변수,정적 변수</td>
        <td>Global Variable, Static Variable</td>
    </tr>
    <tr align="center">
        <td>Code<br>실행할 프로그램의 코드</td>
        <td>The Code of the program to be executed.</td>
    </tr>
    <tr align="center">
        <td>Reserved</td>
        <td></td>
    </tr>
</table>

- File Size와 관계
  - Text, data and bus: Code and Data Size Explained
    - [(내가공부하려고 정리)Stack & Heap 메모리개념잡기_clang-g-fsanitize=address_test01.c__LLDB_Debug디버그](https://youtu.be/OwQxo4sGVWo?si=0cj8CnTp6JWlII9q)

<hr>

# Stack buffer overflow[[🔝]](#link)
- [https://en.wikipedia.org/wiki/Stack_buffer_overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow)

# stackOverFlowError란?[[🔝]](#link)
- 지정한 스택 메모리 사이즈보다 더 많은 스택 메모리를 사용하게 되어 에러가 발생하는 상황을 일컫는다.
  - 즉 스택 포인터가 스택의 경계를 넘어갈때 발생한다.
    - StackOverflowError 발생 종류
      - ① 재귀(Recursive)함수
      - ② 상호 참조
      - ③ 본인 참조
      - https://velog.io/@devnoong/JAVA-Stack-%EA%B3%BC-Heap%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C#outofmemoryerror--java-heap-space-%EB%9E%80
        
# Heap Overflow[[🔝]](#link)

- [https://en.wikipedia.org/wiki/Heap_overflow](https://en.wikipedia.org/wiki/Heap_overflow)


# Stack vs Heap의 장점[[🔝]](#link)

- Stack
  - 매우 빠른 액세스
  - 변수를 명시적으로 할당 해제할 필요가 없다
  - 공간은 CPU에 의해 효율적으로 관리되고 메모리는 단편화되지 않는다.
  - 지역 변수만 해당된다
  - 스택 크기 제한(OS에 따라 다르다)
  - 변수의 크기를 조정할 수 없다

<hr>

- Heap
  - 변수는 전역적으로 액세스 할 수 있다.
  - 메모리 크기 제한이 없다
  - (상대적으로) 느린 액세스
  - 효율적인 공간 사용을 보장하지 못하면 메모리 블록이 할당된 후 시간이 지남에 따라 메모리가 조각화 되어 해제될 수 있다.
  - 메모리를 관리해야 한다 (변수를 할당하고 해제하는 책임이 있다)
  - 변수는 자바 new를 사용



<hr />

- [block starting symbol(BSS)](https://en.wikipedia.org/wiki/.bss)


- [Memory Management Strategies-Let's Get Rusty](https://www.youtube.com/watch?v=GUZ_2gGWuPo)

- [Is the stack memory allocated at runtime or compile time?](https://stackoverflow.com/questions/10822176/is-the-stack-memory-allocated-at-runtime-or-compile-time#:~:text=Stack%20is%20allocated%20at%20runtime,except%20for%20variable%2Dsize%20arrays.&text=In%20addition%20to%20the%20layout,decided%20before%20the%20program%20runs.)


- [Stack vs Heap Memory Allocation](https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/)


- [What and where are the stack and heap?](https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap#:~:text=A%20heap%20is%20a%20general,functions%20to%20do%20this%20allocation.)


- [Text, data and bus: Code and Data Size Explained](https://mcuoneclipse.com/2013/04/14/text-data-and-bss-code-and-data-size-explained/)


- [Heap overflow: Vulnerability and heap internals explained](https://resources.infosecinstitute.com/topic/heap-overflow-vulnerability-and-heap-internals-explained/)

<br />

<hr />


# Rust String VS 다른 언어의 String의 차이점[|🔝|](#link)

![111111](https://github.com/user-attachments/assets/3e9a790e-52ec-4980-b465-81c4f6b52576)

![2222222](https://github.com/user-attachments/assets/597fc72a-0adc-4054-a812-64434c1ca8bd)
![3333](https://github.com/user-attachments/assets/d0cf3663-ee6b-432b-9ca3-ceeb1bbd4cdb)


<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>


<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>
