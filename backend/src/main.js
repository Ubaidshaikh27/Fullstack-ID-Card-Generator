import express from 'express';
import dotenv from 'dotenv';
import connectDB from './index.js';
import cors from 'cors';
import userRouter from './app.js'
import multer from 'multer';

dotenv.config({
  path: "./env"
});

const PORT = process.env.PORT;

const app = express();





//------------------Middlewares cors-------------------
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));





//------------------Connecting to MongoDB  Database-------------------
connectDB()

.then(() =>{
  app.listen(PORT || 3000, () => {
    console.log('Server is running on port 3000') 
   })
   app.on('error', (error) => {
    console.log("Error: ", error)})
})

.catch((err) => {
  console.log("MONGO db connection failed: ",err)
})





app.use('/api', userRouter)