let fruits=['apple','banana','orange'];
console.log(fruits);

// Methods

// 1. push() - Add to the end

let color=['red','blue'];
color.push('green');
console.log(color);

// 2. pop() - Remove from the end

color.pop();
console.log(color);

// 3. shift() - Remove from the beginning

color.shift();
console.log(color);

// 4. unshift() - Add to the beginning

color.unshift('yellow');
console.log(color);

// 5. map() - Transform each element

let num=[1,2,3,4,5];
let squared=num.map(x=>x*x);
console.log(squared);

// 6. filter() - Select element that match the condition

let even=num.filter(x=>x%2==0);
console.log(even);

// 7. reduce() - Accumulate a single value

let sum=num.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

// 8. find() - First match

let firstEven=num.find(x=>x%2==0);
console.log(firstEven);

// 9. sort() - sort an array alphabetically

let fruit = ["Banana", "Mango", "Apple"]; 
fruit.sort(); 
console.log(fruit);  

// 10. reverse() - Reverses the order of the elements

let  flower = ["rose", "lily", "sunflower"]; 
flower.reverse(); 
console.log(flower); 

// 11. slice(start , end)  

let  flowers = ["rose", "lily", "sunflower", "lotus", "tulip"];
console.log(flowers.slice(1, 3));

// 12. splice(start, deleteCount, item 1,item 2,....)

let fruitt = ["apple", "banana", "mango", "orange", "grape"];
fruitt.splice(2, 2);
console.log(fruitt);   

// 13. concat - join multiple arrays and return result
let marvel_heroes=["thor", "batman", "spiderman", "ironman"];
let dc_heroes=["superman", "flash", "aquaman"];
let all_heroes=marvel_heroes.concat(dc_heroes);
console.log(all_heroes);



// objects - pair of key values
let person={
        name:"ram",
        age:22,
        cgpa:8.2,
    }   
console.log(person);








