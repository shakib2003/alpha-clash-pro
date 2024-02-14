// function play(){
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

// function continueGame(){
//   const alphabet = getARandomAlphabet();
//   console.log('alphabet', alphabet);
// }

function continueGame(){
  const alphabet = getARandomAlphabet();
  console.log('alphabet', alphabet);
  const getAlphabet = document.getElementById('current-alphabet');
  getAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}