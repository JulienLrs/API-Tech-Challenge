const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    adjectif: String,
    present: Boolean
});

module.exports = mongoose.model("equipages", userSchema);