const fibonacci = function(value) {
    if(typeof value === "string") value = Number(value);
    if(value<0) return "OOPS";
    let counter = 0;
    if(value === counter)
        return 0;
    let a = 1;
    counter++;
    if(value === counter)
        return a
    let b = a;
    counter++;
    if(value === counter)
        return b

    for(let i = 0; i<=value; i++)
    {
        let c = a+b;
        counter++;
        if(value == counter)
            return c
        let d = c + b;
        counter ++;
        if(value == counter)
            return d;

        a = c;
        b = d;
    }
};

// Do not edit below this line
module.exports = fibonacci;
