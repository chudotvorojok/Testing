const {getResult} = require('./funtions/funtions.js')

window.addEventListener('DOMContentLoaded', () => {
    const $fistInput = document.getElementById('fistInput')
    const $secondInput = document.getElementById('secondInput')
    const $thirdInput = document.getElementById('thirdInput')
    const $fistArr = document.getElementById('fistArr')
    const $secondArr = document.getElementById('secondArr')
    const $thirdArr = document.getElementById('thirdArr')
    const $result = document.getElementById('processedArr')

    const firstArr = [], secondArr = [], thirdArr = []
    let resultArr = []

    $fistInput.addEventListener('keypress', (event) => onKeyEnter(event, firstArr, $fistArr))
    $secondInput.addEventListener('keypress', (event) => onKeyEnter(event, secondArr, $secondArr))
    $thirdInput.addEventListener('keypress', (event) => onKeyEnter(event, thirdArr, $thirdArr))

    const onKeyEnter = (event, arr, $arr) => {
      if (
        event.keyCode === 13 &&
        event.target.value >= 10 &&
        event.target.value < 100 &&
        arr.length < 10
      ) {
        arr.push(event.target.value)
        $arr.insertAdjacentText('beforeend', event.target.value + ' ')
        event.target.value = ''
        resultArr = getResult(firstArr, secondArr, thirdArr)
        if (resultArr.length !== 0) {
          $result.textContent = resultArr.reduce((sum = '', el) => {
            return sum + ' ' + el
          })
        } else {
          $result.textContent = ''
        }
      }
    }
  }
)
