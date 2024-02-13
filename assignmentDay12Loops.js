//loops :

//print 0 to 10

//for loop
//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let index = 0;index < 11;index++){
    console.log(index);
}

let index1 = 0;
while(index1 < 11){
    console.log(index1);
    index1++;
}

let index = 0;
do{
    console.log(index);
    index++;
}while(index < 11);



//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let index = 10;index >= 0;index--){
    console.log(index);
}

let indexforWhile = 10;
while(indexforWhile >= 0){
    console.log(indexforWhile);
    indexforWhile--;
}

let indexforDoWhile = 10;
do{
    console.log(indexforDoWhile);
    indexforDoWhile--;
}while(indexforDoWhile >= 0);

//Iterate 0 to n using for loop
const n = 20;
for(let index = 0;index<n;index++){
    console.log(index);
}


//pattern
for(let rowIndex = 0;rowIndex < 7;rowIndex++){
    let rowString = '';
    for(let colIndex = 0;colIndex <= rowIndex;colIndex++){
        rowString+= '#';
    }
    console.log(rowString);
}

//Using loop print the following pattern

for(let rowIndex = 0;rowIndex <11;rowIndex++){

    let rowString = "";
    for(let colIndex = 1;colIndex <= 3;colIndex++){
       rowString+= rowIndex**colIndex;
       rowString+= " ";
    }
    console.log(rowString);
}

//5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let number = 0;number < 101;number++){
    if(number%2 === 0){
        console.log(number);
    }
}

//6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let number = 0;number < 101;number++){
    if(number%2 != 0){
        console.log(number);
    }
}

//7. Use for loop to iterate from 0 to 100 and print only prime numbers
const isPrime = (number) =>{

    const mid = parseInt(number/2);
    
    for(let number1 = mid;number1>1;number1--){
        if(number%number1 === 0){
            return false;
        }
    }

    return true;
}

console.log("Prime numbers : ");

for(let number = 2;number < 101;number++){

    if(isPrime(number)){
        console.log(number);
    }
}

//8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNumbers = 0;
for(let number = 0;number<101;number++){
    sumOfNumbers+= number;
}
console.log(`Sum of numbers : ${sumOfNumbers}`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evens = [];
let odds = [];

for(let number = 0;number < 101;number++){
    if(number%2){
        odds.push(number);
    }
    else{
        evens.push(number);
    }
}

let evenSum = 0;
let oddSum =0;

for(let value of evens){
    evenSum+= value;
}
console.log(`Even Sum : ${evenSum}`);

for(let value of odds){
    oddSum+= value;
}
console.log(`Odd Sum : ${oddSum}`);

//. Develop a small script which generate array of 5 random numbers
const randomARray = [];
for(let index = 0;index<5;index++){
    randomARray.push(Math.round());
}

// 11. Develop a small script which generate array of 5 random numbers
const fiveRandomNumbers = () => {
    let numbers = [];
    for(let index = 0;index < 5;index++){
        let number = Math.floor(Math.random()*10);
        numbers.push(number);
    }

    return numbers;

}
console.log(fiveRandomNumbers());

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const fiveUniqueRandomNumbers = () => {
    let numbers = [];
    for(let index = 0;index < 5;index++){
        let number = Math.floor(Math.random()*10);
        while(!numbers.includes(number)){
            numbers.push(number);
        }
    }
    return numbers;
}
console.log(fiveUniqueRandomNumbers());

// 13. Develop a small script which generate a six characters random id: //iuyt56
// 14. Develop a small script which generate any number of characters random id.
r.

//Using the above countries array, create the following new array.

const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//7. Using the above countries array, create an array for countries length
//7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

const countriesLength = [];

for(const country of countries){
    countriesLength.push(country.length);
}
console.log(countriesLength);

//Use the countries array to create the following array of arrays:
const countriesInfo = [];

for(const country of countries){

    const countryInfo = [];
    countryInfo.push(country);
    countryInfo.push(country.slice(0,3));
    countryInfo.push(country.length);
    countriesInfo.push(countryInfo);

}
console.log(countriesInfo);

const countriesIncludesLand = [];
for(const country of countries){
    if(country.includes('LAND')){
        countriesIncludesLand.push(country);
    }
}

console.log('Countries including Land : '+countriesIncludesLand);


//. Using the above countries array, find the country containing the biggest number of characters.
let maxLength = 0;
let maxLengthCountry;
for(let index = 0;index < countriesLength.length;index++){
    if(countriesLength[index] > maxLength){
        maxLength = countriesLength[index];
        maxLengthCountry = countries[index];
    }
}
console.log("Max length country : "+maxLengthCountry+" with length "+maxLength);

// 21. Using the above countries array, find the country containing only 5 characters.
const countriesWithFiveCharacters = [];
for(let index = 0;index < countriesLength.length;index++){
    if(countriesLength[index] === 5){
        countriesWithFiveCharacters.push(countries[index]);
    }
}
console.log(countriesWithFiveCharacters);

// 22. Find the longest word in the webTechs array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let longestWebTech ;
  let longestWebTechlength = 0;
  const webTechsLength = [];

  for(const webTech of webTechs){
        if(webTech.length > longestWebTechlength){
            longestWebTechlength = webTech.length;
            longestWebTech = webTech;
        }
        webTechsLength.push(webTech.length);
  }
  console.log(longestWebTech+' '+longestWebTechlength);

const webTechswithLength = [];
  for(let index = 0;index < webTechs.length;index++){
    const webTechwithLength = [];
    webTechwithLength.push(webTechs[index]);
    webTechwithLength.push(webTechsLength[index]);
    webTechswithLength.push(webTechwithLength);
  }
  console.log(webTechswithLength);

  // 23. Use the webTechs array to create the following array of arrays:
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  let mern = "";
   for(const skill of mernStack){
    mern+= skill[0];
  }
  console.log(mern);


//25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

//for loop
for(let index = 0;index<webTechs.length;index++){
    console.log(webTechs[index]);
}

//for of
for(const skill of webTechs){
    console.log(skill);
}


//26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];

let firstIndex = 0;
let lastIndex = fruits.length-1;

while(firstIndex <= lastIndex){
    
    const tempFruit = fruits[firstIndex];
    fruits[firstIndex] = fruits[lastIndex];
    fruits[lastIndex] = tempFruit;
    firstIndex++;
    lastIndex--;
}

console.log(fruits);


//27. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(const skill of fullStack){
    console.log(skill);
  }