
//Check if type of '70' is equal to 70
console.log('70' === 70); //false
console.log('70' == 70); //true

//Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') == 9);

//Write five JavaScript statement which provide falsy value.
const employeeName = "";
const employeeSalary = 0;
const isEmployeeLoggedIn = false;
const employeeAddress = null;
let isEmployeePermanant ;
const employeeScore  = NaN;


console.log(employeeName);
console.log(employeeSalary);
console.log(isEmployeeLoggedIn);
console.log(employeeAddress);
console.log(isEmployeePermanant);
console.log(employeeScore);


//Write five JavaScript statement which provide truthy  value.

const isStudentPassed = true;
const studentPercentage = 80;
const studentRemark = "Outstanding";
const studentMarks = [70,90,80,92,75];
const studentDetails = {
    studentFirstName : "Gaurav",
    studentLastName : "Wani"
}

console.log(isStudentPassed);
console.log(studentPercentage);
console.log(studentRemark);
console.log(studentMarks);
console.log(studentDetails.studentFirstName);


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

5 > 4 // true
4 >= 3 //true
4 < 3 //false 
4 <= 3 //false
5 == 5 //true
9 === 9 //true
9 == '9' //true
8 === '8'//false
4 != 4 //false
4 !== 4 //false


console.log(5 > 4);
console.log(4 >= 3 );
console.log(4 < 3 );
console.log(4 <= 3 );
console.log(5 == 5);
console.log(9 === 9 );
console.log(9 == '9');
console.log(8 === '8');
console.log(4 != 4 );
console.log(4 !== '4');

//Find the length of python and jargon and make a falsy comparison statement.
const python = "python";
const jargon = "jargon";
console.log(python.length != jargon.length);


//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false)  //true
!(4 > 3 && 10 < 12) //true
!(4 > 3 && 10 > 12) //false
!(4 === '4') //false

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 < 3) );
console.log(!(4 < 3) );
console.log(!(false) );
console.log(!(4 > 3 && 10 < 12) );
console.log(!(4 > 3 && 10 > 12));
console.log(4 === '4');
