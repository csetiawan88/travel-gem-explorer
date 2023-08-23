const User = require('./user');
const Destination = require('./Destination');
const Comment = require('./Comment');

User.hasMany(Destination, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Destination.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.hasOne(Destination, {
  foreignKey: 'destinationId',
});
