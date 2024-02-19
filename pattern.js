
let rowVal = 5;

for(let rowIndex = 0;rowIndex < rowVal;rowIndex++){

    let row = '';
    let colIndex1 = 0;

    while(colIndex1 < rowVal){

        if(colIndex1 === rowVal-rowIndex){
            row = row + "";
        }
        else{
            row  = row + " ";
        }
    colIndex1++;
   }

//    while(colIndex2 < rowVal){

//     if(colIndex2 === rowVal-rowIndex){
//         row = row + "";
//     }
//     else{
//         row  = row + " ";
//     }
// colIndex1++;
}
   console.log(row);
//    while(colIndex1 < 10){

//     if(colIndex === rowVal-colIndex1){
//         row+= "*";
//     }
//     else{
//         row+= " ";
//     }
//    }
    
    
}