var app = require('app.js');

app.config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(false);
  }
]);
