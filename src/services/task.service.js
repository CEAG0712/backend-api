import {Task} from '../models/task.model.js'

export const createTask = (data) => Task.create(data)
export const getTasks = () => Task.find()
export const deleteTask = (id) => Task.findByIdAndDelete(id);