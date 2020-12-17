<template>
  <div>
    <canvas ref="can" id="can" width=300 height=300></canvas>
  </div>
</template>

<script>
import { init } from './index.js'
  export default {
      data () {
          return {
              
          }
      },
      computed:{
        can(){
          return this.$refs.can
        }
      },
      mounted () {
        init(this.can)
      }
  }

</script>

<style lang="scss" scoped>
  canvas {
    margin: 20px auto;
    display: block;
  }

</style>>
