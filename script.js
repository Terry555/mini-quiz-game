var Question = function(question, answers, correctAnswer){
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var question1 = new Question('What is Jeopardy?', ['0. Train', '1. Plane', '2. Game'], 2)
var question2 = new Question('What is love?', ['0. Baby don\'t hurt me', '1. I ran so far away', '2. Like a record baby round round'], 0)
var question3 = new Question('What is time?', ['0. A square octagon', '1. A round triangle', '2. A flat circle'], 2)

questionArray = [question1, question2, question3]

function askQuestion(arr){
  random = Math.floor(Math.random() * 3);
  arr[random].answers.map(answer => console.log(answer))
  var ans = prompt(arr[random].question)
  isItCorrect(random, ans);
}

function isItCorrect(question, answer){
  if (questionArray[question].correctAnswer == answer) {
    console.log("Yes it is correct! You're a genius!")
  } else {
    console.log("No that's not correct, you really botched it!")
  }
}

askQuestion(questionArray);
