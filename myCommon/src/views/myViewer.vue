<template>
  <div>
    <img v-for="(item,index) in srcList" :src="item" :key="index" width="100" @click="view(index)" />

    <div class="imgBox" id="imgBox" style="display:none">
      <img v-for="(item,index) in srcList" :src="item" :key="index" />
    </div>
  </div>
</template>

<script>
  import {
    viewPhotoNew
  } from '@/components/myviewer/tool.js'
  export default {
    data() {
      return {
        srcList: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604585641835&di=85ffbb0af55fef4484f2387ef74d99c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604585641835&di=85ffbb0af55fef4484f2387ef74d99c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604585641835&di=85ffbb0af55fef4484f2387ef74d99c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg',
        ]
      }
    },
    methods: {
      viewPhotoNew,
      view(index) {
        this.viewPhotoNew('imgBox').view(index)
      },
    }
  }

</script>

<style>

</style>
