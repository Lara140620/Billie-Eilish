// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('LContenedorBillie').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('Where').addEventListener('click', function() {
    loadPage('./Pag/Where.html');
});

document.getElementById('Hit').addEventListener('click', function() {
    loadPage('./Pag/Hit.html');
});

document.getElementById('Happier').addEventListener('click', function() {
    loadPage('./Pag/Happier.html');
});
