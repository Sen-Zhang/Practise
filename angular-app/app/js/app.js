'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',

  'bookControllers',
  'formControllers',
  'styleControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
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
        redirectTo: '/phones'
      });
  }]);
