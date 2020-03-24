//keycode.info sirve para ver que numero tiene asignado las teclas de tu teclado

function playSound() {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transition') return; // skip it if it's not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionedend', removeTransition));
window.addEventListener('keydown', playSound);
