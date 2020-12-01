<template>
  <div>

  </div>
</template>

<script>
  // import Stomp from 'stompjs'
  // import {
  //   MQ_SERVICE,
  //   MQ_USERNAME,
  //   MQ_PASSWORD
  // } from './linkparam.js'
  import * as api from '@/api/api'
  export default {
    data() {
      return {
        // client: Stomp.client(MQ_SERVICE),
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.getMsg()
      }, 60000);

    },
    beforeDestroy() {
      // client.disconnect()
      clearInterval(this.timer)
    },
    methods: {
      // connect() {
      // 监听的队列
      // 需要和发送者的发送的队列名称一致否则无法接受到数据
      //   var destination = "张三";
      //   var client = Stomp.client(MQ_SERVICE);
      //   var onconnect = function (frame) {
      //     client.subscribe(destination, function (message) {
      //       console.log(eval("(" + message.body + ")"));

      //     });
      //   };

      //   client.connect(MQ_USERNAME, MQ_PASSWORD, onconnect);
      // },
      getMsg() {
        api.getMsg().then(res => {
          if (res.data.data.data.length) {
            res.data.data.data.forEach(item => {
              setTimeout(() => {
                this.$notify({
                  title: '提示',
                  message: item.ITEM_DESC,
                  position: 'bottom-right',
                })
              }, 100);
            })
          }
        })
      }

    }
  }

</script>

<style>

</style>
