const reverseString = function(myString) {
    let auxArray = [];
    let newString = "";
    let aux = 0;

    for ( let i = (myString.length -1); i >= 0; i--) {
        auxArray[aux] = myString[i];
        newString = newString + auxArray[aux];
        aux++;
    }

    //let newString = auxArray.join("");    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
