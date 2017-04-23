(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems',FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    console.log(this);

    narrow.now = function (searchTerm){
                narrow.found = [];
        if (searchTerm == undefined || searchTerm.length == 0){
          narrow.found = [];
          console.log("nothing...")
        }
        else{
          console.log(searchTerm)
          var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

          promise.then(function(response){
               var item ={};
          for (var i = 0; i < response.data.menu_items.length; i++) {   
               item = response.data.menu_items[i]; 
                if(response.data.menu_items[i].description.toLowerCase().includes(searchTerm.toLowerCase())){
                   narrow.found.push(item);
                };

           };
           console.log(narrow);

          })
          .catch(function(error){
            console.log("So close!")
          })

        }
        

    };

    narrow.remove = function(index){
      narrow.found.splice(index,1);
    }
    
  };



  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
    });

      return response;
    };

  };

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope:{
        foundItems: '<',
        onRemove: '&'
    },
    restrict: 'E'
  };

  return ddo;

};


})();
