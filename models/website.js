// models/Website.js

const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Website', websiteSchema);
