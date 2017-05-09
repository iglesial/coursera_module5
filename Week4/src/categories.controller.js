(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = [];
  categoriesCtrl.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      categoriesCtrl.categories = result.data;
      console.log(categoriesCtrl.categories);
    });
  };
}

})();
