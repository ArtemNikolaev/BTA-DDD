import {intermediaryIdMiddleware} from "../middleware/intermediaryId.middleware";
import {intermediaryMiddleware} from "../middleware/intermediaryMiddleware";
import {createIntermediary} from "../view/createIntermediary";
import {getAllIntermediaries} from "../view/getAllIntermediaries";
import {deleteIntermediary} from "../view/deleteIntermediary";
import {updateIntermediary} from "../view/updateIntermediary";
import {intermediaryUpdateMiddleware} from "../middleware/intermediaryUpdateMiddleware";

const express = require('express')
const router = express.Router()

router.param('intermediaryId', intermediaryIdMiddleware)

router.post('/', intermediaryMiddleware, createIntermediary)
router.get('/', getAllIntermediaries)
router.put(
    '/:intermediaryId',
    intermediaryMiddleware,
    intermediaryUpdateMiddleware,
    updateIntermediary
)
router.delete('/:intermediaryId', deleteIntermediary);

module.exports = router;