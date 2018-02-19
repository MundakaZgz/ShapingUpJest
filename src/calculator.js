function sum(a, b) {
    validateInput(a, b);
    return a + b;
}

function sub(a, b) {
    validateInput(a, b);
    return a - b;
}

function mul(a, b) {
    validateInput(a, b);
    return a * b;
}

function validateInput(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('Parameters should be numbers');
    }
}

module.exports = {
    sum,
    sub,
    mul
};