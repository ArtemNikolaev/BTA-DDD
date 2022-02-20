import {PositiveInt} from "./PositiveInt";

describe('PositiveInt type', () => {
    [1]
        .forEach(num => it(
            `should be correct for '${num} value`,
            () => expect(PositiveInt.make(num)).toBeInstanceOf(PositiveInt)
        ));

    [-1, .1, 'bla', null, undefined, [], {}]
        .forEach(num => it(
            `should throw for '${num} value`,
            () => expect(() => PositiveInt.make(<number>num)).toThrow()
        ));
});
