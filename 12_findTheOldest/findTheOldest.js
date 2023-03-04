const findTheOldest = function(array) {

return array.reduce((max,val) => {
    if (max.yearOfDeath === undefined) {
        max.yearOfDeath = (new Date).getFullYear();
    }
    if (val.yearOfDeath - val.yearOfBirth > max.yearOfDeath - max.yearOfBirth) return val;
    return max;
})

};

// Do not edit below this line
module.exports = findTheOldest;
