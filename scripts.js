function success () {
    console.log(JSON.parse(this.responseText));
}
function error (err) { console.log('Erro:', err);}

var xhr = new XMLHttpRequest(); 
xhr.onload = success;
xhr.onerror = error;

xhr.open('GET', 'https://api.rawg.io/api/platforms?key=faf5f98c2363424cb9782e3a65276837')
xhr.send(); 

    fetch ('https://api.rawg.io/api/games?key=faf5f98c2363424cb9782e3a65276837')
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        let games = document.getElementById('games');
        let array = new Array();

        for(let i=0; i<6; i++){
          let j = Math.floor(Math.random() * 20);
          for(let k=0;k<array.length;k++){
            if(j===array[k]){
              j = Math.floor(Math.random() * 20);
            }
          }
          games.innerHTML+=`<div class="card mb-3">

            <img class="card-img-top" src="${data.results[j].background_image}" alt="..." />
          <div class="card-body">
              <h2 class="card-title h4"><b>${data.results[j].name}</b></h2>
              <p class="card-text"><b>Classificação Metacritic: </b>${data.results[j].metacritic}<br>
              <b>Data de lançamento: </b>${data.results[j].released} <br>
              <b>Avaliação: </b>${data.results[j].rating} 
              </p>
      
              <a class="btn btn-primary" href="#!">Read more →</a>
              <br>
          </div>
          
          `
          array.push(j);
        }
    });

    fetch ('https://api.rawg.io/api/platforms?key=faf5f98c2363424cb9782e3a65276837')
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        let plataformas = document.getElementById('plataformas');
        let array = new Array();

        for(let i=0; i<4; i++){
          let j = 1;
          j++


          plataformas.innerHTML+=`<div class="card mb-3">

          <img class="card-img-top" src="${data.results[j].background_image}" alt="..." />
          <div class="card-body">
              <h2 class="card-title h4">${data.results[j].name}</h2>
              <p class="card-text">Itens populares: ${data.results[j].games_count}</p>
              <a class="btn btn-primary" href="#!">Read more →</a>
          </div>

      </div>`
        }

          array.push(j);
        }
    );






