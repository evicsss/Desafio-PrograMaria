const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try{
    console.log('Conexão com o banco de dados começou')
    
    await mongoose.connect('mongodb+srv://evilavictoria:GcDuH6nFHdun2SRW@users.0w6on.mongodb.net/?retryWrites=true&w=majority&appName=Users')

    console.log('Parabens! Banco de dados feito com sucesso')
} catch(erro) {
    console.log(erro)
    } 
}

module.exports = conectaBancoDeDados