
define(['backbone', 'BookModel'],

function(Backbone, BookModel) {
  
  var Books = Backbone.Collection.extend({
    
    model: BookModel,

    url: '/api/books'
    
  });

  return Books;
});