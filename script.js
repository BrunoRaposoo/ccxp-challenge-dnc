const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const launch = '05 dec 2024'
const ingressos = []

function CountDown() {
  const launchDate = new Date(launch)
  const today = new Date()

  const totalSeconds = Math.floor(launchDate - today) / 1000
  const finalDays = Math.floor(totalSeconds / 60 / 60 / 24)
  const finalHours = Math.floor(totalSeconds / 60 / 60) % 24
  const finalMinutes = Math.floor(totalSeconds / 60 ) % 60
  const finalSeconds = Math.floor(totalSeconds) % 60

  dia.innerHTML = TimeFormat(finalDays)
  hora.innerHTML = TimeFormat(finalHours)
  minuto.innerHTML = TimeFormat(finalMinutes)
  segundo.innerHTML = TimeFormat(finalSeconds)
}

function TimeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

CountDown()
setInterval(CountDown, 1000)

function selectCard(selector) {
  var element = document.querySelector(selector)
  element.classList.toggle('card-selected')
  if(ingressos.includes(selector)) {
    ingressos.pop(selector)
  } else {
    ingressos.push(selector)
  }
}

showSelectedCards = () => {
  (ingressos.length > 0 ? alert('Ingressos selecionados: ' + ingressos) : 'Nenhum ingresso foi selecionado')
}
