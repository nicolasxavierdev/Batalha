let energiaHeroi = 100;
let energiaInimigo = 100;
let smilleH = document.getElementById('smilleHe')
let smilleI = document.getElementById('smilleIn')
let energiaIni = document.getElementById('energiaI')
let energiaHer = document.getElementById('energiaH')

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();

    energiaIni.innerHTML = energiaHeroi;

    if (energiaHeroi <= 0) {
        alert('fim de jogo, Inimigo venceu.')
        desabitaBotao()
    }
    atacarInimig()
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();

    energiaHer.innerHTML = energiaInimigo;

    if (energiaInimigo <= 0) {
        alert('fim de jogo, Herói venceu.')
        desabitaBotao()
    }
    atacarHero()
}

const retornaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 11);
}

const desabitaBotao = () => {
    document.getElementById('bI').disabled = true;
    document.getElementById('bH').disabled = true;
}

const reiniciar = () => {

        location.reload()
    }


/* const atacarHero = () => {
    smilleI.innerHTML = ':-('

    setTimeout(() => {
        smilleI.innerHTML = ':-)'
    }, 500)
}

const atacarInimig = () => {
    smilleH.innerHTML = ':-('

    setTimeout(() => {
        smilleH.innerHTML = ':-)'
    }, 500)
} */