let nomSeries = ["Game of Thrones", "Stranger Things", "Lost", "Buffy", "Alice in Borderland", "Doctor Who", "Stargate", "The Expanse", "Dark", "Vikings", "Sons of Anarchy", "La Casa de Papel", "The Last of Us", "The Walking Dead", "The Haunting of Hill House", "American Horror Story", "Sherlock", "The Wire", "The Sinner", "Big Bang Theory", "Les Simpson", "The Office", "Malcolm", "Peaky Blinders", "Chernobyl"];

// Récupération du mot recherché

let search = document.getElementById("searchbar");

search.addEventListener("keydown", function (event) {

    // Recherche = mot entré (id "search" de la barre de recherche), reponse = resultat
    let recherche = document.getElementById("searchbar").value.toLowerCase();
    let reponse;

    //Detection de la touche entrée
    if (event.key === "Enter") {
        //Parcours le tableau nomSeries grace à for of
        for (let nomSerie of nomSeries) {

            // comparaison si la recherche egale a la liste tableau 
            if (nomSerie.toLowerCase() == recherche.toLowerCase()) { //On compare la recherche avec les différents éléments du tableau


                //On redirige vers la page recherchée si trouvée
                // document.location.assign(`${nomSerie}.html`);  // exco precedent 
                let url = nomSerie.replace(/ /g, "%20");
                document.location.href = `description.html#${url}`;
                if (document.location.href.includes('description.html#')) {
                    location.reload()
                }
                //On passe reponse à true pour dire que c'est bon
                reponse = true;
                //On break pour casser la boucle for, au cas où on a plusieurs éléments dans le tableau après le resultat trouvé
                break
            }
        }
        //On check enfin si la reponse est false pour renvoyer vers 404
        if (!reponse) {
            document.location.href = "Page 404.html";
        }
    }

})