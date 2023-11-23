/*
Build a function that takes in two arguments (salary, hasBonus). 
Salary will be an integer, and hasBonus a boolean.

If hasBonus is true, the salary should be multiplied by 10. 
If hasBonus is false, return only his stated salary.
Examples: 
1000, true = €10000
200, false = €200
*/

// const BonusTime = (salary, hasBonus) => hasBonus===true ? `€${salary * 10}` : `€${salary}`;

function BonusTime(salary, hasBonus) {
    if (typeof(salary) !== "number" || typeof(hasBonus) !== "boolean" ) {
        return 'Parameters must be a number and a boolean';
    }
    if (salary < 0) {
        return 'Salary must be a positive number';
    }
    if (hasBonus === true) {
        return `€${salary  * 10}`;
    } else {
        return `€${salary}`;
    }
}

module.exports = BonusTime;