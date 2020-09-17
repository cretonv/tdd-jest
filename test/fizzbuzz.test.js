import choose_for_fizzbuzz from "../src/choose_for_fizzbuzz.js";
import fizzbuzz from "../src/fizzbuzz.js"

describe('Vérification de la fonction FizzBuzz', () => {

    describe("Vérification de la fonction qui le choix de ce qu'il faut afficher", () => {

        test ('Affiche Fizz car le nombre est divisible par 3', () => {
            expect(choose_for_fizzbuzz(6)).toBe('Fizz')
            expect(choose_for_fizzbuzz(21)).toBe('Fizz')
        })

        test ('Affiche Buzz car le nombre est divisible par 5', () => {
            expect(choose_for_fizzbuzz(20)).toBe('Buzz')
            expect(choose_for_fizzbuzz(10)).toBe('Buzz')
        })

        test ('Affiche FizzBuzz car le est divisible par 3 et 5', () => {
            expect(choose_for_fizzbuzz(15)).toBe('FizzBuzz')
            expect(choose_for_fizzbuzz(30)).toBe('FizzBuzz')
        })

        test ("Affiche le nombre comme tel car il n'est divisible ni par 3 ni par 5", () => {
            expect(choose_for_fizzbuzz(7)).toBe(7)
            expect(choose_for_fizzbuzz(19)).toBe(19)
        })

    })

    describe("Vérification de la fonction qui gère l'ffichage des tableaux", () => {

        test ("Le tableau se remplis bien avec les bonnes valeurs", () => {
            expect(fizzbuzz()).toStrictEqual([
                    1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
                    7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
                    13,     14,     'FizzBuzz', 16,     17,     'Fizz',
                    19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
                    'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
                    31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
                    37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
                    43,     44,     'FizzBuzz', 46,     47,     'Fizz',
                    49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
                    'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
                    61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
                    67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
                    73,     74,     'FizzBuzz', 76,     77,     'Fizz',
                    79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
                    'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
                    91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
                    97,     98,     'Fizz',     'Buzz'
            ])
        })
    })

})