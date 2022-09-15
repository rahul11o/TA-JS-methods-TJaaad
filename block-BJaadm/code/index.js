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

// Create an array peopleName and store value of name key from persons array
peopleName = persons.map((elem) => elem.name);
// Create an array peopleGrade and store the value of grade key from persons array
peopleGrade = persons.map((elem) => elem.grade);
// Create an array peopleSex and store the value of sex key from persons array
peopleSex = persons.map((elem) => elem.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'

peopleNameWithJorP = peopleName.filter(function(elem){
  if(elem.startsWith("J") || elem.startsWith("P")){
    return elem
  }
})
console.log(peopleNameWithJorP)
//Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
 /* peopleName.filter(function(elem){
  if(elem.startsWith("A") || elem.startsWith("C")){
    console.log(`${elem} - ${elem.length}`)
  }
 })
 */
console.log(peopleName.filter((person) => person.startsWith("A") || person.startsWith("C")).length);

// Log all the filtered male ('M') in persons array

persons.filter(function(elem){
  if(elem.sex === "M"){
    console.log (`${elem.name} - ${elem.sex}`)
  }
})
// Log all the filtered female ('F') in persons array

persons.filter(function(elem){
  if(elem.sex === "F"){
    console.log (`${elem.name} - ${elem.sex}`)
  }
})

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.filter(function(elem){
  if(elem.sex === "F"){
    if(elem.name.startsWith("C") ||elem.name.startsWith("J") ){
      console.log(elem.name)
    }
  }
})

// Log all the even numbers from peopleGrade array

//console.log(peopleGrade.filter((elem) => elem % 2 === 0));
peopleGrade.filter(function(elem){
  if(elem % 2 === 0){
    console.log (elem)
  }
} )

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(function(elem){
  if(elem.name.startsWith("J")){
  return elem
  }
}))

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(function(elem){
  if(elem.name.startsWith("P")){
  return elem
  }
}))
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(function(elem){
  if(elem.name.startsWith("J")){
    if(elem.grade > 10){
      if(elem.sex === "F"){
        return elem
      }
    }
  }
}))
// Filter all the female from persons array and store in femalePersons array
/*femalePersons = persons.filter(function(elem){
  if(elem.sex === "F"){
    return  elem.name
  }
})
*/
let femalePersons = persons.filter((person) => person.sex === "F");
let femalePersonsName = femalePersons.map((elem) => elem.name);

// Filter all the male from persons array and store in malePersons array
/*
malePersons = persons.filter(function(elem){
  if(elem.sex === "M"){
    return  elem.name
  }
}); 
*/
let malePersons = persons.filter((person) => person.sex === "M");
let malePersonsName = malePersons.map((elem) => elem.name);
// Find the sum of all grades and store in gradeTotal
peopleGrade = persons.map((elem) => elem.grade);
let gradeTotal = peopleGrade .reduce(function (acc , curr){
  return acc + curr;
})

// Find the average grade
averageGrade = peopleGrade.reduce(function(acc, curr){
  return acc + curr
})/peopleGrade.length
// averageGrade = gradeTotal/ peopleGrade.length;
// averageGrade = function(peopleGrade){
//   let sum = 0;
//   for(let i = 0; i < peopleGrade.length; i++){
//   sum = sum + peopleGrade[i]
//   };
//   return sum / peopleGrade.length
// };



// Find the average grade of male
let averageGradeMale = malePersons.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
}, 0) / malePersons.length;

// Find the average grade of female
let averageGradeFemale = femalePersons.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
}, 0) / femalePersons.length;

// Find the highest grade
//let highestGrade = [...peopleGrade].sort((a,b) => a - b).pop()
 function highestGrade(arr){
  highestNum = 0;
  for (let i = 0; i < arr.length; i++){
     if (arr[i]  >   highestNum ){
       highestNum = arr[i]
     }
  }
  return highestNum
 }

// Find the highest grade in male
maleGrade = malePersons.map((elem) => elem.grade);
highestMaleGrade  = [...maleGrade].sort((a, b) => a-b).pop();

// Find the highest grade in female
femaleGrade = femalePersons.map((elem) => elem.grade);
highestFemaleGrade  = [...femaleGrade].sort((a, b) => a-b).pop();



// Find the highest grade for people whose name starts with 'J' or 'P'
JandPPerson  = persons.filter((elem) => elem.name.startsWith("J") || elem.name.startsWith("P"));
highestGradeOfjOrP = [...JandPPerson].map((elem) => elem.grade).sort((a,b) => a-b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b) => a-b));
// No the elements remained the same but their position/indexes got changed.

// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);

// Sort the peopleGrade in asescending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b)  => a-b);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();