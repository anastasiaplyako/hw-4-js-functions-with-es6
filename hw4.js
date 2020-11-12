'use strict';

const splitAndMerge = (str, sp) =>
    str.split(" ").map(elem => elem.split("").join(sp)).join(" ");

const convert = (hash) => {
    return Object.entries(hash);
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

const toCamelCase = (str) => {
    return str.replace(/[-_](.)/g, (char) => char[1].toUpperCase());
}

const reverseEachWord = (str) => {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

const stringExpansion = (str) => {
    if (!str.length) return "";
    return str.replace(/(\d)+([A-Za-zА-Яа-я])/g, (match, number, letter) =>
        letter.repeat(number)
    )
}

const largest = (...args) => {
    return Math.max.apply(null, args);
}

const smallest = (...args) => {
    return Math.min.apply(null, args);
}

const transform = (baseArray) => baseArray.map((number) => () => number);

const sum = (...arg) => {
    if (!arg.length) {
        return 0;
    }
    return arg[0] + sum.apply(null, arg.slice(1));
}

const countDown = time => {
    setTimeout(() => {
        if (time >= 0) {
            console.log(time);
            countDown(time - 1);
        } else {
            console.log(0)
        }
    }, 1000);
}

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
