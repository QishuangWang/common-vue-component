<template>
  <el-upload ref="uploadMutiple" :limit='9' :auto-upload="false" action="Fake Action" :on-success="allHandleSuccess"
    :on-change="handleChange" :on-exceed='overLimit' :file-list="fileList" :http-request="allUpload"
    :before-upload="before_upload" multiple>
    <el-button slot="trigger" type="primary" size="small">选取文件</el-button>
    <el-button type="primary" size="small" @click="submitUpload">上传</el-button>
  </el-upload>
</template>
<script>
  import * as api from '@/api/api'
  import {
    Decrypt,
    Encrypt
  } from './AES.js'
  import {
    dataURLtoDownload
  } from './tool.js'
  const baseApi = process.env.BASE_API
  export default {
    data() {
      return {
        fileList: [],
        resList: [],
        count: 0,
        upData: {}
      };
    },
    watch: {
      'count':function(val){
          if(val !=0 && val == this.fileList.length){
              this.uploadData(this.upData)
          }
      }
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList
      },
      allHandleSuccess(file) {},
      allUpload(files, fileList) {},
      before_upload(file, fileList) {},
      overLimit() {
        this.$message.warning('文件数超出最大限制')
      },
      submitUpload() {
        let that = this
        that.upData = {
          imgFile: []
        }
        that.count = 0
        that.fileList.forEach(item => {
          let reader = new FileReader(); //html5读文件
          reader.readAsDataURL(item.raw); //转BASE64    
          reader.onload = function (e) {
            let fileItem = {
              file_content: that.jiami(reader.result),
              file_name: item.name,
              file_size: item.size,
              file_ext: that.getType(item.name),
              version: 'v1',
            }
            that.upData.imgFile.push(fileItem)
            that.count++
          }
        })

      },
      uploadData(data) {
        api.myUpload(data).then(res => {
          this.$message.success('文件上传成功')
          this.fileList = []
          this.upData = []
          this.count = 0
        })
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
