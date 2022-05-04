function ModalMaisInfo(modalID) {
    const modal = document.getElementById(modalID);
    const body = document.querySelector("#scroll");
    modal.classList.add("mostrar-modal");
    modal.classList.add("scroll");
    modal.addEventListener('click', (event) => {
        if(event.target.id == "modal-mais-informacoes" || event.target.id == "button-fechar-modal"){
            modal.classList.remove("mostrar-modal")
            body.classList.remove("scroll")
        }
    });
}

const botaoMaisInfo = document.querySelector('#button-mais-info');
botaoMaisInfo.addEventListener('click', () => ModalMaisInfo("modal-mais-informacoes"));

/* GERAR CONTEUDO*/
const textoDescricao = document.querySelector("#texto-descricao");

