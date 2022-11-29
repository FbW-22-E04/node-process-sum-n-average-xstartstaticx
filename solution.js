let total = 0;

console.log(process.argv.slice(3));

function sum() {
  for (let i = 3; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
  }
}

function avg() {
  //   for (let i = 3; i < process.argv.length; i++) {
  //     (total = total + Number(process.argv[i])) / process.argv.slice(3).length;
  //   }
  total = total / Number(process.argv.slice(3).length);
}

// function onlyNumbers(array) {
//   return array.every((element) => {
//     return typeof element === "number";
//   });
// }

// function onlyNumbers() {
//   return (total = process.argv.slice(3).map(Number));
//   //   console.log(total);
// }
console.log(process.argv.slice(3).map(Number));

if (process.argv[2] === "sum") {
  sum();
} else if (process.argv[2] === "avg") {
  sum();
  avg();
} else if (process.argv[2] !== "sum" || process.argv[2] !== "avg") {
  total =
    'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)';
}

// else if (typeof onlyNumbers() !== typeof Number) {
//   console.log("not a number");
// }

// else if (onlyNumbers(process.argv.slice(3)) === "false") {
//   total = "not a number";
// }
console.log(total);
console.log(process.argv.slice(3).length);
