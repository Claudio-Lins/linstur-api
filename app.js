const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./models/kms')
const Kms = mongoose.model('Kms')



mongoose.connect('mongodb+srv://clins:Deca0147@cluster0.zwsrt.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB realizada com sucesso')
}).catch((erro) => {
  console.log('Error: Conexão com MongoDB não realizada ' + erro)
})

app.get("/kms", (req, res) => {
  return res.json({
    error: false,
    mensage: "Info Pg Kms",
  });
});

app.post("/kms", (req, res) => {
  Kms.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error:true,
      mensage: 'Erro: Conteudo da página KMs não cadastrado com Sucesso!'
    })
  })
  return res.json({
    error: false,
    mensage: 'Erro: Conteudo da página KMs cadastrado com Sucesso!'
  })
})

app.listen(8080, () => {
  console.log(
    'Servidor Iniciado na porta 8080: http://localhost"8080 com Sucesso!'
  );
});

//mongodb+srv://clins:Deca0147@cluster0.zwsrt.mongodb.net/test'