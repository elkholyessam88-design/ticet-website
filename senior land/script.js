// SENIOR LAND
// Intro animation is handled by CSS.

// Prevent scrolling during intro
document.body.style.overflow = "hidden";

setTimeout(() => {
    document.body.style.overflow = "auto";
}, 4000);


// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});