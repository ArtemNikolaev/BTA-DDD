import {IntTypeEnum} from "./IntermediaryType";
import {RangeIntermediary} from "./RangeIntermediary";
import {DropdownIntermediary} from "./DropdownIntermediary";

export type Intermediary = RangeIntermediary | DropdownIntermediary;

export function intermediaryFactory(intermediary) {
    switch (intermediary.type) {
        case IntTypeEnum.RANGE:
            return RangeIntermediary.make(intermediary);
        case IntTypeEnum.DROPDOWN:
            return DropdownIntermediary.make(intermediary);
        default:
            throw `Incorrect ${intermediary.type}`;
    }
}