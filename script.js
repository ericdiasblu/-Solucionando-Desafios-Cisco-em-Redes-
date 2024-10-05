const titleContainer = document.querySelector('.title-container');
const selectionContainer = document.querySelector('#scenarioSelection');
const sections = document.querySelectorAll('.scenario-info');

function showScenarioSelection() {
    titleContainer.style.opacity = '0'; // Fade out do título
    selectionContainer.classList.add('show'); // Adiciona classe 'show' para animação
}

function showScenario(scenario) {
    selectionContainer.classList.remove('show'); // Remove a classe 'show' ao esconder a seleção
    sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
        if (section.id === scenario) {
            section.style.display = 'block'; // Mostra a seção correspondente
            section.classList.add('visible'); // Adiciona classe visível
        }
    });
}

function goBack() {
    sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
        section.classList.remove('visible'); // Remove a classe visível
    });
    selectionContainer.classList.add('show'); // Mostra a seleção de cenários
    titleContainer.style.opacity = '1'; // Exibe novamente o título
}

// Adiciona evento de scroll para controlar visibilidade
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight / 2) {
        titleContainer.style.opacity = '0'; // Fade out do título
        selectionContainer.classList.add('show'); // Exibe a seleção de cenários
    } else {
        titleContainer.style.opacity = '1'; // Fade in do título
        selectionContainer.classList.remove('show'); // Esconde a seleção de cenários
    }
});

// Inicialização: esconder as seções e exibir o título
document.addEventListener("DOMContentLoaded", () => {
    sections.forEach(section => {
        section.style.display = 'none'; // Garante que as seções estejam ocultas ao carregar a página
    });
});
