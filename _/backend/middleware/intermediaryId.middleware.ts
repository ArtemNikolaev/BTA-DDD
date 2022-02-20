import {Intermediary} from "../../shared/intermediaryFactory";
import {intermediaryModel} from "../model/intermediary.model";

export function intermediaryIdMiddleware(req, res, next, id) {
    intermediaryModel.getIntermediary(id)
        .then(
            (intermediary: Intermediary) => {
                req.intermediaryById = intermediary;
                next();
            }
        )
}