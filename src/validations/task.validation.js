import Joi from "joi";

export const taskSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 3 characters long",
  }),
  description: Joi.string().optional(),
  dueDate: Joi.date().iso().optional().messages({
    "date.format": "Due date must be a valid ISO date",
  }),
});
