export default function () {
  const imgForest = document.querySelector('.forest')
  const imgRain = document.querySelector('.rain')
  const imgCoffee = document.querySelector('.coffee')
  const imgFire = document.querySelector('.fire')


  function imageForest() {
    imgForest.classList.toggle('hide')
    imgRain.classList.add('hide')
    imgCoffee.classList.add('hide')
    imgFire.classList.add('hide')
  }

  function imageRainy() {
    imgForest.classList.add('hide')
    imgRain.classList.toggle('hide')
    imgCoffee.classList.add('hide')
    imgFire.classList.add('hide')
  }
  
  function imageCoffeeShop() {
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffee.classList.toggle('hide')
    imgFire.classList.add('hide')
  }
  
  function imageFireplace() {
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffee.classList.add('hide')
    imgFire.classList.toggle('hide')
  }

  return {
    imageForest,
    imageRainy,
    imageCoffeeShop,
    imageFireplace
  }
}