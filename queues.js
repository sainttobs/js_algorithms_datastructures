function Queue() {
	// body...
	collection = [];
	this.print = function(){
		console.log(collection)
	};
	this.enqueue = function(element){
		collection.push(element);
	};
	this.dequeue = function(){
		return collection.shift();
	};
	this.front = function(){
		return collection[0];
	};
	this.size = function(){
		return collection.length;
	};
	this.isEmpty = function(){
		return (collection.length === 0);
	};
}


var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

// Creating a Priority Queue. Each element has a priority so elements with higer priority are sent to the front of the 
//queue. if all elements have the same priority it behaves like a normal queue.


