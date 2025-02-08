const texts = ["Développeur Web", "Monteur Vidéo", "Beatmaker"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 80; // Vitesse d'écriture
const delay = 3000; // Temps avant de changer (3 secondes)

const textElement = document.getElementById("changing-text");

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        // Efface le texte caractère par caractère
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Écrit le texte caractère par caractère
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    // Quand tout le texte est écrit, on attend avant d'effacer
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay); // Pause avant de supprimer
    } 
    // Quand tout est effacé, on passe au texte suivant
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Texte suivant
        setTimeout(typeEffect, speed);
    } 
    else {
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed); // Efface plus vite qu'il n'écrit
    }
}

// Démarrer l'effet machine à écrire
typeEffect();
