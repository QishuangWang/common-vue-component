<template>
  <div class="box">
    <Tips :content="content" class="wid190" refName="tooltipOver"></Tips>
  </div>
</template>

<script>
  import Tips from '@/components/tips.vue'
  export default {
    components: {
      Tips
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
