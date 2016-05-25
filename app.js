var App = angular.module('SlatedSearchbox', []);

App.controller('SearchCtrl', SearchCtrl);
App.factory('searchFactory', searchFactory);


function SearchCtrl(searchFactory) {

  var vm = this;
  vm.term = '';

  vm.updateResults = function(term) {
    searchFactory.getResults(vm.term, function(response) {
      console.log(response);
    });
  }

}

function searchFactory($http) {

  var getResults = function(term, callback) {
    var url = 'http://www.slated.com/films/autocomplete/profiles/?term=' + term + '&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(response) {
      callback(response);
    })
  }

  return {
    getResults: getResults
  }

}
