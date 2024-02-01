
function checkType(){

    const number = '10';

    if(typeof(num) === typeof(10)){
        console.log("it is already of same data type")
    }
    else{
        const integerNumber = parseInt(number);
        console.log(typeof(integerNumber));
    }

}

function isInteger(num){
    
    if(parseFloat(num) === 10){
        console.log("it already satisfies condition");
        return parseFloat(num);
    }
    else{
        return Math.round(parseFloat(num));
    }
}

function getRandomNumber(){
    return Math.round(Math.random()*100);
}

function getRandomNumberBetweenFiftyAndHundred(){
    return Math.round((Math.random()*50)+50);
}

function getAreaOfTriangle(base,height){
    return 0.5*base*height;
}

//1
checkType();


//2.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const number1 = checkFloat('9.8');
console.log(number1);


//3.Generate a random number between 0 and 100 inclusively
const randomNumber = getRandomNumber();
console.log(randomNumber);

//4.Generate a random number between 50 and 100 inclusively
console.log(getRandomNumberBetweenFiftyAndHundred());

//5.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//6.
const base = 2;
const height = 3;
console.log(`Area of Traingle with base ${base} units and height ${height} units is ${getAreaOfTriangle(base,height)} sq. units `);
