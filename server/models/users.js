var mongoose = require('mongoose');

var newmodel = mongoose.model('newmodel', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {newmodel}
