import express, { Request, Response } from "express";
import router from "./router";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cors from "cors";
import { auth } from "./modules/auth";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", auth, router);

app.get("/", (req: Request, res: Response) => {
  // sending back an HTML file that a browser can render on the screen.
  return res.status(404).json({ message: "404 not found" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
