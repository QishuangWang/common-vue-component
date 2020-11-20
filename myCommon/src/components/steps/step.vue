<template>
  <div class="step">
    <ul>
      <li v-for="(item,index) in total" :key='index' :class="{stepActive:stepnum == index}">
        <span class="step-num" :class="{activeStep:stepnum == index}" v-if="stepnum == index"><i
            class="el-icon-check"></i></span>
        <span class="step-num" :class="{activeStep:stepnum > index}" v-else>{{index+1}}</span>
        <span class="step-title">第{{nums[index]}}步</span>
        <span class="line" :class="{bg:stepnum == index}"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "mySteps",
    props: {
      stepnum: {
        type: String,
        default: 0,
      },
      total: {
        type: Number,
        default: 3,
      }
    },
    data() {
      return {
        list: [],
        nums: ['一', '二', '三', '四', '五']
      }
    }
  };

</script>

<style lang='scss' scoped>
  .step {
    height: 54px;
    line-height: 54px;
    position: relative;
    background: #f5f7fa;
    margin: 16px 0;

    ul {
      position: absolute;
      height: 28px;
      margin: 13px 0 0 0;
      width: 100%;

      li {
        float: left;
        height: 28px;
        width: 20%;
        font-weight: 500;
        line-height: 28px;
        color: #8e939a;
        position: relative;
        margin-left: 28px;
        list-style: none;
        .step-num {
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 50%;
          border: 2px solid currentColor;
          font-size: 16px;
          font-weight: 500;
          display: inline-block;
          text-align: center;
          position:absolute;
          left: 0;
          top:0;
        }

        .activeStep {
          color: #fff;
          background: #214b7f;
        }

        .step-title {
          font-size: 14px;
          padding: 0 5px;
          position: absolute;
          left: 30px;
          top:0;
        }

        .line {
          display: inline-block;
          width: 100px;
          height: 2px;
          background: #909399;
          position: absolute;
          left: 90px;
          top: 15px;
        }

        .bg {
          background: #214b7f;
        }

        .line:last-child {
          left: 100px;
        }
      }

      .stepActive {
        color: #214b7f;
      }
    }
  }

</style>
