let userName = '';
let userQuestion = '';
let eightBall = '';
const randomNumber = Math.floor(Math.random() * 8);

function getUserName() {
  userName = window.prompt(`Please enter your name:`);
  if (userName) {
    console.log(`Hello ${userName}!`);
  } else {
    console.log(`Hello!`);
  };
}

function getQuestion() {
  userQuestion = window.prompt(`What is your question?`);
  if (userQuestion) {
    if (userName) {
      console.log(`${userName} asked "${userQuestion}"`);
    } else {
      console.log(`You asked, "${userQuestion}"`);
    };
  } else {
      console.log(`You need to ask a question!`);
      getQuestion();
    }
  return userQuestion;
}

function showAnswer() {
  getUserName();
  getQuestion();
  switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  };
  return console.log(eightBall);
}

showAnswer();
