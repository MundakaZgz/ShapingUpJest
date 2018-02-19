function sum(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    throw new Error('Parameters should be numbers');
}

function sub(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a - b;
    }
    throw new Error('Parameters should be numbers');
}

function mul(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a * b;
    }
    throw new Error('Parameters should be numbers');
}

module.exports = {
    sum,
    sub,
    mul
};