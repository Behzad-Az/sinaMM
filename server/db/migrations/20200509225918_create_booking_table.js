
exports.up = function(knex) {

  return knex.schema.createTableIfNotExists('bookings', t => {
    t.bigIncrements('id');
    t.timestamp('creationTime').notNullable();
    t.timestamp('appointmentTime').notNullable();
    t.string('customerFirstName', 50).notNullable();
    t.string('customerLastName', 50).notNullable();
    t.string('customerEmail', 100).notNullable();
    t.string('customerPhoneNum', 20).notNullable();
    t.string('customerTimeZone', 100).notNullable();
    t.string('customerOccupation', 200).notNullable();
    t.string('customerWhyGoodFit', 3000).notNullable();
    t.string('mmCoachName', 100).notNullable();
    t.string('bookingId').notNullable();
    t.timestamp('deleted_at');
  });

};

exports.down = function(knex) {
  return  knex.schema.dropTable('bookings');
};



// exports.up = function(knex, Promise) {



//   return Promise.all([
//     knex.schema.createTableIfNotExists('bookings', t => {
//       t.bigIncrements('id');
//       t.timestamp('creationTime').notNullable();
//       t.timestamp('appointmentTime').notNullable();
//       t.string('customerFirstName', 50).notNullable();
//       t.string('customerLastName', 50).notNullable();
//       t.string('customerEmail', 100).notNullable();
//       t.string('customerPhoneNum', 20).notNullable();
//       t.string('customerTimeZone', 10).notNullable();
//       t.string('customerOccupation', 50).notNullable();
//       t.string('customerWhyGoodFit', 500).notNullable();
//       t.string('mmCoachName', 100).notNullable();
//       t.string('bookingId').notNullable();
//       t.timestamp('deleted_at');
//     }),
//   ]);
// };

// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable('bookings')
//   ]);
// };
