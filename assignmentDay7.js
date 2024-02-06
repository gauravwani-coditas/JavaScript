// If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.

const age = 21;

age >= 18 ? console.log("You are allowed to Marry") : console.log(`Wait for ${18 - age} years`);


// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.
const yourAge = 30;
const myAge = 21;

yourAge > myAge ? console.log(`Your are ${yourAge - myAge} older than me`) : console.log(`You are ${myAge - yourAge} younger than me`);


// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.
myAge > yourAge ? console.log("MyAge is greater than your age !") : console.log("myAge is less than yourAge");

// 4. Check, if a number is even or not.
const employeeSalary = 11001;
employeeSalary % 2 ? console.log("It is odd !") : console.log("It is even !");
// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const studentGrade = 90;


if (studentGrade >= 80) {
    console.log("A");
}
else if (studentGrade >= 70) {
    console.log("B");
}
else if (studentGrade >= 60) {
    console.log("C");
}
else if (studentGrade >= 50) {
    console.log("D");
}
else {
    console.log("F");
}

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const month = "August";

if(month === "December" || month === "January" || month === "February"){
    console.log("Season is Winter");
}
else if(month === "March"){
    console.log("Season is Spring");
}
else if(month === "April" || month === "May" || month === "June" || month === "July"|| month === "August"){
    console.log("Season is Summer");
}
else{
    console.log("Season is Rainy");
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
const day = "Sunday";
day === "Saturday" || day === "Sunday" ? console.log("Weekend Day") : console.log("Working Day");

// 8. Write a program which tells the number of days in a month.
const monthForDays = "August";
if(monthForDays === "January" || monthForDays === "March" || monthForDays === "May" || monthForDays === "July" ||monthForDays === "August" || monthForDays === "October" || monthForDays === "December"){
    console.log(`${monthForDays} has 31 days`);
}
else if(monthForDays == "February"){
    console.log(`February has 28 or 29 days`);
}
else{
    console.log(`${monthForDays} has 30 days`);
}

// 9. Write a program to check whether the year is leap year or not.
const year = 2024;
if(year%400 == 0){
    console.log(`${month} is a leap year`);
}
else if(year%100 == 0){
    console.log(`${month} is not a leap year`);
}
else if(year%4 == 0){
    console.log(`${month} is a leap year`);
}
else{
    console.log(`${month} is not a leap year`);
}
// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.

age >= 18 ? age>=24 ? console.log('A'):console.log('B'):age>=30 ? console.log('C') : console.log('D');

// 11. What will be the result of the following nested ternary expression:
 let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E'; //true
 console.log(result);
