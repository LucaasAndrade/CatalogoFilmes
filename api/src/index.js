import 'dotenv/config';

import  usuarioController from './controller/usuarioController.js';
import filmeControle from './controller/filmeController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

// configuração dos End Points
server.use(usuarioController);
server.use(filmeControle);


server.listen(process.env.PORT, () => console.log(`Conectado na porta ${process.env.PORT}`));