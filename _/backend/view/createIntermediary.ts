import {intermediaryModel} from "../model/intermediary.model";

export function createIntermediary(req, res) {
    intermediaryModel.createIntermediary(req.intermediary)
        .then(data => res.status(200).json(data))
        .catch(() => res.sendstatus(500))
}