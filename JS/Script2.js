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



// Play 
document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('song.mp3'); // Reemplaza 'song.mp3' con la ruta de tu archivo de audio
    const playPauseButton = document.getElementById('playPauseButton');
    const progress = document.getElementById('progress');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationTimeDisplay = document.getElementById('durationTime');
    
    let isPlaying = false;

    // Play/Pause Functionality
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            playPauseButton.innerHTML = '&#9654;'; // Cambiar a botón de play
        } else {
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Cambiar a botón de pausa
        }
        isPlaying = !isPlaying;
    });

    // Actualizar progreso del audio
    audio.addEventListener('timeupdate', function () {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;

        // Actualizar el tiempo actual
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Controlar el progreso manualmente
    progress.addEventListener('input', function () {
        const time = (progress.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    // Mostrar duración total del audio cuando esté cargado
    audio.addEventListener('loadedmetadata', function () {
        durationTimeDisplay.textContent = formatTime(audio.duration);
    });

    // Formato de tiempo
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    }
});
