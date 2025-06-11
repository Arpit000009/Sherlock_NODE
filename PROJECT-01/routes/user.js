const express = require("express");
const {handleGetAllUsers,
    handlegetUserById,
    handlefindByIdAndUpdate,
    handleDeleteUserById,
    handleCreateNewUser
} = require('../controllers/user');

const router = express.Router();

router.route("/")
.get(handleGetAllUsers).post(handleCreateNewUser)


router
.route('/:id')
.get(handlegetUserById)
.patch(handlefindByIdAndUpdate)
.delete(handleDeleteUserById);


module.exports = router;