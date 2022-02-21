export function getIntermediary(req, res) {
    res.status(200).json(req.intermediaryById);
}