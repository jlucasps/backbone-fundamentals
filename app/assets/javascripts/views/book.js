
define(['backbone', 'DateFormat', 'text!tmpl/books/book.html'],

function(Backbone, DateFormat, BookTempate) {

  var BookView = Backbone.View.extend({

    tagName: 'div',
    
    className: 'book',
    
    template: _.template(BookTempate),
    
    events: {
      'click .delete': 'deleteBook'
    },

    initialize: function() {
      this.render();
    },
    
    render: function()  {
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    },

    deleteBook: function() {
      this.model.destroy();
      this.remove();
    }

  });

  return BookView;
});