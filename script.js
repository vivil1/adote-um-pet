// Função para trocar da página de introdução para a página de adoção
document.getElementById('start-adoption').addEventListener('click', function() {
    document.querySelector('.intro-container').style.display = 'none';
    document.getElementById('adoption-page').style.display = 'block';
});

// Funções para mostrar e esconder as seções de informações adicionais
function showSection(sectionId) {
    document.querySelectorAll('.info-content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('show-denuncia').addEventListener('click', () => {
    showSection('denuncia-info');
});
document.getElementById('show-contato').addEventListener('click', () => {
    showSection('contato-info');
});
document.getElementById('show-como-adotar').addEventListener('click', () => {
    showSection('como-adotar-info');
});
document.getElementById('show-o-que-preciso').addEventListener('click', () => {
    showSection('o-que-preciso-info');
});

document.getElementById('hide-denuncia').addEventListener('click', () => {
    document.getElementById('denuncia-info').style.display = 'none';
});
document.getElementById('hide-contato').addEventListener('click', () => {
    document.getElementById('contato-info').style.display = 'none';
});
document.getElementById('hide-como-adotar').addEventListener('click', () => {
    document.getElementById('como-adotar-info').style.display = 'none';
});
document.getElementById('hide-o-que-preciso').addEventListener('click', () => {
    document.getElementById('o-que-preciso-info').style.display = 'none';
});
