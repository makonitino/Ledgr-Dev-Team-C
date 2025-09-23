// script.js

// audi object
const sound = new Audio('assets/sound.wav');
const progressBar = document.getElementById('progress-bar')

function playWav() {
    // check if sound is playing
    if(!sound.paused){
        // stops the sound, if button clicked while song is playing. (refresh)
        sound.pause();
        // sets the sound at the beginning (if sound was already playing)
        sound.currentTime = 0;
    } else {
        // plays sound file
        sound.play();
    }   
} // end playWav

sound.addEventListener('timeupdate', () => {
    // uses properties of the Audio file, and progress bar, to animate sound duration
    const progress = (sound.currentTime/sound.duration) * 100;
    progressBar.style.width = progress + '%';
});

sound.addEventListener('ended', () => {
    progressBar.style.width = '0%';
});

// get elements from the html file
let play = document.getElementById('launch');
// event listener (triggers playWav function)
play.addEventListener('click', playWav);
