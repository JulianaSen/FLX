let attempts = 3;
let prize = 0;
let maxLimit = 5;
let maxPrize = 10;
let currentPrize = 10;

let play = confirm('Do you want to play a game?');

if(play) { 
  while(attempts !== 0) {
    let randomNumber = Math.floor(Math.random() * (maxLimit + 1));
    console.log(randomNumber);
    
    let numberUser = parseInt(prompt(`Enter a number from 0 to ${maxLimit}
    Attempts left: ${attempts}
    Total prize: ${maxPrize}
    Possible prize on current attempt: ${currentPrize}`, ''));
   
    if(numberUser === null || numberUser === '') {
      break;
    }
    
    if(numberUser === randomNumber) {
      prize += currentPrize;
      play = confirm(`Congratulation! Your prize is: ${prize}. Do you want to continue?`);
      if(play) {  
        maxPrize *= 3;
        currentPrize = maxPrize;
        maxLimit *= 2;
        attempts = 3;
      } else{
          break;
      }
      continue;
    } 
      
    attempts--;
    currentPrize = Math.floor(currentPrize / 2);  
      
    if(attempts === 0) {
      alert(`Thank you for a game. Your prize is: ${prize}$`);
      play = confirm('Do you want to play again?');
      if(play) {
        prize = 0;
        maxPrize = 10;
        currentPrize = maxPrize;
        attempts = 3;
      } else {
          break;
      } 
    }
  }
} else {
    alert('You did not become a millionaire, but can.');
}

