(function () {
            var b = document.documentElement,
            a = function () {
                var a = b.getBoundingClientRect().width;
                b.style.fontSize = (a/设计稿宽度) * 100 + "px"
            }, c = null;
            window.addEventListener("resize", function () {
                clearTimeout(c);
                c = setTimeout(a, 300)
            });
            a()
        })();