// Add the unit tests of the sum function here
import multiple from "../src/multiple.js"

describe('Verify multiple function', () => {

    test ('Les 2 arguments passés en paramètres sont pas des nombres', () => {
        expect(multiple('1', 2)).toBe(false)
    })

    test ('multiplié 3 * 2 pour obtenir 6', () => {
        expect(multiple(3, 2)).toBe(6)
    })


})
