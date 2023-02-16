//Création de la classe Serie, pour pouvoir mouler les objets
class Serie {
    constructor(nom, note, annee, image) {
        this.nom = nom;
        this.note = note;
        this.annee = annee;
        this.image = image;
    }
}

//Déclaration d'un tableau contenant les séries sous forme d'objet !
const series = [
    new Serie("Game of Thrones", 1.8, 2011, "https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/03/14/13/0717778.jpg"),
    new Serie("Stranger Things", 4.8, 2016, "https://fr.web.img2.acsta.net/c_310_420/pictures/22/05/18/14/31/5186184.jpg"),
    new Serie("Lost", 2.0, 2004, "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/41/16/19779367.jpg"),
    new Serie("Buffy", 3.0, 1997, "https://fr.web.img4.acsta.net/c_310_420/pictures/19/08/21/09/12/5177711.jpg"),
    new Serie("Alice in Borderland", 4.5, 2020, "https://fr.web.img5.acsta.net/c_310_420/pictures/20/11/06/12/24/4584296.jpg"),
    new Serie("Doctor Who", 4.4, 2005, "https://fr.web.img2.acsta.net/c_310_420/pictures/18/11/12/15/37/1641315.jpg"),
    new Serie("Stargate", 3.0, 1997, "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/14/15/57/3353242.jpg"),
    new Serie("The Expanse", 2.9, 2015, "https://fr.web.img5.acsta.net/c_310_420/pictures/19/11/19/12/49/5247478.jpg"),
    new Serie("Dark", 1.8, 2017, "https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg"),
    new Serie("Vikings", 2.2, 2013, "https://fr.web.img6.acsta.net/c_310_420/pictures/20/12/04/10/04/4859166.jpg"),
    new Serie("Sons of Anarchy", 1.7, 2008, "https://fr.web.img6.acsta.net/c_310_420/pictures/21/01/29/17/41/0758046.jpg"),
    new Serie("La Casa de Papel", 4.7, 2017, "https://fr.web.img4.acsta.net/c_310_420/pictures/21/08/02/16/08/1706767.jpg"),
    new Serie("The Last of Us", 3.5, 2023, "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/12/12/36/0727474.jpg"),
    new Serie("The Walking Dead", 2.6, 2010, "https://fr.web.img5.acsta.net/c_310_420/pictures/22/08/29/18/20/3648785.jpg"),
    new Serie("The Haunting of Hill House", 1.7, 2018, "https://fr.web.img6.acsta.net/c_310_420/pictures/18/09/19/18/46/2766026.jpg"),
    new Serie("American Horror Story", 2.1, 2011, "https://fr.web.img6.acsta.net/c_310_420/pictures/22/10/03/14/11/0328175.jpg"),
    new Serie("Sherlock", 4.2, 2010, "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/67/70/22/19227477.jpg"),
    new Serie("The Wire", 2.9, 2002, "https://fr.web.img2.acsta.net/c_310_420/pictures/21/08/26/17/04/4531787.jpg"),
    new Serie("The Sinner", 1.6, 2017, "https://fr.web.img5.acsta.net/c_310_420/pictures/21/01/29/17/27/2896783.jpg"),
    new Serie("Big Bang Theory", 0.4, 2007, "https://fr.web.img3.acsta.net/c_310_420/pictures/18/11/06/15/36/0408812.jpg"),
    new Serie("Les Simpsons", 4.5, 1989, "https://fr.web.img3.acsta.net/c_310_420/pictures/20/10/01/11/26/1905965.jpg"),
    new Serie("The Office", 3.2, 2001, "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/36/08/68/18451023.jpg"),
    new Serie("Malcolm", 0.6, 2000, "https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/04/09/54/2363561.jpg"),
    new Serie("Peaky Blinders", 4.1, 2013, "https://fr.web.img6.acsta.net/c_310_420/pictures/22/06/07/11/57/5231272.jpg"),
    new Serie("Chernobyl", 2.0, 2019, "https://fr.web.img2.acsta.net/c_310_420/pictures/23/01/03/14/05/3165194.jpg"),
];

//On pointe sur l'élément du bouton avec l'id "order"
const btnOrder = document.getElementById("order");
//On pointe sur l'élément de bouton avec l'id "allSeries"
const section = document.getElementById("allSeries");

//On range par defaut dans l'ordre alphabétique
series.sort((a, b) => (a.nom > b.nom ? 1 : -1));
//On declare une variable et initalise à 0
let where = 0;
//On appelle la fonction liste()
liste();

//Ici, quand on cliquera sur le bouton, ça executera le code contenu
btnOrder.addEventListener('click', () => {
    //Incrémente la variable
    where++;
    //La condition vérifira si le reste de la division est paire ou impaire
    if (where % 2 == 0) {
        //On range dans l'ordre alphabétique
        series.sort((a, b) => (a.nom > b.nom ? 1 : -1));
        //On modifie le texte dans le bouton
        btnOrder.innerText = "Par date";
    } else {
        //On range dans l'ordre de sortie puis alphabétique si l'annee est la meme entre plusieurs séries
        series.sort((a, b) => (a.annee > b.annee || (a.annee == b.annee && a.nom > b.nom) ? 1 : -1));
        //On modifie le texte dans le bouton
        btnOrder.innerText = "Par ordre alphabétique";
    }
    console.log(`Où on est : ${where}`);
    //On appelle la fonction liste()
    liste();
})



//La fonction liste permet d'afficher la liste des séries dans le html
function liste() {
    //On vide la section
    section.innerHTML = "";
    //On fait une boucle for pour parcourir le tableau de series
    for (let serie of series) {
        //on fait une div pour contenir les futures images et text
        const newDiv = document.createElement("div");
        //On lui met un attribut class
        newDiv.setAttribute("class", `bidon m-5px my-10px ${serie.nom}`);
        //On intègre des images et texte dans la div
        newDiv.innerHTML = `
    <a href="description.html#${serie.nom}" class="hide" >
      <img src="${serie.image}" height="420" width="310">
          <h3>${serie.nom} (${serie.note})</h3>
      </a>`
        //On insert la div dans la section
        section.appendChild(newDiv)
    }

}