// New km variable
let km;
    // Ask for km
    km = parseInt(prompt('Quanti kilometri devi percorrere? (Scrivere solo il numero)'));
// New age variable
let age;
    // Ask for age
    age = parseInt(prompt('Inserisci la tua età attuale:'));

console.log(km + ' km, ' + age + ' anni');
// Calc ticket price
    // 1) 0.21 € per km
    let pricePerKm = 0.21 * km;
    // 2) -20% under 18
    if (age < 18) {
        pricePerKm = pricePerKm - (pricePerKm * 0.2);
    // 3) -40% over 65
    } else if (age > 65) {
        pricePerKm = pricePerKm - (pricePerKm * 0.4);
    } else {
        pricePerKm = pricePerKm;
    }
console.log(pricePerKm.toFixed(2));
// Print with 2 decimal digits
document.writeln('Il costo del biglietto è di: '+ pricePerKm.toFixed(2) + ' €');