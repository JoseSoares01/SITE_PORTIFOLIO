// Seleciona o link de download
const downloadLink = document.querySelector('.download-btn'); // Use a classe correta

// Adiciona o evento de clique
downloadLink.addEventListener('click', async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    try {
        // URL do seu CV (substitua pelo caminho correto)
        const cvUrl = './Skils/Europass-CV.pdf'; // ajuste o caminho do arquivo aqui!

        // Tenta fazer o fetch do arquivo
        const response = await fetch(cvUrl);

        if (!response.ok) {
            throw new Error('Download failed');
        }

        // Converte a resposta para blob
        const blob = await response.blob();

        // Cria uma URL temporária para o blob
        const downloadUrl = window.URL.createObjectURL(blob);

        // Cria um link temporário para forçar o download
        const tempLink = document.createElement('a');
        tempLink.href = downloadUrl;
        tempLink.download = 'MeuCV.pdf'; // Nome do arquivo que será baixado

        // Adiciona o link ao documento, clica nele e remove
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        // Limpa a URL temporária
        window.URL.revokeObjectURL(downloadUrl);

        // Opcional: Adiciona uma classe para feedback visual
        downloadLink.classList.add('downloaded');

        // Opcional: Remove a classe após 2 segundos
        setTimeout(() => {
            downloadLink.classList.remove('downloaded');
        }, 2000);

    } catch (error) {
        console.error('Erro no download:', error);
        // Opcional: Adiciona feedback visual de erro
        alert('Desculpe, ocorreu um erro ao baixar o CV. Por favor, tente novamente.');
    }
});

// Opcional: Adiciona efeito de hover mais elaborado
downloadLink.addEventListener('mouseenter', () => {
    downloadLink.querySelector('.list-icon').style.transform = 'scale(1.1)';
});

downloadLink.addEventListener('mouseleave', () => {
    downloadLink.querySelector('.list-icon').style.transform = 'scale(1)';
});

// Opcional: Adiciona tracking de downloads
function trackDownload() {
    // Se você tiver Google Analytics ou outra ferramenta de analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cv_download', {
            'event_category': 'CV',
            'event_label': 'CV Download'
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    checkbox.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
    });
});
