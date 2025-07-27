import { Router } from 'express';
import * as taskController from '../controllers/task.controller.js';
import { taskSchema } from "../validations/task.validation.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get('/', taskController.getAllTasks);
router.post('/', validate(taskSchema), taskController.createNewTask);
router.delete('/:id', taskController.deleteOneTask);

export default router;