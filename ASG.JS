// JavaScript for Navbar Dropdowns and Mobile Toggle

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

    // Toggle mobile menu
    const navMobileIcon = document.querySelector('.nav-mobile-icon');
    const navMenu = document.querySelector('.navmenu');

    if (navMobileIcon) {
        navMobileIcon.addEventListener('click', function() {
            navMobileIcon.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Toggle dropdowns on hover for desktop
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('mouseover', function() {
            this.querySelector('.nav-dropdown-list').classList.add('active');
        });
        toggle.addEventListener('mouseout', function() {
            this.querySelector('.nav-dropdown-list').classList.remove('active');
        });
    });

    // Toggle dropdowns on click for mobile
    const navLinksDropdown = document.querySelectorAll('.nav-link-dropdown');

    navLinksDropdown.forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                const dropdownList = this.nextElementSibling;
                dropdownList.classList.toggle('active');
            }
        });
    });

});
// document.addEventListener("DOMContentLoaded", function () {
//     const mobileMenuIcon = document.getElementById("mob-menu");
//     const navMenu = document.querySelector(".navmenu");

//     mobileMenuIcon.addEventListener("click", function () {
//         navMenu.style.display = navMenu.style.display === "none" ? "block" : "none";
//     });

//     // Close the mobile menu when clicking outside of it
//     document.addEventListener("click", function (event) {
//         if (!navMenu.contains(event.target) && event.target !== mobileMenuIcon) {
//             navMenu.style.display = "none";
//         }
//     });
// });
