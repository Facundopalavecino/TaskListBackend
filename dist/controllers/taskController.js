"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskModel_1 = require("../models/taskModel");
// Obtener todas las tareas
const getAllTasks = (req, res) => {
    res.json(taskModel_1.tasks);
};
exports.getAllTasks = getAllTasks;
// Obtener una tarea por ID
const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = taskModel_1.tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
};
exports.getTaskById = getTaskById;
// Crear una nueva tarea
const createTask = (req, res) => {
    const { title, completed } = req.body;
    const newTask = {
        id: taskModel_1.tasks.length + 1, // ID automático
        title,
        completed
    };
    taskModel_1.tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.createTask = createTask;
// Actualizar una tarea
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = taskModel_1.tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }
    task.title = title ?? task.title;
    task.completed = completed ?? task.completed;
    res.json(task);
};
exports.updateTask = updateTask;
// Eliminar una tarea
const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = taskModel_1.tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }
    taskModel_1.tasks.splice(index, 1);
    res.json({ message: "Tarea eliminada correctamente" });
};
exports.deleteTask = deleteTask;
