
// On déclare la variable pour l'input search
$inputSearch = $('#input-search');

let templateProductRows;

// Ecouteurs sur la barre de recherche (bouton + champ)
$(document).on('click', '#button-search', () => {
    searchData();
});

$(document).on('keyup', '#input-search', (key) => {
    searchData();
});


// Fonction qui va récupérer la valeur de search et envoyer vers le template
function searchData() {
    const search = $inputSearch.val();

    if(search) {
        $.get('/search?search=' + search, (products) => {
            $('#table-body').html(templateProductRows({products}));
        });
    } else {
        document.location = '';
    }
}




function loadProductTemplate() {
    $.get('./templates/table-products.html', (html) => {
        templateProductRows = Handlebars.compile(html);
    });
}

loadProductTemplate();