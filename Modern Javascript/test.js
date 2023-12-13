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

// Destructurning objects
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
// Destructuring arrays
// two commas to scip third
//  const [first, second,, forth] = [10, 20, 30, 40];
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);
//const [value, setValue] = useState(initialValue);
