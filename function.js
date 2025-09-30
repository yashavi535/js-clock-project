// 1. without parameter

function sayHello() {
  console.log("Hello, World!");
}

sayHello(); 


// 2. with parameter

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Yashvi");            

// 3. with return value

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);



// Factorial without parameter

function factorial() {
  let num = 5;   
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  console.log("Factorial of " + num + " is: " + fact);
}

factorial(); 

// Factorial with parameter

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(5));  
console.log(factorial(6));  

// Factorial with return value

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact; 
}

let Result = factorial(5);
console.log("Factorial is: " + result); 


