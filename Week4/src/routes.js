(function () {
'use-strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      template: '<div>Welcome Home!</div>'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.template.html',//'<dic>Categories</div>',//'templates/categories.template.html',
      controller: 'CategoriesController as categoriesCtrl'
      // resolve: {
      //   categories: ['MenuDataService', function (MenuDataService) {
      //     return MenuDataService.getAllCategories();
      //   }]
     //}
    })

    .state('items', {
      url: '/category/{shortName}',
      template: '<items-list category="itemsCtrl.category" items="itemsCtrl.menu_items"></items-list>',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
            data: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName)
                .then(function (data) {
                  console.log(data)
                  return data;
                });
            }]
        }
    });

}


})();