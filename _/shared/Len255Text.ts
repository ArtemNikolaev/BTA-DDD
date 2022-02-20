declare const Len255TextSymbol: unique symbol;

export class Len255Text {
    [Len255TextSymbol]: void;

    private constructor(readonly value: string) {}

    static make(value:string) {
        if (typeof value !== 'string' || value.length < 1 || value.length > 255) {
            throw `'${value}' isn't a correct string value`;
        }

        return new Len255Text(value);
    }
}
