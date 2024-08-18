/* JS POUR LA NAV BAR RESPONSIVE */
const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener('click', toggleNav, false);

function toggleNav(){
    navLinks.classList.toggle('active');
}
