

//var checking 
var fullName = "Gaurav Wani";
function getFullName(){

    var fullName = "Arjun Kesharwani";
    console.log(fullName);
}
getFullName();
console.log(fullName);


//let checking
let fName ;
function getFullNameFromPosition(position){

    fName = "Gaurav Wani";
    console.log(fName);

    if(position == "Software Engineer"){
        let fName = "Akhil Sachan";
        console.log(fName);
    }

    console.log(fName);
}
getFullNameFromPosition("Software Engineer");
console.log(fName);


//constant checking 
const company = "Coditas";
console.log(company);
company = "Microsoft";
console.log(company);