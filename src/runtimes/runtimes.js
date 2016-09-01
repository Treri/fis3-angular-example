__inline('runtimes/configs/async.js');
__inline('runtimes/configs/misc.js');

__inline('runtimes/directives/myTitle/myTitle.js');

__inline('runtimes/services/ShaDa.js');
__inline('runtimes/services/FastClick.js');

__inline('runtimes/states/root/rootCtrl.js');
__inline('runtimes/states/root/resolves/resolveA.js');

require.async([
  'runtimes/configs/async.js',
  'runtimes/configs/misc.js',
  'runtimes/services/ShaDa.js',
  'runtimes/directives/myTitle/myTitle.js',
  'runtimes/states/root/rootCtrl.js',
  'runtimes/states/root/resolves/resolveA.js'
]);
