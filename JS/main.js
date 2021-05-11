let energiaHeroi = 100;
let energiaInimigo = 100;
let energiaIni = document.getElementById('energiaI')
let energiaHer = document.getElementById('energiaH')

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();

    energiaIni.innerHTML = energiaHeroi;

    if (energiaHeroi <= 0) {
        alert('fim de jogo, Inimigo venceu.')
        desabitaBotao()
    }
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();

    energiaHer.innerHTML = energiaInimigo;

    if (energiaInimigo <= 0) {
        alert('fim de jogo, Herói venceu.')
        desabitaBotao()
    }
}

const retornaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}

const desabitaBotao = () => {
    document.getElementById('bI').disabled = true;
    document.getElementById('bH').disabled = true;
}