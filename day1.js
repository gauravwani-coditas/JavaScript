

//delaring variables
const company = 'Coditas';
let fullName = 'Gaurav Wani';
var position = 'Associate Software Engineer Intern';


//function defining
function solve(username){

    fullName = username;
    console.log(`My name is ${username}`);
    console.log(`I am ${position} at ${company}`);
}


//function calling
solve(fullName);

//reassigning variables
fullName = 'John Doe';
position = 'Software Engineer'

//function calling
solve(fullName);



