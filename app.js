var App = angular.module('SlatedSearchbox', []);

App.controller('SearchCtrl', SearchCtrl);

function SearchCtrl() {
  var vm = this;
  vm.message = "Hello World!";
}
