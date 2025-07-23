import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ["https://task-list-frontend-one.vercel.app/", "http://localhost:5173"]
}));


app.use(express.json());

app.use("/api", taskRoutes); 

app.get("/", (req, res) => {
  res.send("✅ API REST de Tareas funcionando correctamente 🚀");
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
