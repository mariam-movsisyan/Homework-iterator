
const object = {
    "data": 10,
    "res": 20,
    "data1": 30,
    "res1": 50,
    "data2": 50,
    [Symbol.iterator] () {
        const values = Object.values(object);
        let i = 0;
        return {
            next: () => {
                const start = values[i];
                const end = values[values.length];
                const done = start === end;
                i++;
                return {
                    value: start,
                    done
                };
            }
        };
    }
};

let x = [...object];
function* generatorFunction(arr: number[]){
    for(let i = 0; i < x.length; i++){
        let result: number = 0;
        if(i === 0){
            result = x[i];
            yield result;
        }else{
            result = x[i] + x[i-1];
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

for(const value of sum){
    console.log(value);
}