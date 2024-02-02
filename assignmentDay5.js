//Declare a variable and assign a value 'Easy JavaScript Assignments'.
const str = 'Easy JavaScript Assignments';

//Print the length of the string.
console.log(str.length);

// Change all the string characters to capital letters using toUpperCase() method
const strUpper = str.toUpperCase();
console.log(strUpper);

//Change all the string characters to lowercase letters using toLowerCase() method
const strLower = str.toLowerCase();
console.log(strLower);

//Slice out the first word of the string using substr() and substring() method
const firstWordUsingSubstr = str.substr(0,1);
console.log(firstWordUsingSubstr);

const firstWordUsingSubstring = str.substring(0,1);
console.log(firstWordUsingSubstring);

//Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
const slicedStr = str.slice(5,str.length-1);
console.log(slicedStr);

//Check if the string contains a word Script using includes() method
let isScriptPresent = str.includes('Script');
console.log(isScriptPresent);

//Split the string into an array using split() method
const strArray = str.split();
console.log(strArray);

//Split the string 'Easy JavaScript Assignments' at the space using split() method
const strArrayWithoutSpaces = str.split(' ');
console.log(strArrayWithoutSpaces);

//ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const eltpStr = 'ELTP,BATCH,THREE';
const eltpStrArray = eltpStr.split(',');
console.log(eltpStrArray);

//Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(str.replace('JavaScript','Python'));

//What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(str.charAt(20));

//What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(str.charCodeAt(str.indexOf('J')));

//Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(str.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(str.lastIndexOf('a'));


let newStr = 'Easy JavaScript Assignments, Easy Easy';

//Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(newStr.indexOf('Easy'));

//Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(newStr.lastIndexOf('Easy'));

//Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(newStr.search('Easy'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
newStr = '       Easy JavaScript Assignments, Easy Easy             ';
const newTrimmedStr = newStr.trim();
console.log(newTrimmedStr);

//Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(str.startsWith('Easy'));

//Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(str.endsWith('Assignments'));

//Use match() method to find all the a’s in 'Easy JavaScript Assignments'
const matchResult = str.match('a');
console.log(matchResult);

//Use concat() and merge 'Easy' and 'JavaScript' to a single string.
const sampleString1 = "Easy";
const sampleString2 = "JavaScript";
const concatedString = sampleString1.concat(" ",sampleString2);
console.log(concatedString);

//Use repeat() method to print 'Easy JavaScript' 3 times.
console.log(concatedString.repeat(3));

//'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const sampleString3 = 'Javascript is Easy, too Easy, too Easy, Easy to learn' ;
let countEasy  = sampleString3.split('Easy').length-1;
console.log(countEasy);

//Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
countEasy = sampleString3.match(/Easy/g).length;
console.log(countEasy);

let sampleString4 = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const words = sampleString4.split(' ');




