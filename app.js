const express = require("express");
const app = express();

app.use("/home", (req, res) => {
  return res.json({
    error: false,
    mensage: "Info Pg Home",
  });
});

app.listen(8080, () => {
  console.log(
    'Servidor Iniciado na porta 8080: http://localhost"8080 com Sucesso!'
  );
});
