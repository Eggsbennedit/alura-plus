const imagens = document.getElementsByClassName('secundario__imagem');

document.addEventListener('scroll', () => {
    var scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < imagens.length; i++) {
        var distTopo = imagens[i].getBoundingClientRect().top;
        if (distTopo < 500) {
            imagens[i].classList.add('naTela');
        } else {
            imagens[i].classList.remove('naTela');
        }
    }
})