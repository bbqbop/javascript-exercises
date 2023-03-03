const fibonacci = function(num) {

if (num < 0) return 'OOPS';
    
let fibonacciSeq = [1,1,2];
    for (i = 3; i < 30 ; i++){
        fibonacciSeq.push(fibonacciSeq[i-1]+fibonacciSeq[i-2])
    }
return fibonacciSeq[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
