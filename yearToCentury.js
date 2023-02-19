// Given a year, return the century it is in.
function century(year) {
    var result = Math.floor(year / 100)
    if (year % 100 != 0) {
        result = result + 1
    }
    return result
}


function century2(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }