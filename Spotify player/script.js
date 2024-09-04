// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleBubble = document.getElementById('toggle-bubble');
    const spotifyPlayer = document.getElementById('spotify-player');
    const closePlayer = document.getElementById('close-player');

    toggleBubble.addEventListener('click', function() {
        if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
            spotifyPlayer.style.display = 'block';
            toggleBubble.style.display = 'none'; // Oculta el botón cuando se muestra el reproductor
        }
    });

    closePlayer.addEventListener('click', function() {
        spotifyPlayer.style.display = 'none';
        toggleBubble.style.display = 'block'; // Muestra el botón cuando se oculta el reproductor
    });
});



