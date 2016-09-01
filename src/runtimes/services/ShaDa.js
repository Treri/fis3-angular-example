var app = require('app.js');

app.factory('ShaDa', [
  '$cacheFactory',
  function($cacheFactory, EventBus){

    function ShaDa(){
      this._cache = $cacheFactory('ShaDa');
    }

    var proto = ShaDa.prototype;

    proto.put = function(key, value, flag){
      return this._cache.get(key);
    };

    proto.get = function(key){
      return this._cache.get(key);
    };

    // 获取一次, 然后从缓存中删除
    proto.getOnce = function(key){
      var value = this._cache.get(key);
      this._cache.remove(key);
      return value;
    };

    proto.remove = function(key){
      return this._cache.remove(key);
    };

    proto.removeAll = function(){
      return this._cache.removeAll();
    };

    proto.info = function(){
      return this._cache.info();
    };

    return new ShaDa();
  }
]);
