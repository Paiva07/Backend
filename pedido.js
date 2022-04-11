const express = require('express');
const router = express.Router();

const dbKnex = require('./data/db_config');

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const pedido = await dbKnex('pedido').orderBy('id', 'cresc');
    res.status(200).json(pedido); // retorna statusCode ok e os dados
  } catch (error) {
    res.status(400).json({ msg: error.message }); // retorna status de erro e msg
  }
});

module.exports = router;
