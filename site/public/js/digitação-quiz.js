var paragrafo = document.querySelector('h1')
var cursor = document.querySelector('.cursor')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 250)

  } 
}

escrever()