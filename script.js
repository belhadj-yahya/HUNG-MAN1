const theInput = document.querySelector(".textArea");
const allButtons = Array.from(document.getElementsByClassName("key"));

let input = "";

// Fonction pour mettre à jour l'input
const updateInput = () => {
  theInput.value = input;
};

// Gestion des clics sur chaque bouton
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    input += btn.value; 
    updateInput(); 
    btn.disabled = true; 
    btn.classList.add("clicked"); 
  });
});

