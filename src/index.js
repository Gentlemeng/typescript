var str = "hello";


function add8(...rest) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join("");
    }
}
console.log(add8(1, 2, 3));
console.log(add8("a", "b", "c"));