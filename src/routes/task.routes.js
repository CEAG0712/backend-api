import { Router } from 'express';
import * as taskController from '../controllers/task.controller.js';

const router = Router();

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createNewTask);
router.delete('/:id', taskController.deleteOneTask);

export default router;