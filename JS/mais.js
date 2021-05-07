let energiaHeroi = 100;
let energiaInimigo = 100;

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();
    console.log('Herói ficou com: ', energiaHeroi);
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();
    console.log('Inimigo ficou com: ', energiaInimigo);
}

const retornaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}