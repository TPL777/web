const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates") 

application.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3003, () => {
    console.log("srevidor rodando na porta 3000!")
})