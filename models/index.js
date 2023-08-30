const User = require('./User');
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

Destination.hasMany(Comment, {
  foreignKey: 'destinationId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Destination, {
  foreignKey: 'destinationId',
});

module.exports = { User, Destination, Comment };
