exports.up = function (knex) {
  return knex.schema.createTable('pedido', (table) => {
    table.increments();
    table.string('produto', 80).notNullable();
    table.integer('quantidade', 4).notNullable();
    table.decimal('preco', 9.2).notNullable();
    table.integer('restaurante_id').notNullable().unsigned();
    table
      .foreign('restaurante_id')
      .references('restaurante.id')
      .onDelete('restrict')
      .onUpdate('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pedido');
};
