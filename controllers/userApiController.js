const User = require("../models/user");
const userApiService = require("../services/userApiService");
const bcrypt = require("bcrypt");

// Fonction générique pour envoyer une réponse HTTP
const sendResponse = (res, status, data = null, message = "") => {
    return res.status(status).json({ status, data, message });
};

// Obtenir tous les utilisateurs
module.exports.getUsers = async (req, res) => {
    try {
        const users = await userApiService.getUsers({});
        sendResponse(res, 200, users, "Users retrieved successfully");
    } catch (e) {
        sendResponse(res, 400, null, e.message);
    }
};

// Obtenir un utilisateur par ID
module.exports.getUser = async (req, res) => {
    try {
        const user = await userApiService.getUser({ _id: req.params.id });
        if (!user) return sendResponse(res, 404, null, "User not found");
        sendResponse(res, 200, user, "User retrieved successfully");
    } catch (e) {
        sendResponse(res, 400, null, e.message);
    }
};

// Créer un nouvel utilisateur
module.exports.createUser = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await userApiService.createUser(new User(req.body));
        sendResponse(res, 201, user, "User created successfully");
    } catch (e) {
        sendResponse(res, 400, null, e.message);
    }
};

// Mettre à jour un utilisateur
module.exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userApiService.updateUser(req.params.id, req.body);
        if (!updatedUser) return sendResponse(res, 404, null, "User not found");
        sendResponse(res, 200, updatedUser, "User updated successfully");
    } catch (e) {
        sendResponse(res, 400, null, e.message);
    }
};

// Supprimer un utilisateur
module.exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userApiService.deleteUser(req.params.id);
        if (!deletedUser) return sendResponse(res, 404, null, "User not found");
        sendResponse(res, 200, deletedUser, "User deleted successfully");
    } catch (e) {
        sendResponse(res, 500, null, e.message);
    }
};