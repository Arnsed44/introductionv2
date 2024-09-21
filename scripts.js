document.getElementById("continue-btn").addEventListener("click", function() {
    document.querySelector(".image-gallery").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".image-gallery").classList.add("hidden");
        document.querySelector(".intro-section").style.opacity = 1;
        document.querySelector(".intro-section").classList.remove("hidden");
    }, 500);
});

document.getElementById("about-btn").addEventListener("click", function() {
    document.querySelector(".intro-section").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".intro-section").classList.add("hidden");
        document.querySelector(".all-about-me").style.opacity = 1;
        document.querySelector(".all-about-me").classList.remove("hidden");
    }, 500);
});
