// Inicialize o EmailJS com sua public key logo após o carregamento do script
emailjs.init('saweEHa0a5OuWFF14'); // Substitua pela sua Public Key

// Função para enviar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coleta os dados do formulário
    var userEmail = document.getElementById('user-email').value;
    var userMessage = document.getElementById('user-message').value;

    // Envia o e-mail usando EmailJS
    emailjs.send('service_avnu3n5', 'template_gcw9mgg', {
            from_email: userEmail,
            message: userMessage
        })
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
            console.log('Sucesso:', response);
        }, function(error) {
            alert('Falha ao enviar mensagem. Tente novamente!');
            console.log('Erro:', error);
        });
});