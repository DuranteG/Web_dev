//STRING - testo
let name = "Giovanni Durante";
let city = 'Milano';
let message = `Ciao ${name}, benvenuto a ${city}`;

// NUMERI
let age = 10;                   //Intero
let price = 19.99;              //Decimale
let temperature = -5;           //Negativo
let infinity = Infinity;        //Infinito
let nonANUmber = NaN;

//BOOLEAN
let isOnline = true;
let isOffLine = false;

//UNDEFINED - non definito
let userData;                   //Dichiarata ma non assegnata
let result = undefined;         //Esplicitamente undefined

//NULL - Vuoto intenzionale
let selectedFile = null;        //Nessun file selezionato
let currentUser = null;         //Nessun utente loggato

//SYMBOL - Identificatore unico
let id1 = Symbol("user");
let id2 = Symbol("user");

//BIGINT - Numeri molto grandi
let bigNumer = 1234567890987654321234567890n;
let anotherBig = BigInt("999999999999999999");

//ESEMPIO DI NUMERI
let num = 7;
console.log(num + 3); // 10
console.log(num * 2); // 14
console.log(num / 3); // ~2.3333
console.log(num % 2); // 1

let x = 10;
x++; // 11
x--; // 10

let y = 5;
y += 3; // 8
y *= 2; // 16

let value = 10;

console.log(value.toFixed(2)); // "10.00" Restituisce una stringa rappresentante il numero con n decimali
console.log((22 / 7).toPrecision(3));// "3.14" Restituisce una stringa rappresentante il numero con n cifre significative
console.log(parseInt("42")); // 42 Converte una stringa in un intero
console.log(parseFloat("3.14")); // 3.14 Converte una stringa in un numero a virgola mobile

let text = "Ciao, come stai?";
console.log("===INFORMAZIONI STRINGA===");
console.log("Testo: ", text);
console.log(text.length); // 16 Lunghezza della stringa
console.log(text.toUpperCase()); // "CIAO, COME STAI?" Converte la stringa in maiuscolo
console.log(text.toLowerCase()); // "ciao, come stai?" Converte la stringa in minuscolo
console.log(text.includes("come")); // true Verifica se la stringa contiene "come"
console.log(text.startsWith("Ciao")); // true Verifica se la stringa inizia con "Ciao"
console.log(text.indexOf("come")); // 6 Indice della prima occorrenza di "come"
console.log(text.lastIndexOf("o")); // 10 Indice dell'ultima occorrenza di "o"
console.log(text.endsWith("?")); // true Verifica se la stringa termina con "?"
console.log("Carattere posizione 0: ", text.charAt(0)); // "C" Restituisce il carattere alla posizione 0
console.log("Sottostringa dalla posizione 0 alla 5: ", text.substring(0, 5)); // "Ciao," Estrae la sottostringa dalla posizione 0 alla 5
console.log("Sottostringa dalla posizione 7 fino alla fine: ", text.slice(7)); // "come stai?" Estrae la sottostringa dalla posizione 7 fino alla fine
console.log(text.replace("come", "cosa")); // "Ciao, cosa stai?" Sostituisce "come" con "cosa"
console.log(text.replaceAll("o", "a")); // "Ciaa, cama stai?" Sostituisce tutte le occorrenze di "o" con "a"
console.log(text.split(" ")); // ["Ciao,", "come", "stai?"] Divide la stringa in un array di stringhe
console.log("===FINE INFORMAZIONI STRINGA===");

console.log("===CONVERSIONE DATI===");
let number = 10;
//conversione implicita e esplicita(casting) - implicita: JavaScript converte automaticamente il tipo di dato, 
// esplicita: lo converte l'utente.
console.log("Conversione esplicita");
console.log("Numero: ", number);
console.log("Numero convertito in stringa: ", number.toString()); // "10" Converte il numero in una stringa
console.log("Numero convertito in numero a virgola mobile: ", parseFloat(number)); // 10.0 Converte il numero in un numero a virgola mobile
console.log("Numero convertito in intero: ", parseInt(number)); // 10 Converte il numero in un intero
console.log("===FINE CONVERSIONE DATI===");

console.log("===BOOLEANI===");
let isLogged = true;
let isAdmin = false;
console.log("Utente loggato: ", isLogged);
console.log("Utente admin: ", isAdmin);
console.log("===FINE BOOLEANI===");

console.log("===OPERATORI DI CONFRONTO===");
console.log("10" == 10); //true perchè con == avviene il confronto tra valori, mentre === avviene il confronto tra valori e tipi di dati.
console.log(5 == 5); // true
console.log(10 != 5); // true
console.log("5" === 5); // false (tipi diversi)
console.log(10 !== "10"); // true (tipi diversi)
console.log(8 > 3); // true
console.log(5 < 2); // false
console.log(7 >= 7); // true
console.log(4 <= 3); // false
console.log("===FINE OPERATORI DI CONFRONTO===");

console.log("===CICLI===");
let nome = "Giovanni";
for(let i = 0; i < nome.length; i++){
    console.log(`Lettera ${i}: ${nome[i]}`);
}
for(let lettera of nome){
    console.log(`Lettera: ${lettera}`);
}
console.log("===FINE CICLI===");

console.log("===FUNZIONI===");
function saluta(nome){
    console.log(`Ciao ${nome}`);
}
saluta(nome);
function somma(a, b){
    let result = a + b;
    if(!isNumber(a) || !isNumber(b)){
        return "Errore: i parametri devono essere numeri";
    }
    return result;
}
function isNumber(value){
    return typeof value === "number";
}
console.log(`La somma è: ${somma(10, 20)}`);
console.log("===FINE FUNZIONI===");