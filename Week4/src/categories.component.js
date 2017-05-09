(function () {
angular.module('MenuApp')
.component('categoriesList', {
	templateUrl:'categories_list.html',
	// controller: 'CategoriesController as categoriesCtrl',
	bindings:{
		categories: '<'
	}
})

})();