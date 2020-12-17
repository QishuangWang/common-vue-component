<template>
  <div></div>
</template>

<script>
  import {getMsg} from './api'
  export default {
    data() {
      return {
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.getData()
      }, 60000);

    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      getData() {
        getMsg().then(res => {
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
