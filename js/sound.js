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
  const buttonPressAudio = new Audio('../assets/music/audios_button-press.wav')
  const kitchenTimer = new Audio('../assets/music/audios_kichen-timer.wav')
  const bgAudioForest = new Audio('../assets/music/Forest.wav')
  const bgAudioRain = new Audio('../assets/music/rain.wav')
  const bgAudioCoffee = new Audio('../assets/music/coffee_shop.wav')
  const bgAudioFire = new Audio('../assets/music/fireplace.wav')

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
