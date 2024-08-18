// Liste des chemins d'accès des images d'arrière-plan
var images = ["../IMG/BG1.jpg", "../IMG/BG2.jpg", "../IMG/BG3.jpg", "../IMG/BG4.jpg", "../IMG/BG5.jpg"];

// Fonction pour changer l'image d'arrière-plan
function changeBackground() {
    // Générer un index aléatoire pour choisir une image d'arrière-plan
    var randomIndex = Math.floor(Math.random() * images.length);
    
    // Changer l'image d'arrière-plan en fonction de l'index aléatoire
    document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";
    
}

// Appeler la fonction pour changer l'arrière-plan lors du chargement de la page
window.onload = changeBackground;

