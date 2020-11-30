// base64转downloadfile
// 使用
// 下载文件
//   dataURLtoDownload('base64数据','文件名.txt')
export function dataURLtoDownload(dataurl, name) {
  let blob = base64toBlob(dataurl)
  let url = URL.createObjectURL(blob)
  const a = document.createElement('a'); // 创建a标签
  a.setAttribute('download', name); // download属性
  a.setAttribute('href', url); // href链接
  a.click(); // 自执行点击事件
}
// base64转Blob

function base64toBlob(dataurl) {
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

//url转Base64
export function urlToBase64(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "";
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response)
      }
    };
    xhr.send();
  })
}
