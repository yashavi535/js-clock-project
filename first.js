// console.log("hey i'm javascript!");

// name="yashvi";
// age=20;
// price=99.99;
// x=null;
// y=undefined;
// isFollow=true;


// console.log(name,age,price);
// console.log(x);
// console.log(y);
// console.log(isFollow);


// Variables:-

// 1.var (it is a old ,not use in code)(redeclared & update ; global scope)
// 2.let (cannot redeclared but update ; block scope)
// 3.const (cannot redeclared or update ; block scope)

// let fullName="yashvi";
// console.log(fullName);


// let age=24;
// age=55;
// age=90;
// console.log(age);


// const PI=3.14;

// console.log(PI);

// Data types:-
        // 1. Primitive (stored directly in memory)
        //         Number , String , Boolean , undefined , null , Symbol , BigInt

        // 2. Non-Primitive (not stored directly in memory)
        //         Object , Array , function

let age=25;
console.log(age);

let city="delhi";
console.log(city);


let isMarried=false;
console.log(isMarried);


let x;
console.log(x);


let y=null;
console.log(y);


let b=BigInt("123");
consolne.log(b);


let a=Symbol("hello");
console.log(a);


const person={
        name:"ram",
        age:22,
        cgpa:8.2,
        isPass:true,                     
};
person["age"]=person["age"]+1;
person["name"]="yashvi";
console.log(person.age);
console.log(person["name"]);  //(do tarike se likh sakte h ek . k sath dusra [] brackets m)

// let ko update kr sakte h const ko nhi kr sakte lekin agar const object k sath h toh uski key value ko upadte kiya ja sakta h









