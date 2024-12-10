import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';


dotenv.config();
const port = process.env.PORT || 5001;


const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {res.send("READY")});

app.listen(port, ()=> console.log(`listening on port ${port}`));