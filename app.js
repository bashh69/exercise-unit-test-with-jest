// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
// we include fromEuroToDollar here as well because it needs to be exported
//module.exports = { sum, fromEuroToDollar };

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar /1.2) * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / 127.9) * 0.8;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
