
import { alterarImagem, inserirFilme, listarTodosFilmes, buscarPorId, buscarPorNome } from '../repository/filmeRepository.js'

import multer from 'multer';
import { Router } from 'express';

const server = Router();
const upload = multer({ dest: 'storage/capasfilmes' })

server.post('/filme',  async (req, resp) => {
    try{
        const filmeParaInserir = req.body;

        const filme = await inserirFilme(filmeParaInserir);

        if(!filmeParaInserir.nome){
            throw new Error('Nome do filme obrigatório!')
        }
        if(!filmeParaInserir.sinopse){
            throw new Error('Sinopse do filme obrigatório!')
        }
        if(filmeParaInserir.avaliacao < 0 || filmeParaInserir.avaliacao == undefined){
            throw new Error('Avaliação do filme obrigatório!')
        }
        if(!filmeParaInserir.lancamento){
            throw new Error('Lançamento do filme obrigatório!')
        }
        if(!filmeParaInserir.disponivel){
            throw new Error('Informa se o  filme está disponível é obrigatório!')
        }
        if(!filmeParaInserir.usuario){
            throw new Error('Usúario não registrado!')
        }


        resp.send(filme)
    }
    catch(err){
        resp.status(400).send({
            erro: 'Algo deu errado',
            type: err.message
        })
    }
});

server.put('/filme/:id/capa', upload.single('capa') , async (req, resp) =>{
    try{
        const { id } = req.params;

        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id)
        if(resposta != 1){
            throw new Error('A imagem não pode ser salva!')
        }
        resp.status(204).send();
    } 
    catch(err){
        resp.status(400).send({
            error: 'Algo deu errado',
            type: err.message
        })
    }
});

server.get('/filme/', async (req, resp) => {
    try {
        const resposta = await listarTodosFilmes();

            resp.send(resposta);
    }
    catch(err) {
        resp.status(400).send({
            error: 'Algo deu errado',
            type: err.message
        })
    }
})

server.get('/filme/busca', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarPorNome(nome);

        if (!resposta){
            resp.status(404).send([])
        }   
        else{
            resp.send(resposta);
        }
    }
    catch(err) {
        resp.status(400).send({
            error: 'Algo deu errado',
            type: err.message
        })
    }
})


server.get('/filme/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await buscarPorId(id);

        if (!resposta){
            resp.status(404).send([])
        }   
        else{
            resp.send(resposta);
        }
    }
    catch(err) {
        resp.status(400).send({
            error: 'Algo deu errado',
            type: err.message
        })
    }
})





export default server;