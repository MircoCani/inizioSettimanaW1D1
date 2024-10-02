//ritorna true se une dei due numeri è 50 o se la loro somma è 50

function verificaNumeri(num1, num2) {
    return num1 === 50 || num2 === 50 || (num1 + num2 === 50);
}

console.log(verificaNumeri(50, 20));
console.log(verificaNumeri(20, 80));
console.log(verificaNumeri(30, 20));

//funzione per rimuovere carattere

function removeChar(targetString, position){
    return targetString.replace(targetString[position], "")

}
const mystr = "MICROSOFT"

console.log(removeChar(mystr, 6))

// numeri compresi tra 40 e 60 o tra 70 e 100 stampa true

function compresiTra(num) {
    return (num >= 40 && num <= 60) || (num >= 70 && num <= 100);
}
console.log(compresiTra(72, 50));

//function che ritorna nome con "los" o "new"

function losOrNew(city) {
    if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")) {
        return city;
    } else {
        return false;
    }
}

//function che calcola e ritorna la somma di tutti gli elementi di un array

function arraySum(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    return sum;
}
console.log(arraySum([1, 2, 2, 4]))

//function che controlla se 1 o 3 non sono presenti in un array

function checkNum(array) {
    
    if (array.some(num => num === 1 || num === 3)) {
        return false; 
    } else {
        return true; 
    }
}

console.log(checkNum([7, 2]))

//funzione angoli

function trovaAngolo(gradi) {
    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto"; 
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso"; 
    } else if (gradi === 180) {
        return "piatto"; 
    } else {
        return "angolo non valido"; 
    }
}

console.log(trovaAngolo(122));

//funzione acronimi

function acronimo(frase) {
    let parole = frase.split(' '); 
    let acronimo = ''; 
    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i].charAt(0).toUpperCase();
    }

    return acronimo; 
}


console.log(acronimo("Fabrica Italiana automobili torino")); 