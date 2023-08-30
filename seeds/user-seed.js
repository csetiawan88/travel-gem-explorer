// Users
const { User } = require('../models');

const userData = [
  {
    name: 'Carol Kim',
    email: 'carolkim45@gmail.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'Mohammed-Minhajur Rahman',
    email: 'moerahman1234@gmail.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'Andy Su',
    email: 'andy.su7117@gmail.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'Christian Setiawan',
    email: 'csetiawan@yahoo.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
