var readlineSync = require("readline-sync");
var player = readlineSync.question('Hello!😃 What is your name? ');
console.log(player + ', were you born on a leap year?🤔');
console.log("Let's Check...🤩");

function leapOrNot() {
    var input = readlineSync.questionInt('In which year were you born? ');
      
    if(input >= 1923 && input <= 2010 && input % 4 === 0)     {
      console.log(input, "is a leap year!");
      console.log(player + '😍 was born on a leap year!!');
      console.log("share this on social media...👍")
    }
    else if (input < 1923 || input > 2010 && input % 4 === 0)
    {
      console.log(player, "You are lying!!🙄");
      console.log(input, "is a leap year!");
    }
    else if (input < 1923 || input > 2010 && input % 4 !== 0)
    {
      console.log(player, "You are lying!!🙄");
      console.log(input, "is not a leap year!")
    }
    else {
      console.log(input, "is not a leap year!");
      console.log(player + '😅 was not born on a leap year!!');
    }
  }

leapOrNot();