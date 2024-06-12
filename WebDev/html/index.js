//Funções para abrir um pop-up onde colocarmos botões onclick
function abrirModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function fecharModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

$(document).ready(function() {
    $('.carousel').carousel();
});
