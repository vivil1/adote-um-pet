// Dados dos 5 animais
const animals = [
    
    {
        name: "Suzão",
        description: "Está à procura de um lar cheio de amor e carinho, foi resgatado pelo instituto SOS 4 patas.",
        imageUrl: "images/IMG-20240910-WA0066.jpg"
    },
    {
        name: "Sandro",
        description: "Cãozinho amigável e amoroso, porte M, resgatado das enchentes do RS.",
        imageUrl: "images/IMG-20240910-WA0067.jpg"
    },
    {
        name: "Ana",
        description: "FIV e FELV negativo, castrada, vacinada. Ela é bem assustada, então a família que quiser adotar terá que ter paciência com ela, mas nada que impeça de ter uma família.",
        imageUrl: "images/IMG-20240910-WA0064.jpg"
    },
    {
        name: "Luisa",
        description: "Precisa ser filha única, não gosta de dividir a atenção com outros doguinhos, mas é extremamente carinhosa e merece um lar cheio de amor.",
        imageUrl: "images/IMG-20240910-WA0068.jpg"
    }
];

let currentIndex = 0;

// Função para carregar o animal atual na interface
function loadAnimal(index) {
    const animal = animals[index];
    document.getElementById('animal-name').textContent = animal.name;
    document.getElementById('animal-description').textContent = animal.description;
    document.getElementById('animal-image').src = animal.imageUrl;
}

// "Swipe" para esquerda (passar para o próximo animal)
document.getElementById('swipe-left').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % animals.length; // Volta para o primeiro após o último
    loadAnimal(currentIndex);
});

// "Swipe" para direita (redirecionar para WhatsApp)
document.getElementById('swipe-right').addEventListener('click', () => {
    const animal = animals[currentIndex];
    
    // Defina o número de telefone e a mensagem
    const phoneNumber = "41 999446689"; // Substitua pelo seu número de WhatsApp, ex: "5541999999999"
    const message = `Estou interessado em adotar o ${animal.name}.`;

    // Monta o link para o WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    // Redireciona para o WhatsApp
    window.location.href = whatsappUrl;
});

// Carregar o primeiro animal ao abrir a página
loadAnimal(currentIndex);

// Adicionar links para páginas de informações
document.getElementById('denuncia-link').addEventListener('click', () => {
    alert('Página de denúncia de maus-tratos ainda não implementada.');
});
document.getElementById('contato-link').addEventListener('click', () => {
    alert('Página de contatos de ajuda ainda não implementada.');
});
document.getElementById('como-adotar-link').addEventListener('click', () => {
    alert('Página sobre como adotar um pet ainda não implementada.');
});
document.getElementById('o-que-preciso-link').addEventListener('click', () => {
    alert('Página sobre o que é preciso para adotar um pet ainda não implementada.');
});
