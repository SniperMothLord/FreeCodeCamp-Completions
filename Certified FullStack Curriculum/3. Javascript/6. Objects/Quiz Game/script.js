let questions = [
  {
    category: "games",
    question: "Are you a gamer?",
    choices: [
      "Yes",
      "No",
      "Your mother"
    ],
    answer: "Yes"
  },
  {
    category: "games",
    question: "Is your brother a gamer?",
    choices: [
      "Yes",
      "No",
      "Your mother"
    ],
    answer: "Yes"
  },
  {
    category: "games",
    question: "Is your sister a gamer?",
    choices: [
      "Yes",
      "No",
      "Your mother"
    ],
    answer: "Yes"
  },
  {
    category: "games",
    question: "Is your father a gamer?",
    choices: [
      "Yes",
      "No",
      "Your mother"
    ],
    answer: "Yes"
  },
  {
    category: "games",
    question: "Is your doggo a gamer?",
    choices: [
      "Yes",
      "No",
      "Your mother"
    ],
    answer: "Your mother"
  }
]

function getRandomQuestion(questions){
  let random_index = Math.round(Math.random()*(questions.length-1));
  let question = questions[random_index];
  return question;
}
function getRandomComputerChoice(choices){
  let random_index = Math.round(Math.random()*(choices.length-1));
  let computer_choice = choices[random_index];
  return computer_choice;
}
function getResults(question, computer_choice){
  if(question.answer == computer_choice) {
    return "The computer's choice is correct!";
  }else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}