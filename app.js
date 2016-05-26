var App = angular.module('SlatedSearchbox', ['ngMaterial']);

App.controller('SearchCtrl', SearchCtrl);
App.factory('searchFactory', searchFactory);
App.filter('safe', safe);


function SearchCtrl(searchFactory) {
  var vm = this;

  vm.updateResults = function(term) {
    return searchFactory.getResults(term).then(function(response) {
      return response;
    });
  }
}

function searchFactory($http) {
  var getResults = function(term) {
    var url = 'http://www.slated.com/films/autocomplete/profiles/?term=' + term + '&callback=JSON_CALLBACK';
    return $http.jsonp(url).then(function(response) {
      return response.data;
    });
  }

  return {
    getResults: getResults
  }
}

function safe($sce) {
  return $sce.trustAsHtml;
}
