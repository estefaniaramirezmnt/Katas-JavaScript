const { default: TestRunner} = require("jest-runner");
const bonusTime = require(`./bonusTime`);

test('if true, return the value plus 10, if false only the value', () => {
    expect(bonusTime(1000, true)).toBe('€10000');
    expect(bonusTime(200, false)).toBe('€200');
})

test('if salary is not a number, return a message', () => {
    expect(bonusTime('1000', true)).toBe('Parameters must be a number and a boolean');
})

test('if bonus is not a boolean, return a message', () => {
    expect(bonusTime(1000, 'true')).toBe('Parameters must be a number and a boolean');
})

test('if salary is negative, return a message', () => {
    expect(bonusTime(-1, true)).toBe('Salary must be a positive number');
})