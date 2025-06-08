window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
});

const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
    window.location.href = "profile-details.html";
});

const moviecrad = document.querySelectorAll(".content-card");
moviecrad.forEach(card => {
    card.addEventListener("mouseEnter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseLeave", () => {
        card.style.transform = "scale(1)";
    });
});