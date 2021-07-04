const File = require("../models/File");
const AsyncManager = require("../utils/asyncManager");
const APIError = require("../utils/apiError");

// $-path    POST /api/v1/files
exports.createFile = AsyncManager(async (req, res, next) => {
    const newfile = await File.create(req.body);
    return res.status(201).json(newfile);
});

// $-path    GET /api/v1/files
exports.getAllFiles = AsyncManager(async (req, res, next) => {
    const files = await File.find();
    return res.status(200).json(files);
});

// $-path    GET /api/v1/files/:id
exports.getFile = AsyncManager(async (req, res, next) => {
    const file = await File.findById(req.params.id);

    if (!file) {
        return next(new APIError(`That file is not available`, 404));
    }
    return res.status(200).json(file);
});
