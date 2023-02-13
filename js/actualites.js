class Articles {
    constructor(title,img,text) {
        this.title = title;
        this.img = img; 
        this.text = text;

    }
}

for (let article of Articles) {
    

let firstArticle = new Articles ("Alice in Borderlands saison 3: La production a débuté et la date de sortie est planifiée?!","https://img.nrj.fr/XiSkSygUnXyVj8hByWfxp-OAfDQ=/0x415/smart/medias%2F2022%2F12%2Fjstzj3xdwbgav-oysxabbi-h-k4th-fbemd4dbfepl4_6399d86165ad1.jpg", "Après une partie de croquet sous haute tension, le jeu est finalement terminé! Est-ce pour autant la fin de cette création originale exceptionnelle? Il reste encore des tonnes de questions sans réponses..")

}


document.querySelector('#first-article').innerText = `: ${firstArticle.title}`

