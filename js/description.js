class Description {
    constructor(nom, note, annee, genre, duree, nbSaison,isFinish, createur, pays, acteurs, diffuseur, synopsis, image) {
        this.nom = nom;
        this.note = note;
        this.annee = annee;
        this.genre = genre;
        this.duree = duree;
        this.nbSaison = nbSaison;
        this.isFinish = isFinish;
        this.createur = createur;
        this.pays = pays;
        this.acteurs = acteurs;
        this.diffuseur = diffuseur;
        this.synopsis = synopsis;
        this.image = image;
        
    }
}

let descriptions = [
    new Description("Game of Thrones", 1.8, "2011-2019", "Fantasy, Drame, Aventure", 50, 8, true, "David Benioff et D.B. Weiss", "USA", "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington, Sophie Turner, Maisie Williams, Nikolaj Coster-Waldau, Iain Glen ...", "HBO", "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.","../image/gots1.jpg"),

    new Description("Stranger Things", 4.8, "2016-", "Drame, Fantastique, Thriller", 55, 5, false, "Matt Duffer et Ross Duffer", "USA", "Millie Bobby Brown, Winona Ryder, David Harbour ...", "Netflix", "A Hawkins, en 1983 dans l'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d'amitié avec la demoiselle tatouée du chiffre '11' sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille… ","https://fr.web.img2.acsta.net/c_310_420/pictures/22/05/18/14/31/5186184.jpg"),

    new Description("Lost", 2.0, "2004-2010", "Aventure, Drame, Action", 42, 6, true, "Damon Lindelof et J.J. Abrams", "USA", "Matthew Fox, Evangeline Lilly, Josh Holloway ...", "Disney+", "Après le crash de leur avion sur une île perdue, les survivants doivent apprendre à cohabiter et survivre dans cet environnement hostile. Bien vite, ils se rendent compte qu'une menace semble planer sur l'île... ", "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/41/16/19779367.jpg"),

    new Description("Buffy", 3.0, "1997-2003", "Comédie, Drame, Epouvante-horreur, Fantastique, Action", 42, 7, true, "Joss Whedon", "USA", "Sarah Michelle Gellar, Alyson Hannigan, Nicholas Brendon", "Disney+", "Buffy Summers aspire à une vie simple et épanouie auprès de sa famille et de ses amis. Mais les démons qui rôdent à Sunnydale lui rappellent sans cesse qu'elle doit faire face à ses responsabilités de Tueuse.", "https://fr.web.img4.acsta.net/c_310_420/pictures/19/08/21/09/12/5177711.jpg"),

    new Description("Alice in Borderland", 4.5, "2020-2022", "Fantastique, Science fiction, Thriller", 50, 2, true, "Tsuyoshi Imai", "Japon", "Kento Yamazaki, Tao Tsuchiya, Shô Aoyagi", "Netflix", "Un jeune homme passionné de jeux vidéo se retrouve piégé avec ses deux amis dans un Tokyo alternatif où ils doivent disputer de dangereuses parties pour survivre.", "https://fr.web.img5.acsta.net/c_310_420/pictures/20/11/06/12/24/4584296.jpg"),

    new Description("Doctor Who", 4.4, "2005-", "Aventure, Science fiction", 42, 14, false, "Russell T Davies, Steven Moffat et Chris Chibnall", "UK", "Ncuti Gatwa, Peter Capaldi, David Tennant", "Prime Video", "Extraterrestre de 900 ans, le Docteur est un aventurier qui voyage à travers le temps et l'espace à l'aide de son vaisseau, le TARDIS (Time And Relative Dimension In Space), qui, pour mieux s'adapter à l'environnement, a l'apparence d'une cabine téléphonique. Le Docteur voyage en compagnie d'une jeune fille. Ensemble, ils font de nombreuses rencontres sur les diverses planètes qu'ils explorent... ","https://fr.web.img2.acsta.net/c_310_420/pictures/18/11/12/15/37/1641315.jpg"),

    new Description("Stargate", 3.0, "1997-2007", "Drame, Science fiction, Action", 42, 10, true, "Brad Wright et Jonathan Glassner", "USA et Canada", "Richard Dean Anderson, Amanda Tapping, Ben Browder", "TV", "Suite à la découverte de la 'Porte des étoiles', le colonel Jack O'Neill et son équipe partent à la découverte de mondes et civilisations inconnus... ","https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/14/15/57/3353242.jpg"),

    new Description("The Expanse", 2.9, "2015-2022", "Drame, Science fiction, Thriller", 42, 6, true, "Mark Fergus et Hawk Ostby", "USA", "Steven Strait, Cas Anvar, Wes Chatham", "Prime Video", "Au 23ème siècle, les hommes ont colonisé le système solaire et les Nations-Unies contrôlent la Terre. Mars est devenue une puissance militaire indépendante et les autres planètes dépendent des ressources de la ceinture d'astéroïdes, où les conditions de vie sont pénibles et les habitants contraints de travailler durement. Au fil des ans, les tensions entre la Terre, Mars et la Ceinture ont pris une telle ampleur qu'une simple étincelle pourrait déclencher une guerre. Dans ce contexte tendu, la disparition d 'une jeune femme va entraîner le détective chargé de l'affaire et le capitaine d 'un vaisseau dans une course à travers le système solaire pour découvrir le plus grand complot de l'histoire de l 'humanité. ", "https://fr.web.img5.acsta.net/c_310_420/pictures/19/11/19/12/49/5247478.jpg"),

    new Description("Dark", 1.8, "2017-2020", "Drame, Science fiction, Thriller", 60, 3, true, "Baran bo Odar et Jantje Friese", "Allemagne", "Louis Hofmann, Lisa Vicari, Andreas Pietschmann", "Netflix", "Un enfant disparu lance quatre familles dans une quête éperdue pour trouver des réponses. La chasse au coupable fait émerger les péchés et les secrets d'une petite ville. ", "https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg"),

    new Description("Vikings", 2.2, "2013-2020", "Aventure, Drame, Historique", 52, 6, true, "Michael Hirst", "Canada et Irlande", "Alex Høgh Andersen, Marco Ilsø, Gustaf Skarsgård", "En Streaming", "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer. Malgré la réprobation de son chef, Haraldson, il se fie aux signes et à la volonté des dieux, en construisant une nouvelle génération de vaisseaux, plus légers et plus rapides...","https://fr.web.img6.acsta.net/c_310_420/pictures/20/12/04/10/04/4859166.jpg"),

    new Description("Sons of Anarchy", 1.7, "2008-2014", "Drame, Policier, Thriller", 42, 7, true, "Kurt Sutter", "USA", "Charlie Hunnam, Katey Sagal, Kim Coates", "Disney+", "Afin de protéger leur ville des dealers et des entrepreneurs locaux, les membres d'un club de motos sont prêts à tout. Jax Teller est partagé entre l'amour qu'il porte à sa confrérie et l'appréhension grandissante qu'il nourrit en voyant l'anarchie et le banditisme qui règne dans son club... ","https://fr.web.img6.acsta.net/c_310_420/pictures/21/01/29/17/41/0758046.jpg"),

    new Description("La Casa de Papel", 4.7, "2017-2021", "Drame, Action", 45, 5, true, "Álex Pina", "Espagne", "Álvaro Morte, Úrsula Corberó, Pedro Alonso", "Netflix", "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.","https://fr.web.img4.acsta.net/c_310_420/pictures/21/08/02/16/08/1706767.jpg"),

    new Description("The Last of Us", 3.5, "2023-", "Aventure, Drame, Epouvante-horreur, Action", 60, 2, false, "Neil Druckmann, Craig Mazin", "USA", "Pedro Pascal, Bella Ramsey, Gabriel Luna", "Prime Video", "Quand le monde tel que vous le connaissiez n'existe plus, quand la ligne entre le bien et le mal devient floue, quand la mort se manifeste au quotidien, jusqu'où iriez-vous pour survivre ? Pour Joel, la survie est une préoccupation quotidienne qu'il gère à sa manière. Mais quand son chemin croise celui d'Ellie, leur voyage à travers ce qui reste des États-Unis va mettre à rude épreuve leur humanité et leur volonté de survivre.", "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/12/12/36/0727474.jpg"),

    new Description("The Walking Dead", 2.6, "2010-2022", "Drame, Epouvante-horreur", 44, 11, true, "Glen Mazzara, Frank Darabont, Scott M. Gimple", "USA", "Norman Reedus, Andrew Lincoln, Melissa McBride", "En Streaming", "Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes mené par l'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.","https://fr.web.img5.acsta.net/c_310_420/pictures/22/08/29/18/20/3648785.jpg"),

    new Description("The Haunting of Hill House", 1.7, "2018-", "Drame, Epouvante-horreur", 60, 1, false, "Mike Flanagan", "USA", "Michiel Huisman, Carla Gugino, Elizabeth Reaser", "Netflix", "Plusieurs frères et sœurs qui, enfants, ont grandi dans la demeure qui allait devenir la maison hantée la plus célèbre des États-Unis sont contraints de se retrouver pour faire face à cette tragédie ensemble. La famille doit enfin affronter les fantômes de son passé, dont certains sont encore bien présents dans leurs esprits alors que d’autres continuent de traquer Hill House.", "https://fr.web.img6.acsta.net/c_310_420/pictures/18/09/19/18/46/2766026.jpg"),

    new Description("American Horror Story", 2.1, "2011-", "Drame, Epouvante-horreur, Fantastique", 42, 11, false, "Ryan Murphy et Brad Falchuk", "USA", "Lily Rabe, Emma Roberts, Billie Lourd", "En Streaming", "Saison 11 - New York City : Les disparitions mystérieuses se multiplient dans les rues New York et la liste des morts s’ allonge.Pendant ce temps, un médecin fait une découverte effrayante, et une nouvelle menace plane sur la ville.", "https://fr.web.img6.acsta.net/c_310_420/pictures/22/10/03/14/11/0328175.jpg"),

    new Description("Sherlock", 4.2, "2010-2017", "Aventure, Drame, Policier", 90, 4, true, "Steven Moffat et Mark Gatiss", "UK", "Benedict Cumberbatch, Martin Freeman, Amanda Abbington", "En Streaming", "Les aventures de Sherlock Holmes et de son acolyte de toujours, le docteur Watson, sont transposées au XXIème siècle... ", "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/67/70/22/19227477.jpg"),

    new Description("The Wire", 2.9, "2002-2008", "Drame, Policier, Thriller, Judiciaire", 58, 5, true, "David Simon et Ed Burns", "USA", "Dominic West, John Doman, Reg E. Cathey", "DVD", "Quand la police s'efforce de démanteler un réseau tentaculaire de trafic de drogue et du crime à Baltimore. ","https://fr.web.img2.acsta.net/c_310_420/pictures/21/08/26/17/04/4531787.jpg"),

    new Description("The Sinner", 1.6, "2017-2021", "Drame, Policier, Thriller", 42, 4, true, "Derek Simonds", "USA", "Bill Pullman, Frances Fisher, Jessica Hecht", "Netflix", " Le brillant enquêteur Harry Ambrose est confronté chaque saison à une affaire criminelle complexe et dérangeante, qui l'amène à sonder les sombres recoins de l'âme humaine.","https://fr.web.img5.acsta.net/c_310_420/pictures/21/01/29/17/27/2896783.jpg"),

    new Description("Big Bang Theory", 0.4, "2007-2019", "Comédie", 22, 12, true, " Bill Prady et Chuck Lorre", "USA", "Johnny Galecki, Jim Parsons, Kaley Cuoco", "En Streaming", " Leonard et Sheldon pourraient vous dire tout ce que vous voudriez savoir à propos de la physique quantique. Mais ils seraient bien incapables de vous expliquer quoi que ce soit sur la vie 'réelle', le quotidien ou les relations humaines... Mais tout va changer avec l'arrivée de la superbe Penny, leur voisine. Ce petit bout de femme, actrice à ses heures et serveuse pour le beurre, va devenir leur professeur de vie ! ","https://fr.web.img3.acsta.net/c_310_420/pictures/18/11/06/15/36/0408812.jpg"),

    new Description("Les Simpson", 4.5, "1989-", "Comédie, Animation", 22, 36, false, "Matt Groening", "USA", "Harry Shearer, Dan Castellaneta, Hank Azaria", "Disney+", "Les Simpson, famille américaine moyenne, vivent à Springfield.Homer, le père, a deux passions: regarder la télé et boire des bières.Mais son quotidien est rarement reposant, entre son fils Bart qui fait toutes les bêtises possibles, sa fille Lisa qui est une surdouée, ou encore sa femme Marge qui ne supporte pas de le voir se soûler à longueur de journée.","https://fr.web.img3.acsta.net/c_310_420/pictures/20/10/01/11/26/1905965.jpg"),

    new Description("The Office", 3.2, "2005-2013", "Comédie", 22, 9, true, " Greg Daniels, Ricky Gervais, Paul Lieberstein", " USA", "Steve Carell, Rainn Wilson, John Krasinski", " En Streaming", "Le quotidien d'un groupe d'employés de bureau dans une fabrique de papier en Pennsylvanie, lieu propice au mauvais esprit, à la drague et à l'échec personnel. Michael, le responsable régional, pense être le mec le plus drôle du bureau. Il ne se doute pas que ses employés le tolèrent uniquement parce que c'est lui qui signe les chèques. S'efforçant de paraître cool et apprécié de tous, Michael est en fait perçu comme étant pathétique... ", "https://fr.web.img5.acsta.net/r_1280_720/pictures/14/02/04/13/20/128334.jpg"),

    new Description("Malcolm", 0.6, "2000-2006", "Comédie", 22, 7, true, "Linwood Boomer", "USA", "Frankie Muniz, Jane Kaczmarek, Bryan Cranston", "Disney+", "Petit génie malgré lui, Malcolm vit dans une famille hors du commun. Le jeune surdoué n'hésite pas à se servir de son intelligence pour faire les 400 coups avec ses frères. Et les parents tentent tant bien que mal de canaliser l'énergie de ces petits démons.", "https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/04/09/54/2363561.jpg"),

    new Description("Peaky Blinders", 4.1, "2013-2022", "Drame, Historique, Policier", 52, 6, true, "Steven Knight", "UK", "Cillian Murphy, Helen McCrory, Natasha O'Keeffe", "En Streaming", " En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l'après-Guerre. Le Parlement s'attend à une violente révolte, et Winston Churchill mobilise des forces spéciales pour contenir les menaces. La famille Shelby compte parmi les membres les plus redoutables. Surnommés les'Peaky Blinders' par rapport à leur utilisation de lames de rasoir cachées dans leurs casquettes, ils tirent principalement leur argent de paris et de vol. Tommy Shelby, le plus dangereux de tous, va devoir faire face à l'arrivée de Campbell, un impitoyable chef de la police qui a pour mission de nettoyer la ville. Ne doit-il pas se méfier tout autant de la ravissante Grace Burgess ? Fraîchement installée dans le voisinage, celle-ci semble cacher un mystérieux passé et un dangereux secret. ","https://fr.web.img6.acsta.net/c_310_420/pictures/22/06/07/11/57/5231272.jpg"),
    
    new Description("Chernobyl", 2.0, "2019", "Drame", 58, 1, true, "Craig Mazin", "USA, Allemagne, Grande-Bretagne", "Jared Harris, Stellan Skarsgård, Paul Ritter", "En Streaming", " 26 avril 1986, l'histoire vraie de la pire catastrophe causée par l'homme et de ceux qui ont sacrifié leur vie pour sauver l'Europe du drame. L'explosion d'un réacteur à la centrale nucléaire de Chernobyl, en Ukraine, a de terribles conséquences aussi bien sur le personnel de l'usine, que sur les équipes de secours, la population et l'environnement.", "https://fr.web.img2.acsta.net/c_310_420/pictures/23/01/03/14/05/3165194.jpg"),
];
const title = document.getElementById('nom');
const note = document.getElementById('note');
const annee = document.getElementById('annee');
const genre = document.getElementById('genre');
const duree = document.getElementById('duree');
const nbSaison = document.getElementById('nbSaison');
const isFinish = document.getElementById('isFinish');
const createur = document.getElementById('createur');
const pays = document.getElementById('pays');
const acteurs = document.getElementById('acteurs');
const diffuseur = document.getElementById('diffuseur');
const synopsis = document.getElementById('synopsis');
const image = document.getElementById('image');

let reponse;

if (document.location.href.includes('description.html#')) {
    for (const description of descriptions) {
        let url = description.nom.replace(/ /g, "%20");
        if (document.location.href.includes(url)) {
            title.innerText = `${description.nom}`;
            note.innerText = `${description.note}`;
            annee.innerText = `${description.annee}`;
            genre.innerText = `${description.genre}`;
            duree.innerText = `${description.duree}`;
            nbSaison.innerText = `${description.nbSaison}`;
            isFinish.innerText = description.isFinish ? " (Terminée)" : " (En Cours)";
            createur.innerText = `${description.createur}`;
            pays.innerText = `${description.pays}`;
            acteurs.innerText = `${description.acteurs}`;
            diffuseur.innerText = `${description.diffuseur}`;
            synopsis.innerText = `${description.synopsis}`;
            image.src = `${description.image}`;
            reponse = true;
            break;
        }
    }
    if (!reponse) {
        document.location.href = "Page 404.html";
    }
} else {
    document.location.href = "Page 404.html";
}