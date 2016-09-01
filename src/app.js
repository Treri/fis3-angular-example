require('modules/deps.js');

var __chunk = function(loading){
  return ['$q', function($q){
    var deferred = $q.defer();
    loading(function(){
      $q.all([].slice.call(arguments)).then(function(args){
        if(args.length){
          deferred.resolve(args[0]);
        }else{
          deferred.reject();
        }
      });
    });
    return deferred.promise;
  }];
};

var __resolve = function(loading){
  return [
    '$q',
    '$injector',
    function($q, $injector){
      var deferred = $q.defer();
      loading(function(){
        var args = [].slice.call(arguments);
        $q.all(args.map($injector.invoke)).then(function(res){
          if(args.length === 1){
            deferred.resolve(res[0]);
          }else{
            deferred.resolve(res);
          }
        }, deferred.reject);
      });
      return deferred.promise;
    }
  ];
};

var app = module.exports = angular.module('fis3-angular-example', [
  'ui.router'
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/foo');

    $stateProvider
      .state('root', {
        abstract: true,
        url: '',
        templateProvider: __chunk(function(resolve){
          require.async([
            'runtimes/states/root/rootCtrl.js'
          ], resolve);
        }),
        controller: 'rootCtrl',
        resolve: {
          __resolveA: __resolve(function(resolve){
            require.async([
              'runtimes/states/root/resolves/resolveA.js'
            ], resolve);
          })
        }
      })
      .state('root.foo', {
        url: '/foo',
        templateProvider: __chunk(function(resolve){
          require.async([
            'states/foo/fooCtrl.js'
          ], resolve)
        }),
        controller: 'fooCtrl'
      })
      .state('root.bar', {
        url: '/bar',
        templateProvider: __chunk(function(resolve){
          require.async([
            'states/bar/barCtrl.js'
          ], resolve)
        }),
        controller: 'barCtrl'
      });
  }
]);
