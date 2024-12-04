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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="intro.html"><strong aria-hidden="true">1.</strong> Rust_kr_Welcome소개</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="qanda.html"><strong aria-hidden="true">1.1.</strong> Q&amp;A &amp; 질문하기 &amp;  기여하기</a></li><li class="chapter-item "><a href="rustos.html"><strong aria-hidden="true">1.2.</strong> Rust OS 프로젝트</a></li><li class="chapter-item "><a href="rustlinux.html"><strong aria-hidden="true">1.3.</strong> Rust Linux 프로젝트</a></li><li class="chapter-item "><a href="Appendix.html"><strong aria-hidden="true">1.4.</strong> Appendix</a></li><li class="chapter-item "><a href="justfile.html"><strong aria-hidden="true">1.5.</strong> justfile 러스트로 만든 makefile비슷한거</a></li></ol></li><li class="chapter-item "><a href="Chapter001/chapter_1.html"><strong aria-hidden="true">2.</strong> Chapter 1(코딩의 원리)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/rust_etc_difference.html"><strong aria-hidden="true">2.1.</strong> 러스트 언어와 다른언어의 차이점</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/common.html"><strong aria-hidden="true">2.1.1.</strong> 대부분의 코딩의 공통적인것들</a></li><li class="chapter-item "><a href="Chapter001/lang/zig.html"><strong aria-hidden="true">2.1.2.</strong> zig언어</a></li><li class="chapter-item "><a href="Chapter001/lang/cpp.html"><strong aria-hidden="true">2.1.3.</strong> C++언어</a></li><li class="chapter-item "><a href="Chapter001/lang/c.html"><strong aria-hidden="true">2.1.4.</strong> C언어</a></li><li class="chapter-item "><a href="Chapter001/lang/kotlin.html"><strong aria-hidden="true">2.1.5.</strong> Kotlin언어</a></li><li class="chapter-item "><a href="Chapter001/lang/swift.html"><strong aria-hidden="true">2.1.6.</strong> Swift언어</a></li></ol></li><li class="chapter-item "><a href="Chapter001/rust_summary.html"><strong aria-hidden="true">2.2.</strong> Rust의 전체적인 그림 잡기</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Chapter001/struct/rust_struct.html"><strong aria-hidden="true">2.2.1.</strong> struct</a></li></ol></li></ol></li><li class="chapter-item "><a href="Rust_syntax/intro.html"><strong aria-hidden="true">3.</strong> Rust_Syntax러스트문법</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Rust_syntax/getting_stared/hello_world.html"><strong aria-hidden="true">3.1.</strong> Rust_Getting_Started설치및 시작</a></li><li class="chapter-item "><a href="Rust_syntax/programming/fake_install.html"><strong aria-hidden="true">3.2.</strong> Programming_fake_install가짜인스톨프로그램 만들기</a></li><li class="chapter-item "><a href="Rust_syntax/Common_Programming/concepts.html"><strong aria-hidden="true">3.3.</strong> Common Programming Concepts프로그래밍컨셉</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Rust_syntax/Common_Programming/Val_Mut/val_mutable.html"><strong aria-hidden="true">3.3.1.</strong> Variables&amp;Mutability변수불편</a></li><li class="chapter-item "><a href="Rust_syntax/Common_Programming/Data_Types/data_types.html"><strong aria-hidden="true">3.3.2.</strong> Data_Types데이터 타입</a></li></ol></li></ol></li><li class="chapter-item "><a href="Advanced/advanced.html"><strong aria-hidden="true">4.</strong> Rust 고급 기술</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/traits.html"><strong aria-hidden="true">4.1.</strong> Traits</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/dandd.html"><strong aria-hidden="true">4.1.1.</strong> D&amp;D던전앤드래곤 만들어보기</a></li></ol></li><li class="chapter-item "><a href="Advanced/Operator/intro.html"><strong aria-hidden="true">4.2.</strong> Operator</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/Operator/c_operator_precedence.html"><strong aria-hidden="true">4.2.1.</strong> C_Operator_Precedence</a></li><li class="chapter-item "><a href="Advanced/Operator/logical_operators.html"><strong aria-hidden="true">4.2.2.</strong> Logical_Operators</a></li><li class="chapter-item "><a href="Advanced/Operator/bitwise_operators.html"><strong aria-hidden="true">4.2.3.</strong> Bitwise_Operators</a></li></ol></li><li class="chapter-item "><a href="Advanced/Algorithm/summary_algo.html"><strong aria-hidden="true">4.3.</strong> Algorithm알고리즘</a></li><li class="chapter-item "><a href="Advanced/rust_release/rust_release.html"><strong aria-hidden="true">4.4.</strong> rust_release</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advanced/rust_release/rust_1_85.html"><strong aria-hidden="true">4.4.1.</strong> rust_1_85_Rust Edition 2024</a></li><li class="chapter-item "><a href="Advanced/rust_release/rust_1_83.html"><strong aria-hidden="true">4.4.2.</strong> rust_1_83</a></li></ol></li><li class="chapter-item "><a href="Advanced/rust_release/rust_rfcs.html"><strong aria-hidden="true">4.5.</strong> rust_rfcs_nightly</a></li><li class="chapter-item "><a href="Advanced/cpp/move_semantics.html"><strong aria-hidden="true">4.6.</strong> C++오너쉽개념 기초 C++11에서 가져옴(move_semantics)</a></li></ol></li></ol>';
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
