import {IntTypeEnum} from "./IntermediaryType";
import {IntDropdownType} from "./IntDropdownType";

abstract class AbstractIntermediary {
    readonly id?: string;
    readonly createdAt?: string;
    readonly name: string;
    readonly order: number;
    readonly type: IntTypeEnum;
}

export abstract class AbstractDropdownIntermediary extends AbstractIntermediary {
    readonly type = IntTypeEnum.DROPDOWN;
    readonly dropdown: IntDropdownType[];
}

export abstract class AbstractRangeIntermediary extends AbstractIntermediary {
    readonly from: number;
    readonly to: number;
    readonly step: number;
}
