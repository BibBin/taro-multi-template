module.exports = {
  CURBD: 'brandTwo',
  brandOne: {
    development: {
      appid: 'wx48c8401f7fc81a92',
      appName: 'wx接口测试号',
      apiRequest: {
        BASE_REQUEST_URL: JSON.stringify('https://brand.dev.xxxx.com')
      }
    },
    production: {
      appid: 'wx48c8401f7fc81a92',
      appName: 'wx接口测试号',
      apiRequest: {
        BASE_REQUEST_URL: JSON.stringify('https://brand.xxxx.com')
      }
    }
  },
  brandTwo: {
    development: {
      appid: 'wx48c8401f7fc81a92',
      appName: 'wx接口测试号',
      apiRequest: {
        BASE_REQUEST_URL: JSON.stringify('https://brand.dev.xxxx.com')
      }
    },
    production: {
      appid: 'wx48c8401f7fc81a92',
      appName: 'wx接口测试号',
      apiRequest: {
        BASE_REQUEST_URL: JSON.stringify('https://brand.xxxx.com')
      }
    }
  }
};
