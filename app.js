const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


require('./models/kms')
const Kms = mongoose.model('Kms')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  app.use(cors());
  next();
})


mongoose.connect('mongodb+srv://clins:Deca0147@cluster0.zwsrt.mongodb.net/linstur', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB realizada com sucesso')
}).catch((erro) => {
  console.log('Error: Conexão com MongoDB não realizada ' + erro)
})

app.get("/kms", (req, res) => {
  Kms.findOne({}).then((kms) => {
    return res.json(kms);
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      mensage: "Menhum Kms encontrado",
    });
  })
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
    mensage: 'Conteudo da página KMs cadastrado com Sucesso!'
  })
})

app.listen(8080, () => {
  console.log(
    'Servidor Iniciado na porta 8080: http://localhost:8080 com Sucesso!'
  );
});

//mongodb+srv://clins:Deca0147@cluster0.zwsrt.mongodb.net/test'