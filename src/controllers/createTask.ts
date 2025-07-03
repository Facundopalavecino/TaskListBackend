import { Request, Response } from "express";
import { Task, tasks } from "../models/taskModel";


export const createTask = (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;

    if (!title) {
      return res.status(400).json({ message: "El campo 'title' es obligatorio" });
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: completed ?? false,
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);

  } catch (error) {
    console.error("Error en createTask:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
