const animals = [
    {
        name: "Babi",
        description: "Sou uma das sobreviventes das enchentes do Rio Grande do Sul, estava extremamente triste no abrigo, eu fiquei lá por dois meses até as tias do Instituto me trazerem para cá. Sou muito amorosa e adoro carinho, estou sonhando com uma casa nova.",
        imageUrl: "Bibi-Amora-5.webp"
    },
    {
        name: "pepperoni",
        description: "Fui resgatado após ser encontrado me arrastando, estava extremamente magro, desnutrido, muito debilitado, sem forças para ficar em pé. Estava com anemia e infecção. Fizeram raio x e descobriram uma fratura, mas era antiga, provavelmente foi ela, junto com a desnutrição que me deixaram sem andar. As tias do Instituto cuidaram bem de mim, eu tinha muita dor, fiquei internado um tempo, mas agora já estou recuperado. Sou FIV e FELV negativo! Estou pronto para ganhar uma casa.",
        imageUrl: "Pepperoni-6.webp"
    },
    {
        name: "Nuggets",
        description: "Minha mamãe foi resgatada comigo e com meus irmãos na barriga. Era um dia muito, muito frio e ainda estava chovendo. As tias do Instituto levaram ela para o hotelzinho e nós nascemos lá. Eu nasci com problema nos olhinhos, um deles eu perdi, o outro tenho um pontinho de catarata. Eu amo muito brincar, perdi meu olhinho mas tenho energia de sobra, mereço uma casa cheia de amor e carinho né!",
        imageUrl: "Nuggets-na-yoga-1.webp"
    },
    // Adicione mais animais aqui
];

let currentIndex = 0;

// Carregar o animal atual
function loadAnimal(index) {
    const animal = animals[index];
    document.getElementById('animal-name').textContent = animal.name;
    document.getElementById('animal-description').textContent = animal.description;
    document.getElementById('animal-image').src = animal.imageUrl;
}

// Ação de "swipe" para esquerda
document.getElementById('swipe-left').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % animals.length;
    loadAnimal(currentIndex);
});

// Ação de "swipe" para direita
document.getElementById('swipe-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % animals.length;
    loadAnimal(currentIndex);
});

// Carregar o primeiro animal na página
loadAnimal(currentIndex);
