'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',

  'bookControllers',
  'formControllers',
  'styleControllers'
]);

myApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'partials/books.html',
        controller: 'BooksCtrl'
      }).
      when('/books/:bookId', {
        templateUrl: 'partials/book-show.html',
        controller: 'BookShowCtrl'
      }).
      when('/form', {
        templateUrl: 'partials/form.html',
        controller: 'FormCtrl'
      }).
      when('/style', {
        templateUrl: 'partials/style.html',
        controller: 'StyleCtrl'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);
