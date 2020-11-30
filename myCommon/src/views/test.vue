<template>
  <div></div>
</template>

<script>
  import {
    urlToBase64
  } from '@/components/AESfile/tool'
  import {
    Decrypt,
    Encrypt
  } from '@/components/AESfile/AES.js'
  export default {
    data() {
      return {
        keyFrom: {},
        afterSrc: 'api/ycuploads/v1/images/202011/20201130/20201130104009_XB1TJZcx.jpg',
        src: ''
      }
    },
    created() {
      this.keyFrom = JSON.parse(localStorage.getItem('myKey'))
    },
    mounted() {
      urlToBase64(this.afterSrc).then(res => {
        this.src = this.jiemi(res)
        console.log(this.src)
      })
    },
    methods: {
      // -------解密消息--------
      jiemi(val) {
        let arr = val.split('&gzqx')
        arr[1] = Decrypt(arr[1], this.keyFrom.publicKey, this.keyFrom.privateKey)
        return arr[0] + arr[1] + arr[2]
      },
    }

  }

</script>

<style>

</style>
