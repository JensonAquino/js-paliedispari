// es 1

// // richiresta al utente

const parolaUser = prompt("dimmi una parola a tua scelta")

// verifica sela parola e palindoma

if (palindromo(parolaUser)) {
    console.log(`La parola "${parolaUser}" e palindroma`)
} else {
    console.log(`La parola "${parolaUser}" non e palindroma`)
}


// es 2

const userChoice = prompt("scegli tra pari e dispari")
const userNumber = parseInt(prompt("dimmi un numero tra  1 e 5"))

const pcNum = getRandomNum(1, 5)
const sum = userNumber + pcNum

const sumResult = evenOdd(sum)

if (userChoice === evenOdd(sum)) {
    console.log("hai vinto")
} else {
    console.log("hai perso")
}

// // funzione palindroma

/**
 * funzione che inverte la parola 
 * @param {string} parola
 * @returns {any}
 */
function palindromo(parola) {

    parola = parola.toLowerCase();
    const parolaPalindroma = parola.split('').reverse().join('');

    return parola === parolaPalindroma
}


// funzione rdmNum
/**
 * genera un numero casuale tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//funzione even odd
/**
 * funzione che ritorna  "even" se il numero e pari e "odd" se il numero e dispari
 * @param {number} numberToCheck
 * @returns {string}
 */
function evenOdd(numberToCheck) {
    let result = " ";
    if (numberToCheck % 2 === 0) {
        result = "even"
    } else {
        result = "odd"
    };

    return result
}
