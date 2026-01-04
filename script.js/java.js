// Script para o formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário para poder exibir a mensagem

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome && email && mensagem) {
        document.getElementById('msg').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('msg').style.color = 'green';
        // Limpar o formulário após o envio
        document.getElementById('formContato').reset();
    } else {
        document.getElementById('msg').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('msg').style.color = 'red';
    }
});
