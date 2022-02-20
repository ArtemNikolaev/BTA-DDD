import {intermediaryModel} from "../model/intermediary.model";
import {Intermediary} from "../../shared/intermediaryFactory";

export function getAllIntermediaries(req, res) {
    intermediaryModel.getAll()
        .then(data => data.map(
            ({id, createdAt, name, order}: Intermediary) =>
                ({id, createdAt, name, order})
        ))
        .then((data) => res.status(200).json(data))
        .catch(() => res.sendStatus(500));
}