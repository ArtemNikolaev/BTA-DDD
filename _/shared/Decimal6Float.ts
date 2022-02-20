declare const Decimal6FloatSymbol: unique symbol;

export class Decimal6Float {
    [Decimal6FloatSymbol]: void;

    private constructor(readonly value: number) {}

    static make(value: number): Decimal6Float {
        {
            const accuracy = 1000000;
            const newVal = value * accuracy;

            if (newVal !== Math.floor(newVal)) {
                throw `'${value}' is not a decimal number with up to 7 digits after the decimal point`;
            }
        }

        return new Decimal6Float(value);
    }
}
