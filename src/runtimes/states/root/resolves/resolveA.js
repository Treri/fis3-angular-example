module.exports = [
  '$q',
  '$timeout',
  function($q, $timeout){

    var deferred = $q.defer();

    $timeout(function(){
      deferred.resolve('resolveA');
    }, 500);

    return deferred.promise;
  }
];
