var db = require("../database.js");

exports.booksAll = function(req, res){
  db.books.find(function(err, books) {
    if (err) {
      res.send('Database error');
    } else {
      res.json(books);
    }
  });
};

exports.booksOne = function(req, res){
  var id = db.ObjectId(req.params.id);
  db.books.findOne({'_id' : id}, function(err, book) {
    if (err) {
      res.send('Database error');
    } else {
      res.json(book);
    }
  });
};