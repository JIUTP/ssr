/*
 * @Description  : axios配置
 * @Author       : RenChen
 * @Date         : 2021-10-30 22:46:08
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-31 15:19:45
 */

export default ({ $axios, error }) => {
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  if (process.client) {
    $axios.defaults.withCredentials = true
  }
  // 基本配置
  $axios.create({
    baseURL: process.env.baseUrl,
    timeout: 15000
  })

  // 请求拦截
  $axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么

    return config
  }, error => {
    return Promise.reject(error)
  })

  // 响应拦截
  $axios.interceptors.response.use(
    response => {
      const res = response.data

      if (response.status === 200 || response.config.responseType === 'blob') {
        return response.data
      } else {
        if (process.server) {
          // 服务端错误 跳转500
          error({
            statusCode: 500,
            message: ''
          })
        } else {
          // toast提示
          console.log(res.msg)
        }
        return Promise.reject(res)
      }
    },
    err => {
      const { response } = err

      if (process.client) {
        if (response?.data?.msg) {
          console.log(response.data.msg)
        } else {
          switch (response.status) {
            case 400:
              console.log('请求错误，参数异常')
              break
            case 500:
              console.log('服务器处理异常,请稍候重试')
              break
            default:
              console.log('网络请求失败，请稍候重试')
              break
          }
          return Promise.reject(err)
        }

        // 取消请求
        if ($axios.isCancel(err)) {
          alert('请求取消')
          return Promise.reject(err)
        }

        if (!window.navigator.onLine) {
          alert('请检查网络')
          return Promise.reject(err)
        } else {
          alert('未知错误')
          return Promise.reject(err)
        }
      } else {
        error({
          statusCode: response.status,
          message: ''
        })
      }
    }
  )
}
