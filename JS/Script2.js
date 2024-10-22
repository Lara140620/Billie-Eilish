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


//Spotify
document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('song.mp3'); // Asegúrate de que el archivo esté en la carpeta correcta o modifica la ruta
    const playPauseButton = document.querySelector('.controls svg:nth-child(3)'); // Elige el tercer SVG, que es el botón de play/pause
    const elapsedTime = document.querySelector('.elapsed');
    const currentTimeDisplay = document.querySelector('.time_now');
    const fullTimeDisplay = document.querySelector('.time_full');
    const volumeSlider = document.querySelector('.volume .slider');
    const volumeGreen = document.querySelector('.volume .green');
    const volumeCircle = document.querySelector('.volume .circle');

    let isPlaying = false;

    // Reproducción y pausa
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            playPauseButton.style.color = '#d9d9d9'; // Cambia el color del botón al pausar
        } else {
            audio.play();
            playPauseButton.style.color = '#1ed760'; // Cambia el color al reproducir
        }
        isPlaying = !isPlaying;
    });

    // Actualización de la barra de progreso
    audio.addEventListener('timeupdate', function () {
        const percentage = (audio.currentTime / audio.duration) * 100;
        elapsedTime.style.width = `${percentage}%`;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Cargar la duración total de la canción
    audio.addEventListener('loadedmetadata', function () {
        fullTimeDisplay.textContent = formatTime(audio.duration);
    });

    // Formatear el tiempo en minutos y segundos
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }

    // Control de volumen
    volumeSlider.addEventListener('click', function (event) {
        const rect = volumeSlider.getBoundingClientRect();
        const percentage = (event.clientX - rect.left) / rect.width;
        audio.volume = percentage;
        volumeGreen.style.width = `${percentage * 100}%`;
        volumeCircle.style.left = `${percentage * 100}%`;
    });

    // Cargar la canción para obtener metadatos (evita que la canción empiece automáticamente)
    audio.load();
});
