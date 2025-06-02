const removeFromArray = function(a,...theArgs) {
    return a.filter(item => !theArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
