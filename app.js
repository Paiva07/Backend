const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Testando a aplicação');
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta: ${port}`);
});
