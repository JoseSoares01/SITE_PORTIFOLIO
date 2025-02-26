document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o link de download
    const downloadLink = document.querySelector('.download-btn'); // Usa a classe correta

    if (downloadLink) {
        // Adiciona o evento de clique
        downloadLink.addEventListener('click', async (e) => {
            try {
                // URL do seu CV (substitua pelo caminho correto)
                const cvUrl = '/Skils/Europass-CV.pdf'; // Confirme se o caminho está certo

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

                // Adiciona uma classe para feedback visual
                downloadLink.classList.add('downloaded');

                // Remove a classe após 2 segundos
                setTimeout(() => {
                    downloadLink.classList.remove('downloaded');
                }, 2000);

            } catch (error) {
                console.error('Erro no download:', error);
                alert('Desculpe, ocorreu um erro ao baixar o CV. Por favor, tente novamente.');
            }
        });

        // Efeito de hover no ícone do botão de download
        downloadLink.addEventListener('mouseenter', () => {
            const icon = downloadLink.querySelector('.list-icon');
            if (icon) icon.style.transform = 'scale(1.1)';
        });

        downloadLink.addEventListener('mouseleave', () => {
            const icon = downloadLink.querySelector('.list-icon');
            if (icon) icon.style.transform = 'scale(1)';
        });
    } else {
        console.error("Elemento '.download-btn' não encontrado!");
    }

    // Dark Mode
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme');
        });
    } else {
        console.error("Checkbox do Dark Mode não encontrado!");
    }
});
