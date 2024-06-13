//Funções para abrir um pop-up onde colocarmos botões onclick
function abrirModal() {
  let modal = document.getElementById('modal');
  let areaModal = document.getElementById('areaModal');
  modal.classList.add('show');
  setTimeout(() => {
    areaModal.classList.add('open');
  }, 10); // Timeout para permitir que o navegador aplique a mudança de estilo
}

function fecharModal() {
  let modal = document.getElementById('modal');
  let areaModal = document.getElementById('areaModal');
  areaModal.classList.remove('open');
  setTimeout(() => {
    modal.classList.remove('show');
  }, 500); // Tempo da animação para ocultar o modal
}

$(document).ready(function () {
  $('.carousel').carousel();
});

function abrirModalSucesso() {
  let modal = document.getElementById('modalSucesso');
  modal.style.display = 'block';
}

function fecharModalSucesso() {
  let modal = document.getElementById('modalSucesso');
  modal.style.display = 'none';
}
