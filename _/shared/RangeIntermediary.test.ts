import {RangeIntermediary} from "./RangeIntermediary";
import {IntTypeEnum} from "./IntermediaryType";

describe('Range Intermediary', () => {
    const intermediary  = {
        name: 'bla',
        order: 1,
        type: IntTypeEnum.RANGE,
        from: 1,
        to: 2,
        step: 0.01,
    }

    it(`should workd correctly for type '${IntTypeEnum.RANGE}'`, () => {
        expect(RangeIntermediary.make(<RangeIntermediary>intermediary)).toBeInstanceOf(RangeIntermediary);
    })

    it(`should throw for type '${IntTypeEnum.DROPDOWN}'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { type: IntTypeEnum.DROPDOWN });

        expect(() => RangeIntermediary.make(<RangeIntermediary>throwIntermediary)).toThrow();
    })


    it(`should throw when 'from > to'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { to: .5 });
        expect(() => RangeIntermediary.make(<RangeIntermediary>throwIntermediary)).toThrow();
    })

    it(`should throw when 'from == to'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { to: 1 });
        expect(() => RangeIntermediary.make(<RangeIntermediary>throwIntermediary)).toThrow();
    })

    it(`should throw when 'step < 0'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { step: -1 });
        expect(() => RangeIntermediary.make(<RangeIntermediary>throwIntermediary)).toThrow();
    })

    it(`should throw when 'step == 0'`, () => {
        const throwIntermediary = Object.assign({}, intermediary, { step: 0 });
        expect(() => RangeIntermediary.make(<RangeIntermediary>throwIntermediary)).toThrow();
    })



    it('no need to test other class fields, because we test it in fields type classes', () => {});
});