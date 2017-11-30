var ClozeCard = function(text, cloze) {
  
  this.fullText = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...');
  
}

// Exports ClozeCard constructor, required in main.js
module.exports = ClozeCard;







