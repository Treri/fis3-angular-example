inlineCSS(__inline('./myHello.css'));

var app = require('app.js');

app.directive('myHello', [
  '$window',
  function($window){
    return {
      restrict: 'A',
      link: function($scope, $element){
        $element.addClass('my-hello');

        $element.on('click', function(){
          $window.alert('You clicked my-hello directive');
        });
      }
    };
  }
]);

