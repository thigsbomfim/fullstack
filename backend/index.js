import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import routes from './src/routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);
app.use('/profile', express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads')));

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})
