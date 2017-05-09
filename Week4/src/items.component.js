(function () {
angular.module('MenuApp')
.component('itemsList', {
	templateUrl:'items_list.html',
	bindings:{
		category: '<',
		items: '<'
	}
})

})();