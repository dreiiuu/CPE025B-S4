function max(array) { 
    let maxValue = array[0]; 
    for(let i=1; i < array.length; i++) {
        if(array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    return maxValue; 
} 
 
// This prints incorrectly in the second example because the loop starts at index 1 instead of index 0.
console.log( max([1, 4, 6, 2])); // -> 6 
console.log( max([10, 4, 6, 2])); // -> 6