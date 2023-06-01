const { default: TestRunner} = require("jest-runner");
const bonusTime = require(`./bonusTime`);

test('if true, return the value plus 10, if false only the value', () => {
    expect(bonusTime(1000, true)).toBe('€10000');
    expect(bonusTime(200, false)).toBe('€200');
})