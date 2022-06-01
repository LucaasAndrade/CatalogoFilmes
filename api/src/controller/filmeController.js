
import { inserirFilme } from '../repository/filmeRepository.js'

import { Router } from 'express';
const server = Router();


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



export default server;