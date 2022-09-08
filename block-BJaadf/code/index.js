let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");// ['Banana', 'Orange', 'Apple', 'Mango', 'papaya']

// Remove the last element from fruits array
fruits.pop();//['Banana', 'Orange', 'Apple', 'Mango']


// Log the current length of fruits array
fruits.length;// 4

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);

// Log the element on index 0 and 1
console.log(fruits[0], fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava');

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon Fruit");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
if(fruits.indexOf('Dragon Fruit') === 0 && fruits.indexOf('Guava' )=== 1){
     console.log(true);
} else{
     console.log(false);
}

// Update the value of index 1 to `Pears`
fruits[1] = "peers";

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0,'Kiwi' ,'Lemon');

// Remove (slice) all the element from index 5
fruits.slice(5);

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits =  ['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat( moreFruits);
// Log the name of all fruit in console
console.log(fruits);

// Convert each fruit name to lowercase and log it.
for(let fru of fruits){
    console.log(fru.toLowerCase());
}

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = [];
for(let fru of fruits){
    lowercaseFruits.push(fru.toLowerCase());

}

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let  uppercaseFruits =[];
for(let fru of fruits){
    uppercaseFruits.push(fru.toUpperCase());
}
// ****** ----------- ******* -------------------- ********


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat());
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(2));
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
console.log(numbersThree.flat(Infinity));
// Use forEach to log all the elements of numberThree array
numbersThree.forEach(function(num){
    console.log(num)
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.flat(Infinity).map(function(number){
    return number * 2;
})


// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.flat(Infinity).map((number) => number*3);


// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.flat(Infinity).map((number) => number / 2);


// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = [];
 numbersThree.flat(Infinity).forEach(function(number){
    if(number % 2 !== 0){
     oddNumbers.push(number)
    }
})

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = [];
 numbersThree.flat(Infinity).forEach(function(number){
    if(number % 2 === 0){
     evenNumbers.push(number)
    }
})
// let oddNumbers = [];
// let evenNumbers = [];
// checkOddEven = function(number){
//     if (number % 2 === 0){
//         evenNumbers.push(number)
//         } else{
//             oddNumbers.push(number)
//         }
// }
// numbersThree.flat(Infinity).forEach(checkOddEven);


// Find the index of 10 in numbersThree array
console.log(numbersThree.flat(Infinity).indexOf(10));

// Reverse the values of numbersThree array
console.log(numbersThree.flat(Infinity).reverse());


// Reverse the values of numbersTwo array
console.log(numbersTwo.flat(Infinity).reverse());
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join('-').toUpperCase());
// Join all fruits with '&', convert to lowercase and log it.
console.log(fruits.join("&").toLowerCase());