angular
  .module('Smartlook'
    , [ 'ngRoute'
      , 'ngMaterial'
    ]
  )

  .config([
    '$locationProvider'
    , function($locationProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });
    }
  ])

  .config(function($routeProvider){

    $routeProvider
      
      .when('/app', {
        controller: 'IndexController',
        templateUrl: 'assets/templates/index.html'
      })

      .when('/', {
        controller: 'LoginController',
        templateUrl: 'assets/templates/login.html'
      })


      .otherwise({
        redirectTo : '/'
      });

  })

  .controller('AppCtrl', ['$scope', '$mdSidenav', '$location',
    function($scope, $mdSidenav, $location){

    }
  ])

  .controller('LoginController', ['$scope', '$mdSidenav', '$location', '$rootScope', 
    function($scope, $mdSidenav, $location, $rootScope){

      setTimeout(function(){
        console.log('oi');
        $rootScope.$apply(function() {
         $location.path('app');
        });
      }, 6000);
    }
  ])

  .controller('IndexController', ['$scope', function($scope){

  }])
