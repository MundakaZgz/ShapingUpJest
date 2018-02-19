const calculator = require('./calculator');

describe('Calulator tests', () => {
    test('add 1 + 2 equals 3', () => {
        expect(calculator.sum(1, 2)).toBe(3);
    });

    test('add 1 + a throws an error', () => {
        function sumNonNumbers() {
            return calculator.sum(1, 'a');
        }
        expect(sumNonNumbers).toThrowError(Error);
    });

    test('sub 2 - 1 equals 1', () => {
        expect(calculator.sub(2, 1)).toBe(1);
    });

    test('sub 1 - a throws an error', () => {
        function subNonNumbers() {
            return calculator.sub(1, 'a');
        }
        expect(subNonNumbers).toThrowError(Error);
    });

    test('mul 2 * 1 equals 2', () => {
        expect(calculator.mul(2, 1)).toBe(2);
    });

    test('mul 1 * a throws an error', () => {
        function mulNonNumbers() {
            return calculator.mul(1, 'a');
        }
        expect(mulNonNumbers).toThrowError(Error);
    });
});