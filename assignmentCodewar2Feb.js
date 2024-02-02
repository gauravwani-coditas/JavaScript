function feast(beast, dish) {
  //your function here
    
   distFirstIndex = dish[0];
   dishLastIndex = dish[dish.length-1];
    
    beastFirstIndex = beast[0];
    beastLastIndex = beast[beast.length-1];
    
    if(beastFirstIndex === distFirstIndex && beastLastIndex === dishLastIndex){
      return true;
    }
    return false;
}