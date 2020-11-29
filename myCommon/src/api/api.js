import request from '@/common/utils/request'

//上传文件
export function myUpload(data) {
  return request({
    url: '/api/yc_test/test/uploadfile.jsp',
    method: 'post',
    data
  })
}

//下载文件
export function myDownload(data) {
  return request({
    url: '/api/yc_test/test/uploadfile.jsp',
    method: 'post',
    data
  })
}