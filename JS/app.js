// Liste des chemins d'accès des images d'arrière-plan
var images = ["IMG/BG1.jpg", "IMG/BG12.jpg", "IMG/BG8.jpg", "IMG/BG4.jpg", "IMG/BG11.jpg", "IMG/BG7.jpg", "IMG/BG9.jpg" ];

// Fonction pour changer l'image d'arrière-plan
function changeBackground() {
    var availableImages = images;

    // Vérifier la taille de l'écran
    if (window.innerWidth <= 1024) {
        // Exclure IMG/BG2.jpg si l'écran est plus petit ou égal à 768px
        availableImages = images.filter(function(image) {
            return image !== "IMG/BG3.jpg";
        });
    }

    // Générer un index aléatoire pour choisir une image d'arrière-plan parmi les images disponibles
    var randomIndex = Math.floor(Math.random() * availableImages.length);
    
    // Changer l'image d'arrière-plan en fonction de l'index aléatoire
    document.body.style.backgroundImage = "url('" + availableImages[randomIndex] + "')";
}

// Appeler la fonction pour changer l'arrière-plan lors du chargement de la page
window.onload = changeBackground;

// Réappeler la fonction lorsque la fenêtre est redimensionnée
window.onresize = changeBackground;

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
