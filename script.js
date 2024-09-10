// Dados dos 3 animais
const animals = [
    {
        name: "Bolt",
        description: "Um cachorro enérgico e amoroso que adora brincar ao ar livre.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
    },
    {
        name: "Luna",
        description: "Uma gatinha calma e adorável, ideal para apartamentos.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
    },
    {
        name: "Max",
        description: "Cãozinho amigável, ótimo com crianças e outros animais.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/02/11/19/29/dog-1194083_1280.jpg"
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
