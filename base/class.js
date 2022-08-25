// class 類

// 父類
class People {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name} eat something`);
	}
}

// 子類
class Student extends People {
	constructor(name, number) {
		super(name);
		this.number = number;
	}
	sayHi() {
		console.log(`名字 ${this.name} 學號 ${this.number}`);
	}
}

// 子類
class Teacher extends People {
	constructor(name, major) {
		super(name);
		this.major = major;
	}
	teach() {
		console.log(`${this.name} 教學 ${this.major}`);
	}
}

// instance
const aKa = new Student('A咖', 100);
console.log(aKa.name);
console.log(aKa.number);
aKa.sayHi();
aKa.eat();

// instance
const bKa = new Teacher('B咖', '英文');
console.log(bKa.name);
console.log(bKa.major);
bKa.teach();
bKa.eat();

// instanceof

/*  
aka instanceof Student -> true
aka instanceof People -> true
aka instanceof Object -> true
 
[] instanceof Array -> true
[] instanceof Object -> true
{} instanceof Object -> true
*/
