require.config({
  baseUrl: 'assets',
  paths: {

    // Vendors
    jquery: 'javascripts/vendor/jquery/jquery-1.10.2',
    underscore: 'javascripts/vendor/underscore/underscore',
    backbone: 'javascripts/vendor/backbone/backbone',
    text: 'javascripts/vendor/requirejs/text',
    bootstrap: 'javascripts/vendor/bootstrap/bootstrap',

    // Root directories
    js: 'javascripts',
    css: 'stylesheets',
    tmpl: 'templates',

    // Custom files
    AppView: 'javascripts/views/app',

    BookView: 'javascripts/views/book',
    BookModel: 'javascripts/models/book',

    LibraryView: 'javascripts/views/library',
    LibraryCollection: 'javascripts/collections/library'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery']
    } 
  }
});

require(['AppView', 'bootstrap'], function(AppView) {
  var appView = new AppView();
  
});