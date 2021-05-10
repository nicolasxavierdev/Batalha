let energiaHeroi = 100;
let energiaInimigo = 100;

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();

    document.getElementById('energiaH').innerHTML = energiaHeroi;

    if (energiaHeroi <= 0) {
        alert('fim de jogo, Inimigo venceu.')
    }
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();

    document.getElementById('energiaI').innerHTML = energiaInimigo;

    if (energiaInimigo <= 0) {
        alert('fim de jogo, Herói venceu.')
    }
}

const retornaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}