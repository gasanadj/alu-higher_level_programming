#!/usr/bin/node
const Parent = require('./5-square');
class Square extends Parent {
    charPrint(c) {
        if (c === undefined) {
            super.print()
        } else {
            this.print(c)
        }
    }
    print (c) {
        for (let i = 0; i < this.height; i++) {
            let line = '';
            for (let j = 0; j< this.width; j++) {
                line += c
            }
            console.log(line)
        }
    }
}

module.exports = Square;