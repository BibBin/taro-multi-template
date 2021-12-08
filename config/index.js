/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const BrandEnvMap = require('../src/config/brand');
const CURBD = BrandEnvMap.CURBD;
const config = {
  projectName: 'taro-multi-template',
  date: '2021-12-08',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: `src/${CURBD}`,
  outputRoot: 'dist',
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/config': path.resolve(__dirname, '..', 'src/config'),
    '@/brand_entry': path.resolve(__dirname, '..', `src/${CURBD}`)
  },
  plugins: [],
  csso: {
    // 配置项同 https://github.com/css/csso#minifysource-options
    enable: true,
    config: {
      restructure: false //don't change CSS structure, i.e. don't merge declarations, rulesets
    }
  },
  sass: {
    resource: ['variable.scss'],
    projectDirectory: path.resolve(
      __dirname,
      '..',
      `src/${CURBD}/static/styles/`
    )
  },
  defineConstants: {
    CURBD: JSON.stringify(CURBD),
    appName: JSON.stringify(BrandEnvMap[CURBD][process.env.NODE_ENV].appName),
    ...BrandEnvMap[CURBD][process.env.NODE_ENV].apiRequest
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

module.exports = function (merge) {
  console.log(
    '\x1B[36m%s\x1B[0m',
    '===========================环境变量======================================'
  );
  console.log(
    '\x1B[36m%s\x1B[0m',
    '______process.env.NODE_ENV________' + process.env.NODE_ENV + '__________'
  );
  console.log(
    '\x1B[36m%s\x1B[0m',
    '============================环境变量======================================='
  );
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
