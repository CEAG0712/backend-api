import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import taskRoutes from './routes/task.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});