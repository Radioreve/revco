
export function calculate(array: Array<number>) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let avg = sum / array.length;
    let median;
    array.sort();


    const min = array[0];
    const max = array[array.length-1]
    if (array.length % 2 === 0) {
        median = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        median = array[Math.floor(array.length / 2)];
    }

    return {
        sum,
        avg,
        min: min,
        max,
        median,
    };
}
