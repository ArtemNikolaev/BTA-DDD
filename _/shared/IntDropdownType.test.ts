import {IntDropdownType} from "./IntDropdownType";

describe('Intermediary Dropdown Type', () => {
    describe('option', () => {
        [
            {option: 'asdfasdfasd', value: 1},
            {option: '123412312', value: 1},
            {option: '', value: 1},
        ].forEach(intermediate => it(
            `should be correct for 'option: ${intermediate.option}'`,
            () => expect(IntDropdownType.make(intermediate)).toBeInstanceOf(IntDropdownType)
        ));

        [
            {option: 112312, value: 1},
            {option: 0, value: 1},
            {option: [], value: 1},
            {option: {}, value: 1},
        ].forEach(intermediate => it(
            `should throw for 'option: ${intermediate.option}'`,
            () => expect(() => IntDropdownType.make(<IntDropdownType>intermediate)).toThrow()
        ));
    });

    describe('value', () => {
        it('No needs to test value, because we test in all in Decimal6Float',() => {})
    })
});