
define(['backbone', 'text!tmpl/books/book.html'],

function(Backbone, BookTempate) {

  var BookView = Backbone.View.extend({
    tagName: 'div',
    
    className: 'book',
    
    template: _.template(BookTempate),
    
    initialize: function() {
      this.render();
    },
    
    render: function()  {
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    }
  });

  return BookView;
});