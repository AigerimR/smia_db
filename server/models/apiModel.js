const mongoose = require ('mongoose');

const apiSchema = {
  API: String,
  Description: String,
  Auth: String,
  HTTPS: Boolean,
  Cors: String,
  Link: String,
  Category: String
};

const Api = mongoose.model('API', apiSchema);

module.exports = Api;