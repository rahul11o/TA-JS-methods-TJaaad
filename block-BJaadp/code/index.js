let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:
indiInfo = persons.filter((elem) => elem);
grade = persons.map((elem) => elem.grade)
// Find the average grade
averageGrade = grade.reduce(function(acc, curr, index, arr)  {
 let total = acc += curr
  if(index === arr.length-1){
    return total/arr.length
  }
  return total;
})

// Find the average grade of male
let maleGrade = persons.filter((elem)=> elem.sex === "M").map((elem) => elem.grade);
 let averageMaleGrade = maleGrade.reduce((acc,curr,index,arr) => {
    let total = acc += curr;
    if(index === arr.length -1){
      return total/ arr.length
    }
    return total
  })

// Find the average grade of female
let femaleGrade = persons.filter((elem)=> elem.sex === "F").map((elem) => elem.grade);
 let averageFemaleGrade = femaleGrade.reduce((acc,curr,index,arr) => {
    let total = acc += curr;
    if(index === arr.length -1){
      return total/ arr.length
    }
    return total
  })


// Find the highest grade
highestGrade = grade.reduce(function(acc, curr){
  if (curr > acc){
    acc = curr
  }
  return acc;
});
// highestGrade = grade.reduce((acc,curr) => curr > acc ? curr : acc);

//Find the highest grade in male

highestMaleGrade = maleGrade.reduce(function(acc, curr){
  if(curr > acc){
     acc = curr
  }
  return acc
});
// maleGrade  = [8, 16, 2, 4, 5, 17]
// highestMaleGrade = maleGrade.reduce((acc,curr) => curr > acc ? curr : acc);

// Find the highest grade in female
highestfemaleGrade = femaleGrade.reduce(function(acc, curr){
  if(curr > acc){
     acc = curr
  }
  return acc
});



// Find the highest grade for people whose name starts with 'J' or 'P'
JandPPplHighestGrade = persons.filter((elem) => elem.name.startsWith("J") || elem.name.startsWith("P")).map((elem) => elem.grade).reduce(function(acc,curr){
  if (curr > acc){
   return acc = curr
  }
  return acc;
})

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
// fruitOccurance = function(arr){
//   fruitsObj = {};
//   for(let i = 0; i < arr.length ; i++ ){
//     let fruits = arr[i]
//     fruitsObj[fruits] = fruitsObj[fruits] ? fruitsObj[fruits] + 1 : fruitsObj[fruits] = 1;
//   }
//   return fruitsObj;
// }
  
fruitsObj = fruitBasket.reduce(function (acc, curr) {
 return  acc[curr] ? ++acc[curr]: acc[curr] = 1  , acc},  {})
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()


Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsArray = Object.keys(fruitsObj).reduce((acc, curr) => {
  acc = acc.concat([curr, fruitsObj[curr]]);
  return acc;
}, []);


const data = [98,
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

// flattenData = data.reduce(function(acc, curr){
//   if (Array.isArray(curr)){
//    return acc.concat(curr);
//   }
//   else{  
//     return acc.push(curr)
//   }
//   return acc
// },[])
 
falttenData = data.reduce(function(acc, curr){
  return acc.concat(curr)
}, [])

// flattenData = data.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(curr) : acc.push(curr));







const dataTwo = [
  [1, 2, 3],98,
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

// let flattenDataTwo = function(input){
//   result = [];
//   if(!Array.isArray(input)){
//     return input
//   } else{
//     for(let value of input){
//       result = result.concat (flattenDataTwo(value))
//     }
//   }
//   return result 
// }



dataTwo.reduce((acc, cv) => {
  acc = acc.concat(Array.isArray(cv)? cv.flat(Infinity) : cv);
  return acc;
}, []);



// dataTwo.reduce(function(acc, curr){
//  return acc.concat(curr)
// }, [])

/*
//[].concat([1, 2, 3])

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
// - `increment` adds one to the input value
function increment(value) {
return ++value
}
//- `double` doubles the input value
double = (value) => value *2;

// - `decrement` decrement 1 from the value 
decrement = (value) => --value;

// - `triple` triples the input
triple = (value) => value * 3;
//- `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
half = (value) => Math.floor(value/2);



let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
// Increment 


NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
pipeline.reduce(function(acc, curr){
  return curr(acc) ;
},3)

//pipeline.reduce((acc, curr) => curr(acc), 3) ;

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8.

pipeline2.reduce(function(acc, curr){
  return curr(acc) ;
},8)
