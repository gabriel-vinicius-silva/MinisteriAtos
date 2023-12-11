function enviarMensagem() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;

    // Criar a mensagem que será enviada para o WhatsApp
    var mensagemWhatsApp = "Olá, meu nome é " + nome + ". " + mensagem;

    // Codificar a mensagem para uso em uma URL
    mensagemWhatsApp = encodeURIComponent(mensagemWhatsApp);

    // Número do seu WhatsApp (substitua com o seu número)
    var numeroWhatsApp = "5584999596721";

    // Redirecionar para o WhatsApp com a mensagem
    window.location.href = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemWhatsApp;
}
