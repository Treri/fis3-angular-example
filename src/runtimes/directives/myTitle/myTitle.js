inlineCSS(__inline('./myTitle.css'));

var app = require('app.js');

app.directive('myTitle', [
  '$timeout',
  '$document',
  function($timeout, $document){
    return {
      restrict: 'C',
      link: function($scope, $element){

        var watch = $scope.$watch(function(){
          return $element.text().replace(/(^\s*)|(\s*$)/g, '');
        }, function(title){
          // 空标题不显示
          if(/^\s*$/.test(title)){
            return;
          }
          $document[0].title = title;
        });

        $scope.$on('$destroy', watch);
      }
    };
  }
]);
