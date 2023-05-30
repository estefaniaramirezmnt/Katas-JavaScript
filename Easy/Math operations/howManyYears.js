/* p0 is the population
percent is the growth of the population per year
aug is the new inhabitants per year come to live in the twon
and p is the final account of people
You have to code a function that return the years that are needed to the population
to grow until reach p
Example:

p0, percent, aug, p = 1500, 5, 100, 5000
It will take 15 years. 

All numbers have to be integers. 
*/

function howManyYears(p0, percent, aug, p) {
    percent = percent/100
    let currentPopulation = p0 + p0*percent + aug;
    let years = 1;
    while ( currentPopulation < p) {
        currentPopulation = Math.floor(currentPopulation + currentPopulation * percent + aug);
        years += 1
    }
    return Math.ceil(years)
}

module.exports = howManyYears;