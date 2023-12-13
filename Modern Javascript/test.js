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
