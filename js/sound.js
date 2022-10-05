import {
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume
} from './elements.js'

export default function () {
  const buttonPressAudio = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/audios_button-press.wav?raw=true')
  const kitchenTimer = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/audios_kichen-timer.wav?raw=true')
  const bgAudioForest = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/Forest.wav?raw=true')
  const bgAudioRain = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/rain.wav?raw=true')
  const bgAudioCoffee = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/coffee_shop.wav?raw=true')
  const bgAudioFire = new Audio('https://github.com/Pinheiroiam/FocusTimer/blob/master/assets/music/fireplace.wav?raw=true')

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffee.loop = true
  bgAudioFire.loop = true

  function pressBtn() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function audioForest() {
    btnForest.classList.contains('active')
    ? bgAudioForest.play()
    : bgAudioForest.pause()
  }

  function audioRain() {
    btnRain.classList.contains('active')
    ? bgAudioRain.play()
    : bgAudioRain.pause()
  }

  function audioCoffee() {
    btnCoffee.classList.contains('active')
    ? bgAudioCoffee.play()
    : bgAudioCoffee.pause()
  }

  function audioFire() {
    btnFire.classList.contains('active')
    ? bgAudioFire.play()
    : bgAudioFire.pause()
  }

  function setAudioVolume() {
    bgAudioForest.volume = inputForestVolume.value
    bgAudioRain.volume = inputRainVolume.value
    bgAudioCoffee.volume = inputCoffeeVolume.value
    bgAudioFire.volume = inputFireVolume.value
  }

  function resetForestVolume() {
    inputForestVolume.value = 0.5
  }

  function resetRainVolume() {
    inputRainVolume.value = 0.5
  }
  
  function resetCoffeeVolume() {
    inputCoffeeVolume.value = 0.5
  }
  
  function resetFireVolume() {
    inputFireVolume.value = 0.5
  }

  return {
    pressBtn,
    timeEnd,
    audioForest,
    audioRain,
    audioCoffee,
    audioFire,
    setAudioVolume,
    resetForestVolume,
    resetRainVolume,
    resetCoffeeVolume,
    resetFireVolume
  }
}
