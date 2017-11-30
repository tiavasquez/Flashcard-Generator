var ClozeCard = require("./ClozeCard.js");

var BasicCard = require("./BasicCard.js");

//code to test basic card constructor:
var firstPresident = new BasicCard(
  "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 
console.log(firstPresident.back);

//code to test cloze card constructor:
var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze); 
console.log(firstPresidentCloze.partial); 
console.log(firstPresidentCloze.fullText);

//code to test logic for identifying when cloze deletion doesn't appear in text
var testFirstPresidentCloze = new ClozeCard(
"George Washington was the first president of the United States.", "Tia Vasquez");
if (testFirstPresidentCloze.fullText === testFirstPresidentCloze.partial) {
  console.log("cloze: " + testFirstPresidentCloze.cloze + " NOT FOUND IN " + testFirstPresidentCloze.fullText);
}



