const User = require('./user');
const Destination = require('./Destination');
const Comment = require('./Comment');

User.hasMany(Destination, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});
