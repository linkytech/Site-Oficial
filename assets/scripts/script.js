

(function () {
    var menu = document.querySelector('.Header');
    var imagem = document.querySelector('#logo');

    window.addEventListener('scroll', function() {
        if(window.scrollY > 0 ){
            menu.classList.add('MenuFixo');
            imagem.setAttribute('src', 'assets/images/Logobranco.png');
        }
        else {
            menu.classList.remove('MenuFixo');
            imagem.setAttribute('src', 'assets/images/logopreto.png');
        }
    });
})();