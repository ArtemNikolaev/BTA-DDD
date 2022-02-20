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
        [
            {option: 'asdfasdfasd', value: 0},
            {option: 'asdfasdfasd', value: -0},
            {option: 'asdfasdfasd', value: 1},
            {option: 'asdfasdfasd', value: -1},
            {option: 'asdfasdfasd', value: 0.000007},
            {option: 'asdfasdfasd', value: -0.000007},
        ].forEach(intermediate => it(
            `should be correct for 'value: ${intermediate.value}' value`,
            () => expect(IntDropdownType.make(intermediate)).toBeInstanceOf(IntDropdownType)
        ));

        [
            {option: 'asdfasdfasd', value: 0.1000006},
            {option: 'asdfasdfasd', value: -0.1000006},
            {option: 'asdfasdfasd', value: 0.0000006},
            {option: 'asdfasdfasd', value: -0.0000006},
        ].forEach(intermediate => it(
            `should be correct for 'value: ${intermediate.value}'`,
            () => expect(() => IntDropdownType.make(<IntDropdownType>intermediate)).toThrow()
        ));
    });
});