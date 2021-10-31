/*
 * @Description  : API封装
 * @Author       : RenChen
 * @Date         : 2021-10-31 12:43:18
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-31 15:16:37
 */
import * as apis from '~/api'

export default ({ app, $axios }, inject) => {
  const API = {}

  Object.keys(apis).forEach(key => {
    API[key] = (data, _url = '') => {
      if (_url) { // 改写url
        apis[key].url = _url
      }

      if (data) {
        if (apis[key].method === 'GET') {
          apis[key].params = data
        }
        apis[key].data = data
      }

      return $axios(apis[key])
    }
  })

  app.api = API
  inject('api', API)
}
