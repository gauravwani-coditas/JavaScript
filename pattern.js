
let rowVal = 10;
const mid = parseInt(rowVal/2);

for(let rowIndex = 0;rowIndex < mid;rowIndex++){

    let row = '';
    

    for(let colIndex1 = 0;colIndex1<10;colIndex1++){
    
        if(colIndex1 === mid-rowIndex-1){
            row = row + "*";
        }
        else if(colIndex1 === mid+rowIndex-1){
            row = row + "*";
        }
        else{
            row = row + " ";
        }
    }

   console.log(row);

}
for(let rowIndex = 0;rowIndex < mid-1;rowIndex++){

    let row = " ";
    

    for(let colIndex1 = 0;colIndex1<10;colIndex1++){

        if(colIndex1 === rowIndex){
            row = row + "*";
        }
        // else if(colIndex1 === 10-rowIndex-4 ){
        //     row = row+"*";
        // }
        else{
            row = row + " ";
        }


    }

   console.log(row);

}
    
