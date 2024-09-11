// Array de dados dos animais
const animals = [
   
    {
        name: "Suzão",
        description: "Está à procura de um lar cheio de amor e carinho, foi resgatado pelo instituto SOS 4 patas.",
        imageUrl: "images/IMG-20240910-WA0066.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Suzão"
    },
    {
        name: "Sandro",
        description: "Cãozinho amigável e amoroso, porte M, resgatado das enchentes do RS.",
        imageUrl: "images/IMG-20240910-WA0067.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Sandro"
    }
];

let currentAnimalIndex = 0;

// Função para trocar da página de introdução para a página de adoção
document.getElementById('start-adoption').addEventListener('click', function() {
    document.querySelector('.intro-container').style.display = 'none';
    document.getElementById('adoption-page').style.display = 'block';
    showAnimal();
});

// Função para exibir o próximo animal
function showAnimal() {
    const animal = animals[currentAnimalIndex];
    document.getElementById('animal-image').src = animal.imageUrl;
    document.getElementById('animal-name').textContent = animal.name;
    document.getElementById('animal-description').textContent = animal.description;
    document.getElementById('animal-card').style.display = 'block';
}

// Função para pular um animal (❌)
document.getElementById('swipe-left').addEventListener('click', function() {
    currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
    showAnimal();
});

// Função para redirecionar ao WhatsApp (❤️)
document.getElementById('swipe-right').addEventListener('click', function() {
    const animal = animals[currentAnimalIndex];
    window.location.href = animal.whatsapp;
});
