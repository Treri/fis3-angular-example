inlineCSS(__inline('./fooCtrl.css'));

module.exports = __inline('./fooCtrl.html');

require('services/ServiceA.js');

var app = require('app.js');

app.controller('fooCtrl', [
  '$scope',
  'ServiceA',
  function($scope, ServiceA){

    $scope.name = 'fooCtrl';

    $scope.getServiceA = function(){
      return ServiceA.get();
    };
  }
]);
