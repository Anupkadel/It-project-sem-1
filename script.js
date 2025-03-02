document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let targetId = this.getAttribute("href").substring(1); // Get the section ID

            // Show only the clicked section
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            // Remove "active" from all links, then add to the clicked one
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Ensure the home section is visible by default
    document.getElementById("home").style.display = "block";
});
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    // Section Navigation Logic
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let targetId = this.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.style.display = section.id === targetId ? "block" : "none";
            });

            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // Smooth scrolling
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Ensure the home section is visible by default
    document.getElementById("home").style.display = "block";

    // Mobile Menu Toggle
    document.getElementById("menu-toggle")?.addEventListener("click", function() {
        document.querySelector(".nav-links")?.classList.toggle("active");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
    });

    // Back-to-Top Button
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑ Top";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.display = "none";
    backToTop.style.padding = "10px";
    backToTop.style.cursor = "pointer";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Image Lazy Loading
    let lazyImages = document.querySelectorAll("img");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src; // Make sure images have data-src instead of src in HTML
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
