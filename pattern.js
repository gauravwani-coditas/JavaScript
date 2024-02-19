
let rowVal = 5;

for(let rowIndex = 0;rowIndex < rowVal;rowIndex++){

    let row = '';
    let colIndex1 = 0;

    while(colIndex1 < rowVal-rowIndex){

        row = row+" ";
        colIndex1++;
   }
   row = row+"*";
   console.log(row);

}
    
