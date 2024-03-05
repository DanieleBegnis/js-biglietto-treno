//chiedere a utente età e km da percorrere
const age = parseInt(prompt('Inserire la propria età'));
console.log(age);
const travelDistance = parseInt(prompt('Inserire quanti km sono da percorrere'));
console.log(travelDistance);
//moltiplicare kilometri per 0,21
const price = travelDistance * 0.21
console.log(price)
//applicare sconto del 20% per under 18 e 40% per over 65
let userAge
if (age > 65) {
    const bigDiscount = price * 40 / 100
    console.log(bigDiscount)
    const bigDiscountPrice = price - bigDiscount
    console.log(bigDiscountPrice)
} else if (age < 18);
    const smallDiscount = price * 20 / 100
    console.log(smallDiscount)
    const smallDiscountPrice = price - smallDiscount
    console.log(smallDiscountPrice)
//arrotondare output ai centesimi
//mostrare risultato