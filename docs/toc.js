// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="intro.html"><strong aria-hidden="true">1.</strong> Rust_kr_Welcome소개</a></li><li class="chapter-item "><a href="qanda.html"><strong aria-hidden="true">2.</strong> Appendix &amp; Q&amp;A &amp; 기여하기</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Appendix.html"><strong aria-hidden="true">2.1.</strong> Appendix</a></li><li class="chapter-item "><a href="justfile.html"><strong aria-hidden="true">2.2.</strong> justfile 러스트로 만든 makefile비슷한거</a></li><li class="chapter-item "><a href="rustos.html"><strong aria-hidden="true">2.3.</strong> Rust OS 프로젝트</a></li><li class="chapter-item "><a href="rustlinux.html"><strong aria-hidden="true">2.4.</strong> Rust Linux 프로젝트</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">코딩의 기본 원리- Zig, C,C++, etc.</li><li class="chapter-item "><a href="Chapter001/chapter_1.html"><strong aria-hidden="true">3.</strong> Chapter 1(코딩의 원리)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/rust_etc_difference.html"><strong aria-hidden="true">3.1.</strong> 러스트 언어와 다른언어의 차이점</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/common.html"><strong aria-hidden="true">3.1.1.</strong> 대부분의 코딩의 공통적인것들</a></li><li class="chapter-item "><a href="Chapter001/lang/zig.html"><strong aria-hidden="true">3.1.2.</strong> zig언어</a></li><li class="chapter-item "><a href="Chapter001/lang/cpp.html"><strong aria-hidden="true">3.1.3.</strong> C++언어</a></li><li class="chapter-item "><a href="Chapter001/lang/c.html"><strong aria-hidden="true">3.1.4.</strong> C언어</a></li><li class="chapter-item "><a href="Chapter001/lang/kotlin.html"><strong aria-hidden="true">3.1.5.</strong> Kotlin언어</a></li><li class="chapter-item "><a href="Chapter001/lang/swift.html"><strong aria-hidden="true">3.1.6.</strong> Swift언어</a></li></ol></li><li class="chapter-item "><a href="Chapter001/rust_summary.html"><strong aria-hidden="true">3.2.</strong> Rust의 전체적인 그림 잡기</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/struct/rust_struct.html"><strong aria-hidden="true">3.2.1.</strong> struct</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Rust Lang</li><li class="chapter-item "><a href="Rust_syntax/intro.html"><strong aria-hidden="true">4.</strong> Rust_Syntax러스트문법</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Rust_syntax/getting_stared/hello_world.html"><strong aria-hidden="true">4.1.</strong> Rust_Getting_Started설치및 시작</a></li><li class="chapter-item "><a href="Rust_syntax/programming/fake_install.html"><strong aria-hidden="true">4.2.</strong> Programming_fake_install가짜인스톨프로그램 만들기</a></li><li class="chapter-item "><a href="Rust_syntax/Common_Programming/concepts.html"><strong aria-hidden="true">4.3.</strong> Common Programming Concepts프로그래밍컨셉</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Rust_syntax/Common_Programming/Val_Mut/val_mutable.html"><strong aria-hidden="true">4.3.1.</strong> Variables&amp;Mutability변수불편</a></li><li class="chapter-item "><a href="Rust_syntax/Common_Programming/Data_Types/data_types.html"><strong aria-hidden="true">4.3.2.</strong> Data_Types데이터 타입</a></li></ol></li><li class="chapter-item "><a href="Rust_syntax/Ownership_borrowing/Ownership_borrowing.html"><strong aria-hidden="true">4.4.</strong> OwnerShip오너쉽_borrowing</a></li><li class="chapter-item "><a href="Rust_syntax/struct/structs.html"><strong aria-hidden="true">4.5.</strong> Struct를 이용한 구조화</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Rust_syntax/struct/defining_structs.html"><strong aria-hidden="true">4.5.1.</strong> Struct 정의 및 인스턴스화(Instantiating)</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Rust 고급 기술</li><li class="chapter-item "><a href="Advanced/advanced.html"><strong aria-hidden="true">5.</strong> Rust 고급 기술</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/traits.html"><strong aria-hidden="true">5.1.</strong> Traits</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/dandd.html"><strong aria-hidden="true">5.1.1.</strong> D&amp;D던전앤드래곤 만들어보기</a></li></ol></li><li class="chapter-item "><a href="Advanced/pretzelhammer_blog/Sizedness_in_rust.html"><strong aria-hidden="true">5.2.</strong> Sizedness-in-rust</a></li><li class="chapter-item "><a href="Advanced/cpp/move_semantics.html"><strong aria-hidden="true">5.3.</strong> C++오너쉽개념 기초 C++11에서 가져옴(move_semantics)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/OwnerShip/Ownership_Venn_diagram.html"><strong aria-hidden="true">5.3.1.</strong> OwnerShip벤다이어그램으로 소유권 이해</a></li></ol></li><li class="chapter-item "><a href="Advanced/Closures/Closures_deepdive.html"><strong aria-hidden="true">5.4.</strong> Closures클로져DeepDive</a></li><li class="chapter-item "><a href="Advanced/rust_release/Rfcs/intro.html"><strong aria-hidden="true">5.5.</strong> 다른언어에서 러스트로 온 좋은 기능들..</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/Rfcs/rust_const_fn.html"><strong aria-hidden="true">5.5.1.</strong> (rust)const fn/(C++)constexpr</a></li></ol></li><li class="chapter-item "><a href="Advanced/Operator/intro.html"><strong aria-hidden="true">5.6.</strong> Operator</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/Operator/c_operator_precedence.html"><strong aria-hidden="true">5.6.1.</strong> C_Operator_Precedence</a></li><li class="chapter-item "><a href="Advanced/Operator/logical_operators.html"><strong aria-hidden="true">5.6.2.</strong> Logical_Operators</a></li><li class="chapter-item "><a href="Advanced/Operator/bitwise_operators.html"><strong aria-hidden="true">5.6.3.</strong> Bitwise_Operators</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_deep_dive/rust_lifetime.html"><strong aria-hidden="true">5.7.</strong> Rust Lifetime개념 깊게deep dive</a></li><li class="chapter-item "><a href="Advanced/Algorithm/summary_algo.html"><strong aria-hidden="true">5.8.</strong> Algorithm알고리즘</a></li><li class="chapter-item "><a href="Advanced/rust_release/rust_release.html"><strong aria-hidden="true">5.9.</strong> rust_release</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/rust_1_85.html"><strong aria-hidden="true">5.9.1.</strong> rust_1_85_Rust Edition 2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/language.html"><strong aria-hidden="true">5.9.1.1.</strong> Language</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rpit-lifetime-capture.html"><strong aria-hidden="true">5.9.1.1.1.</strong> RPIT lifetime capture rules</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/temporary-if-let-scope.html"><strong aria-hidden="true">5.9.1.1.2.</strong> if let temporary scope</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/temporary-tail-expr-scope.html"><strong aria-hidden="true">5.9.1.1.3.</strong> Tail expression temporary scope</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/match-ergonomics.html"><strong aria-hidden="true">5.9.1.1.4.</strong> Match ergonomics</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/unsafe-extern.html"><strong aria-hidden="true">5.9.1.1.5.</strong> Unsafe extern blocks</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/unsafe-attributes.html"><strong aria-hidden="true">5.9.1.1.6.</strong> Unsafe attributes</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/unsafe-op-in-unsafe-fn.html"><strong aria-hidden="true">5.9.1.1.7.</strong> unsafe_op_in_unsafe_fn warning</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/static-mut-references.html"><strong aria-hidden="true">5.9.1.1.8.</strong> Disallow references to static mut</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/never-type-fallback.html"><strong aria-hidden="true">5.9.1.1.9.</strong> Never type fallback change</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/macro-fragment-specifiers.html"><strong aria-hidden="true">5.9.1.1.10.</strong> Macro fragment specifiers</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/missing-macro-fragment-specifiers.html"><strong aria-hidden="true">5.9.1.1.11.</strong> Missing macro fragment specifiers</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/gen-keyword.html"><strong aria-hidden="true">5.9.1.1.12.</strong> gen keyword</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/reserved-syntax.html"><strong aria-hidden="true">5.9.1.1.13.</strong> Reserved syntax</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/standard-library.html"><strong aria-hidden="true">5.9.1.2.</strong> Standard library</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/prelude.html"><strong aria-hidden="true">5.9.1.2.1.</strong> Additions to the prelude</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/intoiterator-box-slice.html"><strong aria-hidden="true">5.9.1.2.2.</strong> Add IntoIterator for Box&lt;[T]&gt;</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/newly-unsafe-functions.html"><strong aria-hidden="true">5.9.1.2.3.</strong> Newly unsafe functions</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/cargo.html"><strong aria-hidden="true">5.9.1.3.</strong> Cargo</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/cargo-resolver.html"><strong aria-hidden="true">5.9.1.3.1.</strong> Cargo: Rust-version aware resolver</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/cargo-table-key-names.html"><strong aria-hidden="true">5.9.1.3.2.</strong> Cargo: Table and key name consistency</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/cargo-inherited-default-features.html"><strong aria-hidden="true">5.9.1.3.3.</strong> Cargo: Reject unused inherited default-features</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustdoc.html"><strong aria-hidden="true">5.9.1.4.</strong> Rustdoc</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustdoc-doctests.html"><strong aria-hidden="true">5.9.1.4.1.</strong> Rustdoc combined tests</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustdoc-nested-includes.html"><strong aria-hidden="true">5.9.1.4.2.</strong> Rustdoc nested include! change</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt.html"><strong aria-hidden="true">5.9.1.5.</strong> Rustfmt</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-style-edition.html"><strong aria-hidden="true">5.9.1.5.1.</strong> Rustfmt: Style edition</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-assignment-operator-rhs-indentation.html"><strong aria-hidden="true">5.9.1.5.2.</strong> Rustfmt: Assignment operator RHS indentation</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-overflow-delimited-expr.html"><strong aria-hidden="true">5.9.1.5.3.</strong> Rustfmt: Combine all delimited exprs as last argument</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-single-line-where-clauses.html"><strong aria-hidden="true">5.9.1.5.4.</strong> Rustfmt: Single-line where clauses</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-raw-identifier-sorting.html"><strong aria-hidden="true">5.9.1.5.5.</strong> Rustfmt: Raw identifier sorting</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2024/rustfmt-version-sorting.html"><strong aria-hidden="true">5.9.1.5.6.</strong> Rustfmt: Version sorting</a></li></ol></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/rust_1_83.html"><strong aria-hidden="true">5.9.2.</strong> rust_1_83</a></li><li class="chapter-item "><a href="Advanced/rust_release/rust_1_56.html"><strong aria-hidden="true">5.9.3.</strong> rust_1_56_Rust Edition 2021</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/prelude.html"><strong aria-hidden="true">5.9.3.1.</strong> Additions to the prelude</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/default-cargo-resolver.html"><strong aria-hidden="true">5.9.3.2.</strong> Default Cargo feature resolver</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/IntoIterator-for-arrays.html"><strong aria-hidden="true">5.9.3.3.</strong> IntoIterator for arrays</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/disjoint-capture-in-closures.html"><strong aria-hidden="true">5.9.3.4.</strong> Disjoint capture in closures</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/panic-macro-consistency.html"><strong aria-hidden="true">5.9.3.5.</strong> Panic macro consistency</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/reserved-syntax.html"><strong aria-hidden="true">5.9.3.6.</strong> Reserved syntax</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/raw-lifetimes.html"><strong aria-hidden="true">5.9.3.7.</strong> Raw lifetimes</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/warnings-promoted-to-error.html"><strong aria-hidden="true">5.9.3.8.</strong> Warnings promoted to errors</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/or-patterns-macro-rules.html"><strong aria-hidden="true">5.9.3.9.</strong> Or patterns in macro-rules</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2021/c-string-literals.html"><strong aria-hidden="true">5.9.3.10.</strong> C-string literals</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/rust_1_31.html"><strong aria-hidden="true">5.9.4.</strong> rust_1_31_Rust Edition 2018</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2018/path-changes.html"><strong aria-hidden="true">5.9.4.1.</strong> Path and module system changes</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2018/trait-fn-parameters.html"><strong aria-hidden="true">5.9.4.2.</strong> Anonymous trait function parameters deprecated</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2018/new-keywords.html"><strong aria-hidden="true">5.9.4.3.</strong> New keywords</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2018/tyvar-behind-raw-pointer.html"><strong aria-hidden="true">5.9.4.4.</strong> Method dispatch for raw pointers to inference variables</a></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2018/cargo.html"><strong aria-hidden="true">5.9.4.5.</strong> Cargo changes</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/editions/rust-2015/index.html"><strong aria-hidden="true">5.9.5.</strong> rust_1_00_Rust Edition 2015</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/rust_rfcs.html"><strong aria-hidden="true">5.10.</strong> rust_rfcs_nightly</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Optimization최적화</li><li class="chapter-item "><a href="Advanced/Optimization/optimization.html"><strong aria-hidden="true">6.</strong> Rust Optimization최적화</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/Optimization/common.html"><strong aria-hidden="true">6.1.</strong> 모든 언어별 공통적인 최적화 개념</a></li><li class="chapter-item "><a href="Advanced/Optimization/rust_optimization.html"><strong aria-hidden="true">6.2.</strong> Rust Optimization</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">문제해결Rust코드로 해결하기</li><li class="chapter-item "><a href="Problem_Solving/Problem_index.html"><strong aria-hidden="true">7.</strong> 문제해결Rust코드로 해결</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Problem_Solving/Sort/Sort_Problem_Solving.html"><strong aria-hidden="true">7.1.</strong> 정렬(Sort)</a></li><li class="chapter-item "><a href="Problem_Solving/Search/Sort_Problem_Solving.html"><strong aria-hidden="true">7.2.</strong> 검색(Search)</a></li><li class="chapter-item "><a href="Problem_Solving/SPM/String_Pattern_Matching_Problem_Solving.html"><strong aria-hidden="true">7.3.</strong> 문자열 패턴 매칭(SPM: String Pattern Matching)</a></li><li class="chapter-item "><a href="Problem_Solving/Calculation/Calculation_Problem_Solving.html"><strong aria-hidden="true">7.4.</strong> 계산(Calculation)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Problem_Solving/Calculation/x_x_xCalculation_Problem_Solving.html"><strong aria-hidden="true">7.4.1.</strong> x^3계산</a></li><li class="chapter-item "><a href="Problem_Solving/Calculation/all_sum_even_sumCalculation_Problem_Solving.html"><strong aria-hidden="true">7.4.2.</strong> 짝수만 계산&amp;받은 데이터롤 모두 더하기(+)</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
