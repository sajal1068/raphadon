

/*  Smooth Interaction Engine Script */
    document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        if (scrollToTopBtn) {
            // Dynamic execution function based on scroll event offsets
            window.addEventListener("scroll", function () {
                if (window.scrollY > 300) {
                    // Activate pointer and transition layers smoothly
                    scrollToTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
                    scrollToTopBtn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
                } else {
                    // Force complete layer compression when close to page top index
                    scrollToTopBtn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
                    scrollToTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
                }
            });

            // Anchor scroll simulation trigger on clean mouse click
            scrollToTopBtn.addEventListener("click", function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    });