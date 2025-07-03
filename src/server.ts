import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);  // 👈 todas las rutas van a /api

app.get("/", (req, res) => {
  res.send("✅ API REST de Tareas funcionando correctamente 🚀");
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
