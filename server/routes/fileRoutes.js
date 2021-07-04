const express = require("express");
const {
    createFile,
    getAllFiles,
    getFile,
} = require("../controllers/fileControllers");

const router = express.Router();

router.route("/files").get(getAllFiles).post(createFile);
router.route("/files/:id").get(getFile);

module.exports = router;