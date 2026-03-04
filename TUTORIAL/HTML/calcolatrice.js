/* 
    File: calculator.js
    Autore: Giovanni Durante
    Descrizione: Calcolatrice semplice
    Data: 2026-02-16
*/

let num1 = 10;
let num2 = 3;
let operatore = "add";

console.log("=== CALCOLATORE SEMPLICE ===");
let result = 0;
if(operatore === "add"){
    result = num1 + num2;
    console.log(`Risultato: ${num1} + ${num2} = ${result}`);
}else{
    console.log("Operazione non supportata")
}