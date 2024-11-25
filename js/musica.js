const images = [
    "images/bateria.jpg",
    "images/fagote.jpg",
    "images/guitarra.jpg",
    "images/metronomo.jpg",
    "images/oboe.jpg",
    "images/orquestra.jpg",
    "images/piano.jpg",
    "images/sax.jpg",
    "images/teremim.jpg",
    "images/violino.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');

function changeImage() {
    // Altera a opacidade para 0 para fazer a transição
    carouselImage.style.opacity = 0;

    // Aguarda a transição de opacidade antes de mudar a imagem
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Cicla entre as imagens
        carouselImage.src = images[currentIndex];
        
        // Restaura a opacidade para 1
        carouselImage.style.opacity = 1;
    }, 1000); // Tempo da transição (1 segundo)
}

// Função sleep para aguardar um tempo antes de mudar a imagem
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função principal para iniciar o carrossel
async function startCarousel() {
    while (true) {
        changeImage();
        await sleep(4000); // Aguarda 4 segundos antes de mudar a imagem novamente
    }
}

// Inicia o carrossel
startCarousel();