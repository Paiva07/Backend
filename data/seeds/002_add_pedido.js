exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pedido').del();
  await knex('pedido').insert([
    {
      produto: 'Pizza de calabresa',
      quantidade: 2,
      preco: 55.0,
      restaurante_id: 1,
    },
    {
      produto: 'Hambuerguer',
      quantidade: 4,
      preco: 33.0,
      restaurante_id: 2,
    },
    {
      produto: 'Kit Churrasco',
      quantidade: 2,
      preco: 110.0,
      restaurante_id: 3,
    },
  ]);
};
