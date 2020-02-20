
exports.min = function min (array) {
    if ((arguments.length===0)|| (array.length==0)) {
    return 0;
    }
  
    let min;
    for (let i=0; i<array.length; i++) {
      for (let j=i+1; j<array.length;j++){
        if (array[i]<array[j]){
          min=array[i];
          array[i]=array[j];
          array[j]=min
  
        }
      }
    }
    return  min;
}

exports.max = function max (array) {
    if ((arguments.length===0)|| (array.length===0)) {
      return 0;
    }
    let max= Math.max(...array)  
    return max ; 
}

exports.avg = function avg (array) {
    if ((arguments.length===0)|| (array.length===0)) {
      return 0;
    }
    let avg = [...array].reduce((a, b) => a + b, 0)/[...array].length
    return avg
}  
