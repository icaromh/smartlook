angular
  .module('Smartlook'
    , [ 'ngRoute'
      , 'ngMaterial'
    ]
  )

  // .config([
  //   '$locationProvider'
  //   , function($locationProvider){
  //     $locationProvider.html5Mode({
  //       enabled: true,
  //       requireBase: true
  //     });
  //   }
  // ])

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

      .when('/look', {
        controller: 'LookController',
        templateUrl: 'assets/templates/look.html'
      })

      .when('/look2', {
        controller: 'LookPController',
        templateUrl: 'assets/templates/look2.html'
      })

      .otherwise({
        redirectTo : '/'
      });

  })

  .controller('AppCtrl', ['$scope', '$mdSidenav', '$location',
    function($scope, $mdSidenav, $location){
      $scope.goInicio = function(){
        $location.path('/app');
      }

      $scope.look2 = function(){
        $location.path('/look2');
      }
    }
  ])

  .controller('LoginController', ['$scope', '$mdSidenav', '$location', '$rootScope', 
    function($scope, $mdSidenav, $location, $rootScope){

      setTimeout(function(){
        $rootScope.$apply(function() {
         $location.path('app');
        });
      }, 6000);
    }
  ])

  .controller('LookController', ['$scope', '$mdSidenav', '$location', '$rootScope',
    function($scope, $mdSidenav, $location, $rootScope){
      $scope.look = '01';
      $scope.loadingLook = true;
      $scope.selecteds = ['12', '19', '22'];
      $scope.selected = 0;
      var i = 1;

      function procuraLook(i){
        var len = 28;
        setTimeout(function(){
          $rootScope.$apply(function() {
            $scope.look = i < 10 ? '0' + i : i;
            i++;
            if(i <= len) procuraLook(i);
            else {
              $scope.loadingLook = false;
              $scope.look = '12';
            }
            console.log($scope.loadingLook);
          });
        }, 250);
      }
      procuraLook(i);

      $scope.next = function(){
        $scope.selected++;
        if($scope.selected >= $scope.selecteds.length)
          $scope.selected = 0;
          $scope.look = $scope.selecteds[$scope.selected];
      }

      $scope.previous = function(){
        $scope.selected--;
        if($scope.selected < 0)
          $scope.selected = $scope.selecteds.length - 1;
          $scope.look = $scope.selecteds[$scope.selected]; 
      }
    }
  ])

  .controller('LookPController', ['$scope', '$mdSidenav', '$location', '$rootScope',
    function($scope, $mdSidenav, $location, $rootScope){
      $scope.look = '1';
      $scope.loadingLook = true;
      $scope.selecteds = ['4', '8', '9'];
      $scope.selected = 0;
      var i = 1;

      function procuraLook(i){
        var len = 10;
        setTimeout(function(){
          $rootScope.$apply(function() {
            $scope.look = i;
            i++;
            if(i <= len) procuraLook(i);
            else {
              $scope.loadingLook = false;
              $scope.look = '4';
            }
            console.log($scope.loadingLook);
          });
        }, 250);
      }
      procuraLook(i);

      $scope.next = function(){
        $scope.selected++;
        if($scope.selected >= $scope.selecteds.length)
          $scope.selected = 0;
          $scope.look = $scope.selecteds[$scope.selected];
      }

      $scope.previous = function(){
        $scope.selected--;
        if($scope.selected < 0)
          $scope.selected = $scope.selecteds.length - 1;
          $scope.look = $scope.selecteds[$scope.selected]; 
      }
    }
  ])

  .controller('IndexController', ['$scope', '$location', function($scope, $location){
    $scope.mostraHumor = false;    
    $scope.humor = "-";
    
    $scope.abre = function(){
      $scope.mostraHumor = true;
      $scope.humor = "Confiante";
    }
  
    $scope.fecha = function(){
      $scope.mostraHumor = false;
    }

    $scope.look = function(){
      $location.path('/look');
    }

  }])
