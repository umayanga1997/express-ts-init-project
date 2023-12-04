import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// Import Routes
import homeRoute from "./routes/home";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.use("/api/v1/static", homeRoute);

app.listen(port, () => {
  console.log(`Server is runing on http://localhost:${port}`);
});
