<template>
  <div>

    <el-form :model="loginForm" ref="loginForm" :rules="rules" class="loginContainer">
      <h3>修改数据</h3>

      <el-form-item prop="id">
        <el-input type="text" v-model="loginForm.id" autocomplete="off" placeholder="编号"></el-input>
      </el-form-item>

      <el-form-item prop="name">
        <el-input type="text" v-model="loginForm.name" autocomplete="off" placeholder="姓名"></el-input>
      </el-form-item>

      <el-form-item prop="age">
        <el-input type="text" v-model="loginForm.age" autocomplete="off" placeholder="年龄"></el-input>
      </el-form-item>


      <el-button type="primary" style="width: 100%" @click="submit">提交</el-button>

    </el-form>
  </div>
</template>

<script>
  
  import axios from 'axios'
  import qs from 'qs'
  import {postRequest} from '../utils/api'
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
            postRequest('/update',qs.stringify(this.loginForm)).then(resp => {
              if(resp.data){
                this.$message.success('更新成功');
              }
              else{
                this.$message.error('更新失败');
              }
            }).catch(error => {
              console.log(error)
            })
            
          } else {
            this.$message.error('更新失败');
            return false;
          }
        });
      }
    },

  }
</script>

<style>

</style>