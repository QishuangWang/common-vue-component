<template>
  <div>
    <p style="text-align:left">
      1,安装crypto-js<br />
      2,复制utils里面的AES.js<br />
      3,看代码注释
    </p>
    <el-row>
      <el-col :span="12">
        <el-upload ref="uploadMutiple" :auto-upload="false" action="Fake Action" :on-success="allHandleSuccess"
          :on-change="handleChange" :file-list="fileList" :http-request="allUpload" :before-upload="before_upload"
          multiple>

          <el-button type="primary" size="small">选取文件</el-button>

        </el-upload>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" size="small" @click="submitUpload">上传</el-button>
      </el-col>
      <el-col :span='6' v-if="resList.length">
        <div v-for="(item,index) in resList" :key="index">
          <img v-if="item.file_type == 2" :src="item.file_content" width="100">
          <el-button v-else @click="download(item)" type="text" size="small">{{item.file_name}}</el-button>
        </div>
      </el-col>
    </el-row>


  </div>
</template>
<script>
  import * as api from '@/api/api'
  import {
    Decrypt,
    Encrypt
  } from '@/common/utils/AES.js'
  import {
    dataURLtoDownload
  } from '@/common/utils/tool.js'
  const baseApi = process.env.BASE_API
  export default {
    data() {
      return {
        fileList: [],
        fileObj: {},
        resList: []
      };
    },
    methods: {
      handleChange(file, fileList) {
        console.log(file, fileList)
        this.fileList = fileList
      },
      allHandleSuccess(file) {

      },
      allUpload(files, fileList) {

      },
      before_upload(file, fileList) {

      },
      submitUpload() {
        let that = this
        that.fileList.forEach(item => {
          let reader = new FileReader(); //html5读文件
          reader.readAsDataURL(item.raw); //转BASE64    
          reader.onload = function (e) {
            let data = {
              imgFile: [{
                file_content: that.jiami(reader.result),
                file_name: item.name,
                file_size: item.size,
                file_ext: that.getType(item.name),
                version: 'v1',
              }]
            }
            api.myUpload(data).then(res => {
              let item = res.data.data.data[0]
              item.file_content = that.jiemi(item.file_content)
              that.resList.push(item)
              console.log(that.resList)
              //   that.fileObj = res.data.data.data[0]
              //   that.fileObj.file_content = that.jiemi(that.fileObj.file_content)
              //   console.log(that.fileObj)
            })
          }
        })
      },
      download(item) {
        dataURLtoDownload(item.file_content, item.file_name)
      },
      // -------加密消息--------
      jiami(val) {
        let str1 = val.substring(0, 50)
        let str2 = Encrypt(val.substring(50, 80));
        let str3 = val.substring(80)
        return str1 + '&gzqx' + str2 + '&gzqx' + str3
      },
      // -------解密消息--------
      jiemi(val) {
        let arr = val.split('&gzqx')
        arr[1] = Decrypt(arr[1])
        return arr[0] + arr[1] + arr[2]
      },
      //获取文件后缀
      getType(filename) {
        var index1 = filename.lastIndexOf(".");
        var index2 = filename.length;
        var type = filename.substring(index1, index2);
        return type;
      }

    }
  }

</script>

<style lang='scss' scoped>
  .upload-btn {
    display: inline-block;
  }

</style>
