let energiaHeroi = 100;
let energiaInimigo = 100;

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();

    if (energiaHeroi <= 0) {
        alert('fim de jogo, Inimigo venceu.')
    }
    console.log('Herói ficou com: ', energiaHeroi);
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();

    if (energiaInimigo <= 0) {
        alert('fim de jogo, Herói venceu.')
    }
    console.log('Inimigo ficou com: ', energiaInimigo);
}

const retornaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}