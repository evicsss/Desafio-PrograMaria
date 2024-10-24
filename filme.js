const express = require("express")
const router = express.Router()
const cors = require('cors')

const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

const Filmes = require('./filmeModel')

const app = express()
app.use(express.json())
app.use(cors())

const porta = 3333

async function mostraFilme(request, response) {
    try {
        const filmesDosBandosDeDados = await Filmes.find()

        response.json(filmesDosBandosDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

 async function criaFilme(request, response) {
    const novoFilme = new Filmes ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        autor: request.body.autor,
        sinopse: request.body.sinopse,
        ano: request.body.ano
    })

    try {
        const filmeCriado = await novoFilme.save()
        response.status(201).json(filmeCriado)
    } catch (erro) {
        console.log(erro)
    }

}

async function corrigeFilme(request, response) {
   try {
    const filmeEncontrado = await filmes.findById(request.params.id)

        if(request.body.nome) {
        filmeEncontrado.nome = request.body.nome
        }

        if(request.body.imagem) {
        filmeEncontrado.nome = request.body.imagem
        }

         if(request.body.autor) {
        filmeEncontrado.nome = request.body.autor
         }

         if(request.body.sinopse) {
        filmeEncontrado.nome = request.body.sinopse
         }

        if(request.body.ano) {
        filmeEncontrado.nome = request.body.ano
        }

        const filmeAtualizadoNoBancoDeDados = await filmeEncontrado.save()
        response.json(filmeAtualizadoNoBancoDeDados)
    } catch (erro) {
    console.log(erro)
    }

}

async function deletaFilme(request, response) {
    try {
        await Filmes.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Filme detelado com sucesso!'})
    } catch {
        console.log(erro)
    }
}
  
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/filme', mostraFilme))
app.use(router.post('/filme', criaFilme))
app.use(router.patch('/filme/:id', corrigeFilme))
app.use(router.delete('/filme/:id', deletaFilme))
app.listen(porta, mostraPorta)