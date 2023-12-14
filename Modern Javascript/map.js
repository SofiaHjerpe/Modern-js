const numbers = [1, -1, 2, 3];
const num = [1, 5, 10, 15];
const filtered = numbers.filter((n) => n >= 0);
//map to strings
// const items = filtered.map((n) => "<li>" + n + "</li>");
// console.log(items);
// map to objects

const items = filtered.map((n) => ({ value: n }));
console.log(items);

const numObj = num
  .filter((n) => n >= 5)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 5)
  .map(obj => obj.value);
console.log(numObj);
