export default function Controls({
  btnPlay,
  btnPause,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
}) {
  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  function stop() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  function clickedForest() {
    btnForest.classList.toggle('active')
  }

  function clickedRain() {
    btnRain.classList.toggle('active')
  }

  function clickedCoffee() {
    btnCoffee.classList.toggle('active')
  }

  function clickedFire() {
    btnFire.classList.toggle('active')
  }
  
  return {
    play,
    pause,
    stop,
    clickedForest,
    clickedRain,
    clickedCoffee,
    clickedFire,
  }
}
