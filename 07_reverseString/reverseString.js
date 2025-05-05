const reverseString = function(string) {
    const stringLength = string.length;
    let reversedString = "";

    for (i = 1; i <= stringLength; i++) {
        reversedString += string.charAt(stringLength-i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
