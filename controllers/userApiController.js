const User = require('../models/user');
const userApiService = require('../services/userApiService');
const bcrypt = require('bcrypt');

module.exports.getUsers = async (req, res) => {
    try {
        let users = await userApiService.getUsers({});
        return res.status(200).json({status:200, data:users, message:"users success"})
    } catch(e) {
        return res.status(400).json({status:400, message:e.message})
    }
}

module.exports.getUser = async (req, res) => {
    try {
        let user = await userApiService.getUser({ _id:req.params.id });
        return res.status(200).json({status:200, data:user, message:"one user success"})
    } catch(e) {
        return res.status(400).json({status:400, message:e.message})
    }
}

module.exports.createUser = async (req, res) => {
    try {
        console.log(req.body);

        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        
        let user = User(req.body);
        user = await userApiService.createUser(user);
        return res.status(201).json({ status:201, data:user, message:"user success save" })
    } catch(e) {
        return res.status(400).json({ status:400, message: "controller : " + e.message })
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        let salt = await bcrypt.genSalt(10);
        req.body.password = bcrypt.hash(req.body.password, salt);

        let user = User(req.body);
        user = userApiService.updateUser(user);

        return res.status(200).json({ status:201, data:user, message:"user success update" })
    } catch(e) {
        return res.status(400).json({ status:400, message:e.message })
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        
    }
}