// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
    return length * width;
}
console.log(areaOfRectangle(4, 5));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {

    switch (month.toLowerCase()) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month';
    };
}
console.log(checkSeason('January'));


// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method

const findMax = (number1, number2, number3) => {

    if (number1 >= number2 && number1 >= number3) {
        return number1;
    } else if (number2 >= number1 && number2 >= number3) {
        return number2;
    } else {
        return number3;
    }
}
console.log(findMax(5,1,3));

const swapValues = (number1,number2) => {
    let temp = number1;
    number1 = number2;
    number2 = temp;
    return [number1,number2];
}

let number1 = 2;
let number2 = 3;
[number1,number2] = swapValues(2,3);
console.log(`number1 : ${number1}, number2 : ${number2}`);

//Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = () => {
    
}


// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


//6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const modifyArray = (array)=>{

   if(array.length < 5){
    return "Item not found";
   }
   array[4] = array[4].toUpperCase();
   return array;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
//['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

array = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
//7. Write a functions which checks if all items are unique in the array.
const isArrayUnique = (array) => {

    array.sort();
    for(let index = 1;index<array.length;index++){

        if(array[index].toLowerCase() === array[index-1].toLowerCase()){
            return false;
        }  
    }

    return true;
    
}
console.log('is array unique : '+isArrayUnique(array));


// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

const sevenRandomNumbers = () => {
    let numbers = [];
    for(let index = 0;index < 7;index++){
        let number = Math.floor(Math.random()*10);
        while(!numbers.includes(number)){
            numbers.push(number);
        }
    }

    return numbers;

}

console.log(sevenRandomNumbers());