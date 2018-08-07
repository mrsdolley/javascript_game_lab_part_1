let playGame = prompt("Do you want to play?");

let userScore = 40;
let grantScore = 10;

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max+1 - min))
}

let wins = 0;

if (playGame === 'yes' ){
  const enterName = prompt("Please enter your name.");
 
while (userScore > 0 && wins < 3){
  
    console.log(enterName + ` has ${userScore} health left. `);
    console.log(`Almighty Grant has ${grantScore} health left. `);

  grantScore-=generateRandomInteger(1, 2);
  userScore-=generateRandomInteger(1, 2);


  if (grantScore <= 0){
      grantScore = 10;
      console.log (enterName + " Wins");

wins++;

   if (grantScore > 0 && userScore<=0 && wins<3) {console.log ("Grant Wins");}
     }
    
}
}