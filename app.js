var App = angular.module('SlatedSearchbox', []);

App.controller('SearchCtrl', SearchCtrl);
App.factory('searchFactory', searchFactory);
App.filter('sanitize', sanitize);


function SearchCtrl(searchFactory) {

  var vm = this;
  vm.term = '';
  vm.resultsFetched = false;
  vm.results = [];

  vm.updateResults = function(term) {
    vm.resultsFetched = false;
    // only search after user types in at least 3 values
    if (term.length > 2) {
      vm.results = [];
      searchFactory.getResults(term, function(response) {
        response.forEach(function(item) {
          var result = {
            image: item.image_code,
            value: item.value
          }
          vm.results.push(result);
        });
      });
      vm.resultsFetched = true;
    }
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

function sanitize($sce) {
  return $sce.trustAsHtml;
}
