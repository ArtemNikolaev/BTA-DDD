import {intermediaryModel} from "../model/intermediary.model";

export function updateIntermediary(req, res) {
    intermediaryModel.updateIntermediary(req.update)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
}