import { it, expect } from "vitest"

import { calculate } from "./stats.ls";

it("PASSE LTES TESTS", () => {
    const tableau = [9, 1, 2, 4, 5];
    expect(calculate(tableau).minMax.min).toEqual(1)
})