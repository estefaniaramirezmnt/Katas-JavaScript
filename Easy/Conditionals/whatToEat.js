function whatToEat(foodA, foodB) {
    if(Math.random()<=0.5) {
        return foodA;
    } else {
        return foodB;
    }
}
console.log(whatToEat("chinese", "burguer"))