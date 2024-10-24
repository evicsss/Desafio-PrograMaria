const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
    console.log('Conexão com o banco de dados começou')
    
    await mongoose.connect(process.env.MONGO_URL)

    console.log('Parabens! Banco de dados feito com sucesso')
} catch(erro) {
    console.log(erro)
    } 
}

module.exports = conectaBancoDeDados