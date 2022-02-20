import {DropdownIntermediary} from "./DropdownIntermediary";
import {IntTypeEnum} from "./IntermediaryType";

describe('Dropdown Intermediary', () => {
    const intermediary  = {
        name: 'bla',
        order: 1,
        type: IntTypeEnum.DROPDOWN,
        dropdown: [
            {option: 'bla', value: 1}
        ]
    }

    it(`should workd correctly for type '${IntTypeEnum.DROPDOWN}'`, () => {
        expect(DropdownIntermediary.make(<DropdownIntermediary>intermediary)).toBeInstanceOf(DropdownIntermediary);
    })

    it(`should throw for type '${IntTypeEnum.RANGE}'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { type: IntTypeEnum.RANGE });

        expect(() => DropdownIntermediary.make(<DropdownIntermediary>throwIntermediary)).toThrow();
    })

    it('no need to test other class fields, because we test it in fields type classes', () => {});
});