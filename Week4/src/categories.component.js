(function () {
angular.module('MenuApp')
.component('categoriesList', {
	templateUrl:'categories_list.html',
	bindings:{
		categories: '<'
	}
})

})();