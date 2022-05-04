function ModalMaisInfo(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("mostrar-modal");
    modal.classList.add("scroll");
    modal.addEventListener('click', desativaModal);
}


function desativaModal (event){
    const modal = document.getElementById("modal-mais-informacoes");
    const body = document.querySelector("#scroll");
    if(event.target.id == "modal-mais-informacoes" || event.target.id == "button-fechar-modal"
     || event.target.id == "button-ver-projeto-modal"){
        modal.classList.remove("mostrar-modal")
        body.classList.remove("scroll")
    }
}

const botaoMaisInfo = document.querySelector('#button-mais-info');
botaoMaisInfo.addEventListener('click', () => ModalMaisInfo("modal-mais-informacoes"));

/* GERAR CONTEUDO*/
const textoDescricao = document.querySelector("#texto-descricao");

