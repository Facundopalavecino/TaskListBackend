"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
/*app.use(cors({
  origin: "https://task-list-frontend-one.vercel.app"

}));*/
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", taskRoutes_1.default);
app.get("/", (req, res) => {
    res.send("✅ API REST de Tareas funcionando correctamente 🚀");
});
app.listen(PORT, () => {
    console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
