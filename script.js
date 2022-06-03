const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '756224436cmsh60d57eed64064e9p155bb6jsn5bbadf6424cb'
    }
};

let games = [];
let platform, category;
function changeCategory (newCategory) {
    category = newCategory;
    loadGames()
}

function loadGames() {
    let data1 = "";

    games.filter(game => {
        if (!category) return true;
        if (game.genre.includes(category)) return true;

    }).forEach((values) => {
        data1 += `<div class="cartao1">
           <img src="${values.thumbnail}" alt="imagem" class="img">
           <h1 class="titulo">${values.title}</h1>
           <p>Genero: ${values.genre}</p>
           <p>Plataforma: ${values.platform}</p>
       </div>`
    })

    /*const filteredData = ('button') => {
            const filteredData = values.filter(values => values.genre === button)
            setItemenu(filteredData)
            
            }*/
    document.getElementById('cartao').innerHTML = data1;
}

fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)
    .then(response => response.json())
    //.then(response => console.log(response))
    /*.catch(err => console.error(err));*/

    .then((completedata) => {
        games = completedata;
        loadGames()
    }).catch((erro) => {
        console.log(erro);
    })