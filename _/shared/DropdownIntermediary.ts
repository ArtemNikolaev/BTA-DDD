import {IntTypeEnum} from "./IntermediaryType";
import {IntDropdownType} from "./IntDropdownType";
import {Len255Text} from "./Len255Text";
import {PositiveInt} from "./PositiveInt";
import {AbstractDropdownIntermediary} from "./AbstractIntermediary";

declare const DropdownIntermediarySymbol: unique symbol;

export class DropdownIntermediary extends AbstractDropdownIntermediary{
    [DropdownIntermediarySymbol]: void;
    readonly type = IntTypeEnum.DROPDOWN;

    private constructor(
        readonly name: string,
        readonly order: number,
        readonly dropdown: IntDropdownType[],
        readonly id,
        readonly createdAt,
    ) {
        super();
    }

    update({ id, name, order, type, dropdown }: DropdownIntermediary): DropdownIntermediary {
        if (!this.id || !id || this.id !== id) {
            throw 'id unexist or wrong';
        }

        if (this.type !== type) {
            throw 'you can not change type of intermediary';
        }

        const result = Object.assign({}, this, {name, order, dropdown})

        return DropdownIntermediary.make(result);
    }

    static make({name, order, type, dropdown, id, createdAt}: Partial<DropdownIntermediary>): DropdownIntermediary {
        if (type !== IntTypeEnum.DROPDOWN) {
            throw `Intermediary type should be ${IntTypeEnum.DROPDOWN}`;
        }

        return new DropdownIntermediary(
            Len255Text.make(name).value,
            PositiveInt.make(order).value,
            dropdown.map(el => IntDropdownType.make(el)),
            id, createdAt,
        )
    }
}
