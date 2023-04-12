import express from 'express';
import postsRoutes from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";
import { connectDB } from "./db.js";
import { helmet } from "helmet";

const app = express()
connectDB()
app.use(helmet())
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}))
app.use(postsRoutes)

app.listen(4000)
console.log("Server in running");