inlineCSS(__inline('./rootCtrl.css'));

module.exports = __inline('./rootCtrl.html');

var app = require('app.js');

app.controller('rootCtrl', [
  '$scope',
  function($scope){
    $scope.getRootString = function(){
      return 'rootString';
    };
  }
]);
