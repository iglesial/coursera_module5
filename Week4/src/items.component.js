(function () {
angular.module('MenuApp')
.component('itemsList', {
	templateUrl:'components/items_list.html',
	bindings:{
		category: '<',
		items: '<'
	}
})

})();