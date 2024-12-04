# C_Operator_Precedence

- [https://en.cppreference.com/w/c/language/operator_precedence](https://en.cppreference.com/w/c/language/operator_precedence)

# link


<hr />


# C Operator Precedence


- The following table lists the precedence and associativity of C operators. Operators are listed top to bottom, in descending precedence. 

<table>
<tbody><tr>
<th style="text-align: left"> Precedence
</th>
<th style="text-align: left"> Operator
</th>
<th style="text-align: left"> Description
</th>
<th style="text-align: left"> Associativity
</th></tr>
<tr>
<th rowspan="6"> 1
</th>
<td style="border-bottom-style: none"> <code>++</code> <code>--</code>
</td>
<td style="border-bottom-style: none"> Suffix/postfix increment and decrement
</td>
<td style="vertical-align: top" rowspan="6"> Left-to-right
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>()</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Function call
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>[]</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Array subscripting
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>.</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Structure and union member access
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>-&gt;</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Structure and union member access through pointer
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>(<i>type</i>){<i>list</i>}</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Compound literal<span class="t-mark-rev t-since-c99">(C99)</span>
</td></tr>
<tr>
<th rowspan="8"> 2
</th>
<td style="border-bottom-style: none"> <code>++</code> <code>--</code>
</td>
<td style="border-bottom-style: none"> Prefix increment and decrement<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[note 1]</a></sup>
</td>
<td style="vertical-align: top" rowspan="8"> Right-to-left
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>+</code> <code>-</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Unary plus and minus
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>!</code> <code>~</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Logical NOT and bitwise NOT
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>(<i>type</i>)</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Cast
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>*</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Indirection (dereference)
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>&amp;</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Address-of
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>sizeof</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Size-of<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[note 2]</a></sup>
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>_Alignof</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Alignment requirement<span class="t-mark-rev t-since-c11">(C11)</span>
</td></tr>
<tr>
<th> 3
</th>
<td> <code>*</code> <code>/</code> <code>%</code>
</td>
<td> Multiplication, division, and remainder
</td>
<td style="vertical-align: top" rowspan="11"> Left-to-right
</td></tr>
<tr>
<th> 4
</th>
<td> <code>+</code> <code>-</code>
</td>
<td> Addition and subtraction
</td></tr>
<tr>
<th> 5
</th>
<td> <code>&lt;&lt;</code> <code>&gt;&gt;</code>
</td>
<td> Bitwise left shift and right shift
</td></tr>
<tr>
<th rowspan="2"> 6
</th>
<td style="border-bottom-style: none"> <code>&lt;</code> <code>&lt;=</code>
</td>
<td style="border-bottom-style: none"> For relational operators &lt; and ≤ respectively
</td></tr>
<tr>
<td style="border-top-style: none"> <code>&gt;</code> <code>&gt;=</code>
</td>
<td style="border-top-style: none"> For relational operators &gt; and ≥ respectively
</td></tr>
<tr>
<th> 7
</th>
<td> <code>==</code> <code>!=</code>
</td>
<td> For relational = and ≠ respectively
</td></tr>
<tr>
<th> 8
</th>
<td> <code>&amp;</code>
</td>
<td> Bitwise AND
</td></tr>
<tr>
<th> 9
</th>
<td> <code>^</code>
</td>
<td> Bitwise XOR (exclusive or)
</td></tr>
<tr>
<th> 10
</th>
<td> <code>|</code>
</td>
<td> Bitwise OR (inclusive or)
</td></tr>
<tr>
<th> 11
</th>
<td> <code>&amp;&amp;</code>
</td>
<td> Logical AND
</td></tr>
<tr>
<th> 12
</th>
<td> <code>||</code>
</td>
<td> Logical OR
</td></tr>
<tr>
<th> 13
</th>
<td> <code>?:</code>
</td>
<td> Ternary conditional<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[note 3]</a></sup>
</td>
<td style="vertical-align: top" rowspan="6"> Right-to-left
</td></tr>
<tr>
<th rowspan="5"> 14<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[note 4]</a></sup>
</th>
<td style="border-bottom-style: none"> <code>=</code>
</td>
<td style="border-bottom-style: none"> Simple assignment
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>+=</code> <code>-=</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Assignment by sum and difference
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>*=</code> <code>/=</code> <code>%=</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Assignment by product, quotient, and remainder
</td></tr>
<tr>
<td style="border-bottom-style: none; border-top-style: none"> <code>&lt;&lt;=</code> <code>&gt;&gt;=</code>
</td>
<td style="border-bottom-style: none; border-top-style: none"> Assignment by bitwise left shift and right shift
</td></tr>
<tr>
<td style="border-top-style: none"> <code>&amp;=</code> <code>^=</code> <code>|=</code>
</td>
<td style="border-top-style: none"> Assignment by bitwise AND, XOR, and OR
</td></tr>
<tr>
<th> 15
</th>
<td> <code>,</code>
</td>
<td> Comma
</td>
<td> Left-to-right
</td></tr></tbody></table>
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><a href="#cite_ref-1">↑</a></span> <span class="reference-text">The operand of prefix <code>++</code> and <code>--</code> can't be a type cast. This rule grammatically forbids some expressions that would be semantically invalid anyway. Some compilers ignore this rule and detect the invalidity semantically.</span>
</li>
<li id="cite_note-2"><span class="mw-cite-backlink"><a href="#cite_ref-2">↑</a></span> <span class="reference-text">The operand of <code>sizeof</code> can't be a type cast: the expression <span class="t-c"><span class="mw-geshi c source-c"><span class="kw4">sizeof</span> <span class="br0">(</span><span class="kw4">int</span><span class="br0">)</span> <span class="sy2">*</span> p</span></span> is unambiguously interpreted as <span class="t-c"><span class="mw-geshi c source-c"><span class="br0">(</span><span class="kw4">sizeof</span><span class="br0">(</span><span class="kw4">int</span><span class="br0">)</span><span class="br0">)</span> <span class="sy2">*</span> p</span></span>, but not <span class="t-c"><span class="mw-geshi c source-c"><span class="kw4">sizeof</span><span class="br0">(</span><span class="br0">(</span><span class="kw4">int</span><span class="br0">)</span><span class="sy2">*</span>p<span class="br0">)</span></span></span>.</span>
</li>
<li id="cite_note-3"><span class="mw-cite-backlink"><a href="#cite_ref-3">↑</a></span> <span class="reference-text">The expression in the middle of the conditional operator (between <code><b>?</b></code> and <code><b>:</b></code>) is parsed as if parenthesized: its precedence relative to <code>?:</code> is ignored.</span>
</li>
<li id="cite_note-4"><span class="mw-cite-backlink"><a href="#cite_ref-4">↑</a></span> <span class="reference-text">Assignment operators' left operands must be unary (level-2 non-cast) expressions. This rule grammatically forbids some expressions that would be semantically invalid anyway. Many compilers ignore this rule and detect the invalidity semantically. For example, <span class="t-c"><span class="mw-geshi c source-c">e <span class="sy1">=</span> a <span class="sy1">&lt;</span> d <span class="sy4">?</span> a<span class="sy2">++</span> <span class="sy4">:</span> a <span class="sy1">=</span> d</span></span> is an expression that cannot be parsed because of this rule. However, many compilers ignore this rule and parse it as <span class="t-c"><span class="mw-geshi c source-c">e <span class="sy1">=</span> <span class="br0">(</span> <span class="br0">(</span><span class="br0">(</span>a <span class="sy1">&lt;</span> d<span class="br0">)</span> <span class="sy4">?</span> <span class="br0">(</span>a<span class="sy2">++</span><span class="br0">)</span> <span class="sy4">:</span> a<span class="br0">)</span> <span class="sy1">=</span> d <span class="br0">)</span></span></span>, and then give an error because it is semantically invalid.</span>
</li>
</ol>
<p>When parsing an expression, an operator which is listed on some row will be bound tighter (as if by parentheses) to its arguments than any operator that is listed on a row further below it. For example, the expression <span class="t-c"><span class="mw-geshi c source-c"><span class="sy2">*</span>p<span class="sy2">++</span></span></span> is parsed as <span class="t-c"><span class="mw-geshi c source-c"><span class="sy2">*</span><span class="br0">(</span>p<span class="sy2">++</span><span class="br0">)</span></span></span>, and not as <span class="t-c"><span class="mw-geshi c source-c"><span class="br0">(</span><span class="sy2">*</span>p<span class="br0">)</span><span class="sy2">++</span></span></span>.
</p><p>Operators that are in the same cell (there may be several rows of operators listed in a cell) are evaluated with the same precedence, in the given direction. For example, the expression <span class="t-c"><span class="mw-geshi c source-c">a<span class="sy1">=</span>b<span class="sy1">=</span>c</span></span> is parsed as <span class="t-c"><span class="mw-geshi c source-c">a<span class="sy1">=</span><span class="br0">(</span>b<span class="sy1">=</span>c<span class="br0">)</span></span></span>, and not as <span class="t-c"><span class="mw-geshi c source-c"><span class="br0">(</span>a<span class="sy1">=</span>b<span class="br0">)</span><span class="sy1">=</span>c</span></span> because of right-to-left associativity.
</p>
<h3><span class="editsection"><!-- [<a href="/mwiki/index.php?title=c/language/operator_precedence&amp;action=edit&amp;section=1" title="Edit section: Notes">edit</a>]</span>!--> <span class="mw-headline" id="Notes">Notes</span></h3>
<p>Precedence and associativity are independent from <a href="/w/c/language/eval_order" title="c/language/eval order">order of evaluation</a>.
</p><p>The standard itself doesn't specify precedence levels. They are derived from the grammar.
</p><p>In C++, the conditional operator has the same precedence as assignment operators, and prefix <code>++</code> and <code>--</code> and assignment operators don't have the restrictions about their operands.
</p><p>Associativity specification is redundant for unary operators and is only shown for completeness: unary prefix operators always associate right-to-left (<span class="t-c"><span class="mw-geshi c source-c"><span class="kw4">sizeof</span> <span class="sy2">++*</span>p</span></span> is <span class="t-c"><span class="mw-geshi c source-c"><span class="kw4">sizeof</span><span class="br0">(</span><span class="sy2">++</span><span class="br0">(</span><span class="sy2">*</span>p<span class="br0">)</span><span class="br0">)</span></span></span>) and unary postfix operators always associate left-to-right (<span class="t-c"><span class="mw-geshi c source-c">a<span class="br0">[</span><span class="nu0">1</span><span class="br0">]</span><span class="br0">[</span><span class="nu0">2</span><span class="br0">]</span><span class="sy2">++</span></span></span> is <span class="t-c"><span class="mw-geshi c source-c"><span class="br0">(</span><span class="br0">(</span>a<span class="br0">[</span><span class="nu0">1</span><span class="br0">]</span><span class="br0">)</span><span class="br0">[</span><span class="nu0">2</span><span class="br0">]</span><span class="br0">)</span><span class="sy2">++</span></span></span>). Note that the associativity is meaningful for member access operators, even though they are grouped with unary postfix operators: <span class="t-c"><span class="mw-geshi c source-c">a.<span class="me1">b</span><span class="sy2">++</span></span></span> is parsed <span class="t-c"><span class="mw-geshi c source-c"><span class="br0">(</span>a.<span class="me1">b</span><span class="br0">)</span><span class="sy2">++</span></span></span> and not <span class="t-c"><span class="mw-geshi c source-c">a.<span class="br0">(</span>b<span class="sy2">++</span><span class="br0">)</span></span></span>.
</p>
<h3><span class="editsection"><!-- [<a href="/mwiki/index.php?title=c/language/operator_precedence&amp;action=edit&amp;section=2" title="Edit section: References">edit</a>]</span>!--> <span class="mw-headline" id="References">References</span></h3>
<div class="t-ref-std-17">
<ul><li> C17 standard (ISO/IEC 9899:2018): 
</li></ul>
<dl><dd><ul><li> A.2.1 Expressions 
</li></ul>
</dd></dl>
</div>
<div class="t-ref-std-11">
<ul><li> C11 standard (ISO/IEC 9899:2011): 
</li></ul>
<dl><dd><ul><li> A.2.1 Expressions 
</li></ul>
</dd></dl>
</div>
<div class="t-ref-std-c99">
<ul><li> C99 standard (ISO/IEC 9899:1999): 
</li></ul>
<dl><dd><ul><li> A.2.1 Expressions 
</li></ul>
</dd></dl>
</div>
<div class="t-ref-std-c89">
<ul><li> C89/C90 standard (ISO/IEC 9899:1990): 
</li></ul>
<dl><dd><ul><li> A.1.2.1 Expressions 
</li></ul>
</dd></dl>
</div>
<h3><span class="editsection"><!-- [<a href="/mwiki/index.php?title=c/language/operator_precedence&amp;action=edit&amp;section=3" title="Edit section: See also">edit</a>]</span> !--> <span class="mw-headline" id="See_also">See also</span></h3>
<p><a href="/w/c/language/eval_order" title="c/language/eval order">Order of evaluation</a> of operator arguments at run time.
</p>
<table class="wikitable">

<tbody><tr style="text-align:center">
<th colspan="7"> Common operators
</th></tr>
<tr style="text-align:center">
<td> <a href="/w/c/language/operator_assignment" title="c/language/operator assignment"> assignment</a>
</td>
<td> <a href="/w/c/language/operator_incdec" title="c/language/operator incdec"> increment<br>decrement</a>
</td>
<td> <a href="/w/c/language/operator_arithmetic" title="c/language/operator arithmetic"> arithmetic</a>
</td>
<td> <a href="/w/c/language/operator_logical" title="c/language/operator logical"> logical</a>
</td>
<td> <a href="/w/c/language/operator_comparison" title="c/language/operator comparison"> comparison</a>
</td>
<td> <a href="/w/c/language/operator_member_access" title="c/language/operator member access"> member<br>access</a>
</td>
<td> <a href="/w/c/language/operator_other" title="c/language/operator other"> other</a>
</td></tr>
<tr style="text-align:center">
<td>
<p><span class="t-c"><span class="mw-geshi c source-c">a <span class="sy1">=</span> b<br>
a <span class="sy2">+</span><span class="sy1">=</span> b<br>
a <span class="sy2">-</span><span class="sy1">=</span> b<br>
a <span class="sy2">*</span><span class="sy1">=</span> b<br>
a <span class="sy2">/</span><span class="sy1">=</span> b<br>
a <span class="sy2">%</span><span class="sy1">=</span> b<br>
a <span class="sy3">&amp;</span><span class="sy1">=</span> b<br>
a <span class="sy3">|</span><span class="sy1">=</span> b<br>
a <span class="sy3">^</span><span class="sy1">=</span> b<br>
a <span class="sy1">&lt;&lt;=</span> b<br>
a <span class="sy1">&gt;&gt;=</span> b</span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c"><span class="sy2">++</span>a<br>
<span class="sy2">--</span>a<br>
a<span class="sy2">++</span><br>
a<span class="sy2">--</span></span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c"><span class="sy2">+</span>a<br>
<span class="sy2">-</span>a<br>
a <span class="sy2">+</span> b<br>
a <span class="sy2">-</span> b<br>
a <span class="sy2">*</span> b<br>
a <span class="sy2">/</span> b<br>
a <span class="sy2">%</span> b<br>
~a<br>
a <span class="sy3">&amp;</span> b<br>
a <span class="sy3">|</span> b<br>
a <span class="sy3">^</span> b<br>
a <span class="sy1">&lt;&lt;</span> b<br>
a <span class="sy1">&gt;&gt;</span> b</span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c"><span class="sy3">!</span>a<br>
a <span class="sy3">&amp;&amp;</span> b<br>
a <span class="sy3">||</span> b</span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c">a <span class="sy1">==</span> b<br>
a <span class="sy3">!</span><span class="sy1">=</span> b<br>
a <span class="sy1">&lt;</span> b<br>
a <span class="sy1">&gt;</span> b<br>
a <span class="sy1">&lt;=</span> b<br>
a <span class="sy1">&gt;=</span> b</span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c">a<span class="br0">[</span>b<span class="br0">]</span><br>
<span class="sy2">*</span>a<br>
<span class="sy3">&amp;</span>a<br>
a<span class="sy2">-</span><span class="sy1">&gt;</span>b<br>
a.<span class="me1">b</span></span></span>
</p>
</td>
<td>
<p><span class="t-c"><span class="mw-geshi c source-c">a<span class="br0">(</span>...<span class="br0">)</span><br>
a, b<br>
<span class="br0">(</span>type<span class="br0">)</span> a<br>
a <span class="sy4">?</span> b <span class="sy4">:</span> c<br>
<span class="kw4">sizeof</span></span></span><br><br>
<span class="t-c"><span class="mw-geshi c source-c">_Alignof</span></span><br><span class="t-mark-rev t-since-c11">(since C11)</span>
</p>
</td></tr>
</tbody></table>
<table class="t-dsc-begin">

<tbody><tr class="t-dsc">
<td colspan="2"> <div class="t-dsc-see"><span><a href="/w/cpp/language/operator_precedence" title="cpp/language/operator precedence">C++ documentation</a></span> for <span class=""><span>C++ operator precedence</span></span></div>
</td></tr>

</tbody></table>


- https://en.cppreference.com/w/c/language/operator_precedence