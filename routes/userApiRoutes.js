const express = require('express');
const router = express.Router();
const userApiController = require('../controllers/userApiController')

router.get("/users", userApiController.getUsers);
router.get("/:id", userApiController.getUser);
router.post("/", userApiController.createUser);
router.put("/:id", userApiController.updateUser);
router.delete("/:id", userApiController.deleteUser);

module.exports = router;