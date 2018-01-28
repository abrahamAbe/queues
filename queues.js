//***Implementing queues***

const queue = function(){
	this.storage = {};
	this.newIndex = 1;
	this.oldIndex = 1;
}

queue.prototype.enqueue = function(obj){
	this.storage[this.newIndex] = obj;
    this.newIndex ++;

    console.log('enqueue ' + JSON.stringify(this.storage));
    this.length();
}

queue.prototype.dequeue = function(){
	let oldIndex = this.oldIndex,
        newIndex = this.newIndex,
        deletedObj;
 
    if (oldIndex !== newIndex) {
        deletedObj = this.storage[oldIndex];
        delete this.storage[oldIndex];
        this.oldIndex ++;
    }

    console.log('dequeue ' + JSON.stringify(this.storage));
    this.length();
}

queue.prototype.length = function(){
	console.log('queue length ' + parseInt(this.newIndex - this.oldIndex));
}


//Targaryen members
let targaryens = new queue();

targaryens.enqueue({name: 'Aegon Targaryen'});
targaryens.enqueue({name: 'Rhaegar Targaryen'});
targaryens.enqueue({name: 'Rhaella Targaryen'});

targaryens.dequeue();
targaryens.dequeue();
targaryens.dequeue();