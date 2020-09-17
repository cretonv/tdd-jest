function choose_for_fizzbuzz(val) {
    let divisible_3
    let divisible_5
    divisible_3 = val % 3
    divisible_5 = val % 5
    if(divisible_3 === 0 && divisible_5 === 0) {
        return "FizzBuzz"
    } else if (divisible_3 === 0) {
        return "Fizz"
    } else if (divisible_5 === 0) {
        return 'Buzz'
    } else {
        return val
    }
}

module.exports = choose_for_fizzbuzz