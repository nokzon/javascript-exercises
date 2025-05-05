const sumAll = function(firstInt, lastInt) {
    if (firstInt > lastInt) {
        let temp = firstInt;
        firstInt = lastInt;
        lastInt = temp;
    }

    if(!Number.isInteger(firstInt) || !Number.isInteger(lastInt) ) return "ERROR";
    if (firstInt < 0 || lastInt < 0) return "ERROR";

    let totalSum = 0;

    for(let i = firstInt; i <= lastInt; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
