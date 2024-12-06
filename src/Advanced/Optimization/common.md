# 모든 언어별 공통적인 최적화 개념

# link

- [Temporal locality in memory mountain](#temporal-locality-in-memory-mountain)
- [모든 프로그래머들이 알아야 할 컴퓨터의 시간 정리](#모든-프로그래머들이-알아야-할-컴퓨터의-시간-정리)
- [그림으로 이해하는 Switch, if else, while, foreach, try, catch](#그림으로-이해하는-switch-if-else-while-foreach-try-catch)

<hr />

- [물어보고 싶거나 하고 싶은말 써 주세요comment <댓글로 이동>](#comment)

<hr />

# Temporal locality in memory mountain[|🔝|](#link)
- [https://stackoverflow.com/questions/56720935/temporal-locality-in-memory-mountain](https://stackoverflow.com/questions/56720935/temporal-locality-in-memory-mountain)

- 시간 지역성을 계곡으로 표시(ridges of temporal locality, 시간적 국소성의 능선)
- 공간 지역성을 기울기로 표시(slopes of spatial locality, 공간적 국소성의 경사면)

<div align="center">
  <img src="https://github.com/user-attachments/assets/b1b1c634-ba57-46c7-bc46-b7f40bfd5b6c" />
</div>

<hr>

<p align="center">
  <img src="https://i.imgur.com/k0t1e.png" />
</p>

# 모든 프로그래머들이 알아야 할 컴퓨터의 시간 정리[|🔝|](#link)

- [https://gist.github.com/jboner/2841832](https://gist.github.com/jboner/2841832)

```
Latency Comparison Numbers (~2012)
----------------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy             3,000   ns        3 us
Send 1K bytes over 1 Gbps network       10,000   ns       10 us
Read 4K randomly from SSD*             150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from disk    20,000,000   ns   20,000 us   20 ms  80x memory, 20X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns

Credit
------
By Jeff Dean:               http://research.google.com/people/jeff/
Originally by Peter Norvig: http://norvig.com/21-days.html#answers

Contributions
-------------
'Humanized' comparison:  https://gist.github.com/hellerbarde/2843375
Visual comparison chart: http://i.imgur.com/k0t1e.png
``` 

- Rust without crates.io
  - [https://thomask.sdf.org/blog/2023/11/14/rust-without-crates-io.html](https://thomask.sdf.org/blog/2023/11/14/rust-without-crates-io.html)

- Memory Issues
  - [https://www.youtube.com/playlist?list=PL9IEJIKnBJjGAINguks7wyq7TAnHOZGRl](https://www.youtube.com/playlist?list=PL9IEJIKnBJjGAINguks7wyq7TAnHOZGRl)

- switch문과 if문의 성능 비교 (ISA관점에서)
  - [https://thinkpro.tistory.com/m/132](https://thinkpro.tistory.com/m/132)

# 그림으로 이해하는 Switch, if else, while, foreach, try, catch[|🔝|](#link)

<p align="center">
  <img src="https://yt3.ggpht.com/YXq5z7b_VJXXgFtIEzRMIlce8OhyggmzFxk91SSm7JBo1yO3Z3jbOJ50he4n7pCsOXk410P-Vdpa3Vs=s1600-nd-v1" />
</p>


<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>
