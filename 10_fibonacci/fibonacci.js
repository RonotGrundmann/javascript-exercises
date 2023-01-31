const fibonacci = function(num) {
    let fib = [0, 1];
    if (num == 0 || num == 1 ){
        
        return fib[num];

    } else if (num >= 2){

        for (let i = 2; i <= num; i++){
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib[num];

    } else if (num < 0){
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
