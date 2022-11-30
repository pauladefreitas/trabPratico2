function detalhe (id) {

    let gamesDetalhe = document.getElementById('gamesDetalhe');

    fetch ('https://api.rawg.io/api/games?key=faf5f98c2363424cb9782e3a65276837')
    .then (res => res.json())
    .then (data => {

    let idx = data.results.findIndex (elem => elem.id == id);
    if (idx != -1) {

    let games = data.results[idx];

    gamesDetalhe.innerHTML+= `

    <img width=50% class="rounded mx-auto d-block" src="${data.results[idx].background_image}">
    <div class="card-body"> 
    <h2 class="card-title h4 text-white"><b>${data.results[idx].name}</b></h2>
    <p class="card-text text-white"><b>Classificação Metacritic: </b>${data.results[idx].metacritic}<br>
    <b>Data de lançamento: </b>${data.results[idx].released} <br>
    <b>Avaliação: </b>${data.results[idx].rating}<br>
    <b>Gêneros: </b>${data.results[idx].genres[0].name}, ${data.results[idx].genres[1].name}<br>
    <b>Screenshots: </b>
    <br>

    <div class="row">
    <div class="col"><img width=350px class="rounded float img-fluid" src="${data.results[idx].short_screenshots[1].image}"> </div>
    <div class="col"><img width=350px class="rounded float img-fluid" src="${data.results[idx].short_screenshots[2].image}"> </div>
    <div class="col"><img width=350px class="rounded float img-fluid" src="${data.results[idx].short_screenshots[3].image}"> </div>
    <div class="col"><img width=350px class="rounded float img-fluid" src="${data.results[idx].short_screenshots[4].image}"> </div>
  </div>

    <br>    
    </p>

    </div>`} 
}

)}