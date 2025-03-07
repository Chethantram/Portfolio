import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import  connectDb  from './config/db.js'
import projectRoute from '../backend/routes/projectRoute.js'
const app = express()
const port = 3000 || process.env.PORT;

//Db connection
connectDb();


//Middleware
app.use(express.json());
app.use(cors());
app.use('/images',express.static('uploads'));


app.get('/', (req, res) => {
  res.json({msg:'api working'})
});

//api
app.use('/api/project',projectRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})