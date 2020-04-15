var chalk = require('chalk');

function Dog(name){
	this.name = name;
	this.stomach = [];

}
Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

Dog.prototype.sayHi = function(){
	console.log("say hi my name is "+ chalk.blue(this.name));

}
module.exports = Dog