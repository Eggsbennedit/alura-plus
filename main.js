const elementosEsquerda = document.getElementsByClassName('esquerda');
const elementosDireita = document.getElementsByClassName('direita');
const containers = document.getElementsByClassName('secundario');

function adicionaSlideInComIntervalo(conteudo_p) {
    let i = 0;

    function adicionaProximo() {
        if (i < conteudo_p.length) {
            conteudo_p[i].classList.add('slide_in');
            i++;
            setTimeout(adicionaProximo, 500);
        }
    }

    adicionaProximo();
}

(function(){
    const p = document.getElementsByClassName('principal');
    const conteudo_p = document.getElementsByClassName('principal_item');
    if (p.length > 0) {
        p[0].classList.add('comeco');
    }
    if (conteudo_p.length > 0) {
        adicionaSlideInComIntervalo(conteudo_p);
    }
})();

document.addEventListener('scroll', () => {
    for (var i = 0; i < containers.length; i++) {
        var distTopo = containers[i].getBoundingClientRect().top;
        if (distTopo < window.innerHeight * 25/100) {
            elementosEsquerda[i].classList.add('naTela');
            elementosDireita[i].classList.add('naTela');
        } else {
            elementosEsquerda[i].classList.remove('naTela');
            elementosDireita[i].classList.remove('naTela');
        }
    }
})