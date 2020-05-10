
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

const fs = require('fs');
const dataRaw = fs.readFileSync(__dirname + '/_bookingsSeeds.json');
const dataArr = JSON.parse(dataRaw);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings')
  .del()
  .then(() => knex('bookings').insert(dataArr))
};
