import {RangeIntermediary} from "./RangeIntermediary";
import {IntTypeEnum} from "./IntermediaryType";

describe('Range Intermediary', () => {
    const intermediary  = {
        id: 'bla',
        name: 'bla',
        order: 1,
        type: IntTypeEnum.RANGE,
        from: 1,
        to: 2,
        step: 0.1,
    }

    it(`should work correctly for type '${IntTypeEnum.RANGE}'`, () => {
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

    it('should work correctly for name update', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = RangeIntermediary.make(<RangeIntermediary>Object.assign({}, intermediary, {name: 'bla1'}))

        expect(obj.update(objUpdate)).toBeInstanceOf(RangeIntermediary);
    })

    it('should work correctly for order update', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = RangeIntermediary.make(<RangeIntermediary>Object.assign({}, intermediary, {order: 12}))

        expect(obj.update(objUpdate)).toBeInstanceOf(RangeIntermediary);
    })

    it('should thorw for id change', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = RangeIntermediary.make(<RangeIntermediary>Object.assign({}, intermediary, {id: 'bla2'}))

        expect(() => obj.update(objUpdate)).toThrow();
    })

    it('should throw for type change', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = Object.assign({}, intermediary, {type: IntTypeEnum.DROPDOWN})

        expect(() => obj.update(<RangeIntermediary>objUpdate)).toThrow();
    })

    it('should throw if step decresed', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = Object.assign({}, intermediary, {step: 0.01})

        expect(() => obj.update(<RangeIntermediary>objUpdate)).toThrow();
    })

    it('should throw if from increased', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);
        const objUpdate = Object.assign({}, intermediary, {from: 1.5})

        expect(() => obj.update(<RangeIntermediary>objUpdate)).toThrow();
    })

    it('should works if from changed and old from is reachable', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);

        const objUpdate = Object.assign({}, intermediary, {from: .9})
        expect(obj.update(<RangeIntermediary>objUpdate)).toBeInstanceOf(RangeIntermediary);

        const objUpdate2 = Object.assign({}, intermediary, {from: .8, step: .2})
        expect(obj.update(<RangeIntermediary>objUpdate2)).toBeInstanceOf(RangeIntermediary);
    })

    it('should throw if from changed and old from is not reachable', () => {
        const obj = RangeIntermediary.make(<RangeIntermediary>intermediary);

        const objUpdate = Object.assign({}, intermediary, {from: .99})
        expect(() => obj.update(<RangeIntermediary>objUpdate)).toThrow();

        const objUpdate2 = Object.assign({}, intermediary, {from: .8, step: .3})
        expect(() => obj.update(<RangeIntermediary>objUpdate2)).toThrow();

    })
});