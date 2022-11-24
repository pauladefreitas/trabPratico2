function success () {
    console.log(JSON.parse(this.responseText));
}
function error (err) { console.log('Erro:', err);}

var xhr = new XMLHttpRequest(); 
xhr.onload = success;
xhr.onerror = error;

xhr.open('GET', 'https://api.rawg.io/api/platforms?key=faf5f98c2363424cb9782e3a65276837')
xhr.send(); 

let obj = JSON.parse(this.responseText);
let conteudo = ``