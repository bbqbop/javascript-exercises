const sumAll = function(x, y) {
    if (x <= 0 || y <= 0 || typeof(x && y) != 'number') return 'ERROR';
    let iter = y > x ? x : y;
    let limit = y > x ? y : x;
    sum = 0;
    for (iter; iter<= limit; iter++){
        sum += iter; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
