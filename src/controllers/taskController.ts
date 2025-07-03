import { Request, Response } from "express";
import { Task, tasks } from "../models/taskModel";

// Obtener todas las tareas
export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

// Obtener una tarea por ID
export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  res.json(task);
};

// Crear una nueva tarea
export const createTask = (req: Request, res: Response) => {
  const { title, completed } = req.body;

  const newTask: Task = {
    id: tasks.length + 1, // ID automático
    title,
    completed
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Actualizar una tarea
export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  task.title = title ?? task.title;
  task.completed = completed ?? task.completed;

  res.json(task);
};

// Eliminar una tarea
export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Tarea eliminada correctamente" });
};
