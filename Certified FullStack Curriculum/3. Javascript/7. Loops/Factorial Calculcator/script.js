let num = 5;

function factorialCalculator(number){
  let result = 1;
  for(let i = 2; i <= number; i++){
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)