<template>
 <div>

    <el-form :model="loginForm" ref="loginForm" :rules="rules" class="loginContainer">
      <h3>删除数据</h3>

      <el-form-item prop="id">
        <el-input type="text" v-model="loginForm.id" autocomplete="off" placeholder="编号"></el-input>
      </el-form-item>

     
      <el-button type="primary" style="width: 100%" @click="submit">提交</el-button>

    </el-form>
  </div>
</template>

<script>
 import axios from 'axios'
  import qs from 'qs'
  export default {
    
    data() {
      return {
        checked: false,
        captchaUrl: '123',
        loginForm: {
          id: '',
          name: '',
          age: ''
        },
        rules: {
          id: [{
            required: true,
            message: '请输入编号',
            trigger: 'blur'
          }],
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }],
          age: [{
            required: true,
            message: '请输入验年龄',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            axios.post('http://localhost:8080/delete',qs.stringify(this.loginForm)).then(resp => {
              if(resp.data){
                this.$message.success('删除成功');
              }else{
                this.$message.error('删除失败');
              }
              
            }).catch(error => {
              this.$message.error('删除失败');
              console.log(error)
            })
          } else {
            this.$message.error('删除失败');
            return false;
          }
        });
      }
    },
  }
</script>

<style>

</style>