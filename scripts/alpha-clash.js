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

function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);
  if(playerPressed === 'Escape'){
    gameOver();
  }
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if(playerPressed === expectedAlphabet){
    console.log('you get a point.');
    const currentScore = getTextElementById('current-score');
    const updateScore = currentScore + 1;
    setTextElementById('current-score', updateScore);




    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you missed. you lost a life.');
    const currentLife = getTextElementById('current-life');
    const updateLife = currentLife - 1;
    setTextElementById('current-life', updateLife);
    if(updateLife === 0){
      gameOver();
    }


    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
  const alphabet = getARandomAlphabet();
  // console.log('alphabet', alphabet);
  const getAlphabet = document.getElementById('current-alphabet');
  getAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

// function play(){
//   hideElementById('home-screen');
//   showElementById('play-ground');
//   continueGame();
// }

function play(){
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');
  setTextElementById('current-life', 5);
  setTextElementById('current-score', 0);
  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  const lastScore = getTextElementById('current-score');
  setTextElementById('last-score', lastScore);
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}