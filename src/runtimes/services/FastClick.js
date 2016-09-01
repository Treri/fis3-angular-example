/* eslint-disable new-cap */

__inline('modules/fastclick/fastclick.js');

var app = require('app.js');

require.async([
  'modules/fastclick/fastclick.js'
], function(FastClickLib){
  app.factory('FastClick', ['$document', function($document){
    function FastClick(){
      this._instance = null;
      this.init();
    }
    FastClick.prototype.init = function(){
      if(!this._instance){
        this._instance = FastClickLib($document[0].body);
      }
    };
    FastClick.prototype.destroy = function(){
      if(this._instance){
        this._instance.destroy();
      }
      this._instance = null;
    };
    return new FastClick();
  }]);
});
