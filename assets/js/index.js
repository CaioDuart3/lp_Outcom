// Selecionando os elementos do carrossel
const carouselContainer = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let itemsToShow = 1; // Número inicial de itens a serem exibidos
let itemWidth = 100 / itemsToShow; // Largura inicial de cada item em %

function updateLayout() {
  // Ajusta o número de itens exibidos com base no tamanho da tela
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    itemsToShow = 1;
  } else if (screenWidth < 1024) {
    itemsToShow = 2;
  } else {
    itemsToShow = 3;
  }

  // Atualiza a largura de cada item
  itemWidth = 100 / itemsToShow;
  items.forEach(item => (item.style.minWidth = `${itemWidth}%`));

  // Reposiciona o carrossel de acordo com o índice atual
  showItem(currentIndex);
}

function showItem(index) {
  // Limita o índice ao intervalo de itens disponíveis
  if (index < 0) {
    currentIndex = items.length - itemsToShow;
  } else if (index >= items.length - itemsToShow + 1) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Aplica a transformação para deslizar os itens
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}

// Event listeners para os botões de navegação
prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
nextBtn.addEventListener('click', () => showItem(currentIndex + 1));

// Atualiza o layout no carregamento da página e na mudança de tamanho de tela
window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
