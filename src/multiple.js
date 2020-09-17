function multiple(numb1, numb2) {
    if( typeof numb1 === "number" && typeof numb2 === "number"){
        return numb1 * numb2
    }
    return false
}

module.exports = multiple;