/*
 * @Description  : API封装
 * @Author       : RenChen
 * @Date         : 2021-10-31 12:43:18
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-31 21:33:51
 */
import * as apis from '~/api'

export default ({ app, $axios, store }, inject) => {
  const API = {}

  Object.keys(apis).forEach(key => {
    API[key] = (data, header, _url = '') => {
      if (_url) { // 改写url
        apis[key].url = _url
      }

      if (header) {
        apis[key].header = header
      }

      if (apis[key]?.token) {
        apis[key].header.token = store.state.user.token
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
