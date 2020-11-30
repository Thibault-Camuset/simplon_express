
// On déclare la variable pour l'input search
 $inputSearch = $('#input-search');

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

            const html = $('#template-products').html();

            const template = Handlebars.compile(html);

            // On éxécute le template compilé et on écrit le résultat sur la page
            const renderHtml = template({products:products});

            $('#table-body').html(renderHtml);

            //$tableBody.html(template({products}));
        })
    }
}