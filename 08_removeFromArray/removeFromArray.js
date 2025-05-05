const removeFromArray = function(array, unwantedValues) {
    let newArray = [];
    const numOfUnwantedValues = (arguments.length - 1);

    for (i = 0; i < (numOfUnwantedValues); i++) {
        newArray = [];
        for (j = 0; j < array.length; j++) {
            if (array[j] !== arguments[i+1]) {
                newArray.push(array[j]);
            };
        }; 
        array = newArray;
    };
    return newArray;

    // CREATE an empty array to store filtered results
    // FOR each argument excluding the first
    //    FOR each element in array
    //        if array[i] != argument 1
    //            add array[i] into newArray
    //    newArray = array
};

// Do not edit below this line
module.exports = removeFromArray;
