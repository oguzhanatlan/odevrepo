
function islem(a, b, operator){
    switch (operator) {
        case "topla":
            return a + b
        case "cikar":
            return a - b
        case "carp":
            return a * b
        case "bol":
            return a / b
    
        default:
            return "İşlem tanımlanamadı!"
    }
}

let firstNumber = parseFloat(prompt("İlk sayı nedir?"))
let thenNumber = parseFloat(prompt("İkinci sayı nedir?"))
let actionOperator = prompt("Yapmak istediğiniz işlem nedir?")

console.log(islem(firstNumber, thenNumber, actionOperator))