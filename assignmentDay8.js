// Declare an empty array;

const array = [];
// Declare an array with more than 5 number of elements
const numbers = [1,2,3,4,5,6];
// Find the length of your array
const lengthOfNumbers = numbers.length;
console.log(lengthOfNumbers);
// Get the first item, the middle item and the last item of the array
const firstItem = numbers[0];
const lastItem = numbers[lengthOfNumbers-1];
const midItem = numbers[parseInt((lengthOfNumbers-1)/2)];

console.log(`firstItem : ${firstItem}, secondItem : ${lastItem}, middleElement = ${midItem}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes =[2,"Gaurav",3,142,undefined,{key : 'value'}];

// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Coditas","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
const numberOfCompanies = itCompanies.length;
console.log('Number of Companies '+numberOfCompanies);
// Print the first company, middle and last company
const firstCompany = itCompanies[0];
const lastCompany = itCompanies[numberOfCompanies-1];
const midCompany = itCompanies[parseInt((numberOfCompanies-1)/2)];
console.log(`firstCompany : ${firstCompany}, midCompany : ${midCompany}, lastCompany : ${lastCompany}`);
// Print out each company
for(let index = 0;index < numberOfCompanies;index++){
    console.log(itCompanies[index]);
}
// Change each company name to uppercase one by one and print them out
for(let index = 0;index < numberOfCompanies;index++){
    console.log(itCompanies[index].toUpperCase());
}
// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companiesSentence = "";
for(let index = 0;index < numberOfCompanies-1;index++){
    companiesSentence+= itCompanies[index];
    if(index == numberOfCompanies-2){
        continue;
    }
    companiesSentence+= ', ';
}
companiesSentence+= ' and ';
companiesSentence+= itCompanies[numberOfCompanies-1];
companiesSentence+= ' are big IT companies.';
console.log(companiesSentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = "TCS";
itCompanies.indexOf(company)=== -1 ? console.log(`${company} found !`) : console.log("Company not found !");

// Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];

for (let index = 0; index < itCompanies.length; index++) {
  let count = 0;
  for (let char = 0; char < itCompanies[index].length; char++) {
    if (itCompanies[index][char].toLowerCase() === 'o') {
      count++;
    }
  }
  if (count > 1) {
    filteredCompanies.push(itCompanies[index]);
  }
}

console.log("Filtered companies:", filteredCompanies);

// Sort the array using sort() method
console.log(itCompanies.sort());

// Sort the array by country name length without sort;
console.log(itCompanies.sort(function(a,b){
    return a.length-b.length;
}));

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Slice out the last 3 companies from the array
//console.log(itCompanies.slice(numberOfCompanies-3,numberOfCompanies));
console.log(itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
numberOfCompanies%2 ? console.log(itCompanies.slice(parseInt((numberOfCompanies-1)/2),parseInt((numberOfCompanies-1)/2)+1)) : console.log(slice(parseInt((numberOfCompanies-1)/2),parseInt((numberOfCompanies-1)/2)+1));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.slice())

// Remove the last IT company from the array
console.log(itCompanies.pop());

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let stringOfWords = "I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango";
stringOfWords = stringOfWords.replaceAll(',','');
stringOfWords = stringOfWords.replaceAll('.','');
arrayOfWords = stringOfWords.split(' ');
console.log(arrayOfWords);


// 25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added

if(!shoppingCart.includes('Rasmalai')){
    if(!shoppingCart.includes('Rasmalai'));
}
    
// add Gulabjamun at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Gulabjamun')){
    if(!shoppingCart.includes('Gulabjamun'));
}

// remove 'Honey' if you are allergic to honey
const isAllergicWithHoney = false;
if(!isAllergicWithHoney){
    console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'),1));
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
console.log(shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea'));
console.log(shoppingCart);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'India',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.

countries.includes('India') === -1 ? countries.push('India') : console.log("INDIA");



const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') != -1 ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass') ;
console.log(webTechs);

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd+backEnd;
console.log(fullStack)

// 29. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(ages.sort());
const minAge = ages[0];
const maxAge = ages[ages.length-1];
console.log('Min age : ' +minAge);
console.log('Max age : '+maxAge);

// Find the median age(one middle item or two middle items divided by two)
const mid = parseInt(ages.length-1/2);
ages.length%2 ? console.log('Median : '+ ages[Math.floor(ages.length / 2)]) :  console.log('Median :  '+parseInt((ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2));

// Find the average age(all items divided by number of items)
let ageSum = 0;
for(let index = 0;index < ages.length;index++){
    ageSum+= ages[index];
}
const avgAge = Math.round(ageSum/ages.length)
console.log('Average age : '+ avgAge);


// Find the range of the ages(max minus min)
const range = maxAge-minAge;
console.log('Range : '+range);

// Compare the value of (min - average) and (max - average), use abs() method
Math.abs(minAge-avgAge) > Math.abs(maxAge-avgAge) ? console.log("A"):console.log("B");

//1.Slice the first ten countries from the countries array
console.log(countries);
console.log(countries.slice(0,10));

// 30. Find the middle countries in the countries array.
countries.length%2 ? cconsole.log(countries[Math.floor(countries.length/2)]) : console.log(countries[(countries.length)/2], countries[(countries.length-2)/2]);

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
let leftCountries ;
let rightCountries ;
  
  if (!countries.length % 2) {
    leftCountries = countries.slice(0, countries.length / 2);
    rightCountries = countries.slice(countries.length / 2);
  } else {
    leftCountries = countries.slice(0, Math.ceil(countries.length / 2));
    rightCountries = countries.slice(Math.ceil(countries.length / 2));
  }
  
  console.log("Left half of countries:", leftCountries);
  console.log("Right half of countries:", rightCountries);

