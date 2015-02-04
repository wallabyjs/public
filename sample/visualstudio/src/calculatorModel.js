var Calculator = function () {

};


Calculator.prototype.add = function (a, b) {
    if (a === 0) return b;

    if (b === 0) return a;

    return a + b;
};


Calculator.prototype.multiply = function (a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    return a * b;
};


Calculator.prototype.subtract = function (a, b) {
    return a - b;
};


Calculator.prototype.divide = function (a, b) {
    if (b === 0) throw new Error('Attempt to divide by zero');
    return a / b;
};