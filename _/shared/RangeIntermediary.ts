import {AbstractRangeIntermediary} from "./AbstractIntermediary";
import {IntTypeEnum} from "./IntermediaryType";
import {Len255Text} from "./Len255Text";
import {PositiveInt} from "./PositiveInt";
import {Decimal6Float} from "./Decimal6Float";

declare const RangeIntermediarySymbol: unique symbol;

export class RangeIntermediary extends AbstractRangeIntermediary {
    [RangeIntermediarySymbol]: void;
    readonly type = IntTypeEnum.RANGE;

    private constructor(
        readonly name: string,
        readonly order: number,
        readonly from: number,
        readonly to: number,
        readonly step: number,
        readonly id,
        readonly createdAt,
    ) {
        super();
    }

    update({id, name, order, type, from, to, step}: RangeIntermediary): RangeIntermediary {
        if (!this.id || !id || this.id !== id) {
            throw 'id unexist or wrong'
        }

        if (this.type !== type) {
            throw 'you can not change type of intermediary';
        }

        RangeIntermediary.validateRange(from, to, step);

        const result = Object.assign({}, this, { name, order, from, to, step });

        return RangeIntermediary.make(result);
    }

    static validateRange(from, to, step) {
        if (
            from >= to ||
            step <= 0
        ) {
            throw `${IntTypeEnum.RANGE} restrictions violated`;
        }
    }

    static make({name, order, type, from, to, step, id, createdAt}: Partial<RangeIntermediary>): RangeIntermediary {
        if (type !== IntTypeEnum.RANGE) {
            throw `Intermediary type should be ${IntTypeEnum.RANGE}`;
        }

        from = Decimal6Float.make(from).value;
        to = Decimal6Float.make(to).value
        step = Decimal6Float.make(step).value

        this.validateRange(from, to, step);

        return new RangeIntermediary(
            Len255Text.make(name).value,
            PositiveInt.make(order).value,
            from,
            to,
            step,
            id,
            createdAt,
        )
    }
}
