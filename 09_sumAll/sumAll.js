const sumAll = function(a,b) {
    let total = 0;
    if(a<0 || b<0) return "ERROR";    
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if(a<=b)
    {
        for(let i =a; i<=b; i++)
        {
            total += i;
        }
    }
    if(a>=b)
    {
        for(let i = b; i<=a; i++)
        {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
