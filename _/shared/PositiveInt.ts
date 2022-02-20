declare const PositiveIntSymbol: unique symbol;

export class PositiveInt {
    [PositiveIntSymbol]: void;

    private constructor(readonly value: number) {}

    static make(value: number): PositiveInt {
        if (!Number.isInteger(value) || value < 1) {
            throw `'${value}' is not a positive integer value`;
        }

        return new PositiveInt(value);
    }
}