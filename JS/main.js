let energiaHeroi = 100;
let energiaInimigo = 100;
let smilleH = document.getElementById('smilleHe')
let smilleI = document.getElementById('smilleIn')
let energiaIni = document.getElementById('energiaI')
let energiaHer = document.getElementById('energiaH')
let areaInimigo = document.querySelector('.area-inimigo')
let areaHeroi = document.querySelector('.area-heroi')
let lista = document.getElementById('lista')

let listaPlacar = []

const atacarHeroi = () => {
    energiaHeroi = energiaHeroi - retornaNumeroAleatorio();
    energiaIni.innerHTML = energiaHeroi;

    alteraSmille('inimigo')

    if (energiaHeroi <= 0) {
        alert('fim da rodada, Inimigo venceu.')
        listaPlacar.push('inimigo')
        vencedor()
        reiniciaPartida()

        if (listaPlacar.length == 3) {
            desabitaBotao()
        }
    }
}

const atacarInimigo = () => {
    energiaInimigo = energiaInimigo - retornaNumeroAleatorio();
    energiaHer.innerHTML = energiaInimigo;

    alteraSmille('heroi')

    if (energiaInimigo <= 0) {
        alert('fim da rodada, Herói venceu.')
        listaPlacar.push('heroi')
        vencedor()
        reiniciaPartida()

        if (listaPlacar.length == 3) {
            desabitaBotao()
        }
    }
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

const alteraSmille = (personagem) => {
    if (personagem == 'heroi') {
        smilleI.innerHTML = ':-('
        areaInimigo.classList.add('atingido')

        setTimeout(() => {
            smilleI.innerHTML = ':-)'
            areaInimigo.classList.remove('atingido')
        }, 500)
    }

    if (personagem == 'inimigo') {
        smilleH.innerHTML = ':-('
        areaHeroi.classList.add('atingido')
        setTimeout(() => {
            smilleH.innerHTML = ':-)'
            areaHeroi.classList.remove('atingido')
        }, 500)
    }
}

const reiniciaPartida = () => {
    energiaHeroi = 100;
    energiaInimigo = 100;
    energiaIni.innerHTML = energiaHeroi;
    energiaHer.innerHTML = energiaInimigo;
}

const vencedor = () => {
    
    lista.innerHTML = "";

    listaPlacar.forEach((item) => {
        
        lista.innerHTML += `
        <ul>
        <li>${item.listaPlacar}</li>
        </ul>` 
    });

}