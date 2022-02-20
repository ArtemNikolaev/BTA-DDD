export enum IntTypeEnum {
    RANGE = 'range',
    DROPDOWN = 'dropdown'
}

declare const IntTypeSymbol: unique symbol;

export class IntType {
    [IntTypeSymbol]: void;

    private constructor(readonly value: IntTypeEnum) {}

    static make(value: IntTypeEnum): IntType {
        if (Object.keys(IntTypeEnum).indexOf(value) === -1) {
            throw `'${value}' is incorrect Intermediary Type`;
        }

        return new IntType(value);
    }
}