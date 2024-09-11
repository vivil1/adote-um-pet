// Array de dados dos animais
const animals = [
    {
        name: "Cachrro1",
        description: "Um cachorro calmo e amoroso, ele está velhinho, mas já está na hora de conhecer o que é o amor. Porte M.",
        imageUrl: "img dog",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Caramelo"
    },
    {
        name: "Cachorro 2",
        description: "Um cachorro calmo e amoroso, ele está velhinho, mas já está na hora de conhecer o que é o amor. Porte M.",
        imageUrl: "img dog",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Caramelo"
    },
    {
        name: "Cachorro 3",
        description: "Um cachorro calmo e amoroso, ele está velhinho, mas já está na hora de conhecer o que é o amor. Porte M.",
        imageUrl: "img dog",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Caramelo"
    },
    {
        name: "Cachorro 4",
        description: "Está à procura de um lar cheio de amor e carinho, foi resgatado pelo instituto SOS 4 patas.",
        imageUrl: "img god",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Suzão"
    },
    {
        name: "cachorro 5",
        description: "Cãozinho amigável e amoroso, porte M, resgatado das enchentes do RS.",
        imageUrl: "img dog",
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

// Função para mostrar informações adicionais
document.getElementById('show-denuncia').addEventListener('click', function() {
    showInfo("Denúncia de Maus Tratos", "Aqui você encontrará informações sobre como denunciar maus-tratos a animais. É importante saber como proceder caso presencie ou tenha conhecimento de situações de abuso.");
});

document.getElementById('show-como-adotar').addEventListener('click', function() {
    showInfo("Como Adotar um Pet", "Para adotar um pet, entre em contato com um dos nossos representantes e siga os procedimentos necessários, como a entrevista e a análise do ambiente.");
});

