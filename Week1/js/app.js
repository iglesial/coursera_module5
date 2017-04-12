(function () {
'use strict';
var items = -1;
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.countItems = function(){
  		if($scope.foodList == "" || $scope.foodList == undefined){
  			items = 0;
		}
  		else{
  	  		items = $scope.foodList.split(",").length;
  		 //console.log(items);
  		}



  };

  $scope.sayMyMessage = function () {
  	if(items ==-1){
   			return "";
   	}
	else if (items==0) {
		return "Please enter data first";
			}
	else if(items<=3){
		return "Enjoy!";
	}
	else if(items>3){
		return "Too much!";
	}
	else{
		return "";
	}

  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
