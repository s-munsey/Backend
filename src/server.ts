import express, { Request, Response } from "express";
import router from "./router";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  // sending back an HTML file that a browser can render on the screen.
  return res.status(404).json({ message: "404 not found" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
