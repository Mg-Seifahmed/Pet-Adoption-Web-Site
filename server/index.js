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
import {addPet} from "./controller/pet.js";
import {getPet} from "./controller/pet.js";
import {acceptPet} from "./controller/pet.js";
import {rejectPet} from "./controller/pet.js";
import {getCat} from "./controller/pet.js";
import {getDog} from "./controller/pet.js";
import { getSearch } from "./controller/pet.js";
import { getCustomDog } from "./controller/pet.js";
import { getCustomCat } from "./controller/pet.js";
import { getCustom } from "./controller/pet.js";


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
      cb(null, "../client/public");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  app.post('/upload', upload.single('image'), (req, res) => {
    // Access the uploaded file via req.file
    if (!req.file) {
        return res.status(400).json("not filled");
    }

    // If file is uploaded successfully, send a response
    res.send('File uploaded successfully.');
});


  // ROUTES
  app.post("/auth/register", register);
  app.post("/auth/login", login);
  app.post("/pet/addPet", addPet);
  app.post("/pet/getpet", getPet);
  app.post("/pet/acceptPet", acceptPet);
  app.post("/pet/rejectPet", rejectPet);
  app.post("/pet/getCat", getCat);
  app.post("/pet/getCustomCat", getCustomCat);
  app.post("/pet/getDog", getDog);
  app.post("/pet/getCustomDog", getCustomDog);
  app.post("/pet/getSearch", getSearch);
  app.post("/pet/getCustom", getCustom);


  





  // SETUP
  mongoose.connect(process.env.MONGO).then(() => {
    app.listen(process.env.PORT, () => console.log("open hehe"));
  })


