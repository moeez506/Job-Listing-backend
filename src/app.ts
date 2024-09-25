import express from "express";
import jobRoutes from "./routes/job.route";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/health-check", (req, res, next) => res.json("Server is running"));
app.use("/api/job", jobRoutes);

export default app;
