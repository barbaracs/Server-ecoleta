import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
});

export default connection;

// Tables a serem criadas:
// - points (Pontos de coleta)
//    + image
//    + name
//    + email
//    + whatsapp
//    + latitute
//    + longitude
//    + city
//    + UF
// - items (Itens para coleta)
//    + image
//    + title
// - point_items (Relacionamento dos itens que um ponto coleta - table N-N)
//    + point_id
//    + item_id

// Migrations = Histórico do banco de dados