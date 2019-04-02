var mongoose = require('mongoose')

var newModel = mongoose.model('newModel',{
    email:{
    type: String,
    required: true,
    trim: true,
    minlength:1
    }
});

module.exports = {newModel};