<template>
  <div class="box">
    <Tips :content="content" class="wid190" refName="tooltipOver"></Tips>
    <MyUpload accept='png,jpg' sizeLimit='20KB' :numLimit='3' :multiple='true'/>
  </div>
</template>

<script>
  import Tips from '@/components/tips.vue'
  import MyUpload from '@/components/AESfile/myUpload.vue'
  export default {
    components: {
      Tips,
      MyUpload
    },
    data() {
      return {
        content: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
      }
    },
  }

</script>

<style scoped>
  .box {
    width: 200px;
    margin: 0 auto;
    border: 1px solid #ddd;
  }

</style>
