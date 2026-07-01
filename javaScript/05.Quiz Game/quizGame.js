const questions=[
  {
    category:"science",
    question:"Which among the following is known as White Vitriol?",
    choices: ["Zinc Sulphate","Zinc Chloride","Zinc oxide"],
    answer:"Zinc Sulphate"
  },

   {
    category:"Maths",
    question:"What is the sum of 130+125+191?",
    choices: ["335","456","446"],
    answer:"446"
  },

  {
    category:"GK",
    question:"Who sang the title song for the latest Bond film, No Time to Die?",
    choices: ["Adele","Sam Smith","Billie Eilish"],
    answer:"Billie Eilish"
  },

  {
    category:"science",
    question:"Leptospirosis is a disease caused by?",
    choices: ["Fungus","Protozoa","Bacteria"],
    answer:"Bacteria"
  },
{
    category:"Maths",
    question:"50 times of 8 is equal to: ?",
    choices: ["80","400","450"],
    answer:"400"
  },

{
    category:"Maths",
    question:"110 divided by 10 is: ?",
    choices: ["11","10","5"],
    answer:"11"
  },
];


function getRandomQuestion(questions){
const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices){
  const randomChoice=Math.floor(Math.random()*choices.length);
  return choices[randomChoice];
}

function getResults(questions,computerchoice){
  if (questions.answer==computerchoice){
    return "The computer's choice is correct!"
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${questions.answer}`
  }

}