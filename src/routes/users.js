const express = require("express");
const router = express.Router();

router.param("uuid", (req, res, next, uuid) => {
    // Get user by uuid
    req.user = `user:${uuid}`;
    next();
});

router.route("/:uuid")
    .get(require("../middleware/users.js").getUsers, (req, res) => {
        res.render("users_page", {data: req});
    });


module.exports = router;