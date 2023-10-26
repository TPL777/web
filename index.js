const { application } = require("express")
const express = require("express")

const app = express()

application.get('/', (requisicao, resposta) => {
    resposta.send("Estou funcionando com o express")
})

app.listen(3003, () => {
    console.log("srevidor rodando na porta 3000!")
})