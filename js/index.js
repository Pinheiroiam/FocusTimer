import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'
import Image from './image.js'
import {
  btnPlay,
  btnPause,
  btnStop,
  btnMore,
  btnLess,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  minutesDisplay,
  secondsDisplay,
  soundOutForest,
  soundOutRain,
  soundOutCoffee,
  soundOutFire
} from './elements.js'

const controls = Controls({
  btnPlay,
  btnPause,
  btnMore,
  btnLess,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  soundOutForest,
  soundOutRain,
  soundOutCoffee,
  soundOutFire
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()
const image = Image()

btnPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressBtn()
})

btnPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressBtn()
})

btnStop.addEventListener('click', function () {
  controls.stop()
  timer.reset()
  sound.pressBtn()
})

btnMore.addEventListener('click', function () {
  sound.pressBtn()
  timer.moreMinutes()
})

btnLess.addEventListener('click', function () {
  sound.pressBtn()
  timer.lessMinutes()
})

btnForest.addEventListener('click', function () {
  controls.clickedForest()
  sound.audioForest()
  image.imageForest()
})

btnRain.addEventListener('click', function () {
  controls.clickedRain()
  sound.audioRain()
  image.imageRainy()
})

btnCoffee.addEventListener('click', function () {
  controls.clickedCoffee()
  image.imageCoffeeShop()
  sound.audioCoffee()
})

btnFire.addEventListener('click', function () {
  controls.clickedFire()
  sound.audioFire()
  image.imageFireplace()
})
