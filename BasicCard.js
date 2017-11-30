// Constructor function for creating BasicCard objects.
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
   };
   
// Exports BasicCard constructor, required in main.js
module.exports = BasicCard;

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 





