class Ator{
    constructor(id,nome){
        this.nome=nome;
        this.id=id
    }
}
class Diretor{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Filme{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }
    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body"); 
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title"); 
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
        let divGenero= document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;"); 
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao= document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;"); 
        hCardTitle.appendChild(document.createTextNode(this.titulo)); 
        divGenero.appendChild(document.createTextNode(this.genero)); 
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    setBtnDetalhes = () =>{
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id", this.id);
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme btn btn-primary");
    }
    getBtnDetalhes = () =>{
        return this.btnDetalhes
    }

    getDetalhesFilme = () =>{
        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute('class', 'card mb-3');
        cardDetalhes.style.maxWidth = '540px';
        cardDetalhes.style.margin = '10px';
        let detalhesrow = document.createElement('div');
        detalhesrow.setAttribute('class','row g-0');
        let detalhescol = document.createElement('div');
        detalhescol.setAttribute('class','col-md-4');
        let detalhesimg = document.createElement('img');
        detalhesimg.setAttribute('class','img-fluid rounded-start');
        detalhesimg.setAttribute('src',this.cartaz);
        let coluna = document.createElement('div');
        coluna.setAttribute('class','col-md-8');
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.appendChild(document.createTextNode(this.titulo));
        let cardSinopse = document.createElement('p');
        cardSinopse.setAttribute('class', 'card-text');
        cardSinopse.appendChild(document.createTextNode(this.sinopse));
        let cardAvaliacao = document.createElement('p');
        cardAvaliacao.setAttribute('class', 'card-text');
        cardAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        let cardDirecao = document.createElement('p');
        cardDirecao.setAttribute('class', 'card-text');
        cardDirecao.appendChild(document.createTextNode(this.direcao));
        let cardDuracao = document.createElement('p');
        cardDuracao.setAttribute('class', 'card-text');
        cardDuracao.appendChild(document.createTextNode(this.duracao));
        let cardGenero = document.createElement('p');
        cardGenero.setAttribute('class', 'card-text');
        cardGenero.appendChild(document.createTextNode(this.genero));
        let cardClassificacao = document.createElement('p');
        cardClassificacao.setAttribute('class', 'card-text');
        cardClassificacao.appendChild(document.createTextNode(this.classificacao));
        let cardElenco = document.createElement('p');
        cardElenco.setAttribute('class', 'card-text');
        
        cardElenco.appendChild(document.createTextNode(this.elenco));
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSinopse);
        cardBody.appendChild(cardAvaliacao);
        cardBody.appendChild(cardDirecao);
        cardBody.appendChild(cardDuracao);
        cardBody.appendChild(cardGenero);
        cardBody.appendChild(cardClassificacao);
        cardBody.appendChild(cardElenco);

        detalhescol.appendChild(detalhesimg);
        coluna.appendChild(cardBody);
        detalhesrow.appendChild(detalhescol);
        detalhesrow.appendChild(coluna);
        cardDetalhes.appendChild(detalhesrow);

        let divBtns = document.createElement("div");
        divBtns.setAttribute("class", "btn-container");

        let botaoSalvar=document.createElement("button");
        botaoSalvar.appendChild(document.createTextNode("salvar"));
        botaoSalvar.setAttribute("id","btnSalvar");
        botaoSalvar.setAttribute("class","btn btn-success");
        cardDetalhes.appendChild(botaoSalvar);

        let botaoExcluir =document.createElement("button");
        botaoExcluir.appendChild(document.createTextNode("Excluir"));
        botaoExcluir.setAttribute("id","btnExcluir")
        botaoExcluir.setAttribute("class","btn btn-danger");
        cardDetalhes.appendChild(botaoExcluir);
        
        divBtns.appendChild(botaoSalvar);
        divBtns.appendChild(botaoExcluir);
        cardBody.appendChild(divBtns);
        return cardDetalhes;
    }
}
