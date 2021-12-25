const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: true,
    },
    author: {
        type: Object,
        required: true,
    }
}, { collection: 'tests' })

module.exports = mongoose.model("test", testSchema);