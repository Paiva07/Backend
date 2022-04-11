const express = require('express');
const app = express();
const port = 3000;

const restaurante = require('./restaurante');
const pedido = require('./pedido');

app.get('/', (req, res) => {
  res.send('Testando a aplicação');
});

app.use('/restaurante', restaurante);
app.use('/pedido', pedido);

app.listen(port, () => {
  console.log(`Servidor em execução na porta: ${port}`);
});
