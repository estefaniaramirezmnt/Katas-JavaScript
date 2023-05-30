const { default: TestRunner} = require("jest-runner");
const howManyYears = require(`./howManyYears`);

test('returns the number of years needed to the population grows', () => {
    expect(howManyYears(1000, 2, 100, 1300)).toBe(3);
})