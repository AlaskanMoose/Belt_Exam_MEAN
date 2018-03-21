var mongoose = require("mongoose")

var Bids = new mongoose.Schema({
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
  amount : {type : Number, required: true, min : 1},
}, {timestamps:true})

var productSchema = new mongoose.Schema({
  description : {type: String, default:"This is product 1", required: true},
  bids : [Bids],
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User" }
})

mongoose.model("Product", productSchema)
