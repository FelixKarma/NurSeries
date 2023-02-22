var valeur = document.getElementById('description').value;
let submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    if (valeur.length > 512) {
        valeur = valeur.substring(0, 512);
        alert('Votre texte ne doit pas dépasser ' + 512 + ' caractères!');
    } else {

        // 1) recuperer la value du textarea
        // 2) donner la valeur dans le set en dessous du commentaire*/

        localStorage.setItem('desc', valeur);
        document.getElementById('description').innerHTML = localStorage.getItem('desc') ;
        
    }
})

if(localStorage.getItem('desc')){
    document.getElementById('description').innerHTML = localStorage.getItem('desc')
}


