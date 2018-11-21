const mongoose = require("mongoose"),
    Schema = mongoose.Schema
;

const picDataSchema = new Schema({
    link: {type: String, required: true},
    title: {type: String, required: true},
    piPah: {type: String, required: true}
});

const PicData = mongoose.model("PicData", picDataSchema);

module.exports = PicData;