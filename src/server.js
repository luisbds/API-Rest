const express = require('express')
const routes = require('./routes')
const app = express() 

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.send("funcionando!")
})

app.listen(3001, () => {
    console.log("Servidor rodando no porta 3001!") 
}) 