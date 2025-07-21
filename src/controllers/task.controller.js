import * as taskService from "../services/task.service.js"

export const getAllTasks = async(req,res)=>{
    const tasks = await taskService.getTasks()
    res.json(tasks)
}

export const createNewTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

export const deleteOneTask = async(req,res)=>{
    await taskService.deleteTask(req.params.id)
    res.status(204).send()
}