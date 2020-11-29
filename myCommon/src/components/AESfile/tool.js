// base64转downloadfile
export function dataURLtoDownload(dataurl, name) {
  let blob = dataURLtoBlob(dataurl)
  let url = URL.createObjectURL(blob)
  // let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
  // save_link.href = url
  // save_link.download = name;
  // save_link.click()
  const a = document.createElement('a'); // 创建a标签
  a.setAttribute('download', name); // download属性
  a.setAttribute('href', url); // href链接
  a.click(); // 自执行点击事件
}
// base64转Blob

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: mime
  });
}
// 使用
// 下载文件
//   dataURLtoDownload('base64数据','文件名.txt')
