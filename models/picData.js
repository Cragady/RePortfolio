const mongoose = require("mongoose"),
    Schema = mongoose.Schema
;

const picDataSchema = new Schema({
    link: {type: String, required: true},
    repo: {type: String, required: true},
    title: {type: String, required: true},
    piPath: {type: String, required: true},
    tags: {type: Array, required: true}
});

const PicData = mongoose.model("PicData", picDataSchema);

module.exports = PicData;