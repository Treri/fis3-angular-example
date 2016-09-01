var app = require('app.js');

app .factory('ServiceA', [
  function(){

    function ServiceA(){
      this.get = function(){
        return 'ServiceA string';
      }
    }

    return new ServiceA();
  }
])
