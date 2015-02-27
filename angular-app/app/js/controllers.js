'use strict';

/* Controllers */

var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('BooksCtrl', ['$scope',
  function ($scope) {
    $scope.books = [
      {id: 1, name: 'Ruby'},
      {id: 2, name: 'Rails'},
      {id: 3, name: 'JavaScript'}
    ];

    $scope.ctlFlavor = 'Pepsi';
    $scope.ctlSoda = 'Coca-Cola';

    $scope.loadData = function () {
      console.log('load data...');
    };

    $scope.sayHello = function (name) {
      alert('hello' + name);
    }
  }]);

bookControllers.controller('BookShowCtrl', ['$scope',
  function ($scope) {
    $scope.book = {
      id: 1,
      name: 'Ruby'
    }
  }]);

var formControllers = angular.module('formControllers', []);

formControllers.controller('FormCtrl', ['$scope',
  function ($scope) {
    $scope.texts = {
      title: 'Two way data binding',
      panel: 'This is the main panel!'
    };

    $scope.user_info = {
      email: 'foo@bar.com',
      password: 'foobar',
      auto_login: true
    };

    $scope.getFormInfo = function () {
      console.log($scope.user_info);
    };

    $scope.setFormInfo = function () {
      $scope.user_info = {
        email: 'bar@foo.com',
        password: 'barfoo',
        auto_login: false
      }
    };

    $scope.resetFormInfo = function () {
      $scope.user_info = {
        email: 'foo@bar.com',
        password: 'foobar',
        auto_login: true
      };
    };
  }]);

var styleControllers = angular.module('styleControllers', []);

styleControllers.controller('StyleCtrl', ['$scope',
  function ($scope) {
    $scope.color = 'red';
    $scope.messageText = 'Default message';
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.setColor = function (color) {
      $scope.color = color;
    };

    $scope.setError = function () {
      $scope.isError = true;
      $scope.isWarning = false;

      $scope.messageText = 'The is an Error!'
    };

    $scope.setWarning = function () {
      $scope.isError = false;
      $scope.isWarning = true;

      $scope.messageText = 'This is just a warning.'
    };

  }]);

styleControllers.controller('ToggleCtrl', ['$scope',
  function ($scope) {
    $scope.menu_status = false;

    $scope.toggleMenu = function () {
      $scope.menu_status = !$scope.menu_status;
    }
  }]);
