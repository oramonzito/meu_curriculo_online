// Captura o evento de submissão do formulário para processamento via JS
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue, permitindo uma Single Page Application (SPA)

    // Armazenamento dos dados em constantes para validação
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback');

    // Expressão regular (Regex) para validar o formato do e-mail no lado do cliente
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Exibe feedback positivo ao usuário caso a validação seja bem-sucedida
        feedback.innerHTML = `<p style="color: green;">Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>`;
        this.reset(); // Limpa o formulário após o envio
    } else {
        feedback.innerHTML = `<p style="color: red;">Por favor, insira um e-mail válido.</p>`;
    }
});