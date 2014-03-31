define(['backbone'],

function(Backbone) {

  var Book = Backbone.Model.extend({
    
    idAttribute: "_id",
    
    defaults: {
      title: "No title",
      author: "Unknown",
      releaseDate: new Date(),
      keywords: "None"
    },

    parse: function( response ) {
      response.id = response._id;
      return response;
    }
    
  });

  return Book;
});