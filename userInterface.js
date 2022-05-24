class UI {
  aggiungiCD(cd) {
    const lista = document.querySelector('.table-body')
    const row = document.createElement('tr')
    row.className = 'position-relative'
    row.innerHTML = `
    <td>${cd.band}</td>
    <td>${cd.album}</td>
    <td>${cd.release}</td>
    <button class="link-light position-absolute top-0 end-0 btn-sm" id="delete"> Elimina </button>
    `
    lista.appendChild(row)
  }

  pulisciCampi() {
    document.querySelector('#band-input').value = ''
    document.querySelector('#album-input').value = ''
    document.querySelector('#release-input').value = ''
  }

  deleteCd(target) {
    if(target.id === 'delete') {
      console.log(target.parentElement.remove())
    }
  }
}

export default UI