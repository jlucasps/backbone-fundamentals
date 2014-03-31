define(['backbone'],

function(Backbone) {

  var Book = Backbone.Model.extend({
    defaults: {
      title: "No title",
      author: "Unknown",
      releaseDate: "Unknown",
      keywords: "None"
    },

    parse: function( response ) {
      response.id = response._id;
      return response;
    }
  });

  return Book;
});