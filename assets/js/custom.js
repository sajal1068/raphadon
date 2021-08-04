var waveHeader = document.querySelector("#canvas"),
    waveWhite = document.querySelector("#canvas-white");
if (waveHeader) {
    function wave_Header(e) {
        paper.setup(waveHeader);
        var t, a, i, n = paper.view,
            s = 4,
            o = !0,
            r = new paper.Path({
                fillColor: "#f5f4f2"
            }),
            c = n.center.divide(2),
            d = c.y;

        function u() {
            i = n.center, t = n.size.width, a = n.size.height / 2, r.segments = [], r.add(n.bounds.bottomLeft), r.add(n.bounds.topLeft);
            for (var e = 1; e < s; e++) {
                var o = new paper.Point(t / s * e, i.y);
                r.add(o)
            }
            r.add(n.bounds.topRight), r.add(n.bounds.bottomRight), r.fullySelected = !1
        }
        n.on({
            frame: function(e) {
                d += (i.y - c.y - d) / 2;
                for (var t = 1; t < s + 2; t++) {
                    var n = e.count + 100 * (t + t % 5),
                        u = Math.sin(n / 200) * d,
                        l = Math.sin(n / 200) * u + a;
                    r.segments[t].point.y = l
                }
                o && r.smooth({
                    type: "continuous"
                })
            },
            resize: function(e) {
                u()
            }
        }), u()
    }
    wave_Header(waveHeader)
}
if (waveWhite) {
    function wave_white(e) {
        paper.setup(waveWhite);
        var t, a, i, n = paper.view,
            s = 4,
            o = !0,
            r = new paper.Path({
                fillColor: "#ffffff"
            }),
            c = n.center.divide(2),
            d = c.y;

        function u() {
            i = n.center, t = n.size.width, a = n.size.height / 2, r.segments = [], r.add(n.bounds.bottomLeft), r.add(n.bounds.topLeft);
            for (var e = 1; e < s; e++) {
                var o = new paper.Point(t / s * e, i.y);
                r.add(o)
            }
            r.add(n.bounds.topRight), r.add(n.bounds.bottomRight), r.fullySelected = !1
        }
        n.on({
            frame: function(e) {
                d += (i.y - c.y - d) / 2;
                for (var t = 1; t < s + 2; t++) {
                    var n = e.count + 100 * (t + t % 5),
                        u = Math.sin(n / 200) * d,
                        l = Math.sin(n / 200) * u + a;
                    r.segments[t].point.y = l
                }
                o && r.smooth({
                    type: "continuous"
                })
            },
            resize: function(e) {
                u()
            }
        }), u()
    }
    wave_white(waveWhite)
}
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (!is_safari && $(window).width() > 1200) {
    var waveCustom = document.querySelector(".custom-section-path");
    if (waveCustom) var myWave = wavify(waveCustom, {
        height: 80,
        bones: 3,
        amplitude: 80,
        speed: .07
    })
}! function(e) {
    var t = window.location.href,
        a = document.title;
    document.getElementsByTagName("img")[10];
    var i = document.getElementById("fb-share-button");
    i && i.addEventListener("click", function() {
        return (({
            url: e,
            title: t,
            w: a,
            h: i
        }) => {
            const n = void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
                s = void 0 !== window.screenTop ? window.screenTop : window.screenY,
                o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                r = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                c = o / window.screen.availWidth,
                d = (o - a) / 2 / c + n,
                u = (r - i) / 2 / c + s,
                l = window.open(e, t, `\n\t      scrollbars=yes,\n\t      width=${a/c}, \n\t      height=${i/c}, \n\t      top=${u}, \n\t      left=${d}\n\t      `);
            window.focus && l.focus()
        })({
            url: "https://www.facebook.com/sharer/sharer.php?u=" + t,
            title: "Condividi su Facebook",
            w: 800,
            h: 600
        }), !1
    });
    var n = document.getElementById("whatsapp-share-button");
    n && n.addEventListener("click", function() {
        return window.open("whatsapp://send?text=" + t), !1
    });
    var s = document.getElementById("email-share-button");
    s && s.addEventListener("click", function() {
        return window.open("mailto:?subject=" + a + "&body=" + t), !1
    });
    var o = document.getElementById("copy-share-button");
    if (o) {
        o.addEventListener("click", function() {
            return function(e) {
                var t = document.body.appendChild(document.createElement("input"));
                t.value = window.location.href, t.focus(), t.select(), document.execCommand("copy"), t.parentNode.removeChild(t);
                var a = document.getElementById("copy-share-image");
                a.setAttribute("data-bs-original-title", "Copiato!");
                var i = bootstrap.Tooltip.getInstance(a);
                i.hide(), i.toggle(), a.addEventListener("inserted.bs.tooltip", function() {
                    a.setAttribute("data-bs-original-title", "Copia e condividi!")
                })
            }(), !1
        })
    }
}(jQuery),
function(e) {
    var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        a = document.createElement("span"),
        i = document.querySelector(".credits p");
    if (a.innerHTML = "&copy;" + (new Date).getFullYear(), i.prepend(a), e(window).width() < 1024) {
        e(".row .col-lg-6:last-child h2").insertBefore(".single-image"), e(".single-info").insertAfter(".single-nutritional"), e(".single-extra").insertAfter(".single-info"), e("path.custom-section-path").attr("d", "M42.5,859.7h480V89.5c0,0-52.9,24-140.8,23.3S258,83.3,172.5,61.8s-130,0-130,0L42.5,859.7z"), e(".menu-title").append("<span>+</span>");
        var n = e(".menu-items .col .menu-title").on("click", function() {
            n.not(this).nextAll("ul").removeClass("open"), n.not(this).find("span").removeClass("open"), e(this).nextAll("ul").toggleClass("open"), e(this).find("span").toggleClass("open")
        })
    }
    if (!t) {
        var s = e('body:not(".moods-page"):not(".moods-single-page"):not(".corporate-page") .featured-image');
        s && s.tilt({
            glare: !1,
            maxGlare: .5,
            maxTilt: 5,
            perspective: 1300
        });
        var o = e(".page-related-image");
        o && o.tilt({
            glare: !1,
            maxGlare: .5,
            maxTilt: 5,
            perspective: 1300
        })
    } [...document.querySelectorAll(".secondary-menu a")].forEach((e, t) => {
        e.classList.add("link", "link-muller");
        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.classList.add("link-graphic", "link-graphic-slide"), a.setAttribute("width", "300%"), a.setAttribute("height", "100%"), a.setAttribute("viewBox", "0 0 1200 60"), a.setAttribute("preserveAspectRatio", "none");
        var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
        i.setAttribute("d", "M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"), a.appendChild(i), e.appendChild(a)
    }), [...document.querySelectorAll(".menu-items a")].forEach((e, t) => {
        e.classList.add("link", "link-muller");
        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.classList.add("link-graphic", "link-graphic-slide"), a.setAttribute("width", "300%"), a.setAttribute("height", "100%"), a.setAttribute("viewBox", "0 0 1200 60"), a.setAttribute("preserveAspectRatio", "none");
        var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
        i.setAttribute("d", "M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"), a.appendChild(i), e.appendChild(a)
    });
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
        return new bootstrap.Tooltip(e, {
            boundary: "window",
            delay: {
                show: 300,
                hide: 100
            }
        })
    });
    (r = document.querySelector(".single-sharing-btn")) && r.addEventListener("click", function() {
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    });
    var r = document.querySelector(".contact-info"),
        c = document.querySelector(".contact-info-toolpit");
    r && (r.addEventListener("mouseenter", function() {
        c.classList.add("active")
    }), r.addEventListener("mouseout", function() {
        c.classList.remove("active")
    })), e("body").find('[data-bs-toggle="modal"]').click(function() {
        var t = e(this).attr("data-bs-video");
        e("iframe").attr("src", t), e(".modal-body iframe").addClass("youtube-iframe"), e(".btn-close").click(function() {
            e(".youtube-iframe").each(function(t) {
                return e(this).attr("src", ""), !1
            })
        })
    }), e("body").find('[data-toggle="youtube"]').click(function(t) {
        t.preventDefault();
        var a = e(this).attr("data-target");
        console.log(a), e(a).addClass("show");
        var i = e(this).attr("data-video");
        e(a).children("iframe").attr("src", i)
    });
    var d = e(".grid").imagesLoaded(function() {
            d.masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid-item",
                percentPosition: !0,
                horizontalOrder: !1
            })
        }),
        u = e(".grid-1").imagesLoaded(function() {
            u.masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid-item",
                percentPosition: !0,
                horizontalOrder: !1
            })
        }),
        l = e(".grid-2").imagesLoaded(function() {
            l.masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid-item",
                percentPosition: !0,
                horizontalOrder: !1
            })
        }),
        m = e(".grid-3").imagesLoaded(function() {
            m.masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid-item",
                percentPosition: !0,
                horizontalOrder: !1
            })
        });
    e(".bg-image").each(function() {
        "use strict";
        e(this).attr("data-bg") && e(this).css({
            "background-image": "url(" + e(this).data("bg") + ")"
        })
    }), t || e(window).width() > 1200 && e(".custom-section .bg-image").each(function() {
        "use strict";
        e(this).attr("data-bg") && e(this).css({
            "background-image": "none"
        })
    }), e(window).width() > 1200 && t && (e(".custom-section").css("margin-top", "0"), e(".custom-section .hero-bg").css("height", "800px")), e(".product-item").mousemove(function(t) {
        var a = e(this).attr("id"),
            i = e(this).width(),
            n = e(this).height(),
            s = t.offsetX - this.offsetLeft,
            o = t.offsetY - this.offsetTop,
            r = s - i / 2,
            c = o - n / 2;
        e("#" + a + " div").each(function() {
            var t = e(this).attr("data-speed");
            e(this).attr("data-revert") && (t *= -1), TweenMax.to(e(this), 1, {
                x: 1 - r * t,
                y: 1 - c * t
            })
        })
    }), e(".product-item").mouseleave(function(t) {
        var a = e(this).attr("id"),
            i = e(this).width(),
            n = e(this).height();
        t.offsetX, this.offsetLeft, t.offsetY, this.offsetTop;
        e("#" + a + " div").each(function() {
            e(this).attr("data-speed");
            e(this).attr("data-revert"), TweenMax.to(e(this), 1, {
                x: 0,
                y: 0
            })
        })
    }), e(".owl-carousel").owlCarousel({
        loop: !1,
        rewind: !0,
        nav: !0,
        navText: ["<img src='/typo3conf/ext/f7base/Resources/Public/Frontend/images/arrow-brown-left.png'>", "<img src='/typo3conf/ext/f7base/Resources/Public/Frontend/images/arrow-brown-right.png'>"],
        margin: 20,
        dots: !1,
        autoplay: !0,
        responsiveClass: !0,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1,
                loop: !1
            },
            600: {
                items: 2,
                loop: !1
            },
            1000: {
                items: 4,
                loop: !1
            }
        }
    });
    var h, g = document.querySelector(".single-image");
    g && (document.querySelector(".single-image").childElementCount > 1 && (g.classList.add("owl-carousel", "owl-theme"), e(".single-image.owl-carousel").owlCarousel({
        loop: !0,
        nav: !1,
        margin: 0,
        dots: !0,
        autoplay: !1,
        autoplayHoverPause: !0,
        items: 1,
        animateOut: "fadeOut"
    })));
    (h = document.querySelector(".custom-section-slider")) && (h.classList.add("owl-carousel", "owl-theme"), e(".custom-section-slider.owl-carousel").owlCarousel({
        loop: !1,
        rewind: !0,
        nav: !1,
        margin: 0,
        dots: !0,
        autoplay: !0,
        video: !0,
        items: 1,
        autoplayHoverPause: !0,
        animateOut: "fadeOut"
    }));
    if (h = document.querySelector(".custom-section-slider__inner")) {
        var p = document.querySelector(".custom-section-slider__inner").childElementCount;
        if (console.log(p), p > 1) h.classList.add("owl-carousel", "owl-theme"), e(".custom-section-slider__inner.owl-carousel").owlCarousel({
            loop: !1,
            rewind: !0,
            nav: !1,
            margin: 0,
            dots: !0,
            autoplay: !0,
            video: !0,
            items: 1,
            autoplayHoverPause: !0,
            animateOut: "fadeOut"
        })
    }
    if (e(window).width() > 1200 && document.querySelector(".grid-news")) {
        let t = e(".grid-news").masonry({
                itemSelector: "none",
                columnWidth: ".grid__col-sizer",
                gutter: ".grid__gutter-sizer",
                percentPosition: !0,
                stagger: 30,
                visibleStyle: {
                    transform: "translateY(0)",
                    opacity: 1
                },
                hiddenStyle: {
                    transform: "translateY(100px)",
                    opacity: 0
                }
            }),
            a = t.data("masonry");
        t.imagesLoaded(function() {
            t.masonry("option", {
                itemSelector: ".grid__item"
            });
            let e = t.find(".grid__item");
            t.masonry("appended", e)
        }), t.on("append.infiniteScroll", function(t, a) {
            e(".bg-image").each(function() {
                "use strict";
                e(this).attr("data-bg") && e(this).css({
                    "background-image": "url(" + e(this).data("bg") + ")"
                })
            })
        }), t.infiniteScroll({
            path: ".pagination__next",
            append: ".grid__item",
            outlayer: a,
            status: ".page-load-status",
            hideNav: ".pagination"
        })
    }
    if (e(window).width() > 1200) {
        var v = document.querySelector(".grid-recipes");
        if (v) {
            new InfiniteScroll(v, {
                path: ".pagination__next",
                append: ".grid__recipe",
                history: !1,
                status: ".page-load-status",
                hideNav: ".pagination"
            }).on("append", function(t, a, i, n) {
                e(".bg-image").each(function() {
                    "use strict";
                    e(this).attr("data-bg") && e(this).css({
                        "background-image": "url(" + e(this).data("bg") + ")"
                    })
                })
            })
        }
    }

    function f() {
        screen.availHeight < screen.availWidth ? e(".shape-wrap").addClass("horizontal") : e(".shape-wrap").removeClass("horizontal")
    }
    e(window).width() < 960 && (f(), e(window).resize(function() {
        f()
    }))
}(jQuery),
function(e) {
    const t = {};

    function a() {
        t.body.classList.add("hidden"), t.intro.classList.contains("active-search") || (anime({
            targets: t.intro,
            duration: 600,
            easing: "easeInOutSine",
            translateY: "100vh"
        }), anime({
            targets: t.shape_wrap,
            duration: 600,
            easing: "easeInOutSine",
            height: "100vh"
        }), anime({
            targets: t.shape,
            scaleY: [{
                value: [1, 2.8],
                duration: 600,
                easing: "easeInQuad"
            }, {
                value: 10,
                duration: 600,
                easing: "easeOutQuad"
            }]
        }), anime({
            targets: t.path,
            duration: 600,
            easing: "easeOutQuad",
            d: t.path.getAttribute("pathdata:id")
        }), anime({
            targets: t.menu,
            duration: 700,
            easing: "easeInOutSine",
            translateY: "100vh"
        }), anime({
            targets: t.menu_items_col1,
            duration: 800,
            delay: 200,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_col2,
            duration: 800,
            delay: 400,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_col3,
            duration: 800,
            delay: 600,
            easing: "easeInOutSine",
            opacity: "1"
        }), t.menu_items_col4 && anime({
            targets: t.menu_items_col4,
            duration: 800,
            delay: 600,
            easing: "easeInOutSine",
            opacity: "1"
        }), t.menu_items_col5 && anime({
            targets: t.menu_items_col5,
            duration: 800,
            delay: 600,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_socials,
            duration: 800,
            delay: 800,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_sec_menu,
            duration: 800,
            delay: 1e3,
            easing: "easeInOutSine",
            opacity: "1"
        }), setTimeout(function() {
            t.intro.classList.add("bg")
        }, 600)), t.menu_items_search_form.style.opacity = "1", t.search_vocal.style.display = "none", t.menu_items.style.display = "flex", t.intro.classList.add("active"), setTimeout(function() {
            t.navbar.classList.add("active")
        }, 200), t.intro.classList.remove("active-search"), t.navbar.classList.remove("active-search")
    }

    function i() {
        setTimeout(function() {
            t.intro.classList.remove("active"), setTimeout(function() {
                t.navbar.classList.remove("active")
            }, 200), anime({
                targets: t.intro,
                duration: 1e3,
                easing: "easeInOutSine",
                translateY: "0"
            }), e(window).width() < 960 ? anime({
                targets: t.shape_wrap,
                duration: 1e3,
                easing: "easeInOutSine",
                height: "10vh"
            }) : anime({
                targets: t.shape_wrap,
                duration: 1e3,
                easing: "easeInOutSine",
                height: "15vh"
            }), anime({
                targets: t.shape,
                scaleY: [{
                    value: 1,
                    duration: 500,
                    easing: "easeOutQuad"
                }]
            }), anime({
                targets: t.path,
                duration: 500,
                easing: "easeOutQuad",
                d: t.path.getAttribute("pathdata:id")
            }), anime({
                targets: t.menu,
                duration: 300,
                easing: "easeInOutSine",
                translateY: "0"
            }), anime({
                targets: [t.menu_items_col1, t.menu_items_col2, t.menu_items_col3, t.menu_items_search_form, t.menu_items_socials, t.menu_items_sec_menu],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), t.menu_items_col4 && anime({
                targets: [t.menu_items_col4],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), t.menu_items_col5 && anime({
                targets: [t.menu_items_col5],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), setTimeout(function() {
                t.body.classList.remove("hidden"), t.intro.classList.remove("bg")
            }, 400)
        }, 200)
    }

    function n() {
        t.body.classList.add("hidden"), t.intro.classList.contains("active") || (anime({
            targets: t.intro,
            duration: 600,
            easing: "easeInOutSine",
            translateY: "100vh"
        }), anime({
            targets: t.shape_wrap,
            duration: 600,
            easing: "easeInOutSine",
            height: "100vh"
        }), anime({
            targets: t.shape,
            scaleY: [{
                value: [1, 2.8],
                duration: 600,
                easing: "easeInQuad"
            }, {
                value: 10,
                duration: 600,
                easing: "easeOutQuad"
            }]
        }), anime({
            targets: t.path,
            duration: 600,
            easing: "easeOutQuad",
            d: t.path.getAttribute("pathdata:id")
        }), anime({
            targets: t.menu,
            duration: 700,
            easing: "easeInOutSine",
            translateY: "100vh"
        }), anime({
            targets: t.menu_items_search_form,
            duration: 800,
            delay: 200,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_socials,
            duration: 800,
            delay: 400,
            easing: "easeInOutSine",
            opacity: "1"
        }), anime({
            targets: t.menu_items_sec_menu,
            duration: 800,
            delay: 600,
            easing: "easeInOutSine",
            opacity: "1"
        }), setTimeout(function() {
            t.intro.classList.add("bg")
        }, 600)), t.menu_items_col1.style.opacity = "1", t.menu_items_col2.style.opacity = "1", t.menu_items_col3.style.opacity = "1", t.menu_items_col4 && (t.menu_items_col4.style.opacity = "1"), t.menu_items_col5 && (t.menu_items_col5.style.opacity = "1"), t.search_vocal.style.display = "block", t.intro.classList.add("active-search"), setTimeout(function() {
            t.navbar.classList.add("active-search")
        }, 200), t.intro.classList.remove("active"), t.navbar.classList.remove("active")
    }

    function s() {
        setTimeout(function() {
            t.intro.classList.remove("active-search"), setTimeout(function() {
                t.navbar.classList.remove("active-search")
            }, 200), anime({
                targets: t.intro,
                duration: 1e3,
                easing: "easeInOutSine",
                translateY: "0"
            }), e(window).width() < 960 ? anime({
                targets: t.shape_wrap,
                duration: 1e3,
                easing: "easeInOutSine",
                height: "10vh"
            }) : anime({
                targets: t.shape_wrap,
                duration: 1e3,
                easing: "easeInOutSine",
                height: "15vh"
            }), anime({
                targets: t.shape,
                scaleY: [{
                    value: 1,
                    duration: 500,
                    easing: "easeOutQuad"
                }]
            }), anime({
                targets: t.path,
                duration: 500,
                easing: "easeOutQuad",
                d: t.path.getAttribute("pathdata:id")
            }), anime({
                targets: t.menu,
                duration: 300,
                easing: "easeInOutSine",
                translateY: "0"
            }), anime({
                targets: [t.menu_items_col1, t.menu_items_col2, t.menu_items_col3, t.menu_items_search_form, t.menu_items_socials, t.menu_items_sec_menu],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), t.menu_items_col4 && anime({
                targets: [t.menu_items_col4],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), t.menu_items_col5 && anime({
                targets: [t.menu_items_col5],
                duration: 200,
                easing: "easeInOutSine",
                opacity: "0"
            }), setTimeout(function() {
                t.body.classList.remove("hidden"), t.intro.classList.remove("bg")
            }, 400)
        }, 200)
    }
    t.body = document.body, t.intro = document.querySelector(".container-menu"), t.hero = document.querySelector("#hero"), t.header = document.querySelector("header"), t.navbar = document.querySelector(".navbar"), t.menu = document.querySelector(".menu"), t.menu_items = document.querySelector(".menu-items"), t.menu_items_col1 = document.querySelector(".menu-items .col:nth-child(1)"), t.menu_items_col2 = document.querySelector(".menu-items .col:nth-child(2)"), t.menu_items_col3 = document.querySelector(".menu-items .col:nth-child(3)"), t.menu_items_col4 = document.querySelector(".menu-items .col:nth-child(4)"), t.menu_items_col5 = document.querySelector(".menu-items .col:nth-child(5)"), t.menu_items_socials = document.querySelector(".menu-inner .social-links"), t.menu_items_sec_menu = document.querySelector(".menu-inner .secondary-menu"), t.menu_items_search_form = document.querySelector(".menu-inner .search-form"), t.search_vocal = document.querySelector(".search-form"), t.shape_wrap = t.header.querySelector(".shape-wrap"), t.shape = t.header.querySelector("svg.shape"), t.path = t.shape.querySelector("path"), t.enter_menu = document.querySelector(".navbar-menu"), t.leave_menu = document.querySelector(".menu-close"), t.enter_search = document.querySelector(".navbar-search"), t.leave_search = document.querySelector(".search-close"), t.shape.style.transformOrigin = "100% 0%", t.shape.style.transform = "translateY(-38vh) scaleY(1)", e(window).width() < 960 ? t.shape_wrap.style.height = "10vh" : t.shape_wrap.style.height = "15vh", window.addEventListener("DOMContentLoaded", function() {
        t.enter_menu.addEventListener("click", a), t.enter_search.addEventListener("click", n), t.leave_menu.addEventListener("click", i), t.leave_search.addEventListener("click", s)
    });
    var o = document.querySelectorAll(".menu-items a"),
        r = document.querySelectorAll(".menu .secondary-menu a"),
        c = document.querySelector("#hero"),
        d = document.querySelector("#page");
    [...o].forEach((e, t) => {
        e.addEventListener("click", function(t) {
            c && c.classList.add("hide"), d && d.classList.add("hide");
            var a = e.href;
            t.preventDefault(), i(), setTimeout(function() {
                window.location = a
            }, 500)
        }, !1)
    }), [...r].forEach((e, t) => {
        e.addEventListener("click", function(t) {
            c && c.classList.add("hide"), d && d.classList.add("hide");
            var a = e.href;
            t.preventDefault(), i(), setTimeout(function() {
                window.location = a
            }, 500)
        }, !1)
    })
}(jQuery), jQuery(function(e) {
    if (e(window).width() > 960) {
        const e = document.body,
            t = "nav-up",
            a = "nav-down";
        let i = 0;
        window.addEventListener("scroll", () => {
            const n = window.pageYOffset;
            if (0 == n) return e.classList.remove(t), void e.classList.remove(a);
            n > i && !e.classList.contains(a) ? (e.classList.remove(t), e.classList.add(a)) : n < i && e.classList.contains(a) && (e.classList.remove(a), e.classList.add(t)), i = n
        })
    }
});