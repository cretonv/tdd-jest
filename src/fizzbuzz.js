const choose_for_fizzbuzz = require('./choose_for_fizzbuzz')

function fizzbuzz() {
    let element_to_display = []
    for (let i = 1; i < 101; i++) {
        element_to_display.push(choose_for_fizzbuzz(i))
    }
    return element_to_display
}

export default fizzbuzz
