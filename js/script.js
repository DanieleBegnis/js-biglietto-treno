//chiedere a utente età e km da percorrere
const age = parseInt(prompt('Inserire la propria età'));
const travelDistance = parseInt(prompt('Inserire quanti km sono da percorrere'));
//moltiplicare kilometri per 0,21
const price = travelDistance * 0.21
//applicare sconto del 20% per under 18 e 40% per over 65
if (age > 65) {
    let userDiscount = price * 0.6;
    console.log('Il prezzo per anziani è ' + price * 0.6 + '$');
    //arrotondare output ai centesimi
    let priceFix = userDiscount.toFixed(2);
    console.log(priceFix)
    //mostrare risultato
    finalPriceMessage = ('Il costo totale è ' + priceFix + ('$'));
    document.getElementById('message').innerHTML = finalPriceMessage
} else if (age < 18) {
    let userDiscount = price * 0.8;
    console.log('il prezzo per minorenni è ' + price * 0.8 + '$')
    //arrotondare output ai centesimi
    let priceFix = userDiscount.toFixed(2);
    console.log(priceFix)
    //mostrare risultato
    finalPriceMessage = ('Il costo totale è ' + priceFix + ('$'));
    document.getElementById('message').innerHTML = finalPriceMessage
} else {
    let userDiscount = price;
    console.log('il prezzo è ' + price + '$')
    //arrotondare output ai centesimi
    let priceFix = userDiscount.toFixed(2);
    console.log(priceFix)
    //mostrare risultato
    finalPriceMessage = ('Il costo totale è ' + priceFix + ('$'));
    document.getElementById('message').innerHTML = finalPriceMessage
}
console.log(userDiscount);

