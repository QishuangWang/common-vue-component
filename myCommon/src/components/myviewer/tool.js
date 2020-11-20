import "./viewer.js";
// wqs2020-7-23
// 参数1：父级元素盒子id
// 参数2：删除按钮要执行的函数 可选 默认为空
// 参数3：上报按钮要执行的函数 可选 默认为空
function viewPhotoNew(domID, fn1, fn2) {
  let deleteOpts = fn1 ? {
    show: 1,
    size: "large",
    click: fn1
  } : 0
  let upOpts = fn2 ? {
    show: 1,
    size: "large",
    click: fn2
  } : 0
  const ViewerDom = document.getElementById(domID);
  let viewer = new Viewer(ViewerDom, {
    hidden: function () {
      viewer.destroy();
    },
    zIndex: 99999,
    title: 0,
    navbar: 1,
    movable: 1,
    fullscreen: 0,
    loop:0,
    toolbar: {
      zoomIn: {
        show: 1,
        size: "large"
      },
      zoomOut: {
        show: 1,
        size: "large"
      },
      oneToOne: {
        show: 1,
        size: "large"
      },
      reset: 0,
      prev: {
        show: 1,
        size: "large"
      },
      play: 0,
      next: {
        show: 1,
        size: "large"
      },
      rotateLeft: {
        show: 1,
        size: "large"
      },
      rotateRight: {
        show: 1,
        size: "large"
      },
      flipHorizontal: deleteOpts,
      flipVertical: upOpts,
    },
  });
  viewer.show();
  return viewer
}
export {
  viewPhotoNew
};
