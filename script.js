function lerDescricao(botao) {
    // Interrompe qualquer fala em andamento
    window.speechSynthesis.cancel();

    // Captura a descrição do prato (atributo alt da imagem)
    const descricaoImagem = botao.parentElement.querySelector('img').alt;

    // Função para transformar o texto em fala
    lerTexto(descricaoImagem);
}

function lerTexto(texto) {
    const mensagem = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(mensagem);
}
