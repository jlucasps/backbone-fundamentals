
define(['jquery', 'backbone', 'LibraryView'],

function($, Backbone, LibraryView) {

  var AppView = Backbone.View.extend({
    
    el: $("#placeholder"),

    initialize: function() {
      this.render();
    },

    render: function() {
      
      var libraryView = new LibraryView();

      this.$el.append( libraryView.$el );

      return this;
    }
    
  });

  return AppView;
});