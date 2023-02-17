let series = ["game of thrones", "doctor who", "alice",
    "stargate", "the expanse", "dark", "vikings", "sons of anarch", "la casa de papel", "the last of Us", "the walking dead", "the haunting of hill house", "american horror story", "sherlock", "the wire", "the sinner", "big bang theory", "les simpsons", "the office", "malcolm", "peaky blinders", "chernobyl"];

// Récupération du mot recherché

let search = document.getElementById("searchbar");

search.addEventListener("keydown", function (event) {

    // Recherche = mot entré (id "search" de la barre de recherche), reponse = resultat
    let recherche = document.getElementById("searchbar").value.toLowerCase();
    let reponse;

    //Detection de la touche entrée
    if (event.key === "Enter") {
        //Parcours le tableau series grace à for of
        for (let serie of series) {

            // comparaison si la recherche egale a la liste tableau 

            if (serie == recherche) { //On compare la recherche avec les différents éléments du tableau


                //On redirige vers la page recherchée si trouvée
                // document.location.assign(`${serie}.html`);  // exco precedent 

                document.location.assign(`description.html#${serie}`);

                //On passe reponse à true pour dire que c'est bon
                reponse = true;
                //On break pour casser la boucle for, au cas où on a plusieurs éléments dans le tableau après le resultat trouvé
                break
            }
        }
        //On check enfin si la reponse est false pour renvoyer vers 404
        if (!reponse) {
            document.location.href = "404.html";
        }
    }

})