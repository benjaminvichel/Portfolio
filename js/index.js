function showDiv() {
    console.log('clicou na imagem!');

    var displayDiv = document.getElementById();

    //show text and hide others
    displayDiv.classList.remove('hidden_div');

}


function showMessage(message) {
    event.preventDefault();
    var messageContainer = document.getElementById("messageContainer")
    switch (message) {
        case 'certificate':
            messageContainer.innerHTML = "<p>Aqui está o seu certificado!</p>"
            break;
        case 'outraMensagem1':
            messageContainer.innerHTML = "<p>Outra mensagem 1!</p>";
            break;
        case 'outraMensagem2':
            messageContainer.innerHTML = "<p>Outra mensagem 2!</p>";
            break;
        // Adicione mais casos conforme necessário
        default:
            messageContainer.innerHTML = "<p>Mensagem padrão!</p>";
    }
}