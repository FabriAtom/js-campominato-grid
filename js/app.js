console.log('campo minato')


const playButtonEl = document.querySelector('.play-button');
const gridElement = document.querySelector('.grid');
const difficoltàSelectEl = document.querySelector('select[name="difficoltà"]')

console.dir(gridElement)

playButtonEl.addEventListener('click', startGame);


function startGame() {
    // reset game 
    resetGame() 
    // console.log('creo la griglia')
    const difficoltàSelezionata = difficoltàSelectEl.value
    // console.log(difficoltàSelezionata)
    let dimensione = calcolaDimensioneGriglia(difficoltàSelezionata)
    posizioniBombe = generaBombe(dimensione ** 2)
    console.log(posizioniBombe)
    creaGriglia(dimensione)

    // creare 100 celle della griglia
}

function creaGriglia(dimensioneGriglia) {
    const numeroCelle = dimensioneGriglia ** 2
    for(let i = 0; i < numeroCelle; i++) {
        const cella = creaCella()
        // cella.style.flexBasis = ${100 / dimensioneGriglia}
        // cella.innerHTML = i + 1

        gridElement.append(cella)
    }
}

function generaBombe(max) {
    const bombe = []
    return bombe
}

function creaCella() {
    // creare l'elemento del dom 
    const el = document.createElement('div')
    // aggiungerer la classe cella
    el.classList.add('cella')
    // agg listner al click
    el.addEventListener('click', onClick)
    // ritornare l'elemento del dom
    return el
}

function onClick() {
    const numeroCella = parseInt(this.dataset.numero)
    let className = 'success'
    if (posizioniBombe.includes(numeroCella)) {
        className = 'danger'
    } else {
        punteggio++
        console.log(punteggio)
    }

    this.classList.add(className)
}

function resetGame() {
    // svuotare la griglia
    gridElement.innerHTML = ''
    // reset punteggio
    punteggio = 0
}

function calcolaDimensioneGriglia(difficoltà) {
    let dimensione = 10

    if(difficoltà === 'Difficile') {
        dimensione = 9
    } else if (difficoltà === 'Impossibile') {
        dimensione = 7
    }
    return dimensione
}
