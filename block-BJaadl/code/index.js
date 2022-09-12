let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',

];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

//Function using loop-

 function findLongestWord(arr){
  let longestWord = "";
  for(let i = 0; i < arr.length; i++){
    if (arr[i].length > longestWord.length){
      longestWord = arr[i]
    }
  }
  return longestWord;}

// - Using reduce() method

/* longestword = words.reduce(function(acc, curr){
  if(acc.length < curr.length){
    acc = curr
  }
  return acc;
})
*/
// - Using sort() method

/*
descOrder = words.sort((a,b) => b.length - a.length)
longestWord = descOrder[0];
*/


// - Convert the above array "words" into an array of length of word instead of word.
lengthOfWords = words.map(function(elem){
  return elem.length;
})


// - Create a new array that only contains word with atleast one vowel.
// VowelArray = words.filter(function(elem){
//   if(elem.includes("a")){
//     return elem
//   } else if(elem.includes("e")){
//     return elem
//   }else if(elem.includes("i")){
//     return elem
//   }else if(elem.includes("o")){
//     return elem
//   }else if(elem.includes("u")){
//     return elem
//   }
// })

VowelArray = words.filter(function(elem){
   if(elem.includes("a")  || elem.includes("e") ||elem.includes("i") ||elem.includes("o") ||elem.includes("u") ){
   return elem
   }
  })


// - Find the index of the word "rhythm"
rhythmIndex = words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.
noVowelStart = words.filter(function(elem){
  if(elem.startsWith("a") || elem.startsWith("e") || elem.startsWith("i") || elem.startsWith("o") || elem.startsWith("u")  ){
    return;
}else {
  return elem
}
})

// - Create a new array that contianse words not ending with vowel
noVowelEnd = words.filter(function(elem){
  if(elem.endsWith("a") || elem.endsWith("e") || elem.endsWith("i") || elem.endsWith("o") || elem.endsWith("u")  ){
    return;
}else {
  return elem
}
})

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers\

// using for loop -
function sumArray(arr){
  let sum = 0;
  for( let i =0; i< arr.length; i++ ){
     sum =  sum + arr[i];
  }
  return sum;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
arrayMultByThree = numbers.map((value) => value * 3);
// - Create a new array that contains only even numbers
evenNumbers = numbers.filter((value) => value % 2 === 0)

// - Create  a new array that contains only odd numbers.
oddNumbers = numbers.filter((value) => value % 2 !== 0)

// - Create a new array that should have true for even number and false for odd numbers.
trueFalse = numbers.map(function(value){
  if(value  % 2 === 0){
    return true;
  } else{
    return false
  }
})

// - Sort the above number in assending order.
asceNumber = [...numbers];
asceNumber.sort((a, b) => a - b);



// - Does sort mutate the original array?
// - yeah, it do mutate the original array.

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
 function  averageWordLength(arr){
  let sumOfLength = 0;
  for (let i = 0; i < arr.length; i++){
   sumOfLength += arr[i].length
  }
  return sumOfLength/ arr.length
 }