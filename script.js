//1.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(array) {
  if (array.length === 1) return array[0];
  return array[0] + sum1(array.slice(1));
}

function sum2(array) {
  return array.length === 1 ? array[0] : array[0] + sum2(array.slice(1));
}

console.log(sum1(arr));
console.log(sum2(arr));

//2.
function deepCount1(array) {
  let sum = array.length;
  for (const el of array) {
    if (Array.isArray(el)) {
      sum += deepCount1(el);
    }
  }
  return sum;
}

function deepCount2(array) {
  let sum = array.length;
  for (const el of array) {
    Array.isArray(el) ? (sum += deepCount1(el)) : null;
  }
  return sum;
}

console.log(deepCount1([])); //0
console.log(deepCount1([1, 2, 3])); //3
console.log(deepCount1(['x', 'y', ['z']])); //4
console.log(deepCount1([1, 2, [3, 4, [5]]])); //7
console.log(deepCount1([[[[]]]])); //3

console.log(deepCount2([])); //0
console.log(deepCount2([1, 2, 3])); //3
console.log(deepCount2(['x', 'y', ['z']])); //4
console.log(deepCount2([1, 2, [3, 4, [5]]])); //7
console.log(deepCount2([[[[]]]])); //3
//3.

const employees = {
  development: {
    backend: [
      { name: 'Mike', salary: 2000 },
      { name: 'Nikola', salary: 2500 },
    ],
    frontend: [
      { name: 'Artem', salary: 3000 },
      { name: 'Alex', salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: 'Nina', salary: 1000 },
        { name: 'Olena', salary: 1300 },
      ],
      promotion: [
        { name: 'Oleg', salary: 1400 },
        { name: 'Masha', salary: 1700 },
      ],
    },
    sellers: [
      { name: 'Max', salary: 900 },
      { name: 'Donald', salary: 700 },
      { name: 'Joe', salary: 1100 },
    ],
  },
  designer: [{ name: 'Kate', salary: 1800 }],
};

function summary() {
  let sum = 0;
  return function sumSallary(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employee) => (sum += employee.salary));
      } else {
        sumSallary(obj[key]);
      }
    }
    return sum;
  };
}

console.log(summary()(employees));

//4.
const arr1 = [2, 15, 7, 3];
const arr2 = [9, 3, 17, 12, 4, 8];
const arr3 = [6, 11, 16, 15, 11];
console.log(Math.max(...[...arr1, ...arr2, ...arr3]));
