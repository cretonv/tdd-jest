// Implement the sum function here

function sum(numb1, numb2) {
    if( typeof numb1 === "number" && typeof numb2 === "number") {
        return numb1 + numb2
    }
    return false
}

module.exports = sum;