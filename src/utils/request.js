import Taro from '@tarojs/taro';
import storage from '@/utils/storage';
import { TOKENKEY, LoadingText, ErrorNetworkMsg } from '@/utils/constant';

/*
 * {url}         API URl
 * {data}        参数
 * {method}      请求方法
 * {loading} 全局LOADING
 */
export default (
  options = {
    url: '',
    method: 'GET',
    data: {},
    loading: false
  }
) => {
  options.loading &&
    Taro.showLoading({
      title: LoadingText,
      mask: true
    });
  return Taro.request({
    url: BASE_REQUEST_URL + options.url,
    data: options.data,
    header: () => {
      const headerOptions = {
        'Content-Type': 'application/json'
      };
      const token = storage.get(TOKENKEY);
      if (token) {
        headerOptions[TOKENKEY] = token;
      }
      return headerOptions;
    },
    method: options.method.toUpperCase()
  })
    .then((res) => {
      options.loading && Taro.hideLoading();
      const { statusCode, data } = res;
      if (statusCode >= 200 && statusCode < 300) {
        //根据后端接口定义code
        if (data.code !== 0) {
          Taro.showToast({
            title: `${res.data.error.message}~` || res.data.error.code,
            icon: 'none',
            mask: true
          });
        }
        return data;
      } else {
        throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    })
    .catch((err) => {
      options.loading && Taro.hideLoading();
      Taro.showToast({
        title: ErrorNetworkMsg,
        icon: 'none',
        mask: true
      });
      throw new Error(err);
    });
};
