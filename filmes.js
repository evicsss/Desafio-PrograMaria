const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraFilmes(request, response) {
    response.send("Escolha seu filme")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/filmes', mostraFilmes))
app.listen(porta, mostraPorta)