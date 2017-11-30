// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function ClozeCard(text, cloze) {
  
  this.fullText = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...');
  
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText); 




