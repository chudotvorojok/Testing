const {getResult} = require('./funtions')

describe('Test of getResult function', () => {
    test('[50,10,14],[50,10,13],[50,12,13]', () => {
        let firstArr=[50,10,14]
        let secondArr=[50,10,13]
        let thirdArr=[50,12,13]
        expect(getResult(firstArr,secondArr,thirdArr)).toBe[10]
    })
    test('[50,10,13],[50,10,13],[50,10,13]', () => {
        let firstArr=[50,10,13]
        let secondArr=[50,10,13]
        let thirdArr=[50,10,13]
        expect(getResult(firstArr,secondArr,thirdArr)).toBe[null]
    })
})
