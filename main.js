// creare la classe CD e la classe UI
// prendere il tasto submit, aggiungere evento click 
// creare 3 variabili e associarli ai 3 campi del dom e prendere gli input ( .value)
// creare un metodo nella classe UI con argomento class cd
// immagazzina il tbody in una varibiale
// creare l'elemento tr e popolare i cambi e infine appendere il tr alla lista
// chiamare il metodo con dentro l'argomento classe
// aggiungere un pulsante per rimuovere un cd con classe  <a>

import UI from './userInterface.js'

class CD {
  constructor(band, album, release) {
    this.band = band
    this.album = album
    this.release = release
  }
}

document.querySelector('#submit').addEventListener('click', (event) => {
  
  const band = document.querySelector('#band-input').value
  const album = document.querySelector('#album-input').value
  const release = document.querySelector('#release-input').value
  
  const cd = new CD(band, album, release)
  const ui = new UI()
  
  if(band === '' || album === '' || release === '') {
    return
  } else {
    ui.aggiungiCD(cd)
    ui.pulisciCampi()
    
    event.preventDefault()
  }
})

document.querySelector('.table-body').addEventListener('click', (event) => {

  const ui = new UI()
  ui.deleteCd(event.target)

  event.preventDefault()

})