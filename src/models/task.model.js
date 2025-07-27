import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    dueDate: Date
})

export const Task = mongoose.model('Task', TaskSchema);
