
const array = [1,2,3,4,5,6,7,8,9,10];

const myFilter = (array,operation)=>{
    let resultArray = [];
    for(const element of array){
        if(operation(element)){
            resultArray.push(element);
        }
    }
    return resultArray;

}

// const odds = array.filter(getOdds);

const odds = myFilter(array,(number) => {
    if(number%2){
        return true;
    }
    else{
        return false;
    }
});

const evens = myFilter(array,(number) => {
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
})

console.log('Odds : '+odds);
console.log('Evens : '+evens);

//map function

const myMap = (array,square) => {

    let ans = [];
    for(const element of array){
        ans.push(square(element));
    }
    return ans;
}

console.log('Square using myMap : '+myMap(array,(number) => number**2));

//reduce function

const myReduce = (array,getSum) => {

    let accumulator = array[0];
    for (let index = 1; index < array.length; index++) {
        accumulator = getSum(accumulator, array[index]);
    }
   return accumulator;
}


console.log('Sum : '+myReduce(array,(accumulator,currentValue)=>accumulator+currentValue));