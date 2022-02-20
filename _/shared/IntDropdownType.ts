declare const IntDropdownTypeSymbol: unique symbol;
import {Decimal6Float} from "./Decimal6Float";

export class IntDropdownType{
    [IntDropdownTypeSymbol]: void;

    private constructor(readonly option: string, readonly value: number) {}

    static make({option, value}: Partial<IntDropdownType>): IntDropdownType {
        if (typeof option !== 'string') {
            throw `'${option}' is an '${typeof option}' type instead of 'string'`;
        }

        return new IntDropdownType(option, Decimal6Float.make(value).value);
    }
}