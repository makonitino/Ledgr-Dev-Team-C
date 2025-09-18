// script.js

// new Audio object
const sound = new Audio('assets/sound.wav');

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

// get elements from the html file
let play = document.getElementById('launch');
// event listener (triggers playWav function)
play.addEventListener('click', playWav);
