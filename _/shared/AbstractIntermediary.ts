import {IntTypeEnum} from "./IntermediaryType";
import {IntDropdownType} from "./IntDropdownType";

export abstract class AbstractIntermediary {
    readonly name: string;
    readonly order: number;
    readonly type: IntTypeEnum;
}

export abstract class AbstractDropdownIntermediary extends AbstractIntermediary {
    readonly type = IntTypeEnum.DROPDOWN;
    readonly dropdown: IntDropdownType[];
}