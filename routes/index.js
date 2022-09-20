import express from 'express';
const router = express.Router();
import todoController from '../Controller/todoController';

router.post('/add', todoController.store); 

router.get('/getdata', todoController.getdata); 
router.put('/editdata/:id', todoController.editdata);   
router.put('/handlecomplete/:id', todoController.handlecomplete); 
router.delete('/deletedata/:id', todoController.deletedata); 

export default router;