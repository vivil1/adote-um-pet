// Array de dados dos animais
const animals = [
    {
        name: "Dora",
        description: "Essa mocinha está à procura de uma família. Fêmea, porte P/M, aproximadamente 4 anos. Muito Brincalhona.",
        imageUrl: "images/IMG-20240911-WA0043.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20a%20Dora"
    },
    {
        name: "Bella e Max",
        description: "Filhotes para adoção responsável. 1 macho e 1 fêmea. Aproximadamente 3 meses.",
        imageUrl: "images/IMG-20240911-WA0042.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20a%20Bella%20e%20Max"
    },
    {
        name: "Pretinha",
        description: "Pretinha está à procura de uma família. Fêmea, porte M, aproximadamente 1 ano.",
        imageUrl: "images/IMG-20240911-WA0044.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20a%20Pretinha"
    },
    {
        name: "Zeus e Buzz",
        description: "Dois machinhos à procura de uma família. Serão porte M. Aproximadamente 4 ou 5 meses.",
        imageUrl: "images/IMG-20240911-WA0045.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Buzz%20e%20o%20Zeus"
    },
    {
        name: "Simba",
        description: "Cãozinho amigável e amoroso, está a procura da família ideal.",
        imageUrl: "images/IMG-20240911-WA0046.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Simba"
    },
    {
        name: "Duque",
        description: "Filhote macho para a adoção. Uma ótima opção de amigo para todos os momentos. Ele tem aproximadamente 3 meses.",
        imageUrl: "images/IMG-20240911-WA0047.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Duque"
    },
    {
        name: "Encantada",
        description:"Cachorra fêmea para adoção. Porte M/G, mastrada, dócil e convive bem com outros cachorrinhos.",
        imageUrl: "images/IMG_20240911_101358_541.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20a%20Encantada"
    },
    {
        name: "Buck",
        description: "Cãozinho e amoroso, porte M, foi abandonado na frente da escola CECSFA. Adoção responsável. Que tal mostrar para ele o que é o amor de uma família?",
        imageUrl: "images/IMG_20240911_101405_424.jpg",
        whatsapp: "https://wa.me/5541999446689?text=Estou%20interessado%20em%20adotar%20o%20Buck"
    }
];

let currentAnimalIndex = 0;

// Garantir que o DOM seja carregado antes de adicionar os event listeners
document.addEventListener('DOMContentLoaded', function() {
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
});
