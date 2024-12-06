# 모든 언어별 공통적인 최적화 개념

# link

- [Temporal locality in memory mountain](#temporal-locality-in-memory-mountain)
- [모든 프로그래머들이 알아야 할 컴퓨터의 시간 정리](#모든-프로그래머들이-알아야-할-컴퓨터의-시간-정리)
  - [프로그래머가 알아야 할 지연 시간 숫자를 시각적으로 표현](#프로그래머가-알아야-할-지연-시간-숫자를-시각적으로-표현)
  - [시대별로 단위가 생긴거 표로 잘 정리됨(Mertic_prefix_pico_kilo_nano..etc.](#시대별로-단위가-생긴거-표로-잘-정리됨mertic_prefix_pico_kilo_nanoetc)

- [그림으로 이해하는 Switch, if else, while, foreach, try, catch](#그림으로-이해하는-switch-if-else-while-foreach-try-catch)
- [지그 창시자가 설명해 주는 Operation Cost in CPU Cycles & Andrew Kelley Practical Data Oriented Design (DoD)](#지그-창시자가-설명해-주는-operation-cost-in-cpu-cycles--andrew-kelley-practical-data-oriented-design-dod)

- [트위터 추천 알고리즘(scala로 작성됨)](#트위터-추천-알고리즘scala로-작성됨)
- [애니매이션으로 모든 물리학 공식과 같이 연관 되어 보기.. 진짜 대박 최고 !!❤](#애니매이션으로-모든-물리학-공식과-같이-연관-되어-보기-진짜-대박-최고-)

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

# 프로그래머가 알아야 할 지연 시간 숫자를 시각적으로 표현[[🔝]](#link)
**[GN⁺: 모든 프로그래머가 알아야 할 필수 숫자들](<https://news.hada.io/topic?id=13749&utm_source=discord&utm_medium=bot&utm_campaign=1480>)**
  - https://samwho.dev/numbers/?fo
- **L1 캐시 참조**: 1나노초  
- **분기 예측 실패**: 3나노초  
- **L2 캐시 참조**: 4나노초  
- **뮤텍스 잠금/해제**: 17나노초  
- **1 Gbps 네트워크를 통한 1KB 데이터 전송**: 44나노초  
- **주 메모리 참조**: 100나노초  
- **Zippy를 이용한 1KB 데이터 압축**: 2마이크로초
- **메모리에서 1MB 순차 읽기**: 3마이크로초
- **SSD에서 4K 무작위 읽기**: 16마이크로초
- **SSD에서 1MB 순차 읽기**: 49마이크로초
- **동일 데이터센터 내 왕복 시간**: 500마이크로초
- **디스크에서 1MB 순차 읽기**: 825마이크로초
- **디스크 탐색**: 2밀리초
- **캘리포니아에서 네덜란드까지 패킷 전송 후 돌아오기**: 150밀리초

|Operation|ns|µs|ms|note|
|-|-|-|-|-|
|L1 cache reference|0.5 ns||||
|Branch mispredict|5 ns||||
|L2 cache reference|7 ns|||14x L1 cache|
|Mutex lock/unlock|25 ns||||
|Main memory reference|100 ns|||20x L2 cache, 200x L1 cache|
|Compress 1K bytes with Zippy|3,000 ns|3 µs|||
|Send 1K bytes over 1 Gbps network|10,000 ns|10 µs|||
|Read 4K randomly from SSD*|150,000 ns|150 µs||~1GB/sec SSD|
|Read 1 MB sequentially from memory|250,000 ns|250 µs|||
|Round trip within same datacenter|500,000 ns|500 µs|||
|Read 1 MB sequentially from SSD*|1,000,000 ns|1,000 µs|1 ms|~1GB/sec SSD, 4X memory|
|Disk seek|10,000,000 ns|10,000 µs|10 ms|20x datacenter roundtrip|
|Read 1 MB sequentially from disk|20,000,000 ns|20,000 µs|20 ms|80x memory, 20X SSD|
|Send packet CA -> Netherlands -> CA|150,000,000 ns|150,000 µs|150 ms||


# 지그 창시자가 설명해 주는 Operation Cost in CPU Cycles & Andrew Kelley Practical Data Oriented Design (DoD)[[🔝]](#link)

![Screenshot 2024-07-19 at 9 24 35 PM](https://github.com/user-attachments/assets/e863900c-6bf1-4a83-8585-0150d514c5f3)

- Andrew Kelley Practical Data Oriented Design (DoD) | ChimiChanga(5min50sec)
  - https://youtu.be/IroPQ150F6c?si=tOxqzFtk5hkuWwYt 

<hr />


# 시대별로 단위가 생긴거 표로 잘 정리됨(Mertic_prefix_pico_kilo_nano..etc.[[🔝]](#link)

- [https://en.wikipedia.org/wiki/Metric_prefix](https://en.wikipedia.org/wiki/Metric_prefix)

<table class="wikitable" style="padding: 0; text-align: center; width: 0">
<tbody><tr>
<th colspan="2">Prefix</th>
<th rowspan="2">Base 10
</th>
<th rowspan="2"><a href="/wiki/Decimal" title="Decimal">Decimal</a>
</th>
<th rowspan="2">Adoption<br /><sup id="cite_ref-3" class="reference"><a href="#cite_note-3">&#91;nb 1&#93;</a></sup>
</th></tr>
<tr>
<th>Name</th>
<th>Symbol
</th></tr>
<tr>
<td>quetta</td>
<td>Q</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1030" title="Orders of magnitude (numbers)">10<sup>30</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span></td>
<td rowspan="2">2022<sup id="cite_ref-newUnitAdoption_4-0" class="reference"><a href="#cite_note-newUnitAdoption-4">&#91;3&#93;</a></sup>
</td></tr>
<tr>
<td>ronna</td>
<td>R</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1027" title="Orders of magnitude (numbers)">10<sup>27</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span>
</td></tr>
<tr>
<td>yotta</td>
<td>Y</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1024" title="Orders of magnitude (numbers)">10<sup>24</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span></td>
<td rowspan="2">1991
</td></tr>
<tr>
<td>zetta</td>
<td>Z</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1021" title="Orders of magnitude (numbers)">10<sup>21</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span>
</td></tr>
<tr>
<td>exa</td>
<td>E</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1018" title="Orders of magnitude (numbers)">10<sup>18</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span></td>
<td rowspan="2">1975<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">&#91;4&#93;</a></sup>
</td></tr>
<tr>
<td>peta</td>
<td>P</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1015" title="Orders of magnitude (numbers)">10<sup>15</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span>
</td></tr>
<tr>
<td>tera</td>
<td>T</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#1012" title="Orders of magnitude (numbers)">10<sup>12</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span></td>
<td rowspan="2">1960
</td></tr>
<tr>
<td><a href="/wiki/Giga-" title="Giga-">giga</a></td>
<td>G</td>
<td style="text-align:left;"><a href="/wiki/1,000,000,000" title="1,000,000,000">10<sup>9</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span>
</td></tr>
<tr>
<td><a href="/wiki/Mega-" title="Mega-">mega</a></td>
<td>M</td>
<td style="text-align:left;"><a href="/wiki/1,000,000" title="1,000,000">10<sup>6</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span></span></td>
<td>1873
</td></tr>
<tr>
<td><a href="/wiki/Kilo-" title="Kilo-">kilo</a></td>
<td>k</td>
<td style="text-align:left;"><a href="/wiki/1000_(number)" title="1000 (number)">10<sup>3</sup></a>
</td>
<td style="text-align:right; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">1<span style="margin-left:0.25em">000</span></span></td>
<td rowspan="3">1795
</td></tr>
<tr>
<td><a href="/wiki/Hecto-" title="Hecto-">hecto</a></td>
<td>h</td>
<td style="text-align:left;"><a href="/wiki/100" title="100">10<sup>2</sup></a></td>
<td style="text-align:right; font-variant-numeric: tabular-nums;">100
</td></tr>
<tr>
<td><a href="/wiki/Deca-" title="Deca-">deca</a></td>
<td>da</td>
<td style="text-align:left;"><a href="/wiki/10" title="10">10<sup>1</sup></a></td>
<td style="text-align:right; font-variant-numeric: tabular-nums;">10
</td></tr>
<tr style="background:#EAECF0;color:black;">
<td>—</td>
<td>—</td>
<td style="text-align:left;"><a href="/wiki/1" title="1">10<sup>0</sup></a></td>
<td style="font-variant-numeric: tabular-nums;">1</td>
<td>—
</td></tr>
<tr>
<td><a href="/wiki/Deci-" title="Deci-">deci</a></td>
<td>d</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10-1" title="Orders of magnitude (numbers)">10<sup>−1</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;">0.1</td>
<td rowspan="3">1795
</td></tr>
<tr>
<td><a href="/wiki/Centi-" title="Centi-">centi</a></td>
<td>c</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−2" title="Orders of magnitude (numbers)">10<sup>−2</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;">0.01
</td></tr>
<tr>
<td><a href="/wiki/Milli-" title="Milli-">milli</a></td>
<td>m</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−3" title="Orders of magnitude (numbers)">10<sup>−3</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;">0.001
</td></tr>
<tr>
<td><a href="/wiki/Micro-" title="Micro-">micro</a></td>
<td>μ</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−6" title="Orders of magnitude (numbers)">10<sup>−6</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">001</span></span></td>
<td>1873
</td></tr>
<tr>
<td><a href="/wiki/Nano-" title="Nano-">nano</a></td>
<td>n</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−9" title="Orders of magnitude (numbers)">10<sup>−9</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span></td>
<td rowspan="2">1960
</td></tr>
<tr>
<td>pico</td>
<td>p</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−12" title="Orders of magnitude (numbers)">10<sup>−12</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span>
</td></tr>
<tr>
<td>femto</td>
<td>f</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−15" title="Orders of magnitude (numbers)">10<sup>−15</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span></td>
<td rowspan="2">1964
</td></tr>
<tr>
<td>atto</td>
<td>a</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−18" title="Orders of magnitude (numbers)">10<sup>−18</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span>
</td></tr>
<tr>
<td>zepto</td>
<td>z</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−21" title="Orders of magnitude (numbers)">10<sup>−21</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span></td>
<td rowspan="2">1991
</td></tr>
<tr>
<td>yocto</td>
<td>y</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−24" title="Orders of magnitude (numbers)">10<sup>−24</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span>
</td></tr>
<tr>
<td>ronto</td>
<td>r</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−27" title="Orders of magnitude (numbers)">10<sup>−27</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span></td>
<td rowspan="2">2022<sup id="cite_ref-newUnitAdoption_4-1" class="reference"><a href="#cite_note-newUnitAdoption-4">&#91;3&#93;</a></sup>
</td></tr>
<tr>
<td>quecto</td>
<td>q</td>
<td style="text-align:left;"><a href="/wiki/Orders_of_magnitude_(numbers)#10−30" title="Orders of magnitude (numbers)">10<sup>−30</sup></a>
</td>
<td style="text-align:left; font-variant-numeric: tabular-nums;"><span style="white-space:nowrap">0.000<span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">000</span><span style="margin-left:0.25em">001</span></span>
</td></tr>
<tr>
<td style="text-align: left;" colspan="5">
<dl><dt>Notes</dt></dl>
<div class="reflist">
<div class="mw-references-wrap"><ol class="references">
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3">^</a></b></span> <span class="reference-text">Prefixes adopted before 1960 already existed before SI. The introduction of the <a href="/wiki/Centimetre%E2%80%93gram%E2%80%93second_system_of_units" title="Centimetre–gram–second system of units">CGS system</a> was in 1873.</span>
</li>
</ol></div></div>
</td></tr></tbody></table>

- [https://en.wikipedia.org/wiki/Metric_prefix](https://en.wikipedia.org/wiki/Metric_prefix)

<hr>


- [https://ko.m.wikipedia.org/wiki/%EB%B0%80%EB%A6%AC](https://ko.m.wikipedia.org/wiki/%EB%B0%80%EB%A6%AC)

<table class="toccolours"><caption><b><a href="/wiki/SI_%EC%A0%91%EB%91%90%EC%96%B4" title="SI 접두어">SI 접두어</a></b><br><span style="font-size:small;"><span class="noprint plainlinks plainlinksneverexpand" style="white-space:nowrap; font-weight:normal; font-size:smaller; ;"><a href="/wiki/%ED%8B%80:SI_%EC%A0%91%EB%91%90%EC%96%B4" title="틀:SI 접두어"><span title="이 틀을 보기" style=";">v</span></a> <span style="font-size:smaller;">•</span> <a href="/w/index.php?title=%ED%8B%80%ED%86%A0%EB%A1%A0:SI_%EC%A0%91%EB%91%90%EC%96%B4&amp;action=edit&amp;redlink=1" class="new" title="틀토론:SI 접두어 (없는 문서)"><span title="이 틀에 대한 토론" style=";">d</span></a> <span style="font-size:smaller;">•</span> <a class="external text" href="https://ko.wikipedia.org/w/index.php?title=%ED%8B%80:SI_%EC%A0%91%EB%91%90%EC%96%B4&amp;action=edit"><span title="이 틀을 편집할 수 있습니다. 단, 저장하기 전에 미리 보기로 결과를 확인하여 주십시오." style=";">e</span></a> <span style="font-size:smaller;">•</span> <a class="external text" href="https://ko.wikipedia.org/w/index.php?title=%ED%8B%80:SI_%EC%A0%91%EB%91%90%EC%96%B4&amp;action=history"><span title="이 틀의 역사를 볼 수 있습니다." style=";">h</span></a></span></span>
</caption>
<tbody><tr style="background:#ccccff"><th>10<sup>n</sup></th>
<th>접두어
</th>
<th>기호
</th>
<th>배수
</th>
<th>십진수
</th></tr><tr><td>10<sup>30</sup></td>
<td><a href="/wiki/%ED%80%98%ED%83%80_(SI_%EC%A0%91%EB%91%90%EC%96%B4)" title="퀘타 (SI 접두어)">퀘타</a> (quetta)
</td>
<td>Q
</td>
<td>백<a href="/wiki/10000000000000000000000000000" class="mw-redirect" title="10000000000000000000000000000">양</a>
</td>
<td>1 000 000 000 000 000 000 000 000 000 000
</td></tr><tr><td>10<sup>27</sup></td>
<td><a href="/wiki/%EB%A1%A0%EB%82%98" title="론나">론나</a> (ronna)
</td>
<td>R
</td>
<td>천<a href="/wiki/1000000000000000000000000" class="mw-redirect" title="1000000000000000000000000">자</a>
</td>
<td>1 000 000 000 000 000 000 000 000 000
</td></tr><tr><td>10<sup>24</sup></td>
<td><a href="/wiki/%EC%9A%94%ED%83%80" title="요타">요타</a> (yotta)
</td>
<td>Y
</td>
<td>일<a href="/wiki/1000000000000000000000000" class="mw-redirect" title="1000000000000000000000000">자</a>
</td>
<td>1 000 000 000 000 000 000 000 000
</td></tr><tr><td>10<sup>21</sup></td>
<td><a href="/wiki/%EC%A0%9C%ED%83%80" title="제타">제타</a> (zetta)
</td>
<td>Z
</td>
<td>십<a href="/wiki/100000000000000000000" class="mw-redirect" title="100000000000000000000">해</a>
</td>
<td>1 000 000 000 000 000 000 000
</td></tr><tr><td>10<sup>18</sup></td>
<td><a href="/wiki/%EC%97%91%EC%82%AC" title="엑사">엑사</a> (exa)
</td>
<td>E
</td>
<td>백<a href="/wiki/10000000000000000" title="10000000000000000">경</a>
</td>
<td>1 000 000 000 000 000 000
</td></tr><tr><td>10<sup>15</sup></td>
<td><a href="/wiki/%ED%8E%98%ED%83%80_(SI_%EC%A0%91%EB%91%90%EC%96%B4)" title="페타 (SI 접두어)">페타</a> (peta)
</td>
<td>P
</td>
<td>천<a href="/wiki/1000000000000" title="1000000000000">조</a>
</td>
<td>1 000 000 000 000 000
</td></tr><tr><td>10<sup>12</sup></td>
<td><a href="/wiki/%ED%85%8C%EB%9D%BC_(SI_%EC%A0%91%EB%91%90%EC%96%B4)" title="테라 (SI 접두어)">테라</a> (tera)
</td>
<td>T
</td>
<td>일<a href="/wiki/1000000000000" title="1000000000000">조</a>
</td>
<td>1 000 000 000 000
</td></tr><tr><td>10<sup>9</sup></td>
<td><a href="/wiki/%EA%B8%B0%EA%B0%80" title="기가">기가</a> (giga)
</td>
<td>G
</td>
<td><a href="/wiki/1000000000" title="1000000000">십억</a>
</td>
<td>1 000 000 000
</td></tr><tr><td>10<sup>6</sup></td>
<td><a href="/wiki/%EB%A9%94%EA%B0%80" title="메가">메가</a> (mega)
</td>
<td>M
</td>
<td><a href="/wiki/1000000" title="1000000">백만</a>
</td>
<td>1 000 000
</td></tr><tr><td>10<sup>3</sup></td>
<td><a href="/wiki/%ED%82%AC%EB%A1%9C" title="킬로">킬로</a> (kilo)
</td>
<td>k
</td>
<td><a href="/wiki/1000" title="1000">천</a>
</td>
<td>1 000
</td></tr><tr><td>10<sup>2</sup></td>
<td><a href="/wiki/%ED%97%A5%ED%86%A0" title="헥토">헥토</a> (hecto)
</td>
<td>h
</td>
<td><a href="/wiki/100" title="100">백</a>
</td>
<td>100
</td></tr><tr><td>10<sup>1</sup></td>
<td><a href="/wiki/%EB%8D%B0%EC%B9%B4" title="데카">데카</a> (deca)
</td>
<td>da
</td>
<td><a href="/wiki/10" title="10">십</a>
</td>
<td>10
</td></tr><tr><td>10<sup>0</sup></td>
<td>
</td>
<td>
</td>
<td><a href="/wiki/1" title="1">일</a>
</td>
<td>1
</td></tr><tr><td>10<sup>−1</sup></td>
<td><a href="/wiki/%EB%8D%B0%EC%8B%9C" title="데시">데시</a> (deci)
</td>
<td>d
</td>
<td>십분의 일
</td>
<td>0.1
</td></tr><tr><td>10<sup>−2</sup></td>
<td><a href="/wiki/%EC%84%BC%ED%8B%B0" title="센티">센티</a> (centi)
</td>
<td>c
</td>
<td>백분의 일
</td>
<td>0.01
</td></tr><tr><td>10<sup>−3</sup></td>
<td><a class="mw-selflink selflink">밀리</a> (milli)
</td>
<td>m
</td>
<td>천분의 일
</td>
<td>0.001
</td></tr><tr><td>10<sup>−6</sup></td>
<td><a href="/wiki/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C" title="마이크로">마이크로</a> (micro)
</td>
<td>µ
</td>
<td>백만분의 일
</td>
<td>0.000 001
</td></tr><tr><td>10<sup>−9</sup></td>
<td><a href="/wiki/%EB%82%98%EB%85%B8" title="나노">나노</a> (nano)
</td>
<td>n
</td>
<td>십억분의 일
</td>
<td>0.000 000 001
</td></tr><tr><td>10<sup>−12</sup></td>
<td><a href="/wiki/%ED%94%BC%EC%BD%94" title="피코">피코</a> (pico)
</td>
<td>p
</td>
<td>일조분의 일
</td>
<td>0.000 000 000 001
</td></tr><tr><td>10<sup>−15</sup></td>
<td><a href="/wiki/%ED%8E%A8%ED%86%A0" title="펨토">펨토</a> (femto)
</td>
<td>f
</td>
<td>천조분의 일
</td>
<td>0.000 000 000 000 001
</td></tr><tr><td>10<sup>−18</sup></td>
<td><a href="/wiki/%EC%95%84%ED%86%A0" title="아토">아토</a> (atto)
</td>
<td>a
</td>
<td>백경분의 일
</td>
<td>0.000 000 000 000 000 001
</td></tr><tr><td>10<sup>−21</sup></td>
<td><a href="/wiki/%EC%A0%AD%ED%86%A0" title="젭토">젭토</a> (zepto)
</td>
<td>z
</td>
<td>십해분의 일
</td>
<td>0.000 000 000 000 000 000 001
</td></tr><tr><td>10<sup>−24</sup></td>
<td><a href="/wiki/%EC%9A%95%ED%86%A0" title="욕토">욕토</a> (yocto)
</td>
<td>y
</td>
<td>일자분의 일
</td>
<td>0.000 000 000 000 000 000 000 001
</td></tr><tr><td>10<sup>−27</sup></td>
<td><a href="/wiki/%EB%A1%A0%ED%86%A0" title="론토">론토</a> (ronto)
</td>
<td>r
</td>
<td>천자분의 일
</td>
<td>0.000 000 000 000 000 000 000 000 001
</td></tr><tr><td>10<sup>−30</sup></td>
<td><a href="/wiki/%ED%80%99%ED%86%A0" title="퀙토">퀙토</a> (quecto)
</td>
<td>q
</td>
<td>백양분의 일
</td>
<td>0.000 000 000 000 000 000 000 000 000 001
</td></tr></tbody></table>


# 트위터 추천 알고리즘(scala로 작성됨)[[🔝]](#link)

- [https://github.com/twitter/the-algorithm](https://github.com/twitter/the-algorithm)

<hr>

# 애니매이션으로 모든 물리학 공식과 같이 연관 되어 보기.. 진짜 대박 최고 !!❤[[🔝]](#link)
- [Animation vs. Physics | Alan Becker](https://youtu.be/ErMSHiQRnc8?si=mG-sttkOox6CS7Oq)
  - [한글 버젼 애니메이션 vs 물리학 한글 자막 | 물리학과](https://youtu.be/qYJbrCQovzE?si=pBsAExRd1E3sVXBO)
- [Animation vs. Math | Alan Becker](https://youtu.be/B1J6Ou4q8vE?si=53zJzMx2_-mTXdbS)



<hr />

<hr />

- Rust without crates.io
  - [https://thomask.sdf.org/blog/2023/11/14/rust-without-crates-io.html](https://thomask.sdf.org/blog/2023/11/14/rust-without-crates-io.html)

- Memory Issues
  - [https://www.youtube.com/playlist?list=PL9IEJIKnBJjGAINguks7wyq7TAnHOZGRl](https://www.youtube.com/playlist?list=PL9IEJIKnBJjGAINguks7wyq7TAnHOZGRl)

- switch문과 if문의 성능 비교 (ISA관점에서)
  - [https://thinkpro.tistory.com/m/132](https://thinkpro.tistory.com/m/132)

<hr />

# 그림으로 이해하는 Switch, if else, while, foreach, try, catch[|🔝|](#link)

<p align="center">
  <img src="https://yt3.ggpht.com/YXq5z7b_VJXXgFtIEzRMIlce8OhyggmzFxk91SSm7JBo1yO3Z3jbOJ50he4n7pCsOXk410P-Vdpa3Vs=s1600-nd-v1" />
</p>


<h1 id="comment">물어보고 싶거나 하고 싶은말 써 주세요comment<a href="#link">|🔝|</a></h1>

<script src="https://utteranc.es/client.js" repo="YoungHaKim7/blog_comments_bot" issue-term="url"
    theme="github-light" crossorigin="anonymous" async>
</script>
