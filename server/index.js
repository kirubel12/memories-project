import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import postRoutes from './routes/post.js'
config()
const app = express();
app.use(cors());
app.use('/post', postRoutes)
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);


const PORT = process.env.REACT_APP_PORT || 5000;
mongoose
  .connect(process.env.REACT_APP_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server started on port ${PORT} and Database is connected....`))
  )
  .catch((error) => console.log(error));


