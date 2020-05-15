
exports.up = function(knex) {

  return knex.schema
      .createTableIfNotExists('bookings_alpha', t => {
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
      })
      .createTableIfNotExists('coaches', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.string('name', 100).notNullable().defaultTo('Not Available');
        t.string('phone_num', 20).notNullable().defaultTo('0-000-000-0000');
        t.string('email_address', 100).notNullable().defaultTo('Not Available');
        t.decimal('commission_rate').notNullable().defaultTo(0);
      })
      .createTableIfNotExists('customers', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.string('name', 100).notNullable().defaultTo('Not Available');
        t.string('phone_num', 20).notNullable().defaultTo('0-000-000-0000');
        t.string('email_address', 100).notNullable().defaultTo('Not Available');
        t.string('acquired_from', 100).notNullable().defaultTo('Not Available');
        t.string('reason_why_good_fit', 3000).notNullable().defaultTo('Not Available');
      })
      .createTableIfNotExists('products', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.string('name', 100).notNullable().defaultTo('Not Available');
        t.string('description', 1000).notNullable().defaultTo('Not Available');
        t.string('version', 20).notNullable().defaultTo('Not Available');
        t.decimal('full_price').notNullable().defaultTo(0);
        t.string('currency').notNullable().defaultTo('USD');
      })
      .createTableIfNotExists('bookings', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.bigInteger('customer_id').notNullable().references('customers.id');
        t.bigInteger('coach_id').notNullable().references('coaches.id');
        t.bigInteger('product_id').notNullable().references('products.id');
        t.timestamp('web_booking_time').notNullable();
        t.timestamp('appoint_time').notNullable();
        t.string('appoint_time_zone', 100).notNullable();
        t.string('appoint_status', 20).notNullable();
      })
      .createTableIfNotExists('sales', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.bigInteger('booking_d').references('bookings_id');
        t.bigInteger('coach_id').references('coaches.id');
        t.bigInteger('customer_id').references('customers.id');
        t.bigInteger('product_id').references('products.id');
        t.double('agreed_price').notNullable().defaultTo(0);
        t.string('comments', 3000).notNullable().defaultTo('Not Available');
      })
      .createTableIfNotExists('cash_collected', t => {
        t.bigIncrements('id');
        t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        t.timestamp('deleted_at');
        t.bigInteger('sale_id').notNullable().references('sales.id');
        t.double('amount').notNullable().defaultTo(0);
        t.string('source_type', 20).notNullable().defaultTo('Credit Card');
        t.string('source_num', 20).notNullable().defaultTo('Not Available');
      })

};

exports.down = function(knex) {
  return  knex.schema
    .dropTable('cash_collected')
    .dropTable('sales')
    .dropTable('bookings')
    .dropTable('products')
    .dropTable('customers')
    .dropTable('coaches')
    .dropTable('bookings_alpha');
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
