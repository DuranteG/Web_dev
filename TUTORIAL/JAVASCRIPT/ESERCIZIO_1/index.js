/*

  File: index.js
  Autore: Giovanni Durante
  Descrizione: Esercizio 1 - Scrivi una funzione che prenda due parametri, 
  base e altezza, e restituisca l'area del rettangolo.
  Data: 2026-02-24
*/

function areaRettangolo(a,b){
    let area = a * b;
    if(!isNumber(a) || !isNumber(b)){
        return "Errore numeri non validi";
    }
    return area;
}
function isNumber(value){
    return typeof value === "number";
}
let base = 10;
let altezza = 2;
console.log(`L'area del rettangolo è: ${areaRettangolo(base,altezza)}`);