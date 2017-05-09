(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['data'];
function ItemsController(data) {
  var itemsCtrl = this;
  console.log("ok")
    console.log(data);
  itemsCtrl.category = data.data.category;
  itemsCtrl.menu_items = data.data.menu_items;
  console.log(itemsCtrl.menu_items);
  
};

})();
