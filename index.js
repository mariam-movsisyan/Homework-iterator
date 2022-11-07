"use strict";
const object = {
    "data": 10,
    "res": 20,
    "data1": 30,
    "res1": 50,
    "data2": 50,
    [Symbol.iterator]: function () {
        let values = Object.values(object);
        let i = 0;
        return {
            next: () => {
                let start = values[i];
                let end = values[values.length];
                let done = start === end;
                i++;
                return {
                    value: start,
                    done: done,
                };
            }
        };
    }
};
let x = [...object];
function* generatorFunction(arr) {
    for (let i = 0; i < x.length; i++) {
        let result = 0;
        if (i == 0) {
            result = x[i];
            yield result;
        }
        else {
            result = x[i] + x[i - 1];
            yield result;
        }
    }
}
const sum = generatorFunction(x);
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());
for (let value of sum) {
    console.log(value);
}
