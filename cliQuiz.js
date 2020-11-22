var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userScore = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ chalk.blueBright(userName));

var highScores = [
  {
    name: "xyz",
    score: 7,
  }
]


function game(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer!"));
    userScore = userScore + 1;
    
  } else {
    console.log(chalk.red("Wrong Answer!"));
  }
  console.log(chalk.yellowBright("------------------"));
  console.log(chalk.magentaBright("current score is: ", userScore));

}
var questions = [{
  question: chalk.cyan("Where does he live : "),
  answer: "coimbatore"
}, {
  question: chalk.cyan("Favourite Colour : "),
  answer: "Blue"
},
{
  question: chalk.cyan("favourite hobby : "),
  answer: "painting"
},
{
  question: chalk.cyan("never gets bored hearing about : "),
  answer: "foods"
},
{
  question: chalk.cyan("favourite sport : "),
  answer: "swimming"
},
{
  question: chalk.cyan("favourite bike : "),
  answer: "royalenfield"
},
{
  question: chalk.cyan("favourite mode of transport : "),
  answer: "train"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
}

console.log("hey "+userName+" You Scored: ", userScore);
console.log("Current Leaderboard",highScores);
if (userScore >= highScores[0].score){
    console.log("congratulation You have scored high score ");
    console.log(chalk.red.bold("Please send me the screen shots of your score so that i Can update that here \n"));
    console.log(chalk.cyan.bold(" Thanks for taking the quiz "));
}






