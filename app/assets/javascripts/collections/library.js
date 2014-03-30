
define(['backbone', 'BookModel'],

function(Backbone, Book) {
  
  var Books = Backbone.Collection.extend({
    model: Book
  });

  return Books;
});