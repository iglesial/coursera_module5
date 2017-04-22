(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShareItemsService', ShareItemsService);

  ToBuyController.$inject = ['ShareItemsService'];
  function ToBuyController(ShareItemsService) {
    var toBuy = this;
    toBuy.itemName = "";
    toBuy.itemQuantity = "";
    toBuy.items = ShareItemsService.getToBuyItems();

    toBuy.checkOff = function(index){
      ShareItemsService.moveItem(index);
    };
  };


  AlreadyBoughtController.$inject = ['ShareItemsService'];
  function AlreadyBoughtController(ShareItemsService) {
    var bought = this;
    bought.items =   ShareItemsService.getBoughtItems();

  };

  function ShareItemsService(){
    var service = this;
    var itemsBought = [];
    var itemstoBuy =[    { name: "coffee", quantity: 2 },
      { name: "chocolate bars", quantity: 10 },
      { name: "cookies", quantity: 5 },
      { name: "good stuff", quantity: 10 },
      { name: "salmon", quantity: 10 }
    ];


    service.moveItem = function(index){
      var item = itemstoBuy[index];
      itemstoBuy.splice(index, 1);
      itemsBought.push(item);

    };

    service.getBoughtItems = function(){
      return itemsBought;
    };
    service.getToBuyItems = function(){
      return itemstoBuy;
    };

  };


})();
