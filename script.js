// Dados dos 5 animais
const animals = [
    {
        name: "Caramelo",
        description: "Um cachorro calmo e amoroso, ele está velhinho, mas já está na hora de conhecer o que é o amor. Porte M.",
        imageUrl: "IMG-20240910-WA0065.jpg."
    },
    {
        name: "Suzão",
        description: "Está à procura de um lar cheio de amor e carinho, foi resgatado pelo instituto SOS 4 patas.",
        imageUrl: "IMG-20240910-WA0066.jpg"
    },
    {
        name: "Sandro",
        description: "Cãozinho amigável e amoroso, porte M, resgatado das enchentes do RS.",
        imageUrl: "IMG-20240910-WA0067.jpg"
    },
    {
        name: "Ana",
        description: "FIV e FELV negativo, castrada, vacinada. Ela é bem assustada, então a família que quiser adotar terá que ter paciência com ela, mas nada que impeça de ter uma família.",
        imageUrl: "IMG-20240910-WA0064.jpg"
    },
    {
        name: "Luisa",
        description: "Precisa ser filha única, não gosta de dividir a atenção com outros doguinhos, mas é extremamente carinhosa e merece um lar cheio de amor.",
        imageUrl: "IMG-20240910-WA0068.jpg"
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
    const phoneNumber = "SEU_NUMERO"; // Substitua pelo seu número de WhatsApp, ex: "5541999999999"
    const message = `Estou interessado em adotar o ${animal.name}.`;

    // Monta o link para o WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    // Redireciona para o WhatsApp
    window.location.href = whatsappUrl;
});

// Carregar o primeiro animal ao abrir a página
loadAnimal(currentIndex);
