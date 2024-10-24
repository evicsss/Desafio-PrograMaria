const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraFilmes(request, response) {
    response.json({
        nome: "Cidade de Deus",
        imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/20f6be33747000.56b63edfaeb11.jpg",
        autor: "Fernando Meirelles e Kátia Lund",
        sinopse:"Retrata a vida em uma favela do Rio de Janeiro, mostrando a ascensão do crime organizado e as dificuldades enfrentadas pelos moradores.",
        ano: "2002"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/filmes', mostraFilmes))
app.listen(porta, mostraPorta)