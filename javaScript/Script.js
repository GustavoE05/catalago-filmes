let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let btnDetalhesFilme = document.querySelector(".btnDetalhesFilme");
let mostrarFilme = document.getElementById('mostrar-filme');
let navFavoritos = document.querySelector('#nav-favoritos');
let home = document.querySelector("#home");

btnBuscarFilme.onclick = () =>{

    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=6752ca2a&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    item.Genre,
                    item.Runtime,
                    item.Poster,
                    item.Plot,
                    item.Director,
                    item.Actors,
                    item.Awards,
                    item.imdbRating
                );
                filmes.push(filme);
            });
            listarFilmes(filmes)
        })
    }
    return false;
}
let detalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=6752ca2a&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        mostrarFilme.appendChild(filme.getDetalhesFilme());
        let btnSalvar = document.querySelector("#btnSalvar");
        let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos')) || [];
        if (filmesFavoritos.some(favorito => favorito.id === filme.id)) {
            btnSalvar.disabled = true;
        } else {
            btnSalvar.onclick = () => {
                salvarFilme(filme);
                btnSalvar.disabled = true;
            }
        }
        document.querySelector("#btnExcluir").onclick=()=>{
            ExcluirFilme(filme);
        }

    });
}
let listarFilmes = async (filmes)=>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    if (filmes.length > 0){
        filmes.forEach(async(filme)=>{
            listaFilmes.appendChild(filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
                mostrarFilme.innerHTML = "";
                mostrarFilme.style.display = "block";
                let bnt = document.createElement("a");
                bnt.appendChild(document.createTextNode("x"));
                bnt.setAttribute("onclick","fecharBotao()");
                mostrarFilme.appendChild(bnt);
            }
        });
    }
}

function listarFavoritos(){
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos=JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item)=>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    })
    listarFilmes(filmes);
}
let salvarFilme = (filme) => {
    let filmesString = localStorage.getItem("filmesFavoritos");
    let filmes=null;
    if(filmesString){
        filmes=JSON.parse(filmesString);
        filmes.push(filme);
    }else{
        filmes=[filme];
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem("filmesFavoritos",filmes);
    console.log(filmes);
}
let ExcluirFilme = (filme) => {
    let filmesString = localStorage.getItem("filmesFavoritos");
    let filmes=JSON.parse(filmesString);
    let position = filmes.findIndex(function(item){
        return item.id === filme.id;
    });

    if(position!==1){
        filmes.splice(position, 1);
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem("filmesFavoritos", filmes)

}

navFavoritos.onclick = () =>{
    listarFavoritos();
}
function fecharBotao(){
    mostrarFilme.style.display = "none";
    document.querySelector("#card-filme").innerHTML = "";
}

home.onclick=()=>{
    document.querySelector("#lista-filmes").innerHTML = "";
}
//()