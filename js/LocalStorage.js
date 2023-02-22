window.localStorage.setItem("nom", "Les Bonnes Pièces !");

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:8081/pieces");
const pieces = await reponse.json();
 
// Transformation des pièces en JSON
const valeurPieces = JSON.stringify(pieces);
 
// Stockage des informations dans le localStorage
window.localStorage.setItem("pieces", valeurPieces);

const pieces = await fetch("http://localhost:8081/pieces").then(pieces => pieces.jon());

const nomEntreprise = window.localStorage.getItem("nom");

// Récupération des pièces éventuellement stockées dans le localStorage
const pieces = window.localStorage.getItem("pieces");

// Récupération des pièces éventuellement stockées dans le localStorage
let pieces = window.localStorage.getItem("pieces");
if (pieces === null) {
  /* Code de récupération des pièces depuis l’API HTTP */
}

//Récupération des pièces eventuellement stockées dans le localStorage
let pieces = window.localStorage.getItem('pieces');
if (pieces === null){
   // Récupération des pièces depuis l'API
   const reponse = await fetch('http://localhost:8081/pieces/');
   pieces = await reponse.json();
   // Transformation des pièces en JSON
   const valeurPieces = JSON.stringify(pieces);
   // Stockage des informations dans le localStorage
   window.localStorage.setItem("pieces", valeurPieces);
}else{
   pieces = JSON.parse(pieces);
}

window.localStorage.removeItem("nom");

// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
  window.localStorage.removeItem("pieces");
});