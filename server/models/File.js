const mongoose = require("mongoose");
const slugify = require("slugify");

const FileSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, ""],
            unique: true,
        },
        slug: String,
        uploadedBy: {
            type: String,
            required: [true, ""],
        },
        redactedValues: {
            type: String,
            required: [true, ""],
        },
        text: {
            type: String,
            required: [true, ""],
        },
    },
    {
        timestamps: true,
    }
);

FileSchema.pre("save", function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

module.exports = mongoose.model("File", FileSchema);