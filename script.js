// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19


// dichiaro variabile per immagazzinare il nome
var nome;
// dichiaro variabile per immagazzinare il cognome
var cognome;
// dichiaro variabile per immagazzinare il colore preferito
var colorePreferito;
// prompt per far inserire all'utente il nome e valorizzo la relativa variabile
nome = prompt("inserisci il tuo nome");
// prompt per far inserire all'utente il cognome e valorizzo la relativa variabile
cognome = prompt("inserisci il tuo cognome");
// prompt per far inserire all'utente il colore e valorizzo la relativa variabile
colorePreferito = prompt("inserisci il tuo colore preferito");
// inserisco l'aoutput sul documento
document.getElementById('my-id').innerHTML = nome + cognome + colorePreferito + "19";
