
export function intermediaryUpdateMiddleware(req, res, next) {
    try {
        req.update = req.intermediaryById.update(req.intermediary);
        next();
    } catch(e) {
        console.log(e);
        res.sendStatus(400);
    }
}