import * as taskService from "../services/task.service.js";

export const getAllTasks = async (req, res) => {
  const tasks = await taskService.getTasks();
  res.json(tasks);
};

export const createNewTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error("Controller error:", error.message);
    res.status(500).json({ error: "Unexpected server error" });
  }
};

export const deleteOneTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
