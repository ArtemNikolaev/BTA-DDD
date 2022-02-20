import {Decimal6Float} from "./Decimal6Float";

describe('Decimal6Float type', () => {
    [
        0,
        -0,
        1,
        -1,
        0.000007,
        -0.000007,
    ].forEach(value => {
        it(`should be correct for '${value}' value`, () => {
            expect(Decimal6Float.make(value)).toBeInstanceOf(Decimal6Float);
        })
    });

    [
        0.1000006,
        -0.1000006,
        0.0000006,
        -0.0000006,
    ].forEach(value => {
        it(`should throw for '${value}' value`, () => {
            expect(() => Decimal6Float.make(value)).toThrow();
        })
    })


})
