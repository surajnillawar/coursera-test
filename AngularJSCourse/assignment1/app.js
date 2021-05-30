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

      console.log("inside fucntion", $scope.foodItems);

      if ($scope.foodItems == "") {
        $scope.message = "Please enter data in above text box";
      } else {

        var $foodItemsArray = $scope.foodItems.split(",");

        var $length = $foodItemsArray.length;

        if ($length <= 3) {
          console.log("inside if", $scope.foodItems);
          $scope.message = "Enjoy!";
        } else {
          console.log("inside else", $scope.foodItems);
          $scope.message = "Too much!";
        }
      }
    };
  }

})();
