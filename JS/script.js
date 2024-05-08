const userKm = Number.parseInt (prompt('Quanti chilometri vuoi percorrere?'));
const userAge = Number.parseInt (prompt('Quanti anni hai?'));
const priceInt = Number(userKm) * 0.276;
const saleUnder = Number(priceInt) * 21 / 100;
const saleOver = Number(priceInt) * 42 / 100;
let saleUnderPrice = Number.parseFloat (Number(priceInt) - Number(saleUnder)).toFixed(2);
let saleOverPrice = Number.parseFloat (Number(priceInt) - Number(saleOver)).toFixed(2);
if ((userAge) < 18){
    console.log (saleUnderPrice);
}
else if ((userAge) > 65){
    console.log (saleOverPrice);
}
else{
    console.log (priceInt);
} 