// Configuração do tema
const config = {
    theme: localStorage.getItem('theme') || 'dark'
};

// Função para atualizar o tema
const updateTheme = () => {
    const root = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Atualizar o estado do botão
    themeToggle.setAttribute('aria-pressed', config.theme === 'light');
    
    // Atualizar as cores baseadas no tema
    if (config.theme === 'light') {
        root.style.setProperty('--color-background', '#f3f4f6');
        root.style.setProperty('--color-background-light', '#ffffff');
        root.style.setProperty('--color-text', '#111827');
        root.style.setProperty('--color-text-muted', '#4b5563');
        document.body.style.background = 'linear-gradient(to bottom right, #f3f4f6, #ffffff)';
    } else {
        root.style.setProperty('--color-background', '#111827');
        root.style.setProperty('--color-background-light', '#1f2937');
        root.style.setProperty('--color-text', '#f3f4f6');
        root.style.setProperty('--color-text-muted', '#9ca3af');
        document.body.style.background = 'linear-gradient(to bottom right, #111827, #1f2937)';
    }
    
    // Salvar preferência
    localStorage.setItem('theme', config.theme);
};

// Função para sincronizar o tema
const syncTheme = () => {
    updateTheme();
};

// Selecionar o botão de tema
const themeToggle = document.querySelector('.theme-toggle');

// Função para lidar com o clique no botão
const handleThemeToggle = () => {
    const isLight = !themeToggle.matches('[aria-pressed="false"]');
    themeToggle.setAttribute('aria-pressed', isLight);
    config.theme = isLight ? 'light' : 'dark';
    syncTheme();
};

// Adicionar evento de clique ao botão
themeToggle.addEventListener('click', handleThemeToggle);

// Inicializar o tema
syncTheme();

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('backToTop');

// Mostrar/ocultar o botão baseado na posição do scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Função para voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});