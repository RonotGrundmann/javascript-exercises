const removeFromArray = function(myArray){

    for (let i = 0; i < myArray.length; i++){

        for (let n = 1; n < arguments.length; n++){
            
            if (myArray[i] === arguments[n]) {
            myArray.splice(i, 1);
            i--;
            }
            
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
