var pkg = require('./package.json');

var staticsUrl = '';

var DOMAIN = process.env.STATICS;
var MOD_CACHE = process.env.CACHE;
var DEBUG = process.env.DEBUG;

if(!DOMAIN){
  DOMAIN = staticsUrl;
}

DOMAIN = DOMAIN.replace(/^https?:/, '');

// MOD_CACHE, whether enable mod.js localStorage cache
if(MOD_CACHE == 'false'){
  MOD_CACHE = false;
}else{
  MOD_CACHE = true;
}

// DEBUG, whether enable console & vConsole
if(DEBUG == 'true'){
  DEBUG = true;
}else{
  DEBUG = false;
}

fis.set('project.files', ['src/**']);

fis.get('project.ignore').push('**/*.md');

fis.set('project.md5Length', 8);

// 全局设置
fis.hook('commonjs', {
  baseUrl: 'src'
});

// 发布地址 => development
fis.match('/src/(**)', {
  release: '/dist_dev/$1'
});

fis.match('/src/index.html', {
  useHash: false
}, true);

fis.match('*.css', {
  postprocessor: fis.plugin('autoprefixer', {
    browsers: ['> 1%']
  })
});

// 设置 moduleId
fis.match('/src/(**.js)', {
  id: '$1',
  isMod: true
});
fis.match('/src/plugins/**.js', {
  isMod: false
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    resourceType: 'mod',
    useInlineMap: true // 资源映射表内嵌
  })
});

fis
.media('prod')

// ==> production
.match('/src/(**)', {
  release: '/dist/$1',
  url: '/$1',
  domain: DOMAIN
})

// 使用hash
.match('::text', {
  useHash: true
})
.match('::image', {
  useHash: true
})

// optimize
.match('*.js', {
  optimizer: fis.plugin('uglify-js', {
    compress: {
      warnings: false,
      drop_console: !DEBUG,
      dead_code: true,
      global_defs: {
        __MOD_CACHE: MOD_CACHE,
        __DEBUG: DEBUG,
        __VERSION: pkg.version
      }
    },
    output: {
      ascii_only: true
    },
    comments: false,
    mangle: true
  })
})
.match('*.css', {
  optimizer: fis.plugin('clean-css')
})
.match('*.html', {
  optimizer: fis.plugin('html-minifier', {
    removeComments: true,
    collapseWhitespace: true
  })
})
.match('index.html', {
  optimizer: fis.plugin('html-minifier', {
    removeComments: false,
    collapseWhitespace: true
  })
})

// all in one pack
.match('::package', {
  postpackager: fis.plugin('loader', {
    resourceType: 'mod',
    resourcemapWhitespace: 0,
    useInlineMap: true // 资源映射表内嵌
  })
})
