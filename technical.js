// reverse string
const str="aniket"

const reversed = str.split('').reverse().join('')
console.log(reversed);


//  Write a function to find the largest number in an array Example: [10, 20, 5, 7]


function maxNum(arr){
   return Math.max(...arr);
}

console.log(maxNum([10,20,5,7]));

const largestNum = (arr)=>{
    return Math.max(...arr)
}
console.log(largestNum([39,2,37,2]));

// 13. Write a program that prints numbers from 1 to 100

// Print Fizz if divisible by 3

// Print Buzz if divisible by 5

// Print FizzBuzz if both

function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();