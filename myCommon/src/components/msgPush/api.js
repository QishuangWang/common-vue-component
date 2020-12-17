import request from '@/common/utils/request'
export function getMsg(data) {
  return request({
    url: '/api/yc_test/test/getmsg.jsp',
    method: 'post',
    data
  })
}
