var app = require('./index.js');
var db = app.get('db');
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./database');
/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}


module.exports = {



  getCart: function(req, res, next){
    console.log('in get cart');
    db.get_cart([req.query.id], function(err, cart){
      console.log(err, cart);
      res.json(cart);
    })
  },

  addCart: function(req, res, next){
    console.log(req.body);
    console.log(req.body.cartId);
    db.add_cart([req.body.cartId, req.body.title, req.body.count, req.body.total, req.body.edit, req.body.quantity, req.body.image, req.body.bigTotal, req.body.meta, req.body.tag, req.body.media, req.body.stock, req.body.seo, req.body.social], function(err, cart){
      console.log(err, cart);
      console.log(cart);
      res.json(cart);
    })
  },

  deleteCart: function(req, res, next){
    console.log(req);
      db.delete_cart([req.params.id], function(err, cartItem){
        console.log(req.params);
        console.log(err, cartItem);
        res.json(cartItem);
      })
    },

    sumCart: function(req, res, next){
      console.log(req.query.id);
      db.sum_cart([req.query.id], function(err, sum){
        console.log(err, sum);
        res.json(sum);
      })
    },

    updateQuantity: function(req, res, next){
      console.log(req.body.qty);
      console.log(req.params.id);
        db.update_quantity([req.body.qty, req.body.total, req.params.id], function(err, cartItem){
          // console.log(err, cartItem);
          res.json(cartItem);
        })
      },

    getUser: function(req, res, next){
      console.log(req.query.email);
      db.get_user([req.query.email], function(err, user){
        res.json(user);
      })
    },

    addUser: function(req, res, next){
      console.log(req.body.email);
      console.log(req.body.password);
      db.add_user([req.body.email, req.body.password], function(err, user){
        res.json(user);
      })
    },

    changeNamePassword: function(req, res, next){
      console.log(req.body);
      db.change_name_password([req.body.first, req.body.last, req.body.email, req.body.new, req.body.id], function(err, user){
        res.json(user);
      })
    },

    createUser: function(req, res, next) {
      db.findOne({ email: req.body.email }, function(err, existingUser) {
        if (existingUser) {
          return res.status(409).send({ message: 'Email is already taken' })
        }
        var user = new User({
          displayName: req.body.displayName,
          email: req.body.email,
          password: req.body.password
        })
        user.save(function(err, result) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.send({ token: createJWT(result) })
        })
      })
    },

    login: function(req, res, next) {
      console.log(req.body.email);
      db.login([req.body.email, req.body.password], function(err, user){
        var token = createJWT(user);
        console.log(token);
        // console.log(user);
        // console.log(user.userid);
        // var newToken = user[0].token;
        // db.save_token([user[0].userid, newToken], function(err, user){
        //
        // })

        // user[1] = newToken;
        res.json(user);

      })
    }


}
