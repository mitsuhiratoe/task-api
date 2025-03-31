const User = require('../models/user');

module.exports.getUsers = (query) => User.find(query);
module.exports.getUser = (query) => User.findOne(query);
module.exports.createUser = (user) => user.save();
module.exports.updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new:true });
module.exports.deleteUser = (id) => User.findByIdAndDelete(id);