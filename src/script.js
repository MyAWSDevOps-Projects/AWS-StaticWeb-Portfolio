const playBtn = document.getElementById('playBtn');
const video = document.getElementById('cf-video');

playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playBtn.textContent = 'Pause Video';
    } else {
        video.pause();
        playBtn.textContent = 'Play Video';
    }
});

