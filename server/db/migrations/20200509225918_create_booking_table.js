
exports.up = function(knex) {

  return knex.schema.createTableIfNotExists('bookings', t => {
    t.bigIncrements('id');
    t.timestamp('creation_time').notNullable();
    t.timestamp('appointment_time').notNullable();
    t.string('customer_first_name', 50).notNullable();
    t.string('customer_last_name', 50).notNullable();
    t.string('customer_email', 100).notNullable();
    t.string('customer_phone_num', 20).notNullable();
    t.string('customer_time_zone', 100).notNullable();
    t.string('customer_occupation', 200).notNullable();
    t.string('customer_why_good_fit', 3000).notNullable();
    t.string('mm_coach_name', 100).notNullable();
    t.string('booking_id').notNullable();
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
//       t.timestamp('appointment_time').notNullable();
//       t.string('customer_first_name', 50).notNullable();
//       t.string('customer_last_name', 50).notNullable();
//       t.string('customer_email', 100).notNullable();
//       t.string('customer_phone_num', 20).notNullable();
//       t.string('customer_time_zone', 10).notNullable();
//       t.string('customer_occupation', 50).notNullable();
//       t.string('customer_why_good_fit', 500).notNullable();
//       t.string('mm_coach_name', 100).notNullable();
//       t.string('booking_id').notNullable();
//       t.timestamp('deleted_at');
//     }),
//   ]);
// };

// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable('bookings')
//   ]);
// };
