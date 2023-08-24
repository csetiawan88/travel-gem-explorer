// Users
const { User } = require('../models');

const userData = [
  {
      name: 'Carol Kim',
      email: 'carolkim45@gmail.com',
      password: 'password',
  },
  {
      name: 'Mohammed-Minhajur Rahman',
      email: 'moerahman1234@gmail.com',
      password: 'password',
  },
  {
      name: 'Andy Su',
      email: 'andy.su7117@gmail.com',
      password: 'password',
  },
  {
      name: 'Christian Setiawan',
      email: 'csetiawan@yahoo.com',
      password: 'password',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;