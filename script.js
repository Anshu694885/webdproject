document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".cta-box");
    const authButtons = document.querySelectorAll(".auth-btn");
    const banner = document.querySelector(".banner");
    const recommendationSection = document.querySelector(".recommendation-section");

    // Add functionality to the tabs
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.querySelector("h3").textContent.includes("read next")) {
                banner.innerHTML = `<h1>Discover Your Next Read</h1>`;
                recommendationSection.innerHTML = `<h2>Top Recommendations</h2><p>Based on your interests!</p>`;
            } else if (tab.querySelector("h3").textContent.includes("friends reading")) {
                banner.innerHTML = `<h1>See What Your Friends Are Reading</h1>`;
                recommendationSection.innerHTML = `<h2>Friends' Favorites</h2><p>Connect and explore shared favorites.</p>`;
            }
        });
    });

    // Add functionality to the authentication buttons
    authButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const action = button.getAttribute("data-action");
            banner.innerHTML = `<h1>Welcome via ${action}</h1>`;
            recommendationSection.innerHTML = `<h2>Thank you for signing in with ${action}!</h2><p>Enjoy exploring new books and recommendations.</p>`;
        });
    });
});
