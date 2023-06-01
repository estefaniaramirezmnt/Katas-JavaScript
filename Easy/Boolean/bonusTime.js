/*
Build a function that takes in two arguments (salary, bonus). 
Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. 
If bonus is false, return only his stated salary.
Examples: 
1000, true = €10000
200, false = €200
*/

const bonusTime = (salary, bonus) => bonus===true ? `€${salary * 10}` : `€${salary}`;

function bonusTime2(salary, bonus) {
    if (bonus === true) {
        return salary * 10;
    } else {
        return salary;
    }
}

module.exports = bonusTime;