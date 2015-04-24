angular
  .module('Smartlook'
    , [ 'ngRoute'
      , 'ngMaterial'
    ]
  )

  .config(function($routeProvider){

    $routeProvider
      
      .when('/', {
        controller: 'IndexController',
        templateUrl: 'assets/templates/index.html'
      })

      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'assets/templates/login.html'
      })


      .otherwise({
        redirectTo : '/login'
      });

  })

  .controller('AppCtrl', ['$scope', '$mdSidenav', '$location',
    function($scope, $mdSidenav, $location){

    }
  ])

  .controller('IndexController', ['$scope', function($scope){

  }])

  .controller('LoginController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
     
  }])