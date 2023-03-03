const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g,'');
    const reverseString = string.split('').reverse().join('');
    return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
