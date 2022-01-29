/* 

    1. Var, Array, Object, Function, Loop
    2. Method: indexOf(), typeOf(), parseInt(), parseFlot(), toFixed(), psuh(), pop(), shift(), unshift()
    3. Data Type, Truthy & Falsey Values

*/

var myName = `Riyad Hossain`;

const myHobby = [
  `Reciting Quran`,
  `Coding`,
  `Walking with Friends`,
  `Watching Tech Podcast`,
];

let mySelf = {
  firstName: `Riyad`,
  lastName: `Hossain`,
  age: 22,
  Religion: `Islam`,
  favChannel: [`LWS`, `Code with Harry`, `Jhankar Mahbub`, `Web Application`],
};

function sleep() {
  console.log(`I am Sleeping`);
}
sleep();

var i = 0;
while (i < 10) {
  console.log(`Allah is Almighty`);
  i++;
}

const myHobby = [
  `Reciting Quran`,
  `Coding`,
  `Walking with Friends`,
  `Watching Tech Podcast`,
];

console.log(myHobby[2]);
myHobby[2] = `Nothing Here`;

let mySelf = {
  firstName: `Riyad`,
  lastName: `Hossain`,
  age: 22,
  Religion: `Islam`,
  favChannel: [`LWS`, `Code with Harry`, `Jhankar Mahbub`, `Web Application`],
};

mySelf.favChannel[3] = `There is no Channel`;
mySelf[`age`] = `soon will be 22, man`;

var Ideology = `Religion`;
mySelf[Ideology] = `No way, It's Islam Always`;

console.log(mySelf);

const myHobby = [
  `Reciting Quran`,
  `Coding`,
  `Walking with Friends`,
  `Watching Tech Podcast`,
];

for (let i = 0; i < myHobby.length; i++) {
  if (myHobby[i] === `Coding`) {
    console.log(`Don't Show it`);
  }
  console.log(myHobby[i]);
}

function addNum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result = addNum(3, 4);
console.log(result);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName + ` and his Id is ${this.id}.`;
  },
};

console.log(person.fullName());

const person2 = {
  firstName: `Riyad`,
  lastName: `Hossain`,
  age: 22,
  details: function () {
    return ` This is ${this.firstName} ${this.lastName} and he is ${this.age} years old.`;
  },
};

console.log(person2.details());
