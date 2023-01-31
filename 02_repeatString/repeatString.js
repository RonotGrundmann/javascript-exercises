const repeatString = function(myString, multiplier) {
    newString = "";

    for (let i = 1; i <= multiplier; i++){
        newString = newString + myString;    
    }

    return newString;
};

// You can also just use the str.repeat() function.

// Do not edit below this line
module.exports = repeatString;
