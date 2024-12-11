import { calculate } from "./stats.ts";

let numbers = [5, 3, 8, 1, 2, 7];

let stats = calculate(numbers);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>Max is ${stats.max}</p>
    <p>Min is ${stats.min}</p>
    <p>Average is ${stats.average}</p>
    <p>Median is ${stats.medium}</p>
  </div>
`
