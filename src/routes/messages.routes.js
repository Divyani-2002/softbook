
import express from 'express';
import { sendmessages, getallmessages, getmessages, deletemessages, unsendmessages, readmessages }
    from "../controllers/messages.controllers.js";

const router = express.Router();

router.post('/create', sendmessages);
router.get('/getall', getallmessages);
router.get('/get/:id', getmessages);
router.delete('/delete/:id', deletemessages);
router.put('update/:id', unsendmessages);
router.put('/read/:id', readmessages);

export default router;