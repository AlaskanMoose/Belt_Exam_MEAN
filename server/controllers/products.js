var mongoose = require("mongoose")
var Product = mongoose.model("Product")


module.exports = {
  index: function(req, res){
    Product.deleteMany({}, function(err){
      if(err){
        console.log("there was error deleting")
      }
    })
    var newProduct1 = new Product({ description: "This is product one"})
    newProduct1.save(function(err){})

    var newProduct2 = new Product({ description: "This is product two"})
    newProduct2.save(function(err){})

    var newProduct3 = new Product({ description: "This is product three"})
    newProduct3.save(function(err){})
    var result = {product1: newProduct1, product2: newProduct2, product3: newProduct3}
    res.json(result)
  },
  index2: function(req, res){
    Product.findById(req.body.id, function(err, data){
      if(err){
        console.log("there was error")
      }
      res.json({result: data})
    })
  },
  bid: function(req, res){
    Product.findById(req.body.id, function(err, data){
      if(req.body.number <= 0){
        res.json({error: "you cannot bid 0!"})
        return
      }
      for(var i = 0; i < data.bids.length; i++){
        console.log(data.bids[i].amount, "theesfdsf")
        if(req.body.number < data.bids[i].amount){
          res.json({error: "the Bid must be higher"})
          return
        }
      }
      data.bids.push({_user: req.session.userID, amount: req.body.number})
      data.save(function(err){
        res.json({result: data})
      })
    })
  }
}
