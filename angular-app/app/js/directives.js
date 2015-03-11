'use strict';

/* Directives */

var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('hello', function () {
  return {
    restrict: 'AEMC', // options: 'A': attribute; 'E': element, 'M': comment, 'C': class
    template: "<div>Hello everyone!</div>",
    replace: true
  }
});

myDirectives.directive('helloWorld', function () {
  return {
    restrict: 'E',
    templateUrl: 'partials/hello-world.html',
    replace: true
  }
});

myDirectives.directive('helloSen', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: "<div>Hello World! <p ng-transclude></p></div>"
  }
});

myDirectives.directive('loader', function () {
  return {
    restrict: 'E',
    link: function (scope, el, attrs) {
      el.bind('mouseover', function () {
        scope.$apply(attrs.howtoload);
      })
    }
  }
});

myDirectives.directive('superman', function () {
  return {
    scope: {}, //创建独立作用域
    restrict: 'AE',
    controller: function ($scope) {
      $scope.abilities = [];

      this.addStrenght = function () {
        $scope.abilities.push('strength');
      };

      this.addSpeed = function () {
        $scope.abilities.push('speed');
      };

      this.addLight = function () {
        $scope.abilities.push('light');
      };
    },
    link: function (scope, el) {
      el.addClass('btn btn-primary');
      el.on('mouseover', function () {
        console.log(scope.abilities);
      })
    }
  }
});

myDirectives.directive('strength', function () {
  return {
    require: '^superman',
    link: function (scope, el, attr, supermanCtl) {
      supermanCtl.addStrenght();
    }
  };
});

myDirectives.directive('speed', function () {
  return {
    require: '^superman',
    link: function (scope, el, attr, supermanCtl) {
      supermanCtl.addSpeed();
    }
  };
});

myDirectives.directive('light', function () {
  return {
    require: '^superman',
    link: function (scope, el, attr, supermanCtl) {
      supermanCtl.addLight();
    }
  };
});

myDirectives.directive('drink', function () {
  return {
    restrict: 'AE',
    scope: {
      flavor: '@'
    },
    template: "<div>{{flavor}}</div>"
  }
});

myDirectives.directive('soda', function () {
  return {
    restrict: 'AE',
    scope: {
      flavor: '='
    },
    template: '<input type="text" ng-model="flavor"/>'
  }
});

myDirectives.directive('greeting', function () {
  return{
    restrict: 'AE',
    scope: {
      greet: '&'
    },
    template: '<input type="text" ng-model="userName"/><br />' +
    '<button class="btn btn-primary" ng-click="greet({name: userName})">Greeting</button>'
  }
});
