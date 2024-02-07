function getLengthOfMissingArray(arrayOfArrays) {
  
    if(!Array.isArray(arrayOfArrays) || arrayOfArrays.length === 0){
      return 0;
    } 
    
    for(let indexOfArray = 0;indexOfArray <arrayOfArrays.length;indexOfArray++){
       
       if(!arrayOfArrays[indexOfArray]  || !Array.isArray(arrayOfArrays[indexOfArray]) ){
         return 0;
       }
     }
    
    arrayOfArrays.sort(function(a,b){return a.length-b.length});
    
    
    for(let index = 0;index <arrayOfArrays.length-1;index++){
      
      if(arrayOfArrays[index] == null || !Array.isArray(arrayOfArrays[index]) ||arrayOfArrays[index].length === 0 ){
        return 0;
      }
      
      let firstArrayLength = arrayOfArrays[index].length;
      let secondArrayLength = arrayOfArrays[index+1].length;
      
      if(secondArrayLength-firstArrayLength != 1){
        return firstArrayLength+1;
      }
      
    }
    
    return 0;
  }