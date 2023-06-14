#!/usr/bin/node
const list = process.argv.slice(2).map(Number);
if (list.length == 0 || list.length == 1) {
  console.log(0);
} else {
  list.sort();
  console.log(list[list.length - 2]);
}
