/*
 * @Description  : User Api
 * @Author       : RenChen
 * @Date         : 2021-10-31 13:02:14
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-11-02 13:38:16
 */
export const getUserInfo = {
  url: '/699pic/userInfo',
  method: 'POST',
  headers: {
    GETDATE: new Date().getTime()
  },
  isToken: true
}

export const getInfo = {
  url: '/699pic/userInfo',
  method: 'POST',
  headers: {
    GETDATE: new Date().getTime()
  },
  isToken: true
}