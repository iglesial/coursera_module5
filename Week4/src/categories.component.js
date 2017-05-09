(function () {
angular.module('MenuApp')
.component('categoriesList', {
	templateUrl:'/components/categories_list.html',
	// controller: 'CategoriesController as categoriesCtrl',
	bindings:{
		categories: '<'
	}
})

})();