import {intermediaryModel} from "../model/intermediary.model";

export function deleteIntermediary(req, res) {
    intermediaryModel.deleteIntermediary(req.intermediaryById.id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
}