#!/usr/bin/node
const dict = require('./101-data').dict;
const sorted_dict = {};
Object.keys(dict).forEach((key) => {
    let value = dict[key];
    console.log(`${key}: ${value}`)
    if (value in sorted_dict) {
        sorted_dict[value].push(key);
    } else {
        sorted_dict[value] = [key];
    }
});
console.log(sorted_dict)