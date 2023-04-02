// It's your grade the highest one?
function betterThanTheRest(classPoints, yourPoints) {
    for (var currentGrade of classPoints) {
        if (currentGrade > yourPoints) {
            return false
        }
    } return true
}

console.log(betterThanTheRest([100, 40, 34, 57, 29, 72, 57, 88], 75))

// It's your grade better than the average?
function betterThanAverage(classPoints, yourPoints) {
    let totalClassPoints = 0;
    for (var currentGrade of classPoints) {
        totalClassPoints += currentGrade;
    }
    let averageGrade = totalClassPoints / classPoints.length;
    return yourPoints > averageGrade;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));