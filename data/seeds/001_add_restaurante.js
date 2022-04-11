exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('restaurante').del();
  await knex('restaurante').insert([
    {
      nome: 'Pizzaria Avenida',
      endereco: 'Avenida São Francisaco, 3301',
      contato: '1111-1111',
    },
    {
      nome: 'Hamburgueria Avenida',
      endereco: 'Avenida São Paulo, 3302',
      contato: '2222-2222',
    },
    {
      nome: 'Churrascaria Avenida',
      endereco: 'Avenida São Bento, 3303',
      contato: '3333-3333',
    },
  ]);
};
