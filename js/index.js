function showText(text) {
    console.log('clicou na imagem!');
    var displayText = document.getElementById('displayText');
    displayText.innerText = text;

    //show text and hide others
    displayText.classList.remove('hidden_text');

}