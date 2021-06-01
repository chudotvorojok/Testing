function getResult(firstArr, secondArr, thirdArr) {
  const resultArr = []
  firstArr.forEach(el => {
    if (
      secondArr.includes(el) &&
      !thirdArr.includes(el)
    ) {
      resultArr.push(el)
    }
  })
  return resultArr
}

module.exports = {getResult}
