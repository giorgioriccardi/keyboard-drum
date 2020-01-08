function playSound(e) {
  console.log(e.keyCode);

  // define constants
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  // stop the function if there is no data-key value associated with the key
  if (!audio) return;
  console.log(audio);

  // reset sound effect on keyup
  audio.currentTime = 0; // rewind to the start
  audio.play();
  console.log(key);

  // add the .playing class to the key element
  key.classList.add('playing');
}

function removeTransition(e) {
  console.log('removeTransition: ' + e);

  // skip if it's not a transform transition
  if (e.propertyName !== 'transform') return;
  console.log('removeTransition after: ' + e.propertyName);

  // remove the class .playing when transform is done
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

// end the css animation transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
