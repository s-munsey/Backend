import express, { Request, Response } from "express";
import helmet from "helmet";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  // sending back an HTML file that a browser can render on the screen.
  return res.status(200).json({ message: "Hello Shaun!" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
