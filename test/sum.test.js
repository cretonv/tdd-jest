// Add the unit tests of the sum function here
import sum from "../src/sum.js"

describe('Verify sum function', () => {

    test ('Les 2 arguments passés en paramètres sont pas des nombres', () => {
        expect(sum('1', 2)).toBe(false)
    })

    test ('additionné 1 + 2 pour obtenir 3', () => {
        expect(sum(1, 2)).toBe(3)
    })


})
