const userKm = prompt('Quanti chilometri vuoi percorrere?');
const userAge = prompt('Quanti anni hai?');
let priceInt = Number.parseFloat((userKm) * 0.276).toFixed(2);
if ((userAge) < 18){
    let saleUnderPrice = Number.parseFloat ((priceInt) - (priceInt) * 21 / 100).toFixed(2);
    console.log (saleUnderPrice);
    document.getElementById ("price").innerText = saleUnderPrice
}
else if ((userAge) > 65){
    let saleOverPrice = Number.parseFloat ((priceInt) - (priceInt) * 42 / 100).toFixed(2);
    console.log (saleOverPrice);
    document.getElementById ("price").innerText = saleOverPrice
}
else{
    console.log (priceInt);
    document.getElementById ("price").innerText = priceInt
} 