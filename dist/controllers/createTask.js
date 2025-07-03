"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const taskModel_1 = require("../models/taskModel");
const createTask = (req, res) => {
    try {
        const { title, completed } = req.body;
        if (!title) {
            return res.status(400).json({ message: "El campo 'title' es obligatorio" });
        }
        const newTask = {
            id: taskModel_1.tasks.length + 1,
            title,
            completed: completed ?? false,
        };
        taskModel_1.tasks.push(newTask);
        return res.status(201).json(newTask);
    }
    catch (error) {
        console.error("Error en createTask:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
exports.createTask = createTask;
