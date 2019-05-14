import http from './http'
export default {
  common: {
    //字典
    dict() {
      return http({
        url: process.env.ROOT + '/common/dict',
      })
    },
  }
}