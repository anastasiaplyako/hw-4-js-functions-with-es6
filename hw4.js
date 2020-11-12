'use strict';

const splitAndMerge = (str, sp) =>
    str.split(" ").map(elem => elem.split("").join(sp)).join(" ")

const convert = (hash) => Object.entries(hash)

const toCamelCase = (str) => str.replace(/[-_](.)/g, (char) => char[1].toUpperCase())

const reverseEachWord = (str) => str.split(" ").map((word) => word.split("").reverse().join("")).join(" ")

const stringExpansion = (str) => !str.length ? '' : str.replace(/(\d)+([A-Za-zА-Яа-я])/g, (match, number, letter) =>
    letter.repeat(number)
)

const largest = (...args) => Math.max.apply(null, args)

const smallest = (...args) => Math.min.apply(null, args)

const transform = (baseArray) => baseArray.map((number) => () => number)

const sum = (...arg) => !arg.length ? 0 : arg[0] + sum.apply(null, arg.slice(1))

const countDown = time =>
    setTimeout(() => {
        if (time >= 0) {
            console.log(time);
            countDown(time - 1);
        } else {
            console.log(0)
        }
    }, 1000);

countDown(3);

module.exports = {
    largest: largest,
    smallest: smallest,
    stringExpansion: stringExpansion,
    reverseEachWord: reverseEachWord,
    toCamelCase: toCamelCase,
    convert: convert,
    splitAndMerge: splitAndMerge,
    transform: transform,
    sum: sum
}
