var mongoose = require("mongoose")
var fs = require("fs")
var path = require("path")
var models_path = path.join(__dirname, "./../models")
mongoose.connect("mongodb://localhost/belt_exam2_db2")

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") >= 0){
    require(path.join(models_path, file))
  }
})
