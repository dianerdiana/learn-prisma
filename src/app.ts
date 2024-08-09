import express, { Application, Request, Response } from "express";
import UserRoutes from "./routes/UserRoutes";

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use("/api/v1", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello with typescript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
