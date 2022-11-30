    fetch ('https://api.rawg.io/api/games?key=faf5f98c2363424cb9782e3a65276837')
    .then(res => res.json())
    .then(data => {

        console.log(data.results);

        let games = document.getElementById('games');


        for (let i=0; i<6; i++){

          games.innerHTML+=`<div class="card mb-3">

          <img class="card-img-top" src="${data.results[i].background_image}"/>
        <div class="card-body">
            <h2 class="card-title h4"><b>${data.results[i].name}</b></h2>
            <p class="card-text"><b>Classificação Metacritic: </b>${data.results[i].metacritic}<br>
            <b>Data de lançamento: </b>${data.results[i].released} <br>
            <b>Avaliação: </b>${data.results[i].rating} 
            </p>
    
            <a class="btn btn-primary" href="detalhes.html?id=${data.results[i].id}">Ler mais →</a>
            <br>
        </div>`
          }
        
    });
  

    fetch ('https://api.rawg.io/api/platforms?key=faf5f98c2363424cb9782e3a65276837')
    .then(res => res.json())
    .then(data => {
        console.log(data.results);

        let plataformas = document.getElementById('plataformas');


        for(let i=0; i<3; i++){

          plataformas.innerHTML+=`
          
          <div class="card mb-3">

            <img class="card-img-top" src="${data.results[i].image_background}">
            <div class="card-body">
                <h2 class="card-title h4"><b>${data.results[i].name}</b></h2>
                <p class="card-text"><b>Itens populares:</b> ${data.results[i].games_count}</p>
                <b>Principais jogos:</b>
                <ul>
                  <li>${data.results[i].games[0].name}</li>
                  <li>${data.results[i].games[1].name}</li>
                  <li>${data.results[i].games[2].name}</li>
                </ul>
            </div>

          </div>`
        
        }
    });




