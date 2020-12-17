<template>
  <div class="box">
    <p>1,安装crypto-js 4.0.0</p>
    <p>2,copy \components\AESfile 文件夹 到对应项目中</p>
    <p>3,使用的地方引入组件</p>
    <p>
      属性：<br />
      1,accept 接受文件类型，字符串'png,jpg'。<br />
      2,sizeLimit 文件大小限制，字符串，单位KB,MB,GB大写<br />
      3,numLimit 文件数量限制，number类型<br />
      4,multiple 是否多选<br />
      5,isPhoto 是否预览图片<br />
    </p>
    <p>
      方法：<br />
      1,previewCB 预览图片时，选中文件后返回图片url<br />
      2,successCB 选中文件点击上传后，返回值
    </p>
    <el-row>
      <el-col :span="12">
        <div class="btns">
          <MyUpload ref="myUpload" accept='png,jpg' sizeLimit='100KB' isPhoto @previewCB='previewCB'
            @successCB='handleSuccess' />
          <p>头像上传</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content">
          <img :src="srcUrl" width="100">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="btns">
          <MyUpload ref="myUpload1" accept='png,jpg' sizeLimit='100KB' isPhoto multiple :numLimit='5'
            @previewCB='previewCB1' @successCB='handleSuccess1' />
          <p>多图上传</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content">
          <img v-for="(item,index) in imgList1" :key="index" :src="item" width="100" @click="clearFile1(index)">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="btns">
          <MyUpload ref="myUpload2" accept='png,jpg,pdf,rar,docx' sizeLimit='100MB' multiple :numLimit='5'
            @successCB='handleSuccess2' />
          <p>多文件上传</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MyUpload from '@/components/AESfile/myUpload.vue'
  import * as api from '@/api/api'
  import {
    Decrypt,
    Encrypt
  } from '@/components/AESfile/AES.js'
  export default {
    components: {
      MyUpload
    },
    data() {
      return {
        srcUrl: '',
        //-----------------------------------
        imgList1: [],
        fileList1: [],
        //---------------------
        keyFrom:{},
        afterSrc:''
      }
    },
    created() {
      this.getKey()
    },
    methods: {
      //------头像--------
      previewCB(file) {
        this.srcUrl = URL.createObjectURL(file.raw)
      },
      handleSuccess(data) {
        console.log('parent', data)
        this.keyFrom = JSON.parse(localStorage.getItem('myKey'))
        this.afterSrc = this.jiemi(data[0].file_content)
        console.log(this.afterSrc)
      },
      //------多图--------
      previewCB1(file) {
        this.imgList1.push(URL.createObjectURL(file.raw))
        this.fileList1.push(file)
      },
      handleSuccess1(data) {
        console.log('parent', data)
      },
      clearFile1(index) {
        this.$refs.myUpload1.clearFile(this.fileList1[index])
        this.imgList1.splice(index, 1)
      },
      //------多文件--------
      handleSuccess2(data) {
        console.log('parent', data)
      },
      //getKey
      getKey() {
        api.getKey().then(res => {
          localStorage.setItem('myKey', JSON.stringify(res.data.data.data[0]))
        })
      },
      // -------解密消息--------
      jiemi(val) {
        let arr = val.split('&gzqx')
        arr[1] = Decrypt(arr[1],this.keyFrom.publicKey,this.keyFrom.privateKey)
        return arr[0] + arr[1] + arr[2]
      },
    }
  }

</script>

<style scoped>
  .box {
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #ddd;
    text-align: left;
  }

  .btns {
    line-height: 100%;
  }

  .content {
    height: 120px;
  }

</style>
