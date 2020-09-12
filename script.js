const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {
    // Toggle: Menu Bars Open / Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        // Animate in nav items
        navItems.map((item, key) => item.classList.replace(`slide-out-${key + 1}`, `slide-in-${key + 1}`));

    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

         // Animate out nav items
         navItems.map((item, key) => item.classList.replace(`slide-in-${key + 1}`, `slide-out-${key + 1}`));
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.map(item => item.addEventListener('click', toggleNav));
