const getTheTitles = function(a) {
    const titles = a.map(function(kitap){
        return kitap.title
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;