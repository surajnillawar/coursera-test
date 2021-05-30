(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.foodItems = "";

    $scope.checkDishes = function () {
      //  $scope.foodItems;
      $scope.foodItems = $scope.foodItems.trim();

      if ($scope.foodItems == "") {
        $scope.message = "Please enter data in above text box";
      } else {

        var $foodItemsArray = $scope.foodItems.split(",");

        var $length = $foodItemsArray.length;

        if ($length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  }

})();
