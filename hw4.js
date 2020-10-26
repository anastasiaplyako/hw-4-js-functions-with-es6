'use strict';

let splitAndMerge = (str, sp) => {
    return [...str].join(sp).split(`${sp} ${sp}`).join(" ");
}

let convert = (hash) => {
    return Object.entries(hash);
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

let toCamelCase = (str) => {
    return str.replace(/[-_]+/g, '-').replace(/[-_](.)/g, (char) => char[1].toUpperCase());
}

let reverseEachWord = (str) => {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

let stringExpansion = (str) => {
    if (!str.length) return "";
    return str.replace(/(\d)+([A-Za-zА-Яа-я])/g, (match, number, letter) =>
        number.replace(/\d/g, letter.repeat(number))
    )
}

let largest = (...args) => {
    return Math.max(...args);
}

let smallest = (...args) => {
    return Math.min(...args);
}

let transform = (baseArray) => baseArray.map((number) => () => number);

let sum = (...arg) =>{
    if (!arg.length) {
        return 0;
    }
    return arg[0] + sum(...arg.slice(1));
}

let countDown = (time) => {
    let interval = setInterval(function () {
        console.log(time);
        time--;
        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
    return interval;
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
