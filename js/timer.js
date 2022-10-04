import Sounds from './sound.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      const sound = Sounds()

      updateDisplay(minutes)

      if (isFinished) {
        updateDisplay()
        sound.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(--seconds))
      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function moreMinutes() {
    minutes = minutes + 5
    reset()
  }

  function lessMinutes() {
    minutes >= 5 ? minutes -= 5 : minutes = 0
    reset()
  }

  return {
    countdown,
    reset,
    updateDisplay,
    moreMinutes,
    lessMinutes,
    hold
  }
}
