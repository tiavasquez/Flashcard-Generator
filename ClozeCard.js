var ClozeCard = function(text, cloze) {
  
  this.fullText = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...');
  
}

// Exports ClozeCard constructor, required in main.js
module.exports = ClozeCard;

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

//test logic for identifying when cloze deletion doesn't appear in text
var testFirstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "Tia Vasquez");






