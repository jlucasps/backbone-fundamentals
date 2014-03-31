require.config({
  baseUrl: 'assets',
  paths: {

    // Vendors
    jquery: 'javascripts/vendor/jquery/jquery-2.1.0.min',
    underscore: 'javascripts/vendor/underscore/underscore-1.6.0.min',
    backbone: 'javascripts/vendor/backbone/backbone-1.1.2.min',
    text: 'javascripts/vendor/requirejs/text',
    bootstrap: 'javascripts/vendor/bootstrap/bootstrap-3.1.1.min',
    DateFormat: 'javascripts/vendor/plugins/dateFormat',

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
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: [ 'jquery' ]
    }
  }
});

require(['AppView', 'bootstrap'], function(AppView) {
  var appView = new AppView();
  
});