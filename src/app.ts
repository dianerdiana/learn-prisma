import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello with typescript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
