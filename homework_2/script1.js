// №1 Задача на каррирование (поиск суммы)
function myFunc(fun) {
  return function carried(...args) {
    if (args.length === 0) return fun();
    return (...args2) =>
      args2.length === 0 ? fun(...args) : carried(...args, ...args2);
  };
}

const sum = (...nums) => nums.reduce((prev, curr) => prev + curr, 0);
const curriedSum = myFunc(sum);

console.log(curriedSum(1)(2)(3)(4)(5)(6)());
console.log(curriedSum());
console.log(curriedSum(1)(2)());
console.log(curriedSum(10)());

// №2 Собрать из строки вложенный массив
// Вариант1 через цикл
const str = "one.two.three.four.five";

const strArr = str.split(".");
const result = {};
let curr = result;

for (let i = 0; i < strArr.length; i++) {
  curr[strArr[i]] = {};
  curr = curr[strArr[i]];
}
console.log(result);

// Вариант 2 методами массива
let result1 = str.split(".").reduce((prev, curr) => ({ [curr]: prev }), {});
console.log(result1);
