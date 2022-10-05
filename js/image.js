export default function () {
  const imgForest = document.querySelector('.forest')
  const imgRain = document.querySelector('.rain')
  const imgCoffee = document.querySelector('.coffee')
  const imgFire = document.querySelector('.fire')


  function imageForest() {
    imgForest.classList.toggle('hide')
  }

  function imageRainy() {
    imgRain.classList.toggle('hide')
  }
  
  function imageCoffeeShop() {
    imgCoffee.classList.toggle('hide')
  }
  
  function imageFireplace() {
    imgFire.classList.toggle('hide')
  }

  return {
    imageForest,
    imageRainy,
    imageCoffeeShop,
    imageFireplace
  }
}