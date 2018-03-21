var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  name : {type : String, required : true},
  polls : [{ type : mongoose.Schema.Types.ObjectId, ref: 'Poll'}],
  bids : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid'}]
}, {timestamps: true})

mongoose.model("User", userSchema)
