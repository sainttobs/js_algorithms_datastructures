/* Stacks! */

// functions: push,pop, peek, length

// Using an Array to Create a Stack

var letters = []; //this is our stack

var word = "racecar"

var rword = "";

//put letters into a stack

for (var i=0; i<word.length; i++){
	letters.push(word[i]);
}

for (var i = 0; i<word.length; i++){
	rword += letters.pop();
}

if (rword === word) {
	console.log(word + " is a palindrome")
}
else {
	console.log(word + " is not a plaindrome");
}


// Creating a Stack

var Stack = function(){
	this.count = 0;
	this.storage = {};

	// Adds a value onto the end of the stack
	this.push = function(value){
		this.storage[this.count] = value;
		this.count++;
	}

	// Removes and return the value at the end of the Stack
	this.pop = function(){
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	this.size = function(){
		return this.count;
	}

	// Returns the value at the end of the stack
	this.peek = function(value){
		return this.storage[this.count-1];
	}
}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek())
myStack.push("Adeyefa Toba");
console.log(myStack.size());
console.log(myStack.peek())
