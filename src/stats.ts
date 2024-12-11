
export function calculate(array: [], strict) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let avg = sum / array.length;
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    let median;
    array.sort();
    if (array.length % 2 === 0) {
        median = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        median = array[Math.floor(array.length / 2)];
    }

    return {
        sum: sum,
        avg: avg,
        minMax: { min: min, max: max },
        max: max,
        median: median,
    };
}
