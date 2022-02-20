import {IntType, IntTypeEnum} from "./IntermediaryType";

describe('Intermediary type', () => {
    Object.keys(IntTypeEnum).forEach((type:IntTypeEnum) => {
        it(`should works correctly with '${type}' value`, () => {
            expect(IntType.make(type)).toBeInstanceOf(IntType);
        });
    });

    [
        '', 123, null,
        undefined, [], {},
        Symbol(),
    ].forEach(el => {
        it(`should throw with '${typeof el}' value`, () => {
            expect(() => IntType.make(<IntTypeEnum>el)).toThrowError();
        });
    });
})