var readlineSync = require("readline-sync");//we are importing readlinesync
var score = 0; //we r initialising value score to 0
var userName = readlineSync.question("What's your name?");//this will  question 
console.log("Welcome " + userName + " to DO YOU KNOW ANUKRITI?")

var highScores = [{
  Name: "Akriti",
  Score: 3,
},
{
  Name: "Joita",
  Score: 2,
},
{
  Name: "Jolly",
  Score: 1,
}
]
//play fucntion
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;

  }else{
    console.log("You are wrong!");
  }

  console.log("current score:",score);
  console.log("-------------");


}

// play("where do i live? ","bangalore");
// play("my favourite superhero would be? ","batman");
//try this with a for loop ,object and array.
// ---------------------------------OR-----------------------------

// var questionOne = {                   //object
//   questionOne: "where do i live? ",
//   answerOne: "bangalore"
// }

// var questionTwo = {                   //object
//   questionTwo: "my favourite superhero would be? ",
//   answerTwo: "batman"
// }
//instead of defining the different variables as we did above we can put them directly in the array -

var questions = [{
  question: "where do i live? ",
  answer: "bangalore" 
  }, {question: "my favourite superhero would be? ", 
  answer: "batman"
  }, {question: "where do i work? ", 
  answer: "infosys"
}];//array of objects

// //loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You scored: ",score)

// console.log(highScores[0].Name,highScores[0].Score)
// console.log(highScores[1].Name,highScores[1].Score)
// console.log(highScores[2].Name,highScores[2].Score)

for (let i = 0; i < highScores.length; i++){
  console.log(highScores[i].Name,highScores[i].Score)
}
