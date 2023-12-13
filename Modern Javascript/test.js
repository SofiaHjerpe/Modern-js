const mystery = "answer";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
};
//undefined because this mystery property was defined with the dynamic property syntax
//Javascript evaluates the mystery property first.
console.log("does not work:" + obj.mystery);
//Property has the value of answer
// Which means that this work
console.log("works:" + obj.answer);

// Destructioning objects
const { PI, E, SQRT2 } = Math;

const circle = {
  label: "circleX",
  radius: 2,
};
//set radius and calculate the circles area
//The object should have a radius property
// = {} is optional
const circleArea = ({ radius }, { precision = 2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle, { precision: 5 }));
// Destructioning arrays
// two commas to scip third element
//  const [first, second,, forth] = [10, 20, 30, 40];
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);
//const [value, setValue] = useState(initialValue);
//classes
// classes is shared structure and behaviour objects 

class Person {
  constructor(name) {
    this.name = name;
  }
  //the greet functions uses the values they store on each instanse(betoning)
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}
//every student is also a person
class Student extends Person {
    //constructor funtion gets called when we instantiate(betonar)
    // The student class expects a name argument and a level argument
    //since the person class extends student class the super() function can
    //be called to reference back to Person constructor for name.
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
//o3 uses own directly defined greet method.
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log("I am special!");

o1.greet();
o2.greet();
o3.greet();
//promises
// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };
//same as above
//await calls is used and then nead to label the functions as async
const fetchData = async () => {
  const resp = await fetch('https://api.github.com');
  const data = await resp.json();
  console.log(data);
};

fetchData();
