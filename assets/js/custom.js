

function menu(e) {
	
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
		}), setTimeout(function () {
			t.intro.classList.add("bg")
		}, 600)), t.menu_items_search_form.style.opacity = "1", t.search_vocal.style.display = "none", t.menu_items.style.display = "flex", t.intro.classList.add("active"), setTimeout(function () {
			t.navbar.classList.add("active")
		}, 200), t.intro.classList.remove("active-search"), t.navbar.classList.remove("active-search")
	}

	function i() {
		setTimeout(function () {
			t.intro.classList.remove("active"), setTimeout(function () {
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
			}), setTimeout(function () {
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
		}), setTimeout(function () {
			t.intro.classList.add("bg")
		}, 600)), t.menu_items_col1.style.opacity = "1", t.menu_items_col2.style.opacity = "1", t.menu_items_col3.style.opacity = "1", t.menu_items_col4 && (t.menu_items_col4.style.opacity = "1"), t.menu_items_col5 && (t.menu_items_col5.style.opacity = "1"), t.search_vocal.style.display = "block", t.intro.classList.add("active-search"), setTimeout(function () {
			t.navbar.classList.add("active-search")
		}, 200), t.intro.classList.remove("active"), t.navbar.classList.remove("active")
	}

	function s() {
		setTimeout(function () {
			t.intro.classList.remove("active-search"), setTimeout(function () {
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
			}), setTimeout(function () {
				t.body.classList.remove("hidden"), t.intro.classList.remove("bg")
			}, 400)
		}, 200)
	}
	t.body = document.body, t.intro = document.querySelector(".container-menu"), t.hero = document.querySelector("#hero"), t.header = document.querySelector("header"), t.navbar = document.querySelector(".navbar"), t.menu = document.querySelector(".menu"), t.menu_items = document.querySelector(".menu-items"), t.menu_items_col1 = document.querySelector(".menu-items .col:nth-child(1)"), t.menu_items_col2 = document.querySelector(".menu-items .col:nth-child(2)"), t.menu_items_col3 = document.querySelector(".menu-items .col:nth-child(3)"), t.menu_items_col4 = document.querySelector(".menu-items .col:nth-child(4)"), t.menu_items_col5 = document.querySelector(".menu-items .col:nth-child(5)"), t.menu_items_socials = document.querySelector(".menu-inner .social-links"), t.menu_items_sec_menu = document.querySelector(".menu-inner .secondary-menu"), t.menu_items_search_form = document.querySelector(".menu-inner .search-form"), t.search_vocal = document.querySelector(".search-form"), t.shape_wrap = t.header.querySelector(".shape-wrap"), t.shape = t.header.querySelector("svg.shape"), t.path = t.shape.querySelector("path"), t.enter_menu = document.querySelector(".navbar-menu"), t.leave_menu = document.querySelector(".menu-close"), t.enter_search = document.querySelector(".navbar-search"), t.leave_search = document.querySelector(".search-close"), t.shape.style.transformOrigin = "100% 0%", t.shape.style.transform = "translateY(-38vh) scaleY(1)", e(window).width() < 960 ? t.shape_wrap.style.height = "10vh" : t.shape_wrap.style.height = "15vh", window.addEventListener("DOMContentLoaded", function () {
		t.enter_menu.addEventListener("click", a), t.enter_search.addEventListener("click", n), t.leave_menu.addEventListener("click", i), t.leave_search.addEventListener("click", s)
	});
	var o = document.querySelectorAll(".menu-items a"),
		r = document.querySelectorAll(".menu .secondary-menu a"),
		c = document.querySelector("#hero"),
		u = document.querySelector("#page");
	[...o].forEach((e, t) => {
		e.addEventListener("click", function (t) {
			c && c.classList.add("hide"), u && u.classList.add("hide");
			var a = e.href;
			t.preventDefault(), i(), setTimeout(function () {
				window.location = a
			}, 500)
		}, !1)
	}), [...r].forEach((e, t) => {
		e.addEventListener("click", function (t) {
			c && c.classList.add("hide"), u && u.classList.add("hide");
			var a = e.href;
			t.preventDefault(), i(), setTimeout(function () {
				window.location = a
			}, 500)
		}, !1)
	})
}(jQuery), jQuery(function (e) {
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
