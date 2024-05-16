const elementosEsquerda = document.getElementsByClassName('esquerda');
const elementosDireita = document.getElementsByClassName('direita');
const containers = document.getElementsByClassName('secundario');

document.addEventListener('scroll', () => {
    for (var i = 0; i < containers.length; i++) {
        var distTopo = containers[i].getBoundingClientRect().top;
        if (distTopo < 200) {
            elementosEsquerda[i].classList.add('naTela');
            elementosDireita[i].classList.add('naTela');
        } else {
            elementosEsquerda[i].classList.remove('naTela');
            elementosDireita[i].classList.remove('naTela');
        }
    }
})