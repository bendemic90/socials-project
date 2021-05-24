import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//require("dotenv").config();

import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors())

const mongoConnect = 'asdf';
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoConnect, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);


