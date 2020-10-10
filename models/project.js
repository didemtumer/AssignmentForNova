const mongoose = require('mongoose');

// Creating ProjectSchema 
var ProjectSchema= new mongoose.Schema({
   ID:String,
   rate:String

});

//Exporting Project Schema
module.exports= mongoose.model("Project", ProjectSchema);