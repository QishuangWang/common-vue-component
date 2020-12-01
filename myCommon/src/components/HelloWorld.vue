<template>
  <el-table :data="tableData" style="width: 600px;margin:0 auto">
    <el-table-column label="序号" type="index" width="50">
    </el-table-column>
    <el-table-column label="名称">
      <template slot-scope="scope">
        <span class='name' @click="go(scope.row.path)">{{scope.row.name}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '图片预览',
          path: '/myViewer'
        }, {
          name: '文字超出隐藏，hover显示',
          path: '/overflowShow'
        }, {
          name: '步骤条',
          path: '/mySteps'
        }, {
          name: '上传加密',
          path: '/myUpLoad'
        }, {
          name: '消息推送',
          path: '/msgPush'
        }]
      }
    },
    created() {

    },
    methods: {
      go(path) {
        this.$router.push(path)
      }
    },
  }

</script>

<style lang='scss' scoped>
.name{
  color:rgb(17, 87, 236);
  cursor: pointer;
}
</style>
