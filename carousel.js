document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    let scrollAmount = 0;

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: 200,
            behavior: "smooth",
        });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    });
});
