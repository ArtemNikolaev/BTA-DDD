import {DropdownIntermediary} from "./DropdownIntermediary";
import {IntTypeEnum} from "./IntermediaryType";

describe('Dropdown Intermediary', () => {
    const intermediary  = {
        id: 'bla',
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

    it('should work correctly for name update', () => {
        const obj = DropdownIntermediary.make(<DropdownIntermediary>intermediary);
        const objUpdate = DropdownIntermediary.make(<DropdownIntermediary>Object.assign({}, intermediary, {name: 'bla1'}))

        expect(obj.update(objUpdate)).toBeInstanceOf(DropdownIntermediary);
    })

    it('should work correctly for order update', () => {
        const obj = DropdownIntermediary.make(<DropdownIntermediary>intermediary);
        const objUpdate = DropdownIntermediary.make(<DropdownIntermediary>Object.assign({}, intermediary, {order: 12}))

        expect(obj.update(objUpdate)).toBeInstanceOf(DropdownIntermediary);
    })

    it('should thorw for id change', () => {
        const obj = DropdownIntermediary.make(<DropdownIntermediary>intermediary);
        const objUpdate = DropdownIntermediary.make(<DropdownIntermediary>Object.assign({}, intermediary, {id: 'bla2'}))

        expect(() => obj.update(objUpdate)).toThrow();
    })

    it('should throw for type change', () => {
        const obj = DropdownIntermediary.make(<DropdownIntermediary>intermediary);
        const objUpdate = Object.assign({}, intermediary, {type: IntTypeEnum.RANGE})

        expect(() => obj.update(<DropdownIntermediary>objUpdate)).toThrow();
    })
});