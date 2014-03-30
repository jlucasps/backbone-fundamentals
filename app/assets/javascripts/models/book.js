define(['backbone'],
  
function(Backbone) {

  var Book = Backbone.Model.extend({
    defaults: {
      title: "No title",
      author: "Unknown",
      releaseDate: "Unknown",
      keywords: "None"
    }
  });

  return Book;
});