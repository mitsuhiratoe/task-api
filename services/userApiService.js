const user = require('../models/user');
const User = require('../models/user');

module.exports.getUsers = async (query) => {
    try {
        let users = await User.find(query);
        return users;
    } catch(e) {
        throw Error("error query all users : " + e);
    }
}

module.exports.getUser = async (query) => {
    try {
        let user = await User.findOne(query);
        return user;
    } catch(e) {
        throw Error("error query one user : " + e);
    }
}

module.exports.createUser = async (user) => {
    try {
        return await user.save();
    } catch(e) {
        throw Error("error create user : " + e);
    }
}

module.exports.updateUser = async (query, user) => {
    try {
        return await user.updateOne(query, user);
    } catch(e) {
        throw Error("error update one user : " + e);
    }
}

module.exports.deleteUser = async (query, user) => {
    try {
        return await user.deleteOne(query, user);
    } catch(e) {
        throw Error("error delete one user : " + e);
    }
}