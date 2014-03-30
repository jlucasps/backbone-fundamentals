
define(['backbone', 'LibraryCollection', 'BookView', 'BookModel', 'text!tmpl/books/formBook.html'],

function(Backbone, LibraryCollection, BookView, BookModel, BookFormTemplate) {
  
  var LibraryView = Backbone.View.extend({
    tagName: 'div',

    className: 'library',
    
    events: {
      'click #add-book': 'addBook'
    },

    initialize: function(initialBooks) {
      this.collection = new LibraryCollection(initialBooks);
      this.listenTo(this.collection, 'add', this.renderBook);
      this.render();
    },
    
    render: function() {
      this.$el.append(BookFormTemplate);

      this.collection.each( function( item ) {
        this.renderBook( item );
      }, this );
    },
    
    renderBook: function( item ) {
      var bookView = new BookView({
        model: item
      });
      this.$el.append( bookView.render().el )
    },
    
    addBook: function( event ) {
      event.preventDefault();
      var formData = {};

      $("#form-book div").children('input').each( function( i, element) {
        if ( $(element).val() !== '' ) {
          formData[element.id] = $(element).val() ;
        }
      });

      this.collection.add(new BookModel(formData) );
    }
  });

  return LibraryView;
});