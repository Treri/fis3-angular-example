inlineCSS(__inline('./barCtrl.css'));

module.exports = __inline('./barCtrl.html');

require('directives/myHello/myHello.js');

var app = require('app.js');

app.controller('barCtrl', [
  '$scope',
  function($scope){
    $scope.name = 'barCtrl';
  }
])
