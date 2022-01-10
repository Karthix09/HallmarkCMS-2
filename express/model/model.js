const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String,
    reviews: [reviewSchema],
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;