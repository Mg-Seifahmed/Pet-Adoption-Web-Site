import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controller/auth.js";
import { login } from "./controller/auth.js";


// CONFIGURATIONS
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });


  // ROUTES
  app.post("/auth/register", register);
  app.post("/auth/login", login);





  // SETUP
  mongoose.connect(process.env.MONGO).then(() => {
    app.listen(process.env.PORT, () => console.log("open hehe"));
  })


