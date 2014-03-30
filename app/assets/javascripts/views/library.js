
define(['backbone', 'LibraryCollection', 'BookView'],

function(Backbone, LibraryCollection, BookView) {
  
  var LibraryView = Backbone.View.extend({
    tagName: 'div',
    className: 'library',
    initialize: function(initialBooks) {
      this.collection = new LibraryCollection(initialBooks);
      this.render();
    },
    render: function() {
      this.collection.each( function( item ) {
        this.renderBook( item );
      }, this );
    },
    renderBook: function( item ) {
      var bookView = new BookView({
        model: item
      });
      this.$el.append( bookView.render().el )
    }
  });

  return LibraryView;
});