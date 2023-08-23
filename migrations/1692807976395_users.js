/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
      id: 'id',
      username: { type: 'varchar(255)', notNull: true },
      password: { type: 'varchar(255)', notNull: true },
      profile_picture: { type: 'varchar(255)', notNull: true },
      created_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
    pgm.createIndex('users', 'username')
};

exports.down = pgm => {
    pgm.dropTable('users')
};
