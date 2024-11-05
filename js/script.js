// // funzione palindroma

function palindromo(parola) {

    parola = parola.toLowerCase();
    const parolaPalindroma = parola.split('').reverse().join('');

    return parola === parolaPalindroma
}

// // richiresta al utente

const parolaUser = prompt("dimmi una parola a tua scelta")

// verifica sela parola e palindoma

if (palindromo(parolaUser)) {
    console.log(`La parola "${parolaUser}" e palindroma`)
} else {
    console.log(`La parola "${parolaUser}" non e palindroma`)
}



