import {intermediaryFactory} from "../../shared/intermediaryFactory";

export function intermediaryMiddleware(req, res, next) {
    try {
        req.intermediary = intermediaryFactory(req.body);
        next();
    } catch(e) {
        console.log({e});
        res.sendStatus(400);
    }
}