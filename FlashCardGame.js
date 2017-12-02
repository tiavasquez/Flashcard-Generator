var ClozeCard = require("./ClozeCard.js");

var BasicCard = require("./BasicCard.js");

var inquirer = require("inquirer");

var doneWithBasicCards = false;

//basicCardsQuiz();

clozeCardsQuiz();

//----------------- LOGIC FOR BASIC CARDS STARTS HERE --------------------------------
function basicCardsQuiz() {

//these are the given basic cards
var bQuestions = [
  {
      "front": "Who was the first president of the United States?",
      "back": "George Washington"
  },
  {
      "front": "Who was an American patriot, writer, printer, and inventor; and during the Revolutionary War he persuaded the French to help the colonists?",
      "back": "Benjamin Franklin"
  }
];

//loop through basic card input and create array of questions called basicCards
var basicCards = [];
for (var i = 0; i < bQuestions.length; i++) {
	var q = new BasicCard(bQuestions[i].front, bQuestions[i].back);
  basicCards.push(q);
  //console.log("creating basic card array "+ basicCards[i].front);
}

//basicCardCount holds how many basic cards we've gone through with the user
var basicCardCount = 0; 
//call our function to loop through basicCards array, displaying question (front) and prompting for answer (back)
goThruBasicCards();

function goThruBasicCards() {
    //recursion loop to go through basic cards and quiz the user
    if(basicCardCount < basicCards.length) {
  
          inquirer.prompt([
            {
              type: "input",
              name: "userAnswer",
              message: basicCards[basicCardCount].front
            }
          ]).then(function(answer) {
            //console.log("userAnswer: " + answer.userAnswer);
            if((answer.userAnswer).toLowerCase() === basicCards[basicCardCount].back.toLowerCase()) {
              console.log("Correct!");
              //increase card count
              basicCardCount++;
              //continue recursion 
              goThruBasicCards();
            } 
            else {
              //state back of card
              console.log("Good try, but incorrect.");
              console.log("The answer is:  " + basicCards[basicCardCount].back);
              //increase card count
              basicCardCount++;
              //continue recursion
              goThruBasicCards();
            }
  
          });
  
    }//end if(basicCardCount < basicCards.length)
    
  
}//end of goThruBasicCards function

}//end of basicCardsQuiz function

//----------------- LOGIC FOR CLOZE CARDS STARTS HERE --------------------------------
function clozeCardsQuiz() {
//these are the given basic cards
var cQuestions = [
  {  
      "fullText": "George Washington was the first president of the United States.",
      "cloze": "George Washington"
  },
  {  
      "fullText": "Benjamin Franklin was an American patriot, writer, printer, and inventor. During the Revolutionary War he persuaded the French to help the colonists.",
      "cloze": "Benjamin Franklin"
  }   
];

//loop through cloze card input and create array of questions called clozeCards
var clozeCards = [];
for (var i = 0; i < cQuestions.length; i++) {
	var q = new ClozeCard(cQuestions[i].fullText, cQuestions[i].cloze);
  clozeCards.push(q);
  //console.log("creating cloze card array "+ clozeCards[i].partial);
}

//basicCardCount holds how many basic cards we've gone through with the user
var clozeCardCount = 0; 
//call our function to loop through clozeCards array, displaying question (front) and prompting for answer (back)
goThruClozeCards();

function goThruClozeCards() {
    //recursion loop to go through basic cards and quiz the user
    if(clozeCardCount < clozeCards.length) {
          console.log("Fill in the blank:");  
          inquirer.prompt([
            {
              type: "input",
              name: "userAnswer",
              message: clozeCards[clozeCardCount].partial
            }
          ]).then(function(answer) {
            //console.log("userAnswer: " + answer.userAnswer);
            if((answer.userAnswer).toLowerCase() === clozeCards[clozeCardCount].cloze.toLowerCase()) {
              console.log("Correct!");
              //increase card count
              clozeCardCount++;
              //continue recursion 
              goThruClozeCards();
            } 
            else {
              //state back of card
              console.log("Good try, but incorrect.");
              console.log("The answer is:  " + clozeCards[clozeCardCount].cloze);
              //increase card count
              clozeCardCount++;
              //continue recursion
              goThruClozeCards();
            }
  
          });
  
    }
  
}//end of goThruClozeCards function

}//end of clozeCardsQuiz function







